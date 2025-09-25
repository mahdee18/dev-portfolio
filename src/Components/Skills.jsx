import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt'; // For the 3D hover effect
import { content } from './Content';
import SectionTitle from './SectionTitile';

const Skills = () => {
    const { skills } = content;
    const [activeTab, setActiveTab] = useState('Frontend');

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);

    const filteredSkills = skills.filter((skill) => {
        if (activeTab === 'Frontend') return skill.type === 'frontend';
        if (activeTab === 'Backend') return skill.type === 'backend';
        if (activeTab === 'Others') return skill.type === 'others';
        return false;
    });

    const categories = ['Frontend', 'Backend', 'Others'];

    return (
        <section className='py-20 lg:py-32' id='skills'>
            <div className='container mx-auto px-4'>
                {/* Section Header */}
                <div className='text-center mb-12' data-aos='fade-up'>
                    <SectionTitle title={"My Expertise"} subtitle={"Technologies I Use"} />
                    <p className='max-w-2xl mx-auto text-white/80 mt-4'>
                        A curated list of technologies and tools I excel at, enabling me to build seamless and robust digital experiences from front to back.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className='flex justify-center flex-wrap gap-4 mb-12' data-aos='fade-up' data-aos-delay='200'>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                                activeTab === category
                                    ? 'bg-accent text-white shadow-lg'
                                    : 'bg-primary/40 text-white/70 hover:bg-accent/80 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8'>
                    {filteredSkills.map((skill, i) => (
                        <div key={i} data-aos='fade-up' data-aos-delay={`${i * 100}`}>
                            <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.2}
                                glareColor="#ffffff"
                                glarePosition="all"
                                scale={1.1}
                            >
                                <div className='group relative bg-primary/40 p-6 rounded-2xl border border-white/10 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-accent hover:bg-accent/10'>
                                    {/* Subtle glow effect */}
                                    <div className='absolute -inset-px bg-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                                    
                                    <div className='relative w-16 h-16 mb-4'>
                                        <img
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
                                        />
                                    </div>
                                    <h6 className='relative text-lg font-semibold text-white'>{skill.name}</h6>
                                </div>
                            </Tilt>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;