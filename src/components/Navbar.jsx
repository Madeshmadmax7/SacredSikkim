import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Images", href: "/images" },
    { name: "Calendar", href: "/calendar" },
    { name: "Map", href: "/map" },
    { name: "About", href: "/about" },
];

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 60) setShow(false);
            else setShow(true);
            setLastScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed left-1/2 -translate-x-1/2 top-6 z-50 w-[95%] max-w-[1280px] rounded-full
        flex items-center justify-between px-10 transition-all duration-500 border border-white/20 shadow-md
        ${show ? "opacity-100" : "opacity-0 pointer-events-none top-0"}`}
            style={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(12px)",
                height: "70px",
                fontFamily: "'Farro', sans-serif",
            }}
        >
            {/* Branding (instead of logo) */}
            <div className="flex-shrink-0 flex items-center h-full">
                <Link to="/" className="text-white text-2xl font-bold tracking-wide">
                    Monastery<span className="text-amber-400">360</span>
                </Link>
            </div>

            {/* Nav Links */}
            <ul className="flex-1 flex justify-center items-center gap-5">
                {navLinks.map(({ name, href }) => (
                    <li key={name}>
                        <Link
                            to={href}
                            className="text-white font-medium text-[17px] px-2 py-1 transition-colors duration-300 hover:text-white/90"
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Login Button */}
            <div className="flex items-center justify-end h-full">
                <button
                    className="bg-white text-black text-[18px] font-semibold px-6 py-2 rounded-full
            border border-gray-200 w-[110px] h-[46px] flex items-center justify-center
            shadow-lg hover:bg-gray-100 transition duration-300"
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
