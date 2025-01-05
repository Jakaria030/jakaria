import { IoMdMenu } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {

    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </>;

    return (
        <section className="bg-crimson sticky top-0 z-50">
            <nav className="navbar p-0 max-w-7xl mx-auto px-5">
                {/* left content */}
                <div className="navbar-start space-x-1 md:space-x-0">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="md:hidden">
                            <IoMdMenu className="text-3xl text-white"/>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content rounded-md z-[1] mt-4 border-b-4 border-crimson bg-base-200 w-60 p-2 shadow-sm">
                            {links}
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="w-8 md:w-12 shadow-lg rounded-full ring-2 ring-white" src={logo}/>
                    </Link>
                </div>

                {/* middle content */}
                <div className="navbar-center hidden md:flex">
                    <ul className="flex flex-row gap-3 text-lg text-white font-medium">
                        {links}
                    </ul>
                </div>

                {/* right content */}
                <div className="navbar-end">
                    <a href="/Jakaria-resume.pdf" download="Jakaria-resume.pdf">
                        <button className="bg-white px-4 py-2 border-2 border-dark rounded-md font-medium text-dark active:scale-95">Download CV</button>
                    </a>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;