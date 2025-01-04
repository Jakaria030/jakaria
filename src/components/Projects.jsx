import Heading from "./Heading";
import seaHeaven from "../assets/sea-haven.png";
import visaCare from "../assets/visa-care.png";
import msa from "../assets/msa.png";

const Projects = () => {
    return (
        <section className="bg-dark" id="projects">
            <div className="max-w-7xl mx-auto px-5 py-8 md:py-16">
                <Heading heading={"My Projects"} subHeading={"Completed Projects"} color={"text-white"}></Heading>

                <div className="text-white pt-5 md:pt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        <div className="bg-[#222222] shadow-x rounded-t-md">
                            <figure>
                                <img className="w-full rounded-t-md " src={seaHeaven} />
                            </figure>
                            <div className="p-5 space-y-3 text-center">
                                <h3 className="text-xl font-bold">Sea Haven</h3>
                                <p className="font-poppins text-justify">Sea Haven is a web-based hotel booking platform designed to provide users with an effortless way to find and book their dream stay near the sea. The platform showcases a curated list of seaside hotels, offers detailed room information, and enables smooth online bookings. This project demonstrates innovative solutions for managing hotel reservations with a focus on user experience.</p>
                                <button className="bg-crimson border-2 border-crimson text-white px-4 py-2 rounded-md font-medium hover:bg-transparent transition-all duration-200 ease-in-out active:scale-95">Veiw Details</button>
                            </div>
                        </div>

                        <div className="bg-[#222222] shadow-x rounded-t-md">
                            <figure>
                                <img className="w-full rounded-t-md " src={msa} />
                            </figure>
                            <div className="p-5 space-y-3 text-center">
                                <h3 className="text-xl font-bold">MSA School</h3>
                                <p className="font-poppins text-justify">MSA School is an educational platform designed to facilitate learning and provide easy access to resources for students. The platform offers a user-friendly interface where students can manage their profiles, view courses, track progress, and engage with educational content effectively.</p>
                                <button className="bg-crimson border-2 border-crimson text-white px-4 py-2 rounded-md font-medium hover:bg-transparent transition-all duration-200 ease-in-out active:scale-95">Veiw Details</button>
                            </div>
                        </div>

                        <div className="bg-[#222222] shadow-x rounded-t-md">
                            <figure>
                                <img className="w-full rounded-t-md " src={visaCare} />
                            </figure>
                            <div className="p-5 space-y-3 text-center">
                                <h3 className="text-xl font-bold">Visa Care</h3>
                                <p className="font-poppins text-justify">Visa Care is a web-based platform designed to streamline the visa application process, making it easy for users to check visa requirements and add visa details. This system offers a user-friendly interface to simplify complex visa procedures. The project demonstrates practical solutions for managing visa-related information efficiently.</p>
                                <button className="bg-crimson border-2 border-crimson text-white px-4 py-2 rounded-md font-medium hover:bg-transparent transition-all duration-200 ease-in-out active:scale-95">Veiw Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;