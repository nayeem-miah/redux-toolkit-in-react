import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { API } from "../../../api/Api";
import toast from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import avatarImg from '../../../assets/placeholder.jpg'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const handleLogout = async () => {
        await API.post("/api/auth/logout");
        toast.success("Logged out successfully!");
        navigate('/')
    };

    const navLinks = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-yellow-500 font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            Home
        </NavLink>
        <NavLink to={'/eid-offer'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-yellow-500 font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            Special eid offer
        </NavLink>
        {/* <NavLink to={'/about'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-yellow-500 font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            About
        </NavLink> */}
        <NavLink to={'/contact'} className={({ isActive }) => isActive ? "px-3 py-2 mx-3 mt-2 text-yellow-500 font-bold transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500" : "px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-blue-500"}>
            Contact
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



                        {/* Dropdown Menu */}
                        <div className='relative'>
                            <div className='flex flex-row items-center gap-3'>
                                {/* Become A Host btn */}
                                <div className='hidden md:block'>
                                    {!user && (
                                        <button
                                            disabled={!user}
                                            className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
                                        >
                                            Host your home
                                        </button>
                                    )}
                                </div>
                                {/* Dropdown btn */}
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                                >
                                    <AiOutlineMenu />
                                    <div className='hidden md:block'>
                                        {/* Avatar */}
                                        <img
                                            className='rounded-full'
                                            referrerPolicy='no-referrer'
                                            src={avatarImg}
                                            alt='profile'
                                            height='30'
                                            width='30'
                                        />
                                    </div>

                                </div>
                            </div>
                            {isOpen && (
                                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                                    <div className='flex flex-col cursor-pointer'>
                                        <Link
                                            to='/'
                                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Home
                                        </Link>
                                        <>
                                            {
                                                user ? (
                                                    <>
                                                        <Link
                                                            to='/my-added-products'
                                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                        >
                                                            my added products
                                                        </Link>
                                                        <button onClick={handleLogout} className=" px-4 py-3 hover:bg-neutral-100 transition font-semibold text-red-500">
                                                            logout
                                                        </button>
                                                    </>
                                                ) :
                                                    <>
                                                        <Link
                                                            to='/login'
                                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                        >
                                                            sign in
                                                        </Link>
                                                        <Link
                                                            to='/sign-up'
                                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                        >
                                                            Sign Up
                                                        </Link>
                                                    </>
                                            }
                                        </>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
