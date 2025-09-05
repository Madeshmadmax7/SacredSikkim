import React, { useState } from "react";
import Event from "./Event";
import events from "./EventData";

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 7 : day; // Sunday → 7
}

export default function CulturalCalendar() {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedEvent, setSelectedEvent] = useState(null);

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

    // Create calendar grid (only current month)
    const calendarDays = [];
    for (let i = 1; i < firstDay; i++) {
        calendarDays.push(null); // empty cells before 1st day
    }
    for (let d = 1; d <= daysInMonth; d++) {
        calendarDays.push(d);
    }

    const handlePrevMonth = () => {
        setCurrentMonth((prev) => {
            if (prev === 0) {
                setCurrentYear((y) => y - 1);
                return 11;
            }
            return prev - 1;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonth((prev) => {
            if (prev === 11) {
                setCurrentYear((y) => y + 1);
                return 0;
            }
            return prev + 1;
        });
    };

    const handleDayClick = (day) => {
        if (!day) return;
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const event = events.find((e) => e.date === dateStr);
        if (event) setSelectedEvent(event);
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-start pt-24 pb-12">
            {/* Calendar card */}
            <div className="bg-zinc-900 text-gray-100 shadow-2xl rounded-2xl p-4 w-full max-w-[630px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={handlePrevMonth}
                        className="px-2 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-sm"
                    >
                        ◀
                    </button>
                    <div className="text-center">
                        <h1 className="text-xl font-bold">{monthNames[currentMonth]}</h1>
                        <p className="text-xs text-gray-400">{currentYear}</p>
                    </div>
                    <button
                        onClick={handleNextMonth}
                        className="px-2 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-sm"
                    >
                        ▶
                    </button>
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                    {dayNames.map((name) => (
                        <span
                            key={name}
                            className="text-center font-semibold text-gray-400 uppercase tracking-wide text-xs"
                        >
                            {name}
                        </span>
                    ))}
                    {calendarDays.map((day, idx) => {
                        const dateStr = day
                            ? `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                            : null;
                        const hasEvent = events.some((e) => e.date === dateStr);
                        const isToday =
                            day === today.getDate() &&
                            currentMonth === today.getMonth() &&
                            currentYear === today.getFullYear();

                        return (
                            <div
                                key={idx}
                                onClick={() => handleDayClick(day)}
                                className={`relative aspect-square flex items-center justify-center rounded-lg transition 
                ${day ? "cursor-pointer bg-zinc-900 hover:bg-zinc-700 text-gray-100 text-sm" : "bg-transparent"}
                ${isToday ? "border-2 border-amber-500" : ""}
            `}
                            >
                                {day}
                                {hasEvent && (
                                    <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Event Modal */}
            {selectedEvent && (
                <Event event={selectedEvent} onClose={() => setSelectedEvent(null)} />
            )}
        </div>
    );
}
