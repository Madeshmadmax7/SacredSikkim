import React, { useState } from "react";

const hotspotData = [
    { id: "gangtok", name: "Gangtok", cx: 130, cy: 80, description: "Capital city of Sikkim" },
    { id: "pelling", name: "Pelling", cx: 60, cy: 150, description: "Tourist hub in West Sikkim" },
    { id: "namchi", name: "Namchi", cx: 120, cy: 170, description: "Pilgrimage spot in South Sikkim" },
    { id: "lachung", name: "Lachung", cx: 180, cy: 40, description: "Scenic village in North Sikkim" },
];

const OverallMap = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Sikkim Map with Hotspots</h2>
            <svg
                width="300"
                height="220"
                viewBox="0 0 200 200"
                style={{ border: "1px solid #ccc", background: "#2f3e4e" }}
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Sikkim map outline (simplified polygon shape) */}
                <path
                    d="M50 30 L180 20 L190 50 L170 150 L130 190 L60 180 L40 110 Z"
                    fill="#445766"
                    stroke="#a0b0c0"
                    strokeWidth="1"
                />

                {/* Hotspots */}
                {hotspotData.map(({ id, cx, cy }) => (
                    <circle
                        key={id}
                        id={id}
                        cx={cx}
                        cy={cy}
                        r={hovered === id ? 7 : 5}
                        fill={hovered === id ? "#f39c12" : "#3498db"}
                        stroke="#fff"
                        strokeWidth="1.5"
                        style={{
                            cursor: "pointer",
                            filter:
                                hovered === id
                                    ? "drop-shadow(0 0 4px #f39c12)"
                                    : "drop-shadow(0 0 2px #3498db)",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={() => setHovered(id)}
                        onMouseLeave={() => setHovered(null)}
                    />
                ))}

                {/* Tooltip */}
                {hovered && (
                    <text
                        x={hotspotData.find((h) => h.id === hovered).cx + 10}
                        y={hotspotData.find((h) => h.id === hovered).cy}
                        fill="#f39c12"
                        fontSize="10"
                        fontFamily="Arial"
                        textAnchor="start"
                        dominantBaseline="middle"
                        pointerEvents="none"
                        style={{
                            userSelect: "none",
                            fontWeight: "bold",
                        }}
                    >
                        {hotspotData.find((h) => h.id === hovered).name}
                    </text>
                )}
            </svg>
        </div>
    );
};

export default OverallMap;
