import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Play, Pause, Volume2, ArrowLeft, ArrowRight } from "lucide-react";
import places from "./placesData";
import ImageCard from "./ImageCard";

const NarrationPlayer = ({ text, language }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [utterance, setUtterance] = useState(null);

    // Pick the best "human-like" voice if available
    const getBestVoice = (lang) => {
        const voices = speechSynthesis.getVoices();
        return (
            voices.find(
                (v) =>
                    v.lang.startsWith(lang) &&
                    (v.name.includes("Google") || v.name.includes("Natural"))
            ) || voices.find((v) => v.lang.startsWith(lang))
        );
    };

    useEffect(() => {
        if ("speechSynthesis" in window && text) {
            const u = new SpeechSynthesisUtterance(text);
            const voiceLang = language === "hi" ? "hi-IN" : "en-US";
            u.lang = voiceLang;
            u.rate = 0.9;
            u.pitch = 1;
            u.voice = getBestVoice(voiceLang);
            u.onend = () => setIsPlaying(false);
            setUtterance(u);
        }
        return () => {
            if ("speechSynthesis" in window) speechSynthesis.cancel();
        };
    }, [text, language]);

    const togglePlayback = () => {
        if (!utterance) return;
        if (isPlaying) {
            speechSynthesis.cancel();
            setIsPlaying(false);
        } else {
            speechSynthesis.speak(utterance);
            setIsPlaying(true);
        }
    };

    return (
        <button
            onClick={togglePlayback}
            className="flex items-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            <span>{isPlaying ? "Pause Narration" : "Play Narration"}</span>
        </button>
    );
};

