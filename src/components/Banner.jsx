import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import myImg from "../assets/me.jpeg"
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";


const Banner = () => {
    return (
        <section className="bg-banner py-8 md:py-16">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex flex-col-reverse sm:flex-row md:items-center">
                    {/* left content */}
                    <div className="basis-1/2 text-white space-y-5 text-center sm:text-left">
                        <div className="space-y-1 md:space-y-3">
                            <p className="text-lg md:text-2xl">Hello, my name is</p>
                            <h2 className="text-3xl md:text-5xl">Gulam Jakaria</h2>

                            <h3 className="text-xl md:text-3xl flex justify-center sm:justify-start gap-2">And I'm a
                                <span className="text-crimson">
                                    <TypewriterComponent
                                        options={{
                                            strings: ['Frontend', 'Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </h3>

                        </div>

                        {/* social links */}
                        <div className="flex gap-5 justify-center sm:justify-start">
                            <Link to="https://www.facebook.com/gulam.jakaria.732339/" target="_blank">
                                <FaFacebook className="text-4xl border border-crimson hover:text-crimson rounded-full p-1 transition-all duration-200 ease-in-out"></FaFacebook>
                            </Link>
                            <Link to="https://www.linkedin.com/in/gulam-jakaria-4a5086311/" target="_blank">
                                <FaLinkedin className="text-4xl border border-crimson hover:text-crimson rounded-full p-1 transition-all duration-200 ease-in-out"></FaLinkedin>
                            </Link>
                            <Link to="https://github.com/Jakaria030" target="_blank">
                                <FaGithub className="text-4xl border border-crimson hover:text-crimson rounded-full p-1 transition-all duration-200 ease-in-out"></FaGithub>
                            </Link>
                        </div>

                        <div>
                            <a href="/Jakaria-resume.pdf" download="Jakaria-resume.pdf">
                                <button className="bg-crimson border-2 border-crimson text-white px-4 py-2 rounded-md font-medium hover:bg-transparent transition-all duration-200 ease-in-out active:scale-95">Download CV</button>
                            </a>
                        </div>

                    </div>

                    {/* right content */}
                    <div className="basis-1/2 pb-8 sm:pb-0">
                        {/* <img   /> */}
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                            src={myImg}
                            className="w-52 md:w-80 mx-auto rounded-full shadow-lg border-2 border-crimson"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;