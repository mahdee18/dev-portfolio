import React, { useEffect } from 'react';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';
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
        <section className='section' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Projects</h2>
                            <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit perspiciatis error enim maiores ducimus architecto assumenda culpa temporibus. Esse.</p>
                            <button className='btn btn-lg text-white border-0 rounded-full'>View All Projects</button>
                        </div>
                        <div
                            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
                            data-aos='fade-up'
                            data-aos-duration='800'
                        >
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>UI/UX Design</span></div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Project Title</span></div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-y-12'>
                        <div
                            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
                            data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-delay='200'
                        >
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>UI/UX Design</span></div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Project Title</span></div>
                        </div>
                        <div
                            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
                            data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-delay='400'
                        >
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>UI/UX Design</span></div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Project Title</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
