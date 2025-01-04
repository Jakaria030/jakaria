import About from "../components/About";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Education from "../components/Education";

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: "smooth",
        });
    };

    return (
        <>
            <FaArrowAltCircleUp onClick={scrollToTop} className="fixed bottom-3 right-3 text-4xl text-crimson cursor-pointer z-40" />
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </>
    );
};

export default Home;