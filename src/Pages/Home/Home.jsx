import React, { useMemo } from 'react';
import { SiLinkedin } from "react-icons/si";
import { BsDownload } from "react-icons/bs";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Cv from '../../Components/Assets/Cv/FaizGhouriCV.pdf';
import { Reveal } from '../../utils/Reveal';

const Home = () => {
    // Memoize particles so Math.random() only runs once, not on every render
    const particles = useMemo(() => (
        [...Array(15)].map((_, i) => ({
            id: i,
            width: Math.random() * 2 + 1,
            left: Math.random() * 100,
            top: Math.random() * 100,
            opacity: Math.random() * 0.6 + 0.2,
            duration: 5 + Math.random() * 8,
            delay: Math.random() * 5,
        }))
    ), []);

    return (
        <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-24 lg:pt-32 pb-16">
            {/* Background — GPU-friendly, no expensive blurs */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {/* Lighter orbs – reduced blur radius */}
                <div className="absolute w-[500px] h-[500px] bg-space-accent/15 rounded-full blur-[80px] animate-pulse-glow" style={{ willChange: 'opacity, transform' }} />
                <div className="absolute w-[350px] h-[350px] bg-space-cyan/8 rounded-full blur-[70px] animate-pulse-glow" style={{ animationDelay: '1s', willChange: 'opacity, transform' }} />

                {/* Memoized static particles */}
                {particles.map(p => (
                    <div key={p.id} style={{
                        position: 'absolute',
                        width: p.width + 'px',
                        height: p.width + 'px',
                        borderRadius: '50%',
                        background: '#fff',
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        opacity: p.opacity,
                        animation: `float ${p.duration}s ease-in-out infinite`,
                        animationDelay: `${p.delay}s`,
                        willChange: 'transform',
                    }} />
                ))}

                {/* Orbital rings with GPU hint */}
                <div className="absolute w-[700px] h-[700px] border border-white/5 rounded-full animate-spin-slow" style={{ willChange: 'transform' }} />
                <div className="absolute w-[1000px] h-[1000px] border border-space-cyan/5 rounded-full animate-spin-reverse" style={{ willChange: 'transform' }} />
            </div>

            <div className="container relative z-10 px-4 sm:px-6 mx-auto max-w-5xl text-center flex flex-col items-center">

                <Reveal>
                    <div className="mb-10 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-space-cyan/20 bg-space-cyan/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,240,255,0.05)]">
                        <span className="w-2.5 h-2.5 rounded-full bg-space-cyan animate-pulse shadow-[0_0_10px_rgba(0,240,255,1)]"></span>
                        <span className="text-space-cyan text-xs sm:text-sm tracking-[0.3em] uppercase font-bold">System Status: Operational</span>
                    </div>
                </Reveal>

                <Reveal>
                    <h1 className="text-5xl sm:text-7xl lg:text-[7.5rem] font-display font-extrabold leading-none tracking-tight mb-8 text-white">
                        Hey, I'm <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-space-cyan via-white to-space-purple inline-block relative py-2">
                            Faiz Ghouri
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-space-cyan/50 to-transparent"></span>
                        </span>
                    </h1>
                </Reveal>

                <Reveal>
                    <h2 className="text-xl md:text-3xl lg:text-4xl mt-4 text-gray-300 font-light tracking-widest uppercase">
                        Front-end <span className="font-bold text-white glow-text">Architect</span>
                    </h2>
                </Reveal>

                <Reveal>
                    <p className="mt-10 text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed mx-auto font-light">
                        Engineering high-performance, visually stunning digital environments. Specialized in React ecosystems and cutting-edge UI/UX implementations.
                    </p>
                </Reveal>

                <Reveal>
                    <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8">
                        <a
                            download="FaizGhouriCV.pdf"
                            href={Cv}
                            className="group relative px-10 py-5 bg-transparent border border-space-cyan/50 text-space-cyan font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 rounded-lg hover:text-white"
                        >
                            <span className="absolute inset-0 w-0 bg-space-cyan transition-all duration-500 ease-out group-hover:w-full"></span>
                            <span className="relative flex items-center gap-3">
                                Get Resume <BsDownload className="text-xl" />
                            </span>
                        </a>

                        <div className="flex items-center gap-6">
                            {[
                                { icon: FaPhoneAlt, href: "tel:+923170270842", label: "Call" },
                                { icon: FaEnvelope, href: "mailto:faizghouri5@gmail.com", label: "Email" },
                                { icon: SiLinkedin, href: "https://www.linkedin.com/in/faiz-ghouri-267052202/", label: "LinkedIn" }
                            ].map((social, i) => (
                                <a 
                                    key={social.label + i}
                                    href={social.href} 
                                    aria-label={social.label}
                                    className="p-4 glass-card border border-white/10 rounded-xl hover:bg-space-cyan/10 text-gray-400 hover:text-space-cyan hover:border-space-cyan/50 transition-all duration-300 shadow-xl group"
                                >
                                    <social.icon className="text-2xl group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Home;
