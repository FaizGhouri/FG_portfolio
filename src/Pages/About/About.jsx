import React from 'react';
import '../../App.css';
import { Reveal } from '../../utils/Reveal';
import HtmlIcon from '../../Components/Assets/Icons/html-5.png';
import CssIcon from '../../Components/Assets/Icons/css-3.png';
import BootIcon from '../../Components/Assets/Icons/bootstrap.png';
import TailIcon from '../../Components/Assets/Icons/png-transparent-tailwind-css-hd-logo-removebg-preview.png';
import JsIcon from '../../Components/Assets/Icons/js.png';
import TypeIcon from '../../Components/Assets/Icons/typescript.png';
import FigmaIcon from '../../Components/Assets/Icons/figma.png';
import ReactIcon from '../../Components/Assets/Icons/physics.png';
import ApiIcon from '../../Components/Assets/Icons/api.png';
import NextIcon from '../../Components/Assets/Icons/images.png';

const skills = [
    { id: 1, title: 'HTML', percent: '98', icon: HtmlIcon },
    { id: 2, title: 'CSS', percent: '95', icon: CssIcon },
    { id: 3, title: 'BOOTSTRAP', percent: '95', icon: BootIcon },
    { id: 4, title: 'JAVASCRIPT', percent: '75', icon: JsIcon },
    { id: 5, title: 'TYPESCRIPT', percent: '50', icon: TypeIcon },
    { id: 6, title: 'REACT JS', percent: '70', icon: ReactIcon },
    { id: 7, title: 'NEXT JS', percent: '60', icon: NextIcon },
    { id: 8, title: 'TAILWIND CSS', percent: '95', icon: TailIcon },
    { id: 9, title: 'API INTEGRATION', percent: '80', icon: ApiIcon },
    { id: 10, title: 'FIGMA', percent: '70', icon: FigmaIcon }
];

const About = () => {
    return (
        <section id="about" className="relative min-h-screen py-24 overflow-hidden">
             {/* 3D Space Background Elements */}
             <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-space-accent/5 rounded-full blur-[150px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-space-cyan/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                
                {/* About Me Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
                    <div className="col-span-1 lg:col-span-5">
                        <Reveal>
                            <div className="relative">
                                <h1 className="section-heading text-white mb-2">
                                    System <br />
                                    <span className="glow-text">Core.</span>
                                </h1>
                                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-space-cyan to-transparent rounded-full hidden sm:block"></div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-span-1 lg:col-span-7">
                        <Reveal>
                            <div className="py-2">
                                <div className="glass-card p-8 sm:p-10 relative overflow-hidden group">
                                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-space-accent/20 blur-[50px] rounded-full group-hover:bg-space-cyan/30 transition-colors duration-700"></div>
                                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-space-cyan mb-6">
                                        A Front-end Developer Based in Pakistan
                                    </h3>
                                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                                            My name is <span className="text-white font-medium">Faiz Ghouri</span>. I live in Karachi, Pakistan. Currently I'm doing my bachelor's in BBIT from Virtual University. I'm a Front-end Developer. I worked at <span className="text-space-cyan font-medium">DotClick LLC</span> as a <span className="text-white font-medium">Front-end Developer</span>, contributing to multiple projects.
                                        </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="mb-32">
                    <Reveal>
                        <div className="mb-12 text-center flex flex-col items-center">
                            <h2 className="section-heading text-white">
                                Tech <span className="glow-text">Arsenal</span>
                            </h2>
                            <div className="w-24 h-1 mt-4 bg-gradient-to-r from-transparent via-space-cyan to-transparent rounded-full opacity-50"></div>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 justify-items-center">
                        {skills.map((skill, index) => (
                            <Reveal key={skill.id} width="100%">
                                <div className="w-full p-2 sm:p-3">
                                    <div className="glass-card skill-card p-4 sm:p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group w-full aspect-square border border-white/5 hover:!border-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-space-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all duration-300">
                                            <img src={skill.icon} alt={skill.title} className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        
                                        <h4 className="text-white font-display text-xs sm:text-sm tracking-wider mb-2 group-hover:text-space-cyan transition-colors z-10">{skill.title}</h4>
                                        
                                        <div className="w-full z-10 mt-auto">
                                            <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                                                <span className="text-[10px] sm:text-xs text-gray-400">Proficiency</span>
                                                <span className="text-[10px] sm:text-xs font-bold text-space-cyan">{skill.percent}%</span>
                                            </div>
                                            <div className="progress-track">
                                                <div className="progress-fill group-hover:from-space-cyan group-hover:to-space-purple" style={{ width: `${skill.percent}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Timeline Section (Education & Experience) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Education */}
                    <div>
                        <Reveal>
                            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-10 flex items-center gap-4">
                                <span className="w-12 h-[2px] bg-space-cyan shadow-[0_0_10px_#00f0ff]"></span>
                                Education
                            </h2>
                        </Reveal>

                        <div className="space-y-10 pl-2">
                            <Reveal>
                                <div className="timeline-item">
                                    <div className="inline-block px-3 py-1 mb-3 bg-space-cyan/10 border border-space-cyan/30 rounded-full text-xs font-semibold text-space-cyan tracking-widest uppercase shadow-inner">
                                        2022 - 2026
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-1 transition-colors cursor-default hover:text-space-cyan">
                                        Virtual University
                                    </h4>
                                    <p className="text-gray-400 font-medium text-base sm:text-lg mb-3">
                                        Bachelor's of Business in IT
                                    </p>
                                </div>
                            </Reveal>
                            
                            <Reveal>
                                <div className="timeline-item">
                                    <div className="inline-block px-3 py-1 mb-3 bg-space-cyan/10 border border-space-cyan/30 rounded-full text-xs font-semibold text-space-cyan tracking-widest uppercase shadow-inner">
                                        2018 - 2020
                                    </div>
                                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-1 transition-colors cursor-default hover:text-space-cyan">
                                        Govt. Degree Boys College
                                    </h4>
                                    <p className="text-gray-400 font-medium text-base sm:text-lg mb-3">
                                        Pre-Engineering
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <Reveal>
                            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-10 flex items-center gap-4">
                                <span className="w-12 h-[2px] bg-space-purple shadow-[0_0_10px_#a78bfa]"></span>
                                Experience
                            </h2>
                        </Reveal>

                        <div className="space-y-10 pl-2">
                            <Reveal>
                                <div className="timeline-item pt-2 pb-2">
                                    <div className="glass-card p-6 sm:p-8 relative overflow-hidden group ml-2 mb-4">
                                        <div className="inline-block px-3 py-1 mb-4 bg-space-purple/10 border border-space-purple/30 rounded-full text-xs font-semibold text-space-purple tracking-widest uppercase shadow-inner">
                                            2022 - 2023
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2">DotClickllc</h4>
                                        <p className="text-space-purple font-medium text-lg mb-6">React Front-end Developer</p>
                                        
                                        <ul className="space-y-3">
                                            {[
                                                "Developing front-end using HTML, CSS, JavaScript and React JS.",
                                                "Convert PSD, Adobe XD, Figma to HTML, React JS and Next JS.",
                                                "Developing interactive front-end using animations.",
                                                "Make responsive web using Tailwind CSS and Bootstrap.",
                                                "Integrated REST APIs to fetch dynamic data."
                                            ].map((task, i) => (
                                                <li key={i} className="flex gap-3 items-start text-sm sm:text-base text-gray-300 transition-colors group-hover:text-white">
                                                    <span className="mt-1 text-space-purple opacity-80 text-[10px]">▶</span>
                                                    <span>{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
