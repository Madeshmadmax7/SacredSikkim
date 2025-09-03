import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 px-6 py-10 mt-16">
            <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Logo / Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Monastery <span className="text-amber-400">360</span>
                    </h2>
                    <p className="mt-3 text-sm">
                        Discover the beauty, spirituality, and culture of Sikkim.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-amber-400 transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/explore" className="hover:text-amber-400 transition">
                                Explore
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-amber-400 transition">
                                About
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                    <p>Email: <a href="mailto:info@sacredsikkim.com" className="hover:text-amber-400">info@monastery360.com</a></p>
                    <p>Phone: <span className="hover:text-amber-400">+91 98765 43210</span></p>
                    <p>📍 Gangtok, Sikkim</p>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Monastery 360. All rights reserved.
            </div>
        </footer>
    );
}
