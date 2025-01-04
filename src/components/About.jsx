import Heading from "./Heading";
import aboutMe from "../assets/about-me.jpg";


const About = () => {
    return (
        <section className="max-w-7xl mx-auto px-5 py-8 md:py-16" id="about">
            <Heading heading={"About Me"} subHeading={"Who am I?"}></Heading>

            <div className="flex flex-col md:flex-row gap-10 md:gap-20 pt-5 md:pt-10 items-center">
                <div className="basis-1/4 shrink-0">
                    <img className="w-72 md:w-80 rounded-md border-4 border-dark shadow-lg" src={aboutMe} />
                </div>
                <div className="basis-3/4 mx-auto space-y-2">
                    <h2 className="text-2xl font-bold">Aspiring Tech Enthusiast and Problem Solver.</h2>
                    <p className="text-justify font-poppins">Hi, I'm Gulam Jakaria, an Honour Final year Computer Science and Engineering student with a strong passion for technology and innovation. My journey in tech has led me to work on exciting projects like a hotel booking system, MSA School, and Visa Care etc. I'm deeply enthusiastic about fields like Machine Learning and enjoy diving into competitive programming, where I've achieved the rank of Pupil on Codeforces and a 3-star rating on CodeChef. I'm driven by the desire to create impactful solutions and continuously explore the limitless possibilities of the tech world.</p>
                </div>
            </div>
        </section>
    );
};

export default About;