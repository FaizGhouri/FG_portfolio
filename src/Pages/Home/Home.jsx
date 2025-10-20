import React from 'react';
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import '../../App.css';
import { Reveal } from '../../utils/Reveal';
import { BsDownload } from "react-icons/bs";
import Cv from '../../Components/Assets/Cv/FaizGhouriCV.pdf';
import faiz from '../../Components/Assets/Background/FaizG.png';

const Home = () => {
    return (
        <div>
            <main>
                <section className="relative overflow-hidden pt-9 px-4 sm:px-6 min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#101010] to-[#1a1a1a]">
                    <div className="flex items-center justify-center">
                        <div className="container relative">

                            {/* Main Flex Row */}
                            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12 px-2 sm:px-12">

                                {/* Social + Text */}
                                <div className="flex flex-col pt-28 sm:pt-0 sm:flex-row gap-6 sm:gap-24 max-w-full sm:max-w-[60%] z-10">

                                    {/* Social Icons */}
                                    <div className="flex flex-row sm:flex-col justify-left sm:justify-center items-start gap-4 z-10">
                                        <a href="https://www.instagram.com/faiz_ghour1/" target="_blank" rel="noopener noreferrer">
                                            <SiInstagram className="text-white hover:text-[#10BD7B] text-lg sm:text-2xl" />
                                        </a>
                                        <a href="https://www.facebook.com/profile.php?id=100010459384790" target="_blank" rel="noopener noreferrer">
                                            <SiFacebook className="text-white hover:text-[#10BD7B] text-lg sm:text-2xl" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/faiz-ghouri-267052202/" target="_blank" rel="noopener noreferrer">
                                            <SiLinkedin className="text-white hover:text-[#10BD7B] text-lg sm:text-2xl" />
                                        </a>
                                    </div>

                                    {/* Text Content */}
                                    <div className="text-left z-10">
                                        <Reveal>
                                            <p className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl outfit-700">Hey, I'm</p>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl outfit-700">
                                                <span className="text-[#10BD7B]">Faiz</span> Ghouri.
                                            </p>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-white text-xl md:text-3xl outfit-200">
                                                I'm a <span className="text-[#10BD7B] outfit-900">Front-end Developer</span>
                                            </p>
                                        </Reveal>
                                        <Reveal>
                                            <a
                                                download="FaizGhouriCV.pdf"
                                                href={Cv}
                                                id="homeCv"
                                                className="no-underline text-[#10BD7B] active:text-[#10BD7B] hover:text-[#111111] hover:bg-[#10BD7B] ease-in-out duration-300 text-sm md:text-md outfit-600 mt-8 sm:mt-12 flex gap-2 items-center px-3 py-2 border-4 border-[#10BD7B]"
                                            >
                                                GET RESUME <BsDownload />
                                            </a>
                                        </Reveal>
                                    </div>
                                </div>

                                {/* ✅ Image + Blob */}
                                <div className="relative w-full sm:w-[40%] flex justify-center items-center z-10">

                                    {/* SVG Blob */}
                                    <svg
                                        className="absolute w-[300px] sm:w-[400px] h-auto -z-10 opacity-30"
                                        viewBox="0 0 200 200"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#10BD7B"
                                            d="M55.4,-49.7C71.8,-32.4,85.6,-10.6,81.6,8.5C77.7,27.6,55.9,44,35.4,55.5C14.9,67,-4.4,72.5,-23.6,66.3C-42.8,60.1,-61.8,42.2,-67.9,21.6C-74.1,1,-67.4,-22.3,-52.7,-40.1C-38.1,-58,-19.1,-70.3,1.3,-71.1C21.8,-71.9,43.5,-61.9,55.4,-49.7Z"
                                            transform="translate(100 100)"
                                        />
                                    </svg>

                                    {/* Blur Glow */}
                                    <div className="absolute w-60 h-60 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#10BD7B] to-[#0f766e] opacity-20 blur-3xl animate-pulse -z-10"></div>

                                    {/* Faiz Image */}
                                    <img
                                        src={faiz}
                                        alt="Faiz Ghouri"
                                        className="relative w-3/4 sm:w-full h-auto object-contain z-10"
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
