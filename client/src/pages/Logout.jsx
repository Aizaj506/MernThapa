import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/authContext'

const Logout = () => {
    const {logout} = useContext(AuthContext);
    useEffect(()=>{
        logout();
    },[logout])

  return <Navigate to='/login'/>
}

export default Logout
