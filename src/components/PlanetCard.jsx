import React from 'react';
import { motion } from 'framer-motion';

const PlanetCard = ({ planet, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 backdrop-blur-md border border-white/10 p-8 rounded-3xl w-96 flex flex-col gap-6 hover:bg-black/30 transition-colors relative overflow-hidden"
        >
            {/* Glow effect */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[100px] opacity-20 ${planet.color}`} />

            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-light uppercase tracking-widest text-white">{planet.name}</h3>
                <planet.icon className={`w-8 h-8 ${planet.textColor}`} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col gap-1">
                {children}
            </div>

            <div className="mt-auto border-t border-white/5 pt-4 text-xs text-white/40 font-mono flex justify-between">
                <span>DAY: {planet.dayLength}</span>
                <span>YEAR: {planet.yearLength}</span>
            </div>
        </motion.div>
    );
};

export default PlanetCard;
