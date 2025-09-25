import React, { useState, useEffect } from 'react'; // 1. Import useState
import AOS from 'aos';
import 'aos/dist/aos.css';

import { content } from './Content';
import SectionTitle from './SectionTitile';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Work = () => {
    const { projects } = content;

    // 2. Add state to control the number of visible projects
    const [visibleProjects, setVisibleProjects] = useState(3);

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);

    // 3. Create a function to show all projects
    const showMoreProjects = () => {
        setVisibleProjects(projects.length);
    };

    return (
        <section className='py-20 lg:py-32' id='work'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16' data-aos="fade-up">
                    <SectionTitle title={"My Portfolio"} subtitle={"Featured Projects"} />
                    <p className='max-w-3xl mx-auto text-white/70 mt-4'>
                        Below is a selection of my best work. Each project was a unique challenge that I was excited to solve, showcasing my skills in modern web development.
                    </p>
                </div>

                {/* Projects Container */}
                <div className="space-y-20 lg:space-y-28">
                    {/* 4. Use .slice() to only map over the visible projects */}
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <div 
                            key={index} 
                            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                        >
                            {/* Image Column */}
                            <div 
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                            >
                                <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="block group">
                                    <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-accent to-purple-800 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="relative w-full aspect-video object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                                    />
                                </a>
                            </div>

                            {/* Content Column */}
                            <div 
                                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                                className={`flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                            >
                                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                                
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags && project.tags.map((tag, i) => (
                                        <span key={i} className='bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full'>{tag}</span>
                                    ))}
                                </div>

                                <p className="text-white/80 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                
                                <div className="flex items-center gap-4">
                                    <a 
                                        href={project.live_link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className='btn btn-lg bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2'
                                    >
                                        <FaExternalLinkAlt />
                                        <span>Live Demo</span>
                                    </a>
                                    <a 
                                        href={project.github_link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className='flex items-center gap-2 text-white/80 hover:text-accent font-semibold transition-colors duration-300 group'
                                    >
                                        <FaGithub size={24} className="group-hover:scale-110 transition-transform"/>
                                        <span>View Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 5. Conditionally render the "Show More" button */}
                {visibleProjects < projects.length && (
                    <div className="text-center mt-16" data-aos="fade-up">
                        <button 
                            onClick={showMoreProjects}
                            className='btn border-2 border-accent bg-transparent text-black hover:bg-accent hover:text-white rounded-full transition-all duration-300 px-8 py-3 font-semibold'
                        >
                            Show More Projects
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Work;