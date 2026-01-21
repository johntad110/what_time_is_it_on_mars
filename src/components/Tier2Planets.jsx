import React, { useState, useEffect } from 'react';
import PlanetCard from './PlanetCard';
import { getMarsSolDate, getMartianTime, getPerseveranceSol } from '../utils/marsTime';
import { getVenusProgress } from '../utils/venusTime';
import { Circle, Disc } from 'lucide-react';

const Tier2Planets = () => {
    const [marsData, setMarsData] = useState({ sol: 0, time: '00:00:00', persySol: 0 });
    const [venusProgress, setVenusProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const msd = getMarsSolDate();
            setMarsData({
                ...getMartianTime(msd),
                persySol: getPerseveranceSol()
            });
            setVenusProgress(getVenusProgress());
        };

        update();
        const timer = setInterval(update, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="h-full flex items-center justify-center gap-8 p-8 flex-wrap relative">
            <div className='absolute top-4 w-full flex justify-center pointer-events-none'>
                <h2 className="text-sm font-light tracking-[0.2em] text-pink-400 uppercase opacity-60">Interstellar Insight</h2>
            </div>

            {/* MARS */}
            <PlanetCard
                planet={{
                    name: 'Mars',
                    icon: Circle,
                    color: 'bg-orange-600',
                    textColor: 'text-orange-500',
                    dayLength: '24h 39m',
                    yearLength: '687 Earth Days'
                }}
            >
                <div className="flex flex-col">
                    <span className="text-white/60 text-sm tracking-wider">SOL DATE</span>
                    <span className="text-5xl font-mono text-white font-bold">{marsData.sol.toFixed(2)}</span>
                </div>
                <div className="flex flex-col mt-4">
                    <span className="text-white/60 text-sm tracking-wider">LOCAL MEAN SOLAR TIME</span>
                    <span className="text-3xl font-mono text-orange-400">{marsData.time}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-sm">
                    <span className='text-white/50'>Perseverance Mission</span>
                    <span className="text-white font-mono">Sol {marsData.persySol}</span>
                </div>
            </PlanetCard>

            {/* VENUS */}
            <PlanetCard
                planet={{
                    name: 'Venus',
                    icon: Disc,
                    color: 'bg-yellow-200',
                    textColor: 'text-yellow-200',
                    dayLength: '5,832h',
                    yearLength: '225 Earth Days'
                }}
            >
                <div className="flex flex-col gap-2">
                    <span className="text-white/60 text-sm tracking-wider">DAY PROGRESS</span>
                    <div className="text-4xl font-mono text-white font-bold">{venusProgress.toFixed(6)}%</div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div
                            className="h-full bg-yellow-200 shadow-[0_0_10px_rgba(253,224,71,0.5)] transition-all duration-1000 ease-linear"
                            style={{ width: `${venusProgress}%` }}
                        />
                    </div>
                    <p className="text-xs text-white/40 mt-2 leading-relaxed">
                        A day on Venus is longer than its year. The sun rises in the west and sets in the east.
                    </p>
                </div>
            </PlanetCard>

        </div>
    );
};

export default Tier2Planets;
