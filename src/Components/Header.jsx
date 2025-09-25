import React from 'react';

const Header = () => {
    // State to manage header background visibility on scroll
    const [isScrolled, setIsScrolled] = React.useState(false);

    // Effect to add and remove the scroll event listener
    React.useEffect(() => {
        const handleScroll = () => {
            // Set state based on scroll position
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 py-6 transition-all duration-300 ease-in-out ${
                isScrolled ? 'bg-black/30 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <a href="/" className='text-3xl lg:text-4xl font-bold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient-x'>
                            Mahdee
                        </span>
                    </a>

                    {/* CTA Button */}
                    <a href="#contact">
                        <button className='btn btn-sm lg:btn-md rounded-full text-white bg-accent hover:bg-accent-hover border-none transform hover:scale-105 transition-transform duration-300'>
                            Work With Me
                        </button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;