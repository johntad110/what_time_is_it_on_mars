import React, { useState, useEffect } from 'react';

const Tier3Pulse = () => {
    const [unix, setUnix] = useState(Date.now());

    useEffect(() => {
        // High speed update for the "pulse" feel
        const timer = setInterval(() => {
            setUnix(Date.now());
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="h-full flex items-center justify-between px-8 text-lime-400 font-mono tracking-widest bg-black relative overflow-hidden">
            {/* Background matrix-like effect overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(132,204,22,0.05)_21px)] pointer-events-none" />

            <div className="flex flex-col z-10">
                <span className="text-xs opacity-50 uppercase">The Pulse (Unix)</span>
                <span className="text-4xl font-bold">{unix}</span>
            </div>

            <div className="flex flex-col items-end z-10">
                <span className="text-xs opacity-50 uppercase">System Status</span>
                <span className="text-sm font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse" />
                    ONLINE
                </span>
            </div>

            {/* Visualizer bars placeholder */}
            <div className="absolute bottom-0 left-0 right-0 h-1 flex items-end gap-1 opacity-20">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-lime-500"
                        style={{ height: `${Math.random() * 100}%`, transition: 'height 0.1s' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tier3Pulse;
