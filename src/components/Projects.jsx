import Heading from "./Heading";
import seaHeaven from "../assets/sea-haven.png";
import visaCare from "../assets/visa-care.png";
import msa from "../assets/msa.png";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const Projects = () => {

    const projects = [
        { id: 1, name: "Sea Haven", image: seaHeaven, description: "Sea Haven is a web-based hotel booking platform designed to provide users with an effortless way to find and book their dream stay near the sea. The platform showcases a curated list of seaside hotels, offers detailed room information, and enables smooth online bookings. This project demonstrates innovative solutions for managing hotel reservations with a focus on user experience.", frontEnd: "HTML, CSS, Tailwind CSS, React", backEnd: "ExpressJs, NodeJs", database: "MongoDB", authentication: "Firebase", challenges: "Some challenges in building the Sea Haven website include optimizing the design for showcasing ocean-view hotels and implementing real-time room availability and booking features seamlessly."},
        { id: 2, name: "MSA School", image: msa, description: "MSA School is an educational platform designed to facilitate learning and provide easy access to resources for students. The platform offers a user-friendly interface where students can manage their profiles, view courses, track progress, and engage with educational content effectively.", frontEnd: "HTML, CSS, Tailwind CSS", backEnd: "N/A", database: "N/A", authentication: "N/A", challenges: "Some difficulties faced while using the GSAP animation library include managing complex timelines for smooth animations and ensuring compatibility across different browsers and devices." },
        { id: 3, name: "Visa Care", image: visaCare, description: "Visa Care is a web-based platform designed to streamline the visa application process, making it easy for users to check visa requirements and add visa details. This system offers a user-friendly interface to simplify complex visa procedures. The project demonstrates practical solutions for managing visa-related information efficiently.", frontEnd: "HTML, CSS, Tailwind CSS, React", backEnd: "ExpressJs, NodeJs", database: "MongoDB", authentication: "Firebase", challenges: "Some challenges faced while building the Visa Care website include implementing a seamless user experience for form submissions and managing dynamic data, such as tracking and displaying visa application statuses in real time."},
    ];

    const [project , setProject] = useState({});

    const handleModal = (id) => {
        const project = projects.filter(project => project.id === id);
        setProject(project[0])
        document.getElementById("projects_details_modal").showModal();
    };

    return (
        <section className="bg-dark" id="projects">
            <div className="max-w-7xl mx-auto px-5 py-8 md:py-16">
                <Heading heading={"My Projects"} subHeading={"Completed Projects"} color={"text-white"}></Heading>

                <div className="text-white pt-5 md:pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            projects.map(project => <ProjectCard
                                key={project.id}
                                project={project}
                                handleModal={handleModal}
                            ></ProjectCard>)
                        }
                    </div>
                </div>

                {/* Modal */}
                <dialog id="projects_details_modal" className="modal">
                    <div className="modal-box text-dark rounded-md">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle bg-crimson text-white absolute right-2 top-2">✕</button>
                        </form>
                        <div className="pt-5 space-y-2">
                            <figure>
                                <img src={project?.image} />
                            </figure>
                            <div className="space-y-2">
                                <h2 className="text-xl font-medium">Name:{project?.name}</h2>
                                <h2><span className="text-xl font-medium">Description: </span><span className="font-poppins">{project?.description}</span></h2>
                                <h2 className="text-xl font-medium">Technology Used:</h2>
                                <ul>
                                    <li className="font-poppins"><span className="font-medium">Frontend: </span> <span>{project?.frontEnd}</span></li>
                                    <li className="font-poppins"><span className="font-medium">Backend: </span> <span>{project?.backEnd}</span></li>
                                    <li className="font-poppins"><span className="font-medium">Database: </span> <span>{project?.database}</span></li>
                                    <li className="font-poppins"><span className="font-medium">Authentication: </span> <span>{project?.authentication}</span></li>
                                    <li className="font-poppins"><span className="font-medium">Challenges Faced: </span> <span>{project?.challenges}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </section>

    );
};

export default Projects;