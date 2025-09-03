import React from "react";
import aboutImg from "../assets/image14.jpg"; // add your image in assets folder

export default function About() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image */}
                <div className="flex justify-center">
                    <img
                        src={aboutImg}
                        alt="Monastery 360 Culture"
                        className="rounded-2xl shadow-lg max-w-lg max-h-[600px] object-cover"
                    />
                </div>

                {/* Right Side - Content */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">
                        About <span className="text-amber-400">Monastery 360</span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Monastery 360 is more than a journey – it’s a spiritual experience.
                        From the serenity of monasteries to the breathtaking Himalayan
                        landscapes, we aim to connect travelers with the soul of this sacred
                        land.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Our platform brings together stories, culture, and heritage while
                        offering seamless travel planning and booking experiences. Whether
                        you seek peace, adventure, or discovery, Monastery 360 welcomes you
                        with open arms.
                    </p>
                    <button className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-full shadow-md hover:bg-amber-400 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
