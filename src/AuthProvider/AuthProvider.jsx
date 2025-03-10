import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/user", { withCredentials: true })
            .then((res => setUser(res.data.userId)))
            .catch(() => setUser(null))
    }, [])

    const login = async (email, password) => {
        const res = await axios.post('http://localhost:5000/api/login', { email, password }, { withCredentials: true })
        setUser(res.data.userId)
    }
    const logout = async () => {
        const res = axios.post("http://localhost:5000/api/logout", { withCredentials: true })
        setUser(null)

    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
