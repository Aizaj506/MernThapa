import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create Context
const AuthContext = createContext();

// Create Provider
const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("Token") || null);
    const [user, setUser] = useState('')
    const [services, setServices] = useState([])
    const isLoggedIn = !!token;
    console.log("IsToken",isLoggedIn)

    // Store token in localStorage and state
    const storeTokenInLocalStorage = (serverToken) => {
        setToken(serverToken)
        localStorage.setItem("Token", serverToken)
    }

    //Logout Functionality
    const logout = () => {
        localStorage.removeItem("Token")
        setToken(null)
        setUser('')
    }

    //JWT AUTHENTICATION - To get the currently Loggedin user data.
    const userAuthentication = async () => {
        if (!token) return; // Prevent API call if token is missing
        try {
            const response  = await axios.get('http://localhost:5000/api/users/userData',{
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
            // console.log("User Data:", response.data);
            if(response.status===200){
                setUser(response.data.userData);
            }
        } catch (error) {
            console.error("Error Fetching User Data : ", error)
        }
    }

    //Function to get the services data from the backend
    const getServices = async (req, res) => {
        try {
            const response = await axios.get('http://localhost:5000/api/data/service');
            console.log("Services Data: ",response.data.services)
            if(response.status === 200){
                setServices(response.data.services)
            }
        } catch (error) {
            console.error("Error Fetching Services Data : ", error)
        }
    }

    useEffect(()=>{
        getServices();
        userAuthentication();
    },[])
    
    return(
        <AuthContext.Provider value={{storeTokenInLocalStorage,logout,isLoggedIn,user,services,token}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};