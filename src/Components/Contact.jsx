import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineEmail, MdCall, MdLocationOn } from 'react-icons/md';
import SectionTitle from './SectionTitile';

const Contact = () => {
    // Initialize AOS in a useEffect hook
    React.useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);
    
    // Reusable component for contact info items for cleaner code
    const ContactInfoItem = ({ icon, title, value, link }) => (
        <a 
            href={link} 
            className="flex items-center gap-6 group"
            data-aos="fade-up"
            data-aos-delay="200"
        >
            <div className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white/90 group-hover:text-accent transition-colors duration-300">{title}</h4>
                <p className="text-white/60">{value}</p>
            </div>
        </a>
    );

    return (
        <section id="contact" className='py-20 lg:py-32'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12' data-aos="fade-up">
                    <SectionTitle title='Get In' subtitle='Touch' />
                    <p className='max-w-2xl mx-auto text-white/70 mt-4'>
                        I'm currently available for freelance work and open to discussing new projects. Let's create something extraordinary together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left Side: Contact Info */}
                    <div className="space-y-8">
                        <ContactInfoItem 
                            icon={<MdLocationOn size={28} />} 
                            title="Location" 
                            value="Sylhet, Bangladesh" 
                            link="#"
                        />
                        <ContactInfoItem 
                            icon={<MdOutlineEmail size={28} />} 
                            title="Email Me" 
                            value="mahdee.contact@gmail.com"
                            link="mailto:mahdee.contact@gmail.com"
                        />
                        <ContactInfoItem 
                            icon={<MdCall size={28} />} 
                            title="Call Me (WhatsApp)" 
                            value="+88 01709903362"
                            link="https://wa.me/8801709903362"
                        />
                    </div>

                    {/* Right Side: Contact Form with Glassmorphism */}
                    <div 
                        data-aos="fade-left" 
                        data-aos-delay="300"
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-lg"
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">Send a Message</h3>
                        <form action='https://formspree.io/f/moqoawnd' method='POST' className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Custom Input Field */}
                                <div className="relative">
                                    <input type="text" name="name" placeholder=" " className="custom-input peer" required />
                                    <label className="custom-label">Your Name</label>
                                </div>
                                <div className="relative">
                                    <input type="email" name="email" placeholder=" " className="custom-input peer" required />
                                    <label className="custom-label">Your Email</label>
                                </div>
                            </div>
                            <div className="relative">
                                <input type="text" name="subject" placeholder=" " className="custom-input peer" required />
                                <label className="custom-label">Subject</label>
                            </div>
                            <div className="relative">
                                <textarea name="message" placeholder=" " rows="5" className="custom-input peer" required></textarea>
                                <label className="custom-label">Your Message</label>
                            </div>
                            <button 
                                type='submit' 
                                className='w-full btn bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;