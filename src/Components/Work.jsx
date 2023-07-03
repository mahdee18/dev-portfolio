import React, { useEffect } from 'react';
import img1 from '../assets/capture.png';
import img2 from '../assets/toy.png';
import img3 from '../assets/thai.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Work = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });
    }, []);

    return (
        <section className='section lg:my-28' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Projects</h2>
                            <p className='max-w-xl mb-6'>I showcase dynamic web applications that seamlessly integrate front-end and back-end technologies. Witness innovation and scalability as we explore the limitless possibilities of MERN technology in transforming the world of web development.</p>
                            <button className='btn btn-lg text-white border-0 rounded-full'>View All Projects</button>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img className="group-hover:scale-125 transition-all duration-500" src={img1} alt="" />
                            <div className="absolute bottom-0 left-0 right-0 text-center md:left-12 group-hover:bottom-24 transition-all duration-500 z-50 mb-6 md:text-left">
                                <span className="text-gradient py-4">Capture Academy</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 text-center md:left-12 group-hover:bottom-10 transition-all duration-700 z-50 md:text-left opacity-0 group-hover:opacity-100">
                                <span className="text-sm text-white">
                                    Developed a visually captivating website theme focused on
                                    photography education and summer camp.
                                </span>
                                <br />
                                <span className="bg-accent py-2 px-3 rounded-lg">
                                    <a href="https://capture-academy-1a91f.web.app/">Preview</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-y-12 '>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img className="group-hover:scale-125 transition-all duration-500" src={img2} alt="" />
                            <div className="absolute bottom-0 left-0 right-0 text-center md:left-12 group-hover:bottom-24 transition-all duration-500 z-50 mb-6 md:text-left">
                                <span className="text-gradient py-4">Smart Toy Market</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 text-center md:left-12 group-hover:bottom-10 transition-all duration-700 z-50 md:text-left opacity-0 group-hover:opacity-100">
                                <span className="text-sm text-white">
                                    Create an engaging platform for purchasing educational toys.
                                </span>
                                <br />
                                <span className="bg-accent py-2 px-3 rounded-lg">
                                    <a href="https://smarttoymarket.web.app/">Preview</a>
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img className="group-hover:scale-125 transition-all duration-500" src={img3} alt="" />
                            <div className="absolute bottom-0 left-0 right-0 text-center md:left-12 group-hover:bottom-24 transition-all duration-500 z-50 mb-6 md:text-left">
                                <span className="text-gradient py-4">Thai Kitchen</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 text-center md:left-12 group-hover:bottom-10 transition-all duration-700 z-50 md:text-left opacity-0 group-hover:opacity-100">
                                <span className="text-sm text-white">
                                    Create an exclusive online platform dedicated to Thai cuisine.
                                </span>
                                <br />
                                <span className="bg-accent py-2 px-3 rounded-lg">
                                    <a href="https://thai-kitchen-d45d7.web.app/">Preview</a>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
