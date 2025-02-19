import { createContext, useState } from "react";

// Create Context
const AuthContext = createContext();

// Create Provider
const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("Token") || null);

    const isLoggedIn = !!token;
    console.log("IsToken",isLoggedIn)

    // Store token in localStorage and state
    const storeTokenInLocalStorage = (serverToken) => {
        localStorage.setItem("Token", serverToken)
        setToken(serverToken)
    }


    //Logout Functionality
    const logout = () => {
        localStorage.removeItem("Token")
        setToken(null)
    }
    return(
        <AuthContext.Provider value={{storeTokenInLocalStorage,logout,isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};