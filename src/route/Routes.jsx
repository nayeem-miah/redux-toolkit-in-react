import { Route, Routes } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminHome";
import About from "../Pages/About/About";
import EidOffer from "../Pages/EidOffer/EidOffer";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PRoductDetails from "../Components/EidOffer/ProductDetaisl";

const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="eid-offer" element={<EidOffer />} />
                <Route path="product/:id" element={<PRoductDetails />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="login" element={<Login />} />

                {/* dashboard */}
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path="admin-home" element={<AdminHome />} />
                </Route>
            </Route>

        </Routes>
    );
};

export default RouterApp;