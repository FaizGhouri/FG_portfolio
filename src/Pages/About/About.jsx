import React from 'react';
import '../../App.css';
import { Progress } from 'rsuite';
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

const style = {
    width: 120,
    display: 'inline-block',
    paddingTop: 8
};

const posts = [
    { id: 1, title: 'HTML', percent: '98', icon: HtmlIcon },
    { id: 2, title: 'CSS', percent: '95', icon: CssIcon },
    { id: 3, title: 'BOOTSTRAP', percent: '95', icon: BootIcon },
    { id: 4, title: 'JAVASCPRIT', percent: '75', icon: JsIcon },
    { id: 5, title: 'TYPESCPRIT', percent: '50', icon: TypeIcon },
    { id: 6, title: 'REACT JS', percent: '70', icon: ReactIcon },
    { id: 7, title: 'NEXT JS', percent: '60', icon: NextIcon },
    { id: 8, title: 'TAILWIND CSS', percent: '95', icon: TailIcon },
    { id: 9, title: 'API INTEGRATION', percent: '80', icon: ApiIcon },
    { id: 10, title: 'FIGMA', percent: '70', icon: FigmaIcon }
];

const About = () => {
    return (
        <main>
            <section>
                <div className="flex justify-center items-center">
                    <div className="container max-w-screen-xl px-4 pt-14 sm:px-12 md:px-20 lg:px-32">

                        {/* About Me */}
                        <div className="mt-16">
                            <div className="about-text">
                                <Reveal>
                                    <p className="text-white text-4xl sm:text-6xl outfit-900">
                                        About Me<span className="text-[#10BD7B] text-3xl sm:text-5xl">.</span>
                                    </p>
                                </Reveal>
                                <hr className="w-full max-w-[40rem]" />
                            </div>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row justify-center gap-8 items-center mt-8">
                            <div className="w-full">
                                <Reveal>
                                    <p className="text-[#10BD7B] text-left outfit-800 text-3xl sm:text-5xl md:text-6xl">
                                        A Front-end Developer Based in Pakistan
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-white text-left outfit-300 text-base sm:text-lg pt-5">
                                        My name is Faiz Ghouri. I live in Karachi, Pakistan. Currently I'm doing my bachelor's in BBIT from Virtual University. I'm a Front-end Developer. I worked in DotClickllc as a React Front-end Developer, contributing to multiple projects.
                                    </p>
                                </Reveal>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="py-24 sm:py-32 px-4 sm:px-12">
                            {/* Heading Section */}
                            <div className='mb-16'>
                                <div className="about-text flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                                    <Reveal>
                                        <p className="text-white text-4xl sm:text-6xl outfit-900">
                                            My Skills<span className="text-[#10BD7B] text-3xl sm:text-5xl">.</span>
                                        </p>
                                    </Reveal>
                                    <hr className="w-full sm:max-w-[40rem]" />
                                </div>
                            </div>


                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post) => (
                                    <Reveal key={post.id}>
                                        <div className="w-60 bg-[#181818] rounded-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] 
          hover:shadow-[0_20px_60px_rgba(16,189,123,0.4)]
          border border-transparent hover:border-[#10BD7B]
          hover:bg-[#202020]
          hover:scale-[1.03]
          transition-all duration-500 ease-in-out cursor-pointer
        ">
                                            <div className="flex flex-col items-center justify-center text-center space-y-4">
                                                {/* Icon */}
                                                <img src={post.icon} alt={post.title} className="w-20 h-20 object-contain" />

                                                {/* Skill Name */}
                                                <h3 className="text-white text-xl font-semibold">{post.title}</h3>

                                                {/* Progress Bar */}
                                                <div className="w-full">
                                                    <Progress.Line
                                                        percent={post.percent}
                                                        strokeColor="#10BD7B"
                                                        trailColor="#333"
                                                        strokeWidth={8}
                                                        showInfo={false}
                                                    />
                                                    <p className="text-[#10BD7B] text-sm font-medium text-right mt-1">{post.percent}%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>








                        {/* Education */}
                        <div className="mt-16">
                            <div className="about-text">
                                <div className="mb-4">
                                    <Reveal>
                                        <p className="text-white text-4xl sm:text-6xl outfit-900">
                                            Education<span className="text-[#10BD7B] text-3xl sm:text-5xl">.</span>
                                        </p>
                                    </Reveal>
                                </div>
                                <hr className="w-full max-w-[45rem] mb-8 border-gray-600" />
                            </div>



                            <div className="mt-12 space-y-8">
                                <div className="px-4 py-4 border-2 border-gray-300/20 rounded-xl">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                        <Reveal>
                                            <p className="text-white outfit-800 text-xl sm:text-2xl">Virtual University</p>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-sm sm:text-lg text-white outfit-500">March 2022 - March 2026</p>
                                        </Reveal>
                                    </div>
                                    <div className="pt-2">
                                        <Reveal>
                                            <p className="text-[#10BD7B] text-lg sm:text-2xl outfit-600 text-left">Bachelor's of Business in Information Technology</p>
                                        </Reveal>
                                    </div>
                                </div>

                                <div className="px-4 py-4 border-2 border-gray-300/20 rounded-xl">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                        <Reveal>
                                            <p className="text-white outfit-800 text-xl sm:text-2xl text-left">Govt. Degree Boys Science and Commerce College</p>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-sm sm:text-lg text-white outfit-500 text-right">May 2018 - May 2020</p>
                                        </Reveal>
                                    </div>
                                    <div className="pt-2">
                                        <Reveal>
                                            <p className="text-[#10BD7B] text-lg sm:text-2xl outfit-600 text-left">Pre-Engineering</p>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="mt-16">
                            <div className="about-text">
                                <div className="mb-4">
                                    <Reveal>
                                        <p className="text-white text-4xl sm:text-6xl outfit-900">
                                            Experience<span className="text-[#10BD7B] text-3xl sm:text-5xl">.</span>
                                        </p>
                                    </Reveal>
                                </div>
                                <hr className="w-full max-w-[43rem] mb-8 border-gray-600" />
                            </div>


                            <div className="mt-12 px-4 py-4 border-2 border-gray-300/20 rounded-xl">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                    <Reveal>
                                        <p className="text-white outfit-800 text-xl sm:text-2xl">DotClickllc</p>
                                    </Reveal>
                                    <Reveal>
                                        <p className="text-sm sm:text-lg text-white outfit-500">Sept 2022 - April 2023</p>
                                    </Reveal>
                                </div>
                                <div className="pt-2">
                                    <Reveal>
                                        <p className="text-[#10BD7B] text-lg sm:text-2xl outfit-600 text-left">React Front-end Developer</p>
                                    </Reveal>
                                </div>
                                <div className="pt-8">
                                    <Reveal>
                                        <ul className="list-disc text-left marker:text-[#10BD7B] marker:text-lg pl-6 space-y-2">
                                            <li className="text-white text-sm sm:text-base outfit-400">Developing front-end using HTML, CSS, JavaScript and React JS.</li>
                                            <li className="text-white text-sm sm:text-base outfit-400">Convert PSD, Adobe XD, Figma to HTML, React JS and Next JS.</li>
                                            <li className="text-white text-sm sm:text-base outfit-400">Developing interactive front-end using animations.</li>
                                            <li className="text-white text-sm sm:text-base outfit-400">Make responsive web using Tailwind CSS and Bootstrap.</li>
                                            <li className="text-white text-sm sm:text-base outfit-400">Integrated REST APIs to fetch dynamic data.</li>
                                            <li className="text-white text-sm sm:text-base outfit-400">Debugged and resolved issues in web applications.</li>
                                            <li className="text-white text-sm sm:text-base outfit-400">Optimized website performance.</li>
                                            <li className="text-white text-sm sm:text-base outfit-400">Maintained and updated websites.</li>
                                            <li className="text-white text-sm sm:text-base outfit-400">Collaborated with designers and backend developers.</li>
                                        </ul>
                                    </Reveal>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
