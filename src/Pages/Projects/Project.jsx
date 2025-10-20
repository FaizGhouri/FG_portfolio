import React from 'react';
import '../../App.css';
import hey from '../../Components/Assets/Background/hey.png';
import predict from '../../Components/Assets/Background/3prediction.png';
import { Reveal } from '../../utils/Reveal';
import { FaRegEye, FaGithub } from "react-icons/fa";

const posts = [
    {
        id: 1,
        title: 'HEY SOLUTIONS',
        src: hey,
        href: 'https://heysolutions.org/',
        description: `A call center website to know the client's what are we do and they would Contact us.`
    },
    {
        id: 2,
        title: '3PIDICTION',
        src: predict,
        href: 'https://3prediction.com/',
        description: 'A gaming website to predict team and win a prize.'
    },
];

const Project = () => {
    return (
        <main>
            <section className="bg-[#0a0a0a] text-white">
                <div className="flex justify-center items-center">
                    <div className="container px-4 sm:px-8 lg:px-16 py-16">

                        {/* Heading */}
                        <div className='px-6 sm:px-32 my-24'>
                            <div className='about-text text-left'>

                                {/* Top Line */}
                                <hr className='w-16 sm:w-80  ' />

                                {/* Heading */}
                                <Reveal>
                                    <p className='text-white text-4xl sm:text-6xl outfit-900'>
                                        Projects
                                        <span className='text-[#10BD7B] outfit-900 text-3xl sm:text-5xl'>.</span>
                                    </p>
                                </Reveal>

                                {/* Bottom Line */}
                                <hr className='w-16 sm:w-80  ' />

                            </div>
                        </div>



                        {/* Projects */}
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="mb-20 sm:mb-24 lg:mb-32 rounded-3xl bg-[#101010] shadow-xl overflow-hidden flex flex-col lg:flex-row items-center lg:items-start"
                            >
                                {/* Image */}
                                <div className="w-full lg:w-1/2 relative h-64 sm:h-96 lg:h-full">
                                    <img
                                        src={post.src}
                                        alt={post.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2 p-6 sm:p-10 text-center lg:text-left">
                                    <Reveal>
                                        <h2 className="text-2xl sm:text-3xl text-[#10BD7B]  outfit-800">{post.title}</h2>
                                    </Reveal>

                                    <Reveal>
                                        <p className="mt-4 text-gray-300 text-base sm:text-lg">{post.description}</p>
                                    </Reveal>

                                    <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                                        <Reveal>
                                            <a
                                                href={post.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-white text-[#202020] text-sm font-bold px-5 py-2 rounded-md hover:bg-gray-100 hover:text-[#10BD7B] transition"
                                            >
                                                Preview <FaRegEye />
                                            </a>
                                        </Reveal>
                                        <Reveal>
                                            <a
                                                href="#"
                                                className="inline-flex items-center gap-2 text-white hover:text-[#10BD7B] text-sm"
                                            >
                                                Github <FaGithub />
                                            </a>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Project;
