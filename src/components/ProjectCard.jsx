
const ProjectCard = ({ project, handleModal }) => {
    const { id, name, image, description } = project;

    return (
        <div className="bg-[#222222] shadow-xl rounded-md flex flex-col">
            <figure>
                <img className="w-full rounded-t-md" src={image} />
            </figure>
            <div className="p-5 flex flex-col flex-grow space-y-3 text-center">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="font-poppins text-justify flex-grow">{description}</p>
                <button onClick={() => handleModal(id)} className="bg-crimson border-2 border-crimson text-white px-4 py-2 rounded-md font-medium hover:bg-transparent transition-all duration-200 ease-in-out active:scale-95 mt-auto">View Details</button>
            </div>
        </div>
    );
};

export default ProjectCard;