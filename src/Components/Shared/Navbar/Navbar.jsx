import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { API } from "../../../api/Api";
import toast from "react-hot-toast";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLogout = async () => {
        // await API.post("/logout");
        toast.success("Logged out successfully!");
    };

    const navLinks = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-black font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            Home
        </NavLink>
        <NavLink to={'/eid-offer'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-black font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            Special eid offer
        </NavLink>
        <NavLink to={'/about'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-black font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            About
        </NavLink>
        <NavLink to={'/contact'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-black font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            Contact
        </NavLink>
        <NavLink to={'/login'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-black font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            Login
        </NavLink>


    </>

    return (
        <nav className="fixed z-10 w-full  bg-blue-600 shadow">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to={'/'} className="text-xl font-bold text-white lg:text-2xl hover:text-gray-300">
                            <span className="text-amber-400">EID</span> FESTIVAL
                        </Link>


                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-white hover:text-gray-300 focus:outline-none"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-blue-600 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
                            }`}
                    >
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            {navLinks}
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                            <button
                                className="hidden mx-4 text-white transition-colors duration-300 transform lg:block hover:text-gray-300 focus:text-gray-300 focus:outline-none"
                                aria-label="show notifications"
                            >

                            </button>

                            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <button onClick={handleLogout} className="text-red-500 btn p-4 mx-2 rounded">Logout</button>
                                <div className="w-8 h-8 overflow-hidden border-2 border-white rounded-full">

                                    <img
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        className="object-cover w-full h-full"
                                        alt="avatar"
                                    />
                                </div>

                                <h3 className="mx-2 text-white lg:hidden">Khatab wedaa</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
