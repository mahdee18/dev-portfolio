import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// This component is designed to work with the 3D Carousel (Swiper) layout.
const ProjectCard = ({ project }) => {
    // NOTE: Ensure your project object in Content.js has these properties:
    // image, title, description, tags, github_link, live_link
    const { image, title, description, tags, github_link, live_link } = project;

    return (
        <div className='group bg-white/5 rounded-2xl overflow-hidden shadow-2xl h-full border border-white/10 transition-all duration-300 transform hover:shadow-accent/20'>
            {/* Image Section with Interactive Overlay */}
            <a 
                href={live_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='block overflow-hidden relative cursor-pointer'
            >
                <img 
                    src={image} 
                    alt={title} 
                    className='w-full h-auto aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out' 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <FaExternalLinkAlt />
                        <span className="font-semibold text-sm">View Live</span>
                    </div>
                </div>
            </a>
            
            {/* Content Section with Glassmorphism */}
            <div className='p-6 backdrop-blur-md'>
                {/* Tech Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                    {tags && tags.map((tag, i) => (
                        <span key={i} className='bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full'>{tag}</span>
                    ))}
                </div>
                
                <h3 className='text-2xl font-bold text-white mb-2'>{title}</h3>
                
                {/* Description with a fixed height to ensure card alignment */}
                <p className='text-white/70 text-sm mb-6 h-12 overflow-hidden'>
                    {description}
                </p>
                
                {/* Action Links */}
                <div className='flex justify-between items-center border-t border-white/10 pt-4'>
                     <a 
                        href={github_link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='flex items-center gap-2 text-white/80 hover:text-accent font-semibold transition-colors duration-300'
                     >
                        <FaGithub />
                        <span>View Code</span>
                    </a>
                    <a 
                        href={live_link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='btn btn-sm bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105'
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;