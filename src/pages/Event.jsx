import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Event({ event, onClose }) {
    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
                >
                    <X size={24} />
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h2>

                {/* Location */}
                {event.location && (
                    <p className="text-sm text-gray-600 mb-2">📍 {event.location}</p>
                )}

                {/* Date */}
                <p className="text-sm text-gray-500 mb-4">📅 {event.date}</p>

                {/* Description */}
                <p className="text-gray-700 mb-4">{event.description}</p>

                {/* Images */}
                {event.images && event.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {event.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Event ${idx}`}
                                className="rounded-lg shadow-sm object-cover w-full h-40"
                            />
                        ))}
                    </div>
                )}

                {/* Video */}
                {event.video && (
                    <div className="mb-4">
                        <video controls className="w-full rounded-lg shadow-md">
                            <source src={event.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>
        </div>
    );
}
