import { createContext } from "react";

// Create Context
const AuthContext = createContext();

// Create Provider
const AuthProvider = ({children}) => {
    const storeTokenInLocalStorage = (serverToken) => {
        localStorage.setItem("Token", serverToken)
    }
    return(
        <AuthContext.Provider value={storeTokenInLocalStorage}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};