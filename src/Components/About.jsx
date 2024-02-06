import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitile';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className='section w-full mx-auto lg:w-5/6 lg:my-32' id='about'>
            <div className='flex flex-col md:flex-row'>
                
                <div
                    ref={ref}
                    data-aos='fade-left'
                    data-aos-delay='300'
                    className='md:w-1/2 w-full lg:mt-4 lg:pl-8 md:pl-4'
                >
                    <div className='flex flex-col px-4 py-4 md:py-0 justify-center md:h-[640px]'>
                        <div className='mb-8'>
                            <SectionTitle title={"About"} subtitle={"Me"}></SectionTitle>
                            <h3 className='h3 my-3'>I'm a freelance Frontend Developer.</h3>
                            <p className='w-full'>
                                Be passionate about web development and design. I would like to have a new-paced
                                organization where technical skills and creative thinking are useful as well as being able to
                                share my ability to learn quickly and discover new things as a web developer.
                            </p>
                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between'>
                            <div className='mb-6 md:mb-0 md:mr-6'>
                                <div className='text-[28px] font-tertiary text-gradient my-2'>
                                    <CountUp start={0} end={1} duration={3}></CountUp>+
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Years of Experience.
                                </div>
                            </div>
                            <div className='mb-6 md:mb-0 md:mx-6'>
                                <div className='text-[28px] font-tertiary text-gradient my-2'>
                                    <CountUp start={0} end={100} duration={3}></CountUp>+
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Projects Completed.
                                </div>
                            </div>
                            <div className='mb-6 md:mb-0 md:ml-6'>
                                <div className='text-[28px] font-tertiary text-gradient my-2'>
                                    <CountUp start={0} end={13} duration={3}></CountUp>+
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Satisfied Clients.
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
