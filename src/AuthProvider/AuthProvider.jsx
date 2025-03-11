import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/auth/protected", { withCredentials: true })
            .then((res => setUser(res.data.user)))
            .catch(() => setUser(null))
    }, [])

    const login = async (email, password) => {
        const res = await axios.post('http://localhost:5000/api/auth/login', { email, password }, { withCredentials: true })
        setUser(res.data.user)
    }
    const logout = async () => {
        const res = axios.post("http://localhost:5000/api/auth/logout", { withCredentials: true })
        console.log(res);
        setUser(null)
    }



    console.log(user);
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
