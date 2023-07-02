import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { fadeIn } from '../varients';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className='section w-full my-12' id='about'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2'>
                    <div className='w-full bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
                </div>
                <div
                    ref={ref}
                    data-aos='fade-left'
                    data-aos-delay='300'
                    className='md:w-1/2 mt-48'
                >
                    <div className='flex flex-col sm:px-3 justify-center h-[640px] md:h-auto'>
                        <div className='mb-8'>
                            <h2 className='h2 text-accent'>About Me</h2>
                            <h3 className='h3 my-3'>I'm a freelance Frontend Developer.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, labore? Commodi, eaque saepe, quisquam
                                ducimus quibusdam eum mollitia at perferendis aut corporis maiores cupiditate! Veritatis laboriosam
                                delectus provident sint itaque, obcaecati explicabo officiis quis? Vel sed tenetur corporis nam
                                voluptatibus.
                            </p>
                        </div>
                        <div className='flex justify-start items-center gap-6'>
                            <div className='mt-auto'>
                                <div>
                                    <div className='text-[40px] font-tertiary text-gradient my-2'>
                                        <CountUp start={0} end={1} duration={3}></CountUp>+
                                    </div>
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Years of <br />
                                    Experience.
                                </div>
                            </div>
                            <div className='mt-auto'>
                                <div>
                                    <div className='text-[40px] font-tertiary text-gradient my-2'>
                                        <CountUp start={0} end={100} duration={3}></CountUp>+
                                    </div>
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Projects <br />
                                    Completed.
                                </div>
                            </div>
                            <div className='mt-auto'>
                                <div>
                                    <div className='text-[40px] font-tertiary text-gradient my-2'>
                                        <CountUp start={0} end={13} duration={3}></CountUp>+
                                    </div>
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Satisfied<br />
                                    Clients.
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
