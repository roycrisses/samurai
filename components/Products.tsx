import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Component for a single Katana Section
interface KatanaSectionProps {
    id: string;
    name: string;
    subtitle: string;
    color: string; // Hex color for theme
    imageSrc: string; // Specific image for this katana
    hueRotate?: number; // Optional hue rotation
    specs: {
        hiltText: string;
        hiltStat: string;
        edgeText: string;
        edgeStat: string;
        skillName: string;
        skillDesc: string;
    };
}

const KatanaReview: React.FC<KatanaSectionProps> = ({ id, name, subtitle, color, imageSrc, hueRotate = 0, specs }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const rotate = useTransform(smoothProgress, [0, 1], [45, -45]);
    const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1.2, 1.2, 1]);

    // Opacity Phases
    const phase1Opacity = useTransform(smoothProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
    const phase2Opacity = useTransform(smoothProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
    const phase3Opacity = useTransform(smoothProgress, [0.7, 0.8, 0.9, 1.0], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className="h-[300vh] relative bg-[#050505] border-t border-white/5">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0 opacity-20 transition-colors duration-500" style={{ backgroundColor: `${color}10` }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
                </div>

                {/* Title */}
                <motion.div style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }} className="absolute top-20 z-20 text-center">
                    <h2 className="text-6xl md:text-8xl font-bold font-syncopate text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20" style={{ textShadow: `0 0 30px ${color}50` }}>
                        {name}
                    </h2>
                    <p className="font-mono tracking-[0.5em]" style={{ color: color }}>{subtitle}</p>
                </motion.div>

                {/* Katana Image */}
                <div className="relative z-10 w-full max-w-[1200px] h-[80vh] flex items-center justify-center">
                    <motion.div
                        style={{ rotate, scale }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <img
                            src={imageSrc}
                            alt={name}
                            className="w-auto h-[120%] max-w-none object-contain transition-all duration-500"
                            style={{
                                filter: `hue-rotate(${hueRotate}deg) drop-shadow(0 0 50px ${color}40)`
                            }}
                        />
                    </motion.div>

                    {/* Annotations */}
                    <motion.div style={{ opacity: phase1Opacity }} className="absolute top-1/2 left-[10%] md:left-[20%] -translate-y-1/2 max-w-xs pointer-events-none">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-[1px]" style={{ backgroundColor: color }}></div>
                            <h3 className="text-2xl font-orbitron font-bold">CORE (HILT)</h3>
                        </div>
                        <p className="text-sm text-gray-400 font-mono leading-relaxed pl-16">{specs.hiltText}</p>
                        <div className="pl-16 mt-4">
                            <span className="px-2 py-1 text-[10px] border" style={{ borderColor: `${color}50`, backgroundColor: `${color}20`, color: color }}>STATS: {specs.hiltStat}</span>
                        </div>
                    </motion.div>

                    <motion.div style={{ opacity: phase2Opacity }} className="absolute top-[60%] right-[10%] md:right-[20%] max-w-xs text-right pointer-events-none">
                        <div className="flex items-center gap-4 mb-2 justify-end">
                            <h3 className="text-2xl font-orbitron font-bold">EDGE</h3>
                            <div className="w-12 h-[1px]" style={{ backgroundColor: color }}></div>
                        </div>
                        <p className="text-sm text-gray-400 font-mono leading-relaxed pr-16">{specs.edgeText}</p>
                        <div className="pr-16 mt-4 flex justify-end">
                            <span className="px-2 py-1 text-[10px] border" style={{ borderColor: `${color}50`, backgroundColor: `${color}20`, color: color }}>{specs.edgeStat}</span>
                        </div>
                    </motion.div>

                    <motion.div style={{ opacity: phase3Opacity }} className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-center max-w-md pointer-events-none">
                        <h3 className="text-4xl font-syncopate font-bold mb-2 animate-pulse" style={{ color: color }}>ULTIMATE</h3>
                        <p className="text-lg text-white font-bold font-orbitron tracking-widest">"{specs.skillName}"</p>
                        <p className="text-xs text-gray-500 font-mono mt-2">{specs.skillDesc}</p>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export const Products: React.FC = () => {
    return (
        <section id="products" className="relative">
            <KatanaReview
                id="void"
                name="CRIMSON"
                subtitle="BLOOD OATH"
                color="#ff2a2a" // Red
                imageSrc="/assets/katana-red.png"
                specs={{
                    hiltText: "Reinforced carbon-fiber weave. Absorbs impact shock for zero recoil.",
                    hiltStat: "STABILITY: 100%",
                    edgeText: "Crimson-infused plasma edge. Cauterizes wounds instantly.",
                    edgeStat: "HEAT: 4000°C",
                    skillName: "BLOOD MOON",
                    skillDesc: "DRAINS ENERGY FROM ENEMIES ON CONTACT."
                }}
            />
            <KatanaReview
                id="lightning"
                name="SHADOW"
                subtitle="NIGHT STALKER"
                color="#a8a8a8" // Silver/White
                imageSrc="/assets/katana-black.png"
                specs={{
                    hiltText: "Stealth-matte finish. Absorbs radar waves.",
                    hiltStat: "STEALTH: MAX",
                    edgeText: "Mono-molecular obsidian edge. Invisible to the naked eye at speed.",
                    edgeStat: "SHARPNESS: ∞",
                    skillName: "PHANTOM CUT",
                    skillDesc: "STRIKES FROM THE SHADOWS BEFORE YOU ARE SEEN."
                }}
            />
            {/* Keeping one variant with hue rotation as a bonus */}
            <KatanaReview
                id="toxin"
                name="VENOM"
                subtitle="BIO-HAZARD"
                color="#00ff41" // Matrix Green
                imageSrc="/assets/katana-black.png"
                hueRotate={120} // Rotate black/grey to greenish tint if possible, or just effect style
                specs={{
                    hiltText: "Corrosive-resistant polymer. Green fluid cooling system.",
                    hiltStat: "TOXICITY: LETHAL",
                    edgeText: "Coated in synthetic neurotoxin. Liquid core blade.",
                    edgeStat: "ACIDITY: pH 0",
                    skillName: "VIPER STRIKE",
                    skillDesc: "RAPID FLURRY ATTACK THAT MELTS ARMOR."
                }}
            />
        </section>
    );
};
