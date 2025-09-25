import React, { useState } from 'react';
// Importing necessary icons
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { HiOutlineClipboardCopy, HiCheckCircle } from 'react-icons/hi';

const Footer = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = 'mahdee.contact@gmail.com';

    // Smart "Copy to Clipboard" function
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        });
    };

    // Reusable social link component for a clean, advanced look
    const SocialLink = ({ href, icon }) => (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white/70 backdrop-blur-sm hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 transform hover:scale-110'
        >
            {icon}
        </a>
    );

    return (
        <footer className="relative overflow-hidden bg-primary py-20 lg:py-32 border-t border-white/5">
            {/* Animated Aurora Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent to-purple-600 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-500 to-accent rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Main Call to Action */}
                <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-4" data-aos="fade-up">
                    Let's Build Something Amazing.
                </h2>
                <p className="max-w-2xl mx-auto text-white/70 text-lg mb-8" data-aos="fade-up" data-aos-delay="200">
                    Have a project in mind or just want to connect? My inbox is always open.
                </p>

                {/* Smart Email Button */}
                <div className="inline-block" data-aos="fade-up" data-aos-delay="400">
                    <button
                        onClick={handleCopyEmail}
                        className="flex items-center gap-x-4 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-accent hover:border-accent transform hover:scale-105"
                    >
                        {isCopied ? (
                            <>
                                <HiCheckCircle className="text-green-400" size={24} />
                                <span>Copied to Clipboard!</span>
                            </>
                        ) : (
                            <>
                                <HiOutlineClipboardCopy size={24} />
                                <span>{email}</span>
                            </>
                        )}
                    </button>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-6 mt-12" data-aos="fade-up" data-aos-delay="600">
                    <SocialLink href="https://github.com/mahdee18" icon={<FaGithub size={20} />} />
                    <SocialLink href="https://www.linkedin.com/in/mahdee-al-amin" icon={<FaLinkedinIn size={20} />} />
                    <SocialLink href="https://web.facebook.com/mahdee.al-amin2010" icon={<FaFacebookF size={20} />} />
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="absolute bottom-0 left-0 w-full p-4 text-center text-white/40 text-xs">
                <p>© {new Date().getFullYear()} Mahdee Al Amin | Crafted with React & Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;