import React, { useEffect } from 'react';
import img1 from '../assets/capture.png';
import img2 from '../assets/toy.png';
import img3 from '../assets/thai.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { content } from './Content';

const Work = () => {

    const { projects } = content;

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });
    }, []);

    return (
        <>
            <section className='section' id='work'>
                <div className='container mx-auto'>
                    <div className=''>
                        {/* Your introductory content */}
                        <div className='mb-10 lg:mb-0'>
                            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Projects</h2>
                            <p className='max-w-xl mb-6'>
                                I showcase dynamic web applications that seamlessly integrate front-end and back-end technologies.
                                Witness innovation and scalability as we explore the limitless possibilities of MERN technology in transforming the world of web development.
                            </p>
                            <button className='btn btn-lg text-white border-0 rounded-full'>View All Projects</button>
                        </div>

                    </div>
                    {/* Project cards */}
                    <div className='grid md:grid-cols-3 gap-8 '>
                        {projects.map((project, index) => (
                            <div key={index} className="group relative overflow-hidden border-2 border-white/50 rounded-xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                                <img className="group-hover:scale-125 transition-all duration-500" src={project.imageSrc} alt="" />
                                <div className="absolute bottom-0 left-0 right-0 text-center md:left-12 group-hover:bottom-24 transition-all duration-500 z-50 mb-6 md:text-left">
                                    <span className="text-gradient py-4">{project.title}</span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 text-center md:left-12 group-hover:bottom-10 transition-all duration-700 z-50 md:text-left opacity-0 group-hover:opacity-100">
                                    <span className="text-sm text-white">
                                        {project.description}
                                    </span>
                                    <br />
                                    <span className="bg-accent py-2 px-3 rounded-lg">
                                        <a href={project.previewLink} target="_blank" rel="noopener noreferrer">Preview</a>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
