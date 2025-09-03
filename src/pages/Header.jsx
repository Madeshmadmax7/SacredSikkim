import React from "react";
import mainVideo from "../assets/main.mp4";

export default function Header() {
    return (
        <header className="relative w-full h-screen min-h-[400px] font-[Kanit] flex items-center justify-center bg-black">
            <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-2xl shadow-2xl">
                <video
                    src={mainVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Left Stretched Text */}
                <div className="absolute top-1/2 left-70 -translate-y-1/2 text-white text-6xl sm:text-8xl lg:text-7xl font-extrabold tracking-tight"
                    style={{ transform: "scaleY(1.5)", transformOrigin: "center" }}>
                    Sacred
                </div>

                {/* Right Stretched Text */}
                <div className="absolute top-1/2 right-70 -translate-y-1/2 text-white text-6xl sm:text-8xl lg:text-7xl font-extrabold tracking-tight"
                    style={{ transform: "scaleY(1.5)", transformOrigin: "center" }}>
                    Sikkim
                </div>

                {/* Quote at Bottom */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4 sm:px-6 max-w-[95vw] sm:max-w-2xl">
                    <div className="bg-black/20 rounded-xl px-3 sm:px-6 py-2 sm:py-4 shadow-lg">
                        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                            “Peace comes from within. Do not seek it without.”
                        </p>
                        <p className="text-[#D4AF37] text-xs sm:text-sm md:text-base mt-2 font-medium">
                            — Gautama Buddha
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
