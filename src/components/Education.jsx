import Heading from "./Heading";

const Education = () => {
    return (
        <section className="max-w-7xl mx-auto px-5 py-8 md:py-16" id="education">
            <Heading heading={"My Education"} subHeading={"Learning Path"}></Heading>

            <div className="space-y-5 border-l-2 border-gray-500">
                <div className="bg-[#f2f2f2] p-5 rounded-md hover:shadow-lg transition-all duration-200 ease-in-out ml-5 sm:ml-10 md:ml-16 lg:ml-20 space-y-1 relative">
                    <div className="absolute size-5 bg-crimson rounded-full top-0 -left-[31px] sm:-left-[51px] md:-left-[75px] lg:-left-[91px]"></div>
                    <h4 className="text-lg font-semibold text-crimson">2017</h4>
                    <h2 className="text-xl font-bold">Secondary School Certificate (SSC)</h2>
                    <p className="font-poppins">I completed my SSC from Jalalpur Union High School in the Science group.</p>
                </div>

                <div className="bg-[#f2f2f2] p-5 rounded-md hover:shadow-lg transition-all duration-200 ease-in-out ml-5 sm:ml-10 md:ml-16 lg:ml-20 space-y-1 relative">
                <div className="absolute size-5 bg-crimson rounded-full top-0 -left-[31px] sm:-left-[51px] md:-left-[75px] lg:-left-[91px]"></div>
                    <h4 className="text-lg font-semibold text-crimson">2019</h4>
                    <h2 className="text-xl font-bold">Higher Secondary Certificate (HSC)</h2>
                    <p className="font-poppins">In 2019, I successfully completed my HSC in the Science group from Katiadi College.</p>
                </div>

                <div className="bg-[#f2f2f2] p-5 rounded-md hover:shadow-lg transition-all duration-200 ease-in-out ml-5 sm:ml-10 md:ml-16 lg:ml-20 space-y-1 relative">
                <div className="absolute size-5 bg-crimson rounded-full top-0 -left-[31px] sm:-left-[51px] md:-left-[75px] lg:-left-[91px]"></div>
                    <h4 className="text-lg font-semibold text-crimson">2025 - Expected Year</h4>
                    <h2 className="text-xl font-bold">B.Sc Engineering in Computer Science and Engineering</h2>
                    <p className="font-poppins">I am currently a final-year student pursuing my B.Sc. (Honours) in Computer Science and Engineering (CSE) at Bangabandhu Sheikh Mujibur Rahman Science and Technology University, and I expect to graduate in 2025.</p>
                </div>
            </div>
        </section>
    );
};

export default Education;