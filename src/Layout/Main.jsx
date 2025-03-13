import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-16">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;