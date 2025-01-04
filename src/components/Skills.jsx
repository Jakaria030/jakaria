import Heading from "./Heading";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import tailwindIcon from "../assets/tailwind.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import nodejsIcon from "../assets/nodejs.png";
import expressIcon from "../assets/express.png";
import mongoDBIcon from "../assets/mongoDB.png";
import firebaseIcon from "../assets/firebase.png";
import cPlusPlusIcon from "../assets/cPlusPlus.png";
import pythonIcon from "../assets/python.png";
import githubIcon from "../assets/github.png";

const Skills = () => {
    return (
        <section className="bg-dark" id="skills">
            <div className="max-w-7xl mx-auto px-5 py-8 md:py-16">
                <Heading heading={"My Skills"} subHeading={"What I Know?"} color={"text-white"}></Heading>

                <div className="text-white pt-5 md:pt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={htmlIcon} />
                            <p className="text-xl">HTML</p>
                        </div>

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={cssIcon} />
                            <p className="text-xl">CSS</p>
                        </div>

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={tailwindIcon} />
                            <p className="text-xl">Tailwind CSS</p>
                        </div>

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={jsIcon} />
                            <p className="text-xl">JavaScript</p>
                        </div>

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={reactIcon} />
                            <p className="text-xl">React</p>
                        </div>

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={nodejsIcon} />
                            <p className="text-xl">NodeJS</p>
                        </div>

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={expressIcon} />
                            <p className="text-xl">ExpressJs</p>
                        </div>

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={mongoDBIcon} />
                            <p className="text-xl">MongoDB</p>
                        </div>

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={firebaseIcon} />
                            <p className="text-xl">Firebase</p>
                        </div>

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={cPlusPlusIcon} />
                            <p className="text-xl">C++</p>
                        </div>

                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={pythonIcon} />
                            <p className="text-xl">Python</p>
                        </div>
                        <div className="border rounded-md p-5 flex flex-col justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out">
                            <img src={githubIcon} />
                            <p className="text-xl">GitHub</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;