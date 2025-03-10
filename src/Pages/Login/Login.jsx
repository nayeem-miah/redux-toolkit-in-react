import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            console.log("User logged in successfully", user);
        } catch (error) {
            setError(error.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white text-black p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
                </form>
                <Link to="/sign-up" className="text-blue-500 mt-4">Don't have an account? Sign up</Link>
            </div>
        </div>
    );
};

export default Login;
