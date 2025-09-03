import React from "react";
import { useParams } from "react-router-dom";
import places from "./placesData";
import ImageCard from "./ImageCard";

export default function ExploreDetail() {
    const { placeId } = useParams();
    const data = places.find((place) => place.id === placeId);

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
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow text-white mt-70">
                        {data.title}
                    </h1>
                    <p className="text-lg mb-4 drop-shadow text-gray-200">
                        {data.subtitle}
                    </p>
                    <p className="text-sm text-gray-400">📍 {data.location}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-8 py-6">
                <h2 className="text-2xl font-bold mb-4 text-amber-400">Description</h2>
                {data.description.map((desc, idx) => (
                    <p key={idx} className="mb-3 text-gray-300 leading-relaxed">
                        {desc}
                    </p>
                ))}

                <h2 className="text-2xl font-bold mt-8 mb-4 text-amber-400">History</h2>
                {data.history.map((hist, idx) => (
                    <p key={idx} className="mb-3 text-gray-300 leading-relaxed">
                        {hist}
                    </p>
                ))}
            </div>
        </section>
    );
}
