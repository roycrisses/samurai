import React from 'react';
import { Shield, Target, Zap, Users } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <div id="about" className="pt-32 pb-20 px-6 min-h-screen relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Header */}
                <div className="mb-20 text-center">
                    <span className="text-[#ff2a2a] font-mono text-sm tracking-widest block mb-4">/// WHO WE ARE</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-syncopate mb-6">THE <span className="text-outline">RONIN</span> CODE</h1>
                    <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed font-mono text-xs md:text-sm">
                        We are masterless warriors in the digital realm. Bound by no legacy code, we forge new paths with precision and honor.
                        Our mission is to cut through the noise and deliver lethal styling and performance.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {[
                        { icon: Shield, title: "DEFENSE", desc: "Unbreakable security protocols." },
                        { icon: Target, title: "PRECISION", desc: "Pixel-perfect execution." },
                        { icon: Zap, title: "SPEED", desc: "Lightning fast deployment." },
                        { icon: Users, title: "HONOR", desc: "Transparency in every line of code." }
                    ].map((item, index) => (
                        <div key={index} className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#ff2a2a]/50 transition-colors group">
                            <item.icon className="text-[#ff2a2a] mb-6 group-hover:scale-110 transition-transform" size={32} />
                            <h3 className="font-orbitron font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-xs font-mono">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Section divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff2a2a]/50 to-transparent mb-32"></div>

                {/* Team / Story */}
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative group">
                            <div className="absolute -inset-4 border border-[#ff2a2a] rounded-sm opacity-20 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src="https://images.unsplash.com/photo-1542259681-dfa05f41ed9c?q=80&w=1000&auto=format&fit=crop"
                                alt="Cyberpunk Office"
                                className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
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
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold font-orbitron text-white">500+</span>
                                <span className="text-xs text-[#ff2a2a] tracking-widest font-mono">PROJECTS KILLED</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold font-orbitron text-white">100%</span>
                                <span className="text-xs text-[#ff2a2a] tracking-widest font-mono">SUCCESS RATE</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
