import React from "react";
import { useNavigate } from "react-router-dom";
import places from "./placesData";
import ImageCard from "./ImageCard";

export default function Explore() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black py-16 px-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-12 mt-20">
        Discover Sacred Sikkim
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {places.map((place) => (
          <div
            key={place.id}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer bg-gray-100"
            onClick={() => navigate(`/explore/${place.id}`)}
          >
            <ImageCard
              src={place.image}
              alt={place.subtitle}
              className="h-80"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 py-8">
              <p className="text-white font-semibold text-xl mb-2 drop-shadow">{place.title}</p>
              <p className="text-white text-center mb-4 drop-shadow">{place.subtitle}</p>
              <button className="px-5 py-2 border-2 border-white text-white rounded bg-opacity-50 transition-colors group-hover:bg-white group-hover:text-black">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
