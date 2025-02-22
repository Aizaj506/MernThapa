import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <header className='shadow-md text-xl h-15 p-8 flex justify-center items-center font-bold text-gray-800 dark:text-gray-400 bg-gray-300 '>
      <div className="container flex justify-between items-center">
        <div className="logo-brand text-2xl">
          <NavLink href="/">MyWeb</NavLink>
        </div>
        <nav className='flex gap-4'>
          <NavLink to="/" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>Home</NavLink>
          <NavLink to="/about" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duratin-300 after:ease-in-out hover:after:w-full'>About</NavLink>
          <NavLink to="/service" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>Service</NavLink>
          {
            isLoggedIn ? (
              <NavLink to="/logout" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>Logout</NavLink>
            ) : (
              <>
                <NavLink to="/register" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>Register</NavLink>
                <NavLink to="/login" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>Login</NavLink>
              </>
            )
          }
        </nav>
      </div>
    </header>
  )
}

export default Navbar
