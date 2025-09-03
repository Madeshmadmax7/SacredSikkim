import React, { useState } from "react";

export default function ImageCard({ src, alt, className }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative ${className || ""}`}>
            {/* Placeholder */}
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                    <span className="text-gray-400 text-sm">Loading...</span>
                </div>
            )}

            {/* Actual image */}
            <img
                src={src}
                alt={alt}
                loading="lazy" // 👈 browser will only load when visible
                onLoad={() => setLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
            />
        </div>
    );
}
