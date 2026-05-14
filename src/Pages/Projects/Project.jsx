import React, { useState } from 'react';
import '../../App.css';
import './Project.css';
import hey from '../../Components/Assets/Background/hey.png';
import predict from '../../Components/Assets/Background/3prediction.png';
import creativeline from '../../Components/Assets/Background/creativeline.png';
import carparts from '../../Components/Assets/Background/carparts.png';
import { Reveal } from '../../utils/Reveal';
import { FaRegEye, FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: 'HEY SOLUTIONS',
        src: hey,
        href: 'https://heysolutions.org/',
        repo: 'https://github.com/FaizGhouri/Hey_Solutions',
        description: `A modern call center agency website detailing services provided and facilitating contact. Built with a focus on clean layout and fast loading.`,
        tags: ['React', 'CSS', 'Framer Motion'],
        color: '#00f0ff',
        number: '01',
    },
    {
        id: 2,
        title: '3PIDICTION',
        src: predict,
        href: 'https://3prediction.com/',
        repo: 'https://github.com/FaizGhouri/top-3-prediction',
        description: 'An interactive gaming platform to predict sports outcomes and win prizes. Features real-time state management and dynamic UI rendering.',
        tags: ['React', 'API Integration', 'Tailwind'],
        color: '#a78bfa',
        number: '02',
    },
    {
        id: 3,
        title: 'THE CREATIVE LINE',
        src: creativeline,
        href: 'https://creative-line-website.vercel.app/',
        repo: 'https://github.com/FaizGhouri/creative-line-website',
        description: 'A premium graphic design agency website turning bold ideas into stunning visual realities. Features comprehensive service catalog and dynamic brand showcases.',
        tags: ['React', 'Tailwind CSS', 'Framer Motion'],
        color: '#f472b6',
        number: '03',
    },
    {
        id: 4,
        title: 'AUTOPART NEXUS',
        src: carparts,
        href: 'https://ecommerce-car-parts.vercel.app/',
        repo: 'https://github.com/FaizGhouri/Ecommerce_Car_Parts',
        description: 'A robust e-commerce engine designed for automotive high-performance parts. Includes advanced search filters, secure payment flows, and a dynamic inventory system.',
        tags: ['React', 'Redux Toolkit', 'Vite'],
        color: '#f97316',
        number: '04',
    },
];

const Project = () => {
    const [flipped, setFlipped] = useState(null);

    return (
        <section id="projects" className="relative min-h-screen py-24 overflow-hidden">

            {/* Top line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-space-cyan to-transparent opacity-30" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Header */}
                <div className="mb-24 text-center flex flex-col items-center">
                    <Reveal>
                        <h2 className="section-heading font-display font-black text-white leading-none tracking-tight">
                            Selected <span className="glow-text">Missions</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="mt-6 max-w-2xl text-gray-400 font-light text-lg">
                            A curated showcase of high-performance expeditions into the digital frontier.
                        </p>
                    </Reveal>
                    <div className="w-24 h-1 mt-8 bg-gradient-to-r from-transparent via-space-cyan to-transparent rounded-full opacity-50" />
                </div>

                {/* Solitaire Card Deck */}
                <Reveal width="100%">
                    <div className="solitaire-deck">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`solitaire-card ${flipped === project.id ? 'flipped' : ''}`}
                                style={{ '--card-color': project.color, '--card-index': index }}
                            >
                                {/* ── Front (face-down / cover) ── */}
                                <div 
                                    className="card-face card-back"
                                    onClick={() => setFlipped(project.id)}
                                >
                                    {/* Card back pattern */}
                                    <div className="card-back-pattern" />
                                    <div className="card-back-center">
                                        <div className="card-back-logo">FG</div>
                                        <div className="card-back-num">PROJECT {project.number}</div>
                                    </div>
                                    <div className="card-corner card-corner-tl">{project.number}</div>
                                    <div className="card-corner card-corner-br">{project.number}</div>
                                    <div className="card-tap-hint">Tap to reveal →</div>
                                </div>

                                {/* ── Back (face-up / content) ── */}
                                <div className="card-face card-front">
                                    <div className="card-front-inner">
                                        {/* Image */}
                                        <div className="card-image-wrap">
                                            {/* Browser dots */}
                                            <div className="card-browser-bar">
                                                <span className="dot dot-red" />
                                                <span className="dot dot-yellow" />
                                                <span className="dot dot-green" />
                                                <span className="browser-url">
                                                    <FaExternalLinkAlt className="text-[9px]" />
                                                    {project.title.toLowerCase().replace(/\s+/g, '')}.com
                                                </span>
                                            </div>
                                            <div className="card-img-container">
                                                <img src={project.src} alt={project.title} className="card-img" />
                                                <div className="card-img-overlay" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="card-content">
                                            <div className="card-project-num">PROJECT {project.number}</div>
                                            <h3 className="card-title">{project.title}</h3>
                                            <p className="card-desc">{project.description}</p>

                                            <div className="card-tags">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="card-tag">{tag}</span>
                                                ))}
                                            </div>

                                            <div className="card-actions">
                                                <a
                                                    href={project.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="card-btn card-btn-primary"
                                                    aria-label={`Launch ${project.title} live site`}
                                                >
                                                    Launch <FaRegEye />
                                                </a>
                                                <a
                                                    href={project.repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="card-btn card-btn-outline"
                                                    aria-label="View Source on GitHub"
                                                >
                                                    <FaGithub />
                                                </a>
                                                <button
                                                    className="card-btn card-btn-close"
                                                    onClick={() => setFlipped(null)}
                                                    aria-label="Close project details"
                                                >
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default Project;
