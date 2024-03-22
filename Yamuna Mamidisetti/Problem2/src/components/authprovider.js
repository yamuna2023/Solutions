import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("Token") || "");

    const loginAction = async () => {
        setToken(localStorage.getItem("Token"))
    }

    return (
        <AuthContext.Provider value={{ token,loginAction }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}