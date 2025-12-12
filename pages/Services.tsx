import React from 'react';
import { Code, Cpu, Globe, Layout, Smartphone, Terminal } from 'lucide-react';

export const Services: React.FC = () => {
    const services = [
        {
            id: '01',
            title: 'WEB KINETICS',
            icon: Globe,
            description: 'High-performance web applications that load faster than a synaptic reflex. React, Next.js, and WebGL integration.',
            tags: ['REACT', 'THREE.JS', 'WEBGL']
        },
        {
            id: '02',
            title: 'UI ENGINEERING',
            icon: Layout,
            description: 'Interfaces designed not just to be seen, but felt. Immersive experiences with fluid animations and haptic feedback.',
            tags: ['FIGMA', 'MOTION', 'UX']
        },
        {
            id: '03',
            title: 'MOBILE ARMORY',
            icon: Smartphone,
            description: 'Cross-platform mobile solutions that dominate both iOS and Android sectors using cutting-edge frameworks.',
            tags: ['FLUTTER', 'REACT NATIVE', 'IOS']
        },
        {
            id: '04',
            title: 'AI INTEGRATION',
            icon: Cpu,
            description: ' infuse your systems with neural network capabilities. Chatbots, predictive analysis, and automated decision making.',
            tags: ['LLM', 'PYTHON', 'TensorFlow']
        },
        {
            id: '05',
            title: 'SYSTEM ARCHITECTURE',
            icon: Terminal,
            description: 'Robust backend structures built to withstand massive traffic surges and cyber threats. Microservices and serverless.',
            tags: ['AWS', 'DOCKER', 'K8S']
        },
        {
            id: '06',
            title: 'SMART CONTRACTS',
            icon: Code,
            description: 'Decentralized logic for the new web. Secure, immutable, and transparent blockchain solutions.',
            tags: ['SOLIDITY', 'WEB3', 'ETH']
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen relative">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                    <div>
                        <span className="text-[#ff2a2a] font-mono text-sm tracking-widest block mb-2">/// ARMORY</span>
                        <h1 className="text-5xl md:text-7xl font-bold font-syncopate">SERVICES</h1>
                    </div>
                    <p className="text-gray-400 max-w-md text-right font-mono text-xs hidden md:block">
                        SELECT YOUR WEAPON. <br /> CUSTOM CONFIGURATIONS AVAILABLE UPON REQUEST.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div key={service.id} className="group relative bg-[#0a0a0a] p-8 border border-white/5 hover:border-[#ff2a2a] transition-all duration-300">
                            <div className="absolute top-4 right-4 font-mono text-[#ff2a2a] text-xs opacity-50 group-hover:opacity-100">
                                IMG_FILE_{service.id}
                            </div>

                            <service.icon className="text-white mb-6 group-hover:text-[#ff2a2a] transition-colors" size={40} strokeWidth={1} />

                            <h3 className="text-2xl font-bold font-orbitron mb-4 group-hover:translate-x-2 transition-transform">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[80px]">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.tags.map(tag => (
                                    <span key={tag} className="text-[10px] bg-white/5 px-2 py-1 font-mono text-gray-300 border border-transparent group-hover:border-[#ff2a2a]/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Hover Effect Corner */}
                            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-transparent border-r-[#ff2a2a] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
