import React from 'react';
import { ArrowDown, Plus } from 'lucide-react';

export const Hero: React.FC = () => {
   return (
      <div id="home" className="relative w-full min-h-screen bg-[#030303] flex flex-col items-center justify-center overflow-hidden pt-20">

         {/* Background Elements */}
         <div className="absolute inset-0 z-0">
            {/* Large Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] rounded-full border border-[#ff2a2a]/20 opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full border border-white/5 opacity-30"></div>

            {/* Grid Lines */}
            <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block"></div>
            <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block"></div>
         </div>

         {/* Decorative Crosshairs */}
         <Plus className="absolute top-32 left-8 text-[#ff2a2a] w-4 h-4 opacity-80" />
         <Plus className="absolute bottom-32 right-8 text-[#ff2a2a] w-4 h-4 opacity-80" />
         <Plus className="absolute top-32 right-32 text-white/20 w-4 h-4" />

         {/* Main Content */}
         <div className="relative z-10 w-full max-w-[1600px] h-[80vh] flex flex-col md:flex-row items-center justify-center">

            {/* The Giant Text Layer - Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
               <h1 className="font-syncopate font-bold text-[15vw] leading-none text-white mix-blend-overlay opacity-30 tracking-tighter">
                  RONIN
               </h1>
            </div>

            {/* Left Data Column */}
            <div className="hidden md:flex flex-col justify-between h-[60%] w-1/4 px-8 z-20">
               <div className="flex flex-col gap-4">
                  <span className="text-[#ff2a2a] font-mono text-xs">/// FIGURE 01</span>
                  <h2 className="text-4xl font-bold font-orbitron leading-tight">
                     CYBER<br />GHOST
                  </h2>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">
                     Inspired by the ancient way of the warrior, adapted for the neon streets of the future. High-performance tactical gear.
                  </p>
               </div>

               <div className="font-mono text-xs text-gray-500">
                  <p>LAT: 35.6762° N</p>
                  <p>LNG: 139.6503° E</p>
               </div>
            </div>

            {/* Center Image Area - Floating Katana */}
            <div className="relative w-full md:w-[600px] h-[60vh] md:h-[70vh] z-10 flex items-center justify-center pointer-events-none">
               {/* The Floating Katana */}
               {/* Using a high-quality katana image with a mix-blend mode or transparent bg to float seamlessy */}
               <div className="relative w-full h-[150%] animate-float flex items-center justify-center">
                  <img
                     src="/assets/katana-1.png"
                     alt="Legendary Katana"
                     className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,42,42,0.4)]"
                  />

                  {/* Glowing effect behind */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[10%] bg-[#ff2a2a] blur-[100px] opacity-40"></div>
               </div>

               {/* Floating Label - Kept as requested but floating independently */}
               <div className="absolute top-1/2 right-0 translate-y-[-100%] bg-black/80 border border-[#ff2a2a]/30 p-4 backdrop-blur-md hidden md:block animate-pulse">
                  <span className="writing-vertical font-mono text-[10px] tracking-widest text-[#ff2a2a]">NO BACKGROUND // SEAMLESS</span>
               </div>
            </div>

            {/* Right Data Column */}
            <div className="hidden md:flex flex-col justify-end h-[60%] w-1/4 px-8 z-20 items-end text-right">
               <div className="mb-12">
                  <div className="text-6xl font-bold font-syncopate text-outline">20</div>
                  <div className="text-6xl font-bold font-syncopate text-white">77</div>
               </div>

               <button className="group flex items-center gap-4 text-sm font-bold tracking-widest hover:text-[#ff2a2a] transition-colors">
                  EXPLORE COLLECTION
                  <span className="w-12 h-[1px] bg-white group-hover:bg-[#ff2a2a] transition-colors"></span>
               </button>
            </div>
         </div>

         {/* Mobile Title (Visible only on mobile) */}
         <div className="md:hidden absolute bottom-20 z-20 text-center">
            <h1 className="text-5xl font-bold font-orbitron text-white mb-2">RONIN</h1>
            <p className="text-xs text-[#ff2a2a] tracking-[0.5em]">COLLECTION</p>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 animate-bounce">
            <span className="text-[10px] tracking-widest opacity-50">SCROLL</span>
            <ArrowDown size={14} className="text-[#ff2a2a]" />
         </div>

      </div>
   );
};
