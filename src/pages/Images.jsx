import React, { useState } from "react";
import places from "./placesData";

export default function Images() {
    const [selected, setSelected] = useState(null);

    return (
        <section className="relative min-h-screen bg-black text-white px-6 py-12">
            <div className="relative z-10 mt-20">
                <h1 className="text-center text-4xl sm:text-5xl font-bold my-10">
                    View Images
                </h1>

                <div className="columns-1 sm:columns-2 md:columns-3 gap-5">
                    {places.map((place) => (
                        <div
                            key={place.id}
                            className="mb-8 break-inside-avoid cursor-pointer"
                            onClick={() => setSelected(place)}
                        >
                            <img
                                src={place.image}
                                alt={place.title}
                                className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="bg-white text-black rounded-2xl shadow-lg p-6 flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        {/* Image scales dynamically */}
                        <img
                            src={selected.image}
                            alt={selected.title}
                            className="max-h-[70vh] max-w-[90vw] object-contain rounded-lg mb-4"
                        />

                        {/* Title + Location */}
                        <h2 className="text-xl sm:text-2xl font-bold text-center">
                            {selected.title}
                        </h2>
                        <p className="text-gray-600 text-center mt-1">
                            📍 {selected.location}
                        </p>

                        {/* Close Button */}
                        <button
                            onClick={() => setSelected(null)}
                            className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
}