export default function ExploreDetail() {
    const { placeId } = useParams();
    const data = places.find((place) => place.id === placeId);
    const [language, setLanguage] = useState("en");
    const viewerRef = useRef(null);
    const [panellumReady, setPanellumReady] = useState(false);

    const cardinals = [
        { id: "front", yaw: 0 },
        { id: "right", yaw: 90 },
        { id: "back", yaw: 180 },
        { id: "left", yaw: 270 },
    ];

    const getHotspotsData = () => {
        if (!data?.hotspots?.length) return [];
        const hs = data.hotspots[0];
        return cardinals.map(({ id }) => ({
            id,
            text: language === "hi" && hs[`${id}_hi`] ? hs[`${id}_hi`] : hs[id],
        }));
    };

    const playNarration = (side) => {
        const hs = getHotspotsData().find((h) => h.id === side);
        if (!hs?.text) return;
        const narrationBox = document.getElementById("narrationBox");
        narrationBox.innerText = hs.text;
        narrationBox.style.display = "block";

        if ("speechSynthesis" in window) {
            const u = new SpeechSynthesisUtterance(hs.text);
            const voiceLang = language === "hi" ? "hi-IN" : "en-US";
            u.lang = voiceLang;
            u.rate = 0.9;
            u.pitch = 1;
            u.voice = speechSynthesis.getVoices().find(
                (v) =>
                    v.lang.startsWith(voiceLang) &&
                    (v.name.includes("Google") || v.name.includes("Natural"))
            );
            u.onend = () => {
                narrationBox.style.display = "none";
            };
            speechSynthesis.cancel();
            speechSynthesis.speak(u);
        }
    };

    useEffect(() => {
        if (!data || !window.pannellum) return;

        if (viewerRef.current) {
            viewerRef.current.destroy();
            viewerRef.current = null;
        }

        viewerRef.current = window.pannellum.viewer("panorama", {
            type: "equirectangular",
            panorama: data.image,
            autoLoad: true,
            showControls: false,
            hotSpots: getHotspotsData().map(({ id, text }) => ({
                pitch: 0,
                yaw: cardinals.find((c) => c.id === id).yaw,
                type: "info",
                text: id.charAt(0).toUpperCase() + id.slice(1),
                id,
                clickHandlerFunc: () => playNarration(id),
            })),
        });

        setPanellumReady(true);

        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
                viewerRef.current = null;
            }
        };
    }, [data, language]);

    const getCurrentYaw = () => {
        if (!viewerRef.current) return 0;
        try {
            let yaw = viewerRef.current.getYaw();
            yaw = yaw % 360;
            if (yaw < 0) yaw += 360;
            return yaw;
        } catch {
            return 0;
        }
    };

    const getCurrentIndex = () => {
        const yaw = getCurrentYaw();
        if (yaw >= 315 || yaw < 45) return 0;
        if (yaw >= 45 && yaw < 135) return 1;
        if (yaw >= 135 && yaw < 225) return 2;
        return 3;
    };

    const rotateViewer = (direction) => {
        if (!viewerRef.current) return;
        let idx = getCurrentIndex();
        if (direction === "left") idx = (idx + 3) % 4;
        else idx = (idx + 1) % 4;

        viewerRef.current.lookAt(0, cardinals[idx].yaw, 1000);
        setTimeout(() => playNarration(cardinals[idx].id), 1100);
    };

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <h2 className="text-gray-400 text-xl">Place not found.</h2>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-black flex flex-col text-white">
            {/* Header Image */}
            <div className="relative w-full h-[70vh] mb-8">
                <ImageCard
                    src={data.image}
                    alt={data.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-8">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow text-white">{data.title}</h1>
                    <p className="text-lg mb-4 drop-shadow text-gray-200">{data.subtitle}</p>
                    <p className="text-sm text-gray-400">📍 {data.location}</p>
                </div>
            </div>

            {/* Panorama Viewer */}
            <div className="h-152 w-262 mx-auto px-6 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-amber-400 text-center">Virtual Tour</h2>
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-gray-700 relative">
                    <div id="panorama" className="w-full h-full" />
                    <div
                        id="narrationBox"
                        className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/70 text-white px-5 py-3 rounded-lg text-base max-w-[70%] text-center hidden z-10"
                    />
                    {panellumReady && (
                        <>
                            <button
                                onClick={() => rotateViewer("left")}
                                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-black cursor-pointer transition z-20"
                            >
                                <ArrowLeft size={24} />
                            </button>
                            <button
                                onClick={() => rotateViewer("right")}
                                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-black cursor-pointer transition z-20"
                            >
                                <ArrowRight size={24} />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Audio & Description */}
            <div className="max-w-3xl mx-auto px-8 py-6 space-y-10">
                <div className="bg-black/40 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-amber-400 flex items-center space-x-2">
                            <Volume2 size={22} />
                            <span>Audio Narration</span>
                        </h2>
                        <select
                            className="bg-amber-600 text-white px-3 py-2 rounded-lg"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="en">English</option>
                            <option value="hi">हिंदी</option>
                        </select>
                    </div>
                    <NarrationPlayer
                        text={
                            language === "hi" && data.description_hi
                                ? data.description_hi.join(" ")
                                : data.description.join(" ")
                        }
                        language={language}
                    />
                    <p className="mt-4 text-gray-300 leading-relaxed">
                        {language === "hi" && data.description_hi
                            ? data.description_hi.join(" ")
                            : data.description.join(" ")}
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-amber-400">Description</h2>
                    {data.description.map((desc, idx) => (
                        <p key={idx} className="mb-3 text-gray-300 leading-relaxed">{desc}</p>
                    ))}
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-amber-400">History</h2>
                    {data.history.map((hist, idx) => (
                        <p key={idx} className="mb-3 text-gray-300 leading-relaxed">{hist}</p>
                    ))}
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4 text-amber-400">Hotspots</h2>
                    {data.hotspots?.map((spot, idx) => (
                        <div key={idx} className="mb-6 p-4 bg-black/30 rounded-xl border border-gray-700">
                            <p className="mb-2 text-gray-200"><strong>Front:</strong> {spot.front}</p>
                            <p className="mb-2 text-gray-200"><strong>Right:</strong> {spot.right}</p>
                            <p className="mb-2 text-gray-200"><strong>Back:</strong> {spot.back}</p>
                            <p className="mb-2 text-gray-200"><strong>Left:</strong> {spot.left}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
