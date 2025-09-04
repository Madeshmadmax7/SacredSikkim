import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Play, Pause, Volume2 } from "lucide-react";
import places from "./placesData";
import ImageCard from "./ImageCard";


// NarrationPlayer for flat narration
const NarrationPlayer = ({ text, language }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState(null);


  React.useEffect(() => {
    if ("speechSynthesis" in window && text) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = language === "hi" ? "hi-IN" : "en-US";
      u.rate = 0.9;
      u.pitch = 1;
      u.onend = () => setIsPlaying(false);
      setUtterance(u);
    }
    return () => { if ("speechSynthesis" in window) speechSynthesis.cancel(); };
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
  const data = places.find(place => place.id === placeId);
  const [language, setLanguage] = useState("en");


  const getHotspotsData = () => {
    if (!data.hotspots || !data.hotspots[0]) return [];
    const hs = data.hotspots[0];
    return [
      {
        id: "front",
        title: "Front",
        pitch: 0,
        yaw: 0,
        text: language === "hi" && hs.front_hi ? hs.front_hi : hs.front,
      },
      {
        id: "right",
        title: "Right",
        pitch: 0,
        yaw: 90,
        text: language === "hi" && hs.right_hi ? hs.right_hi : hs.right,
      },
      {
        id: "back",
        title: "Back",
        pitch: 0,
        yaw: 180,
        text: language === "hi" && hs.back_hi ? hs.back_hi : hs.back,
      },
      {
        id: "left",
        title: "Left",
        pitch: 0,
        yaw: 270,
        text: language === "hi" && hs.left_hi ? hs.left_hi : hs.left,
      },
    ];
  };
  const hotspotsParam = encodeURIComponent(JSON.stringify(getHotspotsData()));


  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <h2 className="text-xl text-gray-400">Place not found.</h2>
      </div>
    );
  }


  return (
    <section className="min-h-screen bg-black flex flex-col text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] mb-8">
        <ImageCard
          src={data.image}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow text-white">
            {data.title}
          </h1>
          <p className="text-lg mb-4 drop-shadow text-gray-200">
            {data.subtitle}
          </p>
          <p className="text-sm text-gray-400">📍 {data.location}</p>
        </div>
      </div>
      {/* 360° Viewer */}
      <div className="h-152 w-262 mx-auto px-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-amber-400 text-center">Virtual Tour (Demo)</h2>
        <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <iframe
            title="360° Panorama"
            src={`/panellum.html?img=${encodeURIComponent(data.image)}&hotspots=${hotspotsParam}&lang=${language}`}
            className="w-full h-full"
            style={{ border: "none" }}
            allowFullScreen
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-8 py-6 space-y-10">
        {/* Narration Section */}
        <div className="bg-black/40 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-amber-400 flex items-center space-x-2">
              <Volume2 size={22} />
              <span>Audio Narration</span>
            </h2>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="bg-amber-600 text-white px-3 py-2 rounded-lg"
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
        {/* Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-400">Description</h2>
          {data.description.map((desc, idx) => (
            <p key={idx} className="mb-3 text-gray-300 leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
        {/* History */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-400">History</h2>
          {data.history.map((hist, idx) => (
            <p key={idx} className="mb-3 text-gray-300 leading-relaxed">
              {hist}
            </p>
          ))}
        </div>
        {/* Hotspots */}
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