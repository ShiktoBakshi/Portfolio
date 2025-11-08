import { Link } from 'react-scroll';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='bg-linear-to-b from-[#0a192f] to-[#020617]'>
            <footer className="footer sm:footer-horizontal text-base-content p-10 container ">
                <aside>
                    <div className="flex  items-center  ">

                        <Link
                            to="home"
                            smooth={true}
                            duration={700}
                            offset={-70}
                            className="text-4xl font-bold bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent cursor-pointer drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                        >
                            B.M.Ahi Tanjil Ahosan
                        </Link>
                    </div>

                    <p className=" mt-3 bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                        Hello, I'm B.M.Ahi Tanjil Ahosan, a web developer that focuses on creating elegant,
                        responsive, and user-friendly websites. "Excited about executing your ideas!"
                    </p>
                </aside>
                <nav className='space-y-4'>
                    <div>
                        <h6 className="footer-title text-cyan-500 ">Contact Me</h6>
                        <a className="link link-hover  cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent ">ahibm594@gmail.com</a>
                    </div>
                    <div>
                        <h6 className=" cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent ">Call <a className="">+8801317124906</a></h6>
                        
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title text-cyan-500">Quick Links</h6>
                    <Link to="home" smooth={true}
                        duration={700}
                        offset={-70} className=" transition underline-effect  cursor-pointer hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">Home</Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        className="cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    >
                        About
                    </Link>
                    <Link
                        to="education"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        className="cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    >
                        Education
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        className="cursor-pointer  transition underline-effect bg-linear-to-l from-sky-400 to-cyan-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    >
                        Skills
                    </Link>
                    
                    <Link
                        to="project"
                        smooth={true}
                        duration={700}
                        offset={-70}
                        className="cursor-pointer  transition underline-effect bg-linear-to-l from-sky-500 to-cyan-400 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                    >
                        Project
                    </Link>
                </nav>
                <nav className="flex flex-col items-center justify-center text-center">
                    <h6 className="footer-title text-cyan-500 mb-3">
                        Social
                    </h6>

                    <div className="flex items-center justify-center gap-5">
                       <a href="https://github.com/ShiktoBakshi" className="hover:text-sky-400 text-3xl transition-all duration-300">
                                    <FaGithub />
                                </a>
                                
                                <a href="https://www.facebook.com/ahosan.B.M.AhiTannjil" className="hover:text-sky-400 text-3xl transition-all duration-300">
                                    <FaLinkedinIn />
                                </a>
                                 <a href="https://wa.me/qr/XWRPT42ED3O5K1" className="hover:text-sky-400 text-3xl transition-all duration-300">
                                    <FaWhatsapp />
                                </a>
                                <a href="https://www.linkedin.com/in/b-m-ahi-tanjil-ahosan-052582307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-sky-400 text-3xl transition-all duration-300">
                                    <CiFacebook />
                                </a>
                                <a href="https://www.instagram.com/shiktobakshi?igsh=ZzY3OXhqaXptYW5w" className="hover:text-sky-400 text-3xl transition-all duration-300">
                                    <CiInstagram />
                                </a>
                    </div>
                </nav>

            </footer>
            {/* Copyright Section */}
           <div className='bg-gray-900'>
                <div className=" mt-6 pt-4 pb-2 text-center text-sm text-gray-400">
                    © 2025 <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent font-semibold">B.M.Ahi Tanjil Ahosan</span> — All Rights Reserved
                </div>
           </div>
        </section>
    );
};

export default Footer;