import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="mb-44">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;