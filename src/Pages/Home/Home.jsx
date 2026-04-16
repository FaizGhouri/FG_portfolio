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
                    <div className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-space-cyan/30 bg-space-cyan/5 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                        <span className="w-2.5 h-2.5 rounded-full bg-space-cyan animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
                        <span className="text-space-cyan text-sm sm:text-base tracking-[0.2em] uppercase font-medium">Available for work</span>
                    </div>
                </Reveal>

                <Reveal>
                    <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-display font-bold leading-[1.1] tracking-tight mb-6 text-white">
                        Hey, I'm <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-space-cyan to-space-purple inline-block relative">
                            Faiz Ghouri.
                            <span className="absolute inset-0 bg-gradient-to-r from-space-cyan to-space-purple blur-xl opacity-30"></span>
                        </span>
                    </h1>
                </Reveal>

                <Reveal>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-300 font-light tracking-wide">
                        I'm a <span className="font-semibold text-white">Front-end Developer</span>.
                    </h2>
                </Reveal>

                <Reveal>
                    <p className="mt-8 text-gray-400 max-w-2xl text-base md:text-xl leading-relaxed mx-auto font-light">
                        Crafting immersive digital experiences through clean code and futuristic design. Welcome to my creative universe.
                    </p>
                </Reveal>

                <Reveal>
                    <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a
                            download="FaizGhouriCV.pdf"
                            href={Cv}
                            className="bg-space-cyan/10 hover:bg-space-cyan/20 border border-space-cyan/50 text-space-cyan hover:text-white hover:border-space-cyan transition-all duration-300 px-8 py-4 rounded-full font-medium tracking-widest text-sm sm:text-base flex items-center gap-3 shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] uppercase"
                        >
                            GET RESUME <BsDownload className="text-xl" />
                        </a>

                        {/* Social / Contact Icons horizontally */}
                        <div className="flex justify-center items-center gap-4">
                            <a href="tel:+923170270842" className="w-14 h-14 flex items-center justify-center glass-card border border-white/10 rounded-full hover:bg-space-cyan/10 text-gray-400 hover:text-space-cyan hover:border-space-cyan/50 transition-all duration-300 shadow-lg group">
                                <FaPhoneAlt className="text-xl group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="mailto:faizghouri5@gmail.com" className="w-14 h-14 flex items-center justify-center glass-card border border-white/10 rounded-full hover:bg-space-cyan/10 text-gray-400 hover:text-space-cyan hover:border-space-cyan/50 transition-all duration-300 shadow-lg group">
                                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.linkedin.com/in/faiz-ghouri-267052202/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center glass-card border border-white/10 rounded-full hover:bg-space-cyan/10 text-gray-400 hover:text-space-cyan hover:border-space-cyan/50 transition-all duration-300 shadow-lg group">
                                <SiLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Home;
