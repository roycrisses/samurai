import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const Products: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Animation values based on scroll
    const rotate = useTransform(smoothProgress, [0, 1], [45, -45]); // Rotate from 45deg to -45deg
    const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1.2, 1.2, 1]); // Zoom in slightly
    const x = useTransform(smoothProgress, [0, 1], [0, 0]); // Keep centered mainly, maybe shift slightly if needed

    // Opacity for different phases
    const phase1Opacity = useTransform(smoothProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]); // Hilt Phase
    const phase2Opacity = useTransform(smoothProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]); // Blade Phase
    const phase3Opacity = useTransform(smoothProgress, [0.7, 0.8, 0.9, 1.0], [0, 1, 1, 0]); // Tip/Skill Phase

    return (
        <section id="products" ref={containerRef} className="h-[400vh] relative bg-[#050505]">

            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Background Tech Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-[#ff2a2a]/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                </div>

                {/* Header - Fades out as we inspect */}
                <motion.div style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }} className="absolute top-20 z-20 text-center">
                    <h2 className="text-6xl md:text-8xl font-bold font-syncopate text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                        KATANA
                    </h2>
                    <p className="font-mono text-[#ff2a2a] tracking-[0.5em]">SYSTEM INSPECTION</p>
                </motion.div>

                {/* The Katana */}
                <div className="relative z-10 w-full max-w-[1200px] h-[80vh] flex items-center justify-center">
                    <motion.div
                        style={{ rotate, scale, x }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <img
                            src="/assets/katana-1.png"
                            alt="Interactive Katana"
                            className="w-auto h-[120%] max-w-none object-contain filter drop-shadow-[0_0_50px_rgba(255,42,42,0.2)]"
                        />
                    </motion.div>

                    {/* --- ANNOTATIONS --- */}

                    {/* Phase 1: Hilt / Handle */}
                    <motion.div style={{ opacity: phase1Opacity }} className="absolute top-1/2 left-[10%] md:left-[20%] -translate-y-1/2 max-w-xs pointer-events-none">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-[1px] bg-[#ff2a2a]"></div>
                            <h3 className="text-2xl font-orbitron font-bold">TSUKA (HILT)</h3>
                        </div>
                        <p className="text-sm text-gray-400 font-mono leading-relaxed pl-16">
                            Wrapped in <span className="text-white">nano-fiber ray skin</span> for maximum grip in zero-g environments.
                            Bio-metric sensor integration unlocked only by registered owner.
                        </p>
                        <div className="pl-16 mt-4 flex gap-2">
                            <span className="px-2 py-1 bg-[#ff2a2a]/20 text-[#ff2a2a] text-[10px] border border-[#ff2a2a]/50">GRIP: 100%</span>
                            <span className="px-2 py-1 bg-white/5 text-gray-400 text-[10px] border border-white/10">LATENCY: 0ms</span>
                        </div>
                    </motion.div>

                    {/* Phase 2: Blade / Edge */}
                    <motion.div style={{ opacity: phase2Opacity }} className="absolute top-[60%] right-[10%] md:right-[20%] max-w-xs text-right pointer-events-none">
                        <div className="flex items-center gap-4 mb-2 justify-end">
                            <h3 className="text-2xl font-orbitron font-bold">HA (EDGE)</h3>
                            <div className="w-12 h-[1px] bg-[#ff2a2a]"></div>
                        </div>
                        <p className="text-sm text-gray-400 font-mono leading-relaxed pr-16">
                            High-frequency vibrating blade. Cuts through <span className="text-white">reinforced plastosteel</span> like butter.
                            Thermal core maintains 5000°C plasma capability.
                        </p>
                        <div className="pr-16 mt-4 flex gap-2 justify-end">
                            <span className="px-2 py-1 bg-[#ff2a2a]/20 text-[#ff2a2a] text-[10px] border border-[#ff2a2a]/50">SHARPNESS: MAX</span>
                            <span className="px-2 py-1 bg-white/5 text-gray-400 text-[10px] border border-white/10">HEAT: 5000°C</span>
                        </div>
                    </motion.div>

                    {/* Phase 3: Tip / Ultimate Skill */}
                    <motion.div style={{ opacity: phase3Opacity }} className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-center max-w-md pointer-events-none">
                        <h3 className="text-4xl font-syncopate font-bold text-[#ff2a2a] mb-2 animate-pulse">ULTIMATE SKILL</h3>
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-4"></div>
                        <p className="text-lg text-white font-bold font-orbitron tracking-widest">"VOID SEVER"</p>
                        <p className="text-xs text-gray-500 font-mono mt-2">
                            DISCHARGES STORED KINETIC ENERGY IN A SINGLE DIMENSION-RENDING STRIKE. RANGE: 50M.
                        </p>
                    </motion.div>

                </div>

                {/* Scroll Progress Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                        <motion.div style={{ height: smoothProgress }} className="w-full bg-[#ff2a2a] absolute top-0 left-0"></motion.div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">SCROLL TO INSPECT</span>
                </div>

            </div>
        </section>
    );
};
