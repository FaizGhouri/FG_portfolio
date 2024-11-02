import React from 'react';
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import '../../App.css'




const Home = () => {
    return (

        <div>
       

                <main>

                    <section>
                        <div className='flex items-center justify-center'>
                            <div className='container overflow-hidden'>

                                <div className='w-full flex flex-col-reverse sm:flex-row justify-start gap-8 sm:gap-28  items-start sm:items-center overflow-hidden pl-12'>

                                    <div className='flex flex-row sm:flex-col justify-center items-center gap-4 sm:items-start z-10'>

                                        <a href="https://www.instagram.com/faiz_ghour1/" target="_blank">
                                            <SiInstagram className='text-white hover:text-[#10BD7B]  text-lg sm:text-2xl ' />
                                        </a>

                                        <a href="https://www.facebook.com/profile.php?id=100010459384790" target="_blank" >
                                            <SiFacebook className='text-white hover:text-[#10BD7B]  text-lg sm:text-2xl' />
                                        </a>

                                        <a href="https://www.linkedin.com/in/faiz-ghouri-267052202/" target="_blank" >
                                            <SiLinkedin className='text-white hover:text-[#10BD7B]  text-lg sm:text-2xl' />
                                        </a>

                                    </div>


                                    <div className='text-left z-10'>

                                        <p className='text-white text-4xl sm:text-9xl outfit-700'><span className='text-[#10BD7B]'>Faiz,</span> I'm</p>
                                        <p className='text-white text-4xl sm:text-9xl outfit-700'>Ghouri</p>
                                        <p className='text-white text-lg pl-0 sm:pl-3 outfit-500'>I'm <span className='text-[#10BD7B]'>Front-end</span> Developer</p>

                                    </div>


                                </div>
                                <div className='bg-[url("/img/FaizG.png")] w-full h-screen z-0 absolute top-16 bottom-0 left-[40%] sm:left-[60%]  bg-no-repeat '>



                                </div>

                            </div>
                        </div>
                    </section>


                </main>
          

        </div>
    )
}

export default Home;