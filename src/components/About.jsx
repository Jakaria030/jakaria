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
                    <p className="text-justify font-poppins">Hi, I'm Gulam Jakaria, an Honours final-year Computer Science and Engineering student. My programming journey began after enrolling in the CSE program. During my studies, I developed a passion for competitive programming, achieving the 'Pupil' rank on Codeforces and a 3-star rating on CodeChef. I have solved over 1,500 problems across various online judges, enhancing my problem-solving skills. In my leisure time, I enjoy playing chess, a game that sharpens my strategic thinking and complements my analytical abilities in programming.</p>
                </div>
            </div>
        </section>
    );
};

export default About;