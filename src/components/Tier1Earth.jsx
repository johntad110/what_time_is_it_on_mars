import React from 'react';
import { cities } from '../utils/cities';
import ClockCard from './ClockCard';
import { motion } from 'framer-motion';

const Tier1Earth = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
                <h2 className="text-sm font-light tracking-[0.2em] text-cyan-400 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Global Pulse
                </h2>
            </div>

            <motion.div
                className="flex gap-4 p-8 overflow-x-auto w-full no-scrollbar justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {cities.map((city) => (
                    <ClockCard key={city.id} city={city} />
                ))}
            </motion.div>
        </div>
    );
};

export default Tier1Earth;
