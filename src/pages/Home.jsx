import { FaArrowAltCircleUp } from "react-icons/fa";
import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <FaArrowAltCircleUp
        onClick={scrollToTop}
        className="fixed bottom-3 right-3 text-4xl text-crimson cursor-pointer z-40"
      />
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
