import { Link } from "react-router-dom";
import errorImage from "../assets/404.gif";

const ErrorPage = () => {
  return (
    <div className="bg-slate-300">
      <div className="flex flex-col items-center justify-center h-screen">
        <img className="rounded-md" src={errorImage} alt="Page Not Found" />
        <Link to="/">
          <button className="px-4 py-2 rounded-md text-white bg-crimson relative -top-14">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
