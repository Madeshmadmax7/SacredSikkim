import React from "react";

import img1 from "../assets/image3.jpg";
import img3 from "../assets/image2.jpg";
import img2 from "../assets/image.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img7 from "../assets/image7.jpg";
import img8 from "../assets/image8.jpg";
import img10 from "../assets/image10.jpg";
import tibetflag from "../assets/tibetflag.png";

const images = [
    { src: img1, title: "Mountains" },
    { src: img4, title: "Nature View" },
    { src: img3, title: "Scenic Road" },
    { src: img2, title: "Automobile" },
    { src: img5, title: "Cycling" },
    { src: img7, title: "Green Valley" },
    { src: img8, title: "Prayer Flags" },
    { src: img10, title: "Prayer Flags" },
];

export default function Gallery() {
    return (
        <section className="relative min-h-screen bg-black text-white px-6 py-12">
            <img
                src={tibetflag}
                alt="Tibet Flag"
                className="absolute top-0 left-0 w-full h-90 object-contain opacity-80 pointer-events-none mt-0"
            />

            <div className="relative z-10">
                <h1 className="text-center text-4xl sm:text-5xl font-bold mt-50 my-20">
                    Explore Sikkim
                </h1>

                <div className="columns-1 sm:columns-2 md:columns-3 gap-5">
                    {images.map((img, index) => (
                        <div key={index} className="mb-8 break-inside-avoid">
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
