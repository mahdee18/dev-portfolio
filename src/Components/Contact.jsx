import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });
    }, []);

    return (
        <section className='lg:my-48 lg:section' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex-1' data-aos='fade-down' data-aos-duration='800'>
                        <div className=''>
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get In Touch</h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br />Together!</h2>
                        </div>
                    </div>
                    <form className='flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-startj' data-aos='fade-up' data-aos-duration='800' data-aos-delay='200'>
                        <input className='border-b bg-transparent py-4 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your Name' />
                        <input className='border-b bg-transparent py-4 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='email' placeholder='Your Email' />
                        <textarea className='border-b bg-transparent py-4 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your Message' name='' id='' cols='80' rows='6'></textarea>
                        <button className='btn btn-lg rounded-full border-0 text-white'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
