import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Tilt from 'react-parallax-tilt'; // For the 3D hover effect

import avater from '../assets/Profile.png'; // Make sure this path is correct
import { FaGithub, FaFacebook, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    // Callback for loading tsparticles
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const googleDriveResumeLink = 'https://drive.google.com/file/d/1NwgfhuAp9MOQrdFFgIsFrM3kZ1llhYm5/view?usp=drive_link';

    // A more subtle and formal particle configuration
    const particlesOptions = {
        background: {
            color: {
                value: '#0a0a0a', // From your tailwind config
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'bubble',
                },
            },
            modes: {
                bubble: {
                    distance: 200,
                    duration: 2,
                    opacity: 0.1,
                    size: 15,
                },
            },
        },
        particles: {
            color: {
                value: '#4F46E5', // Using your accent color
            },
            links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.05,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: true,
                speed: 0.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 20, // Fewer particles for a cleaner look
            },
            opacity: {
                value: 0.1,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    return (
        <section className='lg:pt-32 relative min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
            {/* Particle Background */}
            <Particles
                id='tsparticles'
                init={particlesInit}
                options={particlesOptions}
                className="absolute top-0 left-0 w-full h-full z-0"
            />
            <div className='container mx-auto z-10'>
                <div className='flex flex-col lg:flex-row items-center lg:gap-x-12'>
                    {/* Left side: Text Content */}
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <h1
                            data-aos='fade-right'
                            className='text-4xl lg:text-5xl font-bold leading-tight mb-4'
                        >
                            Hello, I'm <br />
                            <span className='text-accent'>Mahdee Al Amin</span>
                        </h1>
                        <div
                            data-aos='fade-right'
                            data-aos-delay='200'
                            className='mb-6 text-2xl lg:text-4xl font-semibold uppercase leading-none'
                        >
                            <span className='text-white mr-3'>A Creative</span>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'Web Designer',
                                    2000,
                                    'Frontend Specialist',
                                    2000,
                                ]}
                                speed={50}
                                className='text-white'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </div>
                        <p
                            data-aos='fade-right'
                            data-aos-delay='300'
                            className='mb-8 max-w-lg mx-auto lg:mx-0'
                        >
                            I design and build beautiful, responsive, and user-friendly websites and applications that provide real value. Let's create something amazing together.
                        </p>

                        {/* Buttons and Social Links */}
                        <div
                            data-aos='fade-up'
                            data-aos-delay='400'
                            className='flex flex-col sm:flex-row items-center gap-6 mb-12 justify-center lg:justify-start'
                        >
                            <a href="#contact" className='btn bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105'>
                                Let's Talk
                            </a>
                            <a href={googleDriveResumeLink} target='_blank' rel='noopener noreferrer' className='group flex items-center gap-x-3 text-white'>
                                <span className='border-b-2 border-transparent group-hover:border-accent transition-all duration-300'>Download My Resume</span>
                                <FaDownload className='text-accent group-hover:text-white transition-all duration-300' />
                            </a>
                        </div>
                        <div
                            data-aos='fade-up'
                            data-aos-delay='500'
                            className='flex text-2xl gap-x-6 max-w-max mx-auto lg:mx-0'
                        >
                            <a href='https://github.com/mahdee18' className='text-white/60 hover:text-accent transition-all duration-300'>
                                <FaGithub />
                            </a>
                            <a href='https://www.linkedin.com/in/mahdee-al-amin-8b7134202/' className='text-white/60 hover:text-accent transition-all duration-300'>
                                <FaLinkedinIn />
                            </a>
                            <a href='https://web.facebook.com/mahdee.al.amin2010' className='text-white/60 hover:text-accent transition-all duration-300'>
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                    {/* Right side: Image with 3D effect */}
                    <div
                        data-aos='fade-left'
                        data-aos-delay='200'
                        className='hidden lg:flex flex-1 justify-center items-center'
                    >
                        <Tilt glareEnable={true} glareMaxOpacity={0.4} glareColor="#ffffff" glarePosition="all" scale={1.05}>
                            <div className='relative w-[320px] h-[320px] lg:w-[420px] lg:h-[420px]'>
                                {/* Decorative Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent to-purple-800 rounded-full blur-3xl opacity-60"></div>
                                {/* Image */}
                                <img
                                    src={avater}
                                    alt='Mahdee Al Amin'
                                    className='relative w-full h-full object-cover rounded-full shadow-2xl'
                                />
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;