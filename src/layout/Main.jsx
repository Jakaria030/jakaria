import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <section className="flex-grow">
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Main;