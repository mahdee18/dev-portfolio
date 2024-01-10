import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { content } from './Content';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitile';

const Work = () => {
    const { projects } = content;
    const [displayedProjects, setDisplayedProjects] = useState(3); 

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });
    }, []);

    const showAllProjects = () => {
        setDisplayedProjects(projects.length); // Show all projects when the button is clicked
    };

    return (
        <>
            <section className='section' id='work'>
                <div className='container mx-auto py-0 md:py-64'>
                    <div className=''>
                        {/* Your introductory content */}
                        <div className='mb-10 lg:mb-0'>
                            <SectionTitle title={"My Latest"} subtitle={"Projects"}></SectionTitle>
                            <p className='max-w-xl mb-6'>
                                I showcase dynamic web applications that seamlessly integrate front-end and back-end technologies.
                                Witness innovation and scalability as we explore the limitless possibilities of MERN technology in transforming the world of web development.
                            </p>
                        </div>
                    </div>
                    {/* Project cards */}
                    <div className='grid md:grid-cols-3 gap-8 md:my-8 '>
                        {projects.slice(0, displayedProjects).map((project, index) => (
                            <div key={index} className="group relative overflow-hidden border-2 border-white/50 rounded-xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <ProjectCard project={project}></ProjectCard>
                            </div>
                        ))}
                    </div>
                    {/* View All Project Button */}
                    <div className='text-center pt-6 md:pt-0'>
                        {displayedProjects < projects.length && (
                            <button className='btn lg:btn-lg text-white border-0' onClick={showAllProjects}>View All Projects</button>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;
