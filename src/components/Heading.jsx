
const Heading = ({heading, subHeading}) => {
    return (
        <div className="max-w-xs mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">{heading}</h2>
            <p className="text-lg md:text-xl font-semibold text-crimson title">--- {subHeading} ---</p>
        </div>
    );
}
export default Heading;     