
import { MdOutlineEmail, MdCall, MdLocationOn } from 'react-icons/md';
import SectionTitle from './SectionTitile';

const Contact = () => {
    return (
        <div id="contact" className='w-5/6 mx-auto py-32 lg:pt-96'>
            <div>
                <SectionTitle title='Get In' subtitle='Touch'></SectionTitle>
            </div>
            <div className="md:flex gap-14">
                <div data-aos="fade-right" className='md:w-4/12'>
                    <h1 className="text-3xl text-white font-bold mb-4">Contact Info</h1>
                    <ul
                        aria-label="Activity feed"
                        role="feed"
                        className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
                    >
                        <li role="article" className="relative pl-6">
                            <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
                                <MdLocationOn></MdLocationOn>
                            </span>
                            <div className="flex flex-col flex-1 gap-0">
                                <h4 className="text-sm font-medium text-white mt-2">
                                    Sylhet, Bangladesh
                                </h4>
                            </div>
                        </li>
                        <li role="article" className="relative pl-6">
                            <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
                                <MdOutlineEmail></MdOutlineEmail>
                            </span>
                            <div className="flex flex-col flex-1 gap-0">
                                <h4 className="text-sm font-medium text-white mt-2">
                                    mahdee.contact@gmail.com
                                </h4>
                            </div>
                        </li>
                        <li role="article" className="relative pl-6">
                            <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
                                <MdCall></MdCall>
                            </span>
                            <div className="flex flex-col flex-1 gap-0">
                                <h4 className="text-sm font-medium text-white mt-2">
                                    +88 01709903362 (WhatsApp)
                                </h4>
                            </div>
                        </li>

                    </ul>
                </div>

                {/*<!-- Component: Card with form --> */}
                <form data-aos="fade-left" action='https://formspree.io/f/moqoawnd' method='POST' className="md:w-8/12 overflow-hidden rounded text-slate-500 mb-8">
                    {/*  <!-- Body--> */}
                    <div className="px-6 text-white">
                        <header className="mt-6 md:mt-0 md:mb-4">
                            <h3 className="text-3xl font-bold text-white ">Message me!!</h3>
                        </header>
                        <div className="flex flex-col space-y-8">
                            {/*      <!-- Input field --> */}
                            <div className="grid grid-cols-2 -mb-5 gap-x-5">
                                <div className="relative my-6">
                                    <input
                                        id="id-b03"
                                        type="text"
                                        name="name"
                                        placeholder="your name"
                                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-white-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed bg-transparent disabled:text-slate-400"
                                    />
                                    <label
                                        htmlFor="id-b03"
                                        className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                    >
                                        Name*
                                    </label>
                                </div>
                                <div className="relative my-6">
                                    <input
                                        id="id-b03"
                                        type="email"
                                        name="email"
                                        placeholder="your name"
                                        className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-white-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed bg-transparent disabled:text-slate-400"
                                    />
                                    <label
                                        htmlFor="id-b03"
                                        className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                    >
                                        Email*
                                    </label>
                                </div>

                            </div>
                            <div className="relative my-6">
                                <input
                                    id="id-b03"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-white-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed bg-transparent disabled:text-slate-400"
                                />
                                <label
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Subject*
                                </label>
                            </div>
                            <div className="relative">
                                <textarea
                                    id="id-b03"
                                    type="email"
                                    name="message"
                                    placeholder="your message"
                                    className="h-32 peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-white-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed bg-transparent disabled:text-slate-400"
                                ></textarea>

                                <label
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Your message*
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-end px-6">
                        <button type='submit' className='btn text-white mt-5 font-semibold p-3 px-5 rounded hover: hover:text-white transition duration-300 w-full'>
                            <span>Send Message</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;