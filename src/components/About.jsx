import aboutMe from "../assets/about-me.jpg";
import Heading from "./Heading";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-8 md:py-16" id="about">
      <Heading heading={"About Me"} subHeading={"Who am I?"}></Heading>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20 pt-5 md:pt-10 items-center">
        <div className="basis-1/4 shrink-0">
          <img
            className="w-72 md:w-80 rounded-md border-4 border-dark shadow-lg"
            src={aboutMe}
          />
        </div>
        <div className="basis-3/4 mx-auto space-y-2">
          <h2 className="text-2xl font-bold">
            Aspiring Tech Enthusiast and Problem Solver.
          </h2>
          <p className="text-justify font-poppins">
            Hi, I'm Gulam Jakaria. I recently completed my Bachelor of Science
            (B.Sc) degree in Computer Science and Engineering. Throughout my
            academic journey, I developed a strong interest in competitive
            programming, achieving the 'Pupil' rank on Codeforces and a 3-star
            rating on CodeChef. I have solved over 1,500 problems across
            multiple online platforms, which has significantly strengthened my
            problem-solving skills. In my leisure time, I enjoy playing chess, a
            game that enhances my strategic thinking and complements my
            analytical abilities in programming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
