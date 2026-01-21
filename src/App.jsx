import React from 'react';
import Tier1Earth from './components/Tier1Earth';
import Tier2Planets from './components/Tier2Planets';
import Tier3Pulse from './components/Tier3Pulse';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden flex flex-col relative selection:bg-cyan-500 selection:text-black">
      {/* Background - subtle starfield or animated gradient can go here */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black -z-10" />

      {/* Main Container */}
      <main className="flex-1 flex flex-col h-screen md:h-screen min-h-screen overflow-y-auto md:overflow-hidden">
        {/* Tier 1: Global Pulse (Earth) - Top section */}
        <div className="flex-none h-64 md:flex-1 relative border-b border-white/10 backdrop-blur-sm shrink-0">
          <Tier1Earth />
        </div>

        {/* Tier 2: Interstellar Insight (Planets) - Middle section */}
        <div className="flex-none p-4 md:p-0 md:flex-[1.5] relative border-b border-white/10 backdrop-blur-md bg-white/5 shrink-0 min-h-[500px] md:min-h-0">
          <Tier2Planets />
        </div>

        {/* Tier 3: The Pulse (Unix) - Bottom section */}
        <div className="flex-none h-24 md:h-24 relative backdrop-blur-xl bg-black/40 shrink-0">
          <Tier3Pulse />
        </div>
      </main>
    </div>
  );
}

export default App;
