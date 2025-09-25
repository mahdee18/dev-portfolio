import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Assuming SectionTitle is a reusable component for headings
import SectionTitle from './SectionTitile'; 
// Make sure this path is correct for your project structure
import aboutImage from '../assets/avatar.png'; 

const About = () => {
    // This hook is great for triggering the CountUp animation only when visible
    const { ref, inView } = useInView({
        threshold: 0.3, // Start animation when 30% of the element is visible
        triggerOnce: true, // Animate only once
    });

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section className='py-20 lg:py-32' id='about'>
            <div className='container mx-auto px-4'>
                {/* Section Title */}
                <div data-aos='fade-up'>
                   <SectionTitle title={"About"} subtitle={"Me"}></SectionTitle>
                </div>

                {/* Main Content Grid */}
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12'>
                    
                    {/* Image Column */}
                    <div data-aos='fade-right' className='flex justify-center'>
                        <div className='relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]'>
                            {/* Accent border/glow effect */}
                            <div className='absolute inset-0 border-4 border-accent rounded-2xl transform rotate-6 transition-transform duration-500 hover:rotate-3'></div>
                            <img 
                                src={aboutImage} 
                                alt="Mahdee Al Amin" 
                                className='relative w-full h-full object-cover rounded-2xl shadow-2xl' 
                            />
                        </div>
                    </div>

                    {/* Text and Stats Column */}
                    <div ref={ref} data-aos='fade-left' data-aos-delay='200'>
                        <h3 className='text-3xl font-bold text-white mb-4'>
                            Crafting Digital Experiences That Matter
                        </h3>
                        <p className='text-white/80 leading-relaxed mb-6'>
                            As a passionate web developer and designer, I specialize in building elegant, high-performance websites and applications. My focus is on creating intuitive user interfaces and writing clean, efficient code.
                        </p>
                        <p className='text-white/80 leading-relaxed mb-8'>
                            I thrive in collaborative environments where I can leverage my skills in modern technologies to solve complex problems and bring creative visions to life.
                        </p>

                        {/* Stats Grid */}
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                            <div className='bg-primary/40 border border-white/10 p-6 rounded-lg text-center'>
                                <div className='text-4xl font-bold text-accent'>
                                    {inView && <CountUp start={0} end={1} duration={3} />}
                                    +
                                </div>
                                <div className='font-primary text-sm tracking-widest text-white/60 uppercase mt-2'>
                                    Years Experience
                                </div>
                            </div>
                            <div className='bg-primary/40 border border-white/10 p-6 rounded-lg text-center'>
                                <div className='text-4xl font-bold text-accent'>
                                    {inView && <CountUp start={0} end={100} duration={3} />}
                                    +
                                </div>
                                <div className='font-primary text-sm tracking-widest text-white/60 uppercase mt-2'>
                                    Projects Done
                                </div>
                            </div>
                            <div className='bg-primary/40 border border-white/10 p-6 rounded-lg text-center'>
                                <div className='text-4xl font-bold text-accent'>
                                    {inView && <CountUp start={0} end={13} duration={3} />}
                                    +
                                </div>
                                <div className='font-primary text-sm tracking-widest text-white/60 uppercase mt-2'>
                                    Happy Clients
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;