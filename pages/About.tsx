import React, { useRef } from 'react';
import { Shield, Target, Zap, Users } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const CountUp = ({ to, label }: { to: number; label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Simple counting logic for demo (could use a dedicated count-up library for more complex needs)
    // Here we'll just animate the number reveal
    return (
        <div ref={ref} className="flex flex-col">
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold font-orbitron text-white"
            >
                {to}
                {label.includes('RATE') ? '%' : '+'}
            </motion.span>
            <span className="text-xs text-[#ff2a2a] tracking-widest font-mono">{label}</span>
        </div>
    );
};

export const About: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Parallax shift

    return (
        <div id="about" ref={containerRef} className="pt-32 pb-20 px-6 min-h-screen relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="text-[#ff2a2a] font-mono text-sm tracking-widest block mb-4">/// WHO WE ARE</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-syncopate mb-6">THE <span className="text-outline">RONIN</span> CODE</h1>
                    <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed font-mono text-xs md:text-sm">
                        We are masterless warriors in the digital realm. Bound by no legacy code, we forge new paths with precision and honor.
                        Our mission is to cut through the noise and deliver lethal styling and performance.
                    </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {[
                        { icon: Shield, title: "DEFENSE", desc: "Unbreakable security protocols." },
                        { icon: Target, title: "PRECISION", desc: "Pixel-perfect execution." },
                        { icon: Zap, title: "SPEED", desc: "Lightning fast deployment." },
                        { icon: Users, title: "HONOR", desc: "Transparency in every line of code." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, borderColor: "rgba(255, 42, 42, 0.5)" }}
                            className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm transition-colors group cursor-crosshair"
                        >
                            <item.icon className="text-[#ff2a2a] mb-6 group-hover:rotate-12 transition-transform duration-300" size={32} />
                            <h3 className="font-orbitron font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-xs font-mono">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Section divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff2a2a]/50 to-transparent mb-32 origin-left"
                ></motion.div>

                {/* Team / Story */}
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        style={{ y }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative group overflow-hidden">
                            <div className="absolute -inset-4 border border-[#ff2a2a] rounded-sm opacity-20 group-hover:opacity-100 transition-opacity"></div>
                            {/* Glitch Overlay */}
                            <div className="absolute inset-0 bg-[#ff2a2a]/0 group-hover:bg-[#ff2a2a]/10 mix-blend-overlay transition-colors z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1542259681-dfa05f41ed9c?q=80&w=1000&auto=format&fit=crop"
                                alt="Cyberpunk Office"
                                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                            />
                        </div>
                    </motion.div>

                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold font-syncopate mb-8">FORGED IN <br /><span className="text-[#ff2a2a]">SILICON</span></h2>
                            <div className="space-y-6 text-gray-400 leading-relaxed">
                                <p>
                                    Established in 2077, Samurai Systems began as a rogue collective of developers tired of the corporate bloat.
                                    We stripped away the unnecessary, focusing only on raw performance and aesthetic dominance.
                                </p>
                                <p>
                                    Today, we serve the elite. Our clients demand the impossible, and we deliver it with the strike of a blade.
                                </p>
                            </div>

                            <div className="mt-12 flex gap-8">
                                <CountUp to={500} label="PROJECTS KILLED" />
                                <CountUp to={100} label="SUCCESS RATE" />
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};
