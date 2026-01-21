import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ClockCard = ({ city }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: city.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const cityTime = formatter.format(time);

    // Calculate time of day for dynamic background (Simple heuristic: 6-18 is day, else night)
    const hour = parseInt(formatter.formatToParts(time).find(p => p.type === 'hour').value);
    const isDay = hour >= 6 && hour < 18;
    const isGoldenHour = hour === 6 || hour === 17;

    let bgClass = "bg-white/5";
    if (isGoldenHour) bgClass = "bg-gradient-to-br from-orange-500/20 to-purple-900/40";
    else if (isDay) bgClass = "bg-gradient-to-br from-cyan-400/10 to-blue-600/10";
    else bgClass = "bg-gradient-to-br from-slate-900/60 to-black/60";

    return (
        <motion.div
            layout
            whileHover={{ scale: 1.05 }}
            className={`${bgClass} backdrop-blur-md border border-white/10 p-6 rounded-2xl w-64 flex flex-col items-center justify-center gap-2 group hover:bg-white/10 transition-colors shadow-xl relative`}
        >
            <div className="text-sm font-medium tracking-widest text-white/50 uppercase">{city.label}</div>
            <div className="text-4xl font-bold font-mono tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
                {cityTime}
            </div>
            <div className="text-lg font-light text-white/80">{city.name}</div>
            {/* Simple visual indicator */}
            <div className="absolute top-4 right-4">
                {isDay ? (
                    <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                ) : (
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                )}
            </div>
        </motion.div>
    );
};

export default ClockCard;
