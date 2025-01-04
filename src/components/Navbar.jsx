import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li><Link to="#home">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#skills">Skills</Link></li>
        <li><Link to="#projects">Projects</Link></li>
        <li><Link to="#contact">Contact</Link></li>
    </>;

    return (
        <section className="bg-crimson">
            <nav className="navbar p-0 max-w-8xl mx-auto px-5">
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
                        <h2 className="text-2xl font-bold text-white">Jakaria</h2>
                    </Link>
                </div>

                {/* middle content */}
                <div className="navbar-center hidden md:flex">
                    <ul className="flex flex-row gap-5 text-lg text-white font-medium">
                        {links}
                    </ul>
                </div>

                {/* right content */}
                <div className="navbar-end">
                    <Link>
                        <button className="bg-white px-4 py-2 rounded-md font-medium text-dark">Download CV</button>
                    </Link>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;