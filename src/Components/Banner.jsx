import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Tilt from 'react-parallax-tilt';
import avater1 from '../assets/Profile with tieee.jpg'; 
import { FaGithub, FaFacebook, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-out-cubic',
            once: true,
        });

        const style = document.createElement('style');
        style.textContent = `
            @keyframes wave {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(20deg); }
                75% { transform: rotate(-15deg); }
            }
            .animate-wave {
                animation: wave 2.5s ease-in-out infinite;
                transform-origin: 70% 70%;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const googleDriveResumeLink = 'https://drive.google.com/file/d/1NwgfhuAp9MOQrdFFgIsFrM3kZ1llhYm5/view?usp=drive_link';

    const particlesOptions = {
        background: { color: { value: '#0a0a0a' } },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: ['grab', 'bubble'] },
                onClick: { enable: true, mode: 'push' },
            },
            modes: {
                grab: { distance: 200, links: { opacity: 0.3 } },
                bubble: { distance: 250, duration: 2, opacity: 0.2, size: 20 },
                push: { quantity: 2 },
            },
        },
        particles: {
            color: { value: ['#4F46E5', '#7C3AED'] },
            links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.08,
                width: 1,
            },
            move: {
                enable: true,
                outModes: { default: 'bounce' },
                random: true,
                speed: 0.8,
            },
            number: {
                density: { enable: true, area: 800 },
                value: 35,
            },
            opacity: {
                value: { min: 0.1, max: 0.3 },
                animation: { enable: true, speed: 1 },
            },
            shape: { type: ['circle', 'triangle'] },
            size: {
                value: { min: 1, max: 4 },
                animation: { enable: true, speed: 2 },
            },
        },
        detectRetina: true,
    };

    return (
        <section className='relative min-h-screen flex items-center overflow-hidden py-20' id='home'>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20 pointer-events-none"></div>
            
            <Particles
                id='tsparticles'
                init={particlesInit}
                options={particlesOptions}
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>

            <div className='container mx-auto z-10 px-6 lg:px-12'>
                <div className='flex flex-col lg:flex-row items-center lg:gap-x-16 gap-y-12'>
                    <div className='flex-1 text-center lg:text-left space-y-8'>
                        {/* Greeting Badge */}
                        <div data-aos='fade-down' className='inline-block'>
                            <div className='group relative px-6 py-3 overflow-hidden'>
                                <div className='absolute inset-0 bg-gradient-to-r from-accent/10 via-purple-600/10 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-purple-500 to-accent p-[1px]'>
                                    <div className='h-full w-full bg-[#0a0a0a] rounded-2xl'></div>
                                </div>
                                <div className='relative flex items-center gap-3'>
                                    <span className='text-2xl animate-wave inline-block'>👋</span>
                                    <span className='text-sm font-semibold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent'>
                                        Welcome to my digital space
                                    </span>
                                    <div className='w-2 h-2 rounded-full bg-accent animate-pulse'></div>
                                </div>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div data-aos='fade-right' className='space-y-4'>
                            <h2 className='text-lg lg:text-xl text-gray-400 font-light tracking-wide'>Hello, I'm</h2>
                            <h1 className='text-5xl lg:text-7xl font-bold leading-tight'>
                                <span className='bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
                                    Mahdee Al Amin
                                </span>
                            </h1>
                        </div>

                        {/* Animated Role */}
                        <div data-aos='fade-right' data-aos-delay='200' className='text-2xl lg:text-4xl font-bold'>
                            <span className='text-gray-300'>A Creative </span>
                            <br className='lg:hidden' />
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2500,
                                    'MERN Stack Expert',
                                    2500,
                                    'Frontend Enthusiast',
                                    2500,
                                    'Problem Solver',
                                    2500,
                                ]}
                                speed={50}
                                className='bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </div>

                        {/* Description */}
                        <p data-aos='fade-right' data-aos-delay='300' className='text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
                            Crafting pixel-perfect, scalable web solutions with modern technologies. 
                            I transform ideas into elegant digital experiences that captivate and perform.
                        </p>

                        {/* CTA Buttons */}
                        <div data-aos='fade-up' data-aos-delay='400' className='flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-4'>
                            <a 
                                href="#contact" 
                                className='group relative px-8 py-4 bg-gradient-to-r from-accent to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 hover:scale-105'
                            >
                                <span className='relative z-10'>Let's Collaborate</span>
                                <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </a>
                            
                            <a 
                                href={googleDriveResumeLink} 
                                target='_blank' 
                                rel='noopener noreferrer' 
                                className='group flex items-center gap-3 px-8 py-4 border-2 border-accent/50 text-white font-semibold rounded-full hover:bg-accent/10 hover:border-accent transition-all duration-300'
                            >
                                <span>Download Resume</span>
                                <FaDownload className='text-accent group-hover:translate-y-1 transition-transform duration-300' />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div data-aos='fade-up' data-aos-delay='500' className='flex items-center gap-5 justify-center lg:justify-start pt-4'>
                            <div className='h-px w-12 bg-gradient-to-r from-transparent to-accent/50'></div>
                            <a 
                                href='https://github.com/mahdee18' 
                                className='group relative w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-accent transition-all duration-300 hover:scale-110'
                            >
                                <FaGithub className='text-xl text-gray-400 group-hover:text-accent transition-colors duration-300' />
                                <div className='absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </a>
                            <a 
                                href='https://www.linkedin.com/in/mahdee-al-amin-8b7134202/' 
                                className='group relative w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-accent transition-all duration-300 hover:scale-110'
                            >
                                <FaLinkedinIn className='text-xl text-gray-400 group-hover:text-accent transition-colors duration-300' />
                                <div className='absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </a>
                            <a 
                                href='https://web.facebook.com/mahdee.al.amin2010' 
                                className='group relative w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-accent transition-all duration-300 hover:scale-110'
                            >
                                <FaFacebook className='text-xl text-gray-400 group-hover:text-accent transition-colors duration-300' />
                                <div className='absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </a>
                            <div className='h-px w-12 bg-gradient-to-l from-transparent to-accent/50'></div>
                        </div>
                    </div>

                    {/* Right side: Image Section */}
                    <div data-aos='fade-left' data-aos-delay='200' className='flex-1 flex justify-center items-center'>
                        <div className='relative'>
                            <div className="absolute inset-0 rounded-full">
                                <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-ping"></div>
                                <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-pulse"></div>
                            </div>

                            <div className="absolute -inset-8 bg-gradient-to-r from-accent to-accent/50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            <div className="absolute -inset-4 bg-accent/40 rounded-full blur-2xl opacity-50"></div>

                            <Tilt 
                                glareEnable={true} 
                                glareMaxOpacity={0.3} 
                                glareColor="#ffffff" 
                                glarePosition="all" 
                                scale={1.08}
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                            >
                                <div className='relative w-[320px] h-[320px] lg:w-[480px] lg:h-[480px]'>
                                    <div className='relative w-full h-full p-1 bg-gradient-to-br from-accent via-accent/80 to-accent/60 rounded-full shadow-2xl shadow-accent/50'>
                                        <div className='w-full h-full bg-[#bb00ff] rounded-full p-2'>
                                            <img
                                                src={avater1}
                                                alt='Mahdee Al Amin'
                                                className='w-full h-full object-cover rounded-full'
                                            />
                                        </div>
                                    </div>

                                    {/* Updated Tech Stack Badges */}
                                    <div className='absolute -top-6 -right-6 px-4 py-2 bg-gradient-to-r from-accent to-accent/80 rounded-2xl shadow-xl shadow-accent/50 animate-bounce backdrop-blur-sm border border-accent/30'>
                                        <span className='text-xs font-bold text-white tracking-wider'>React</span>
                                    </div>
                                    <div className='absolute top-1/4 -right-8 px-4 py-2 bg-gradient-to-r from-accent/90 to-accent/70 rounded-2xl shadow-xl shadow-accent/50 backdrop-blur-sm border border-accent/30' style={{ animationDelay: '0.2s' }}>
                                        <span className='text-xs font-bold text-white tracking-wider'>MERN</span>
                                    </div>
                                    <div className='absolute -bottom-6 -left-6 px-4 py-2 bg-gradient-to-r from-accent/95 to-accent/75 rounded-2xl shadow-xl shadow-accent/50 animate-bounce backdrop-blur-sm border border-accent/30' style={{ animationDelay: '0.4s' }}>
                                        <span className='text-xs font-bold text-white tracking-wider'>Full Stack</span>
                                    </div>
                                    <div className='absolute bottom-1/4 -left-10 px-4 py-2 bg-gradient-to-r from-accent to-accent/85 rounded-2xl shadow-xl shadow-accent/50 backdrop-blur-sm border border-accent/30' style={{ animationDelay: '0.6s' }}>
                                        <span className='text-xs font-bold text-white tracking-wider'>Frontend</span>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div data-aos='fade-up' data-aos-delay='800' className='absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block'>
                <div className='flex flex-col items-center gap-2 animate-bounce'>
                    <span className='text-xs text-gray-500 uppercase tracking-wider'>Scroll Down</span>
                    <div className='w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center'>
                        <div className='w-1 h-3 bg-accent rounded-full mt-2 animate-pulse'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;