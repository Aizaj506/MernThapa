import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 w-full shadow-md text-xl h-15 flex justify-center items-center font-bold text-gray-800 dark:text-gray-400 bg-gray-300'>
      <div className="container flex justify-between">
        <div className="logo-brand text-2xl">
          <NavLink href="/">MyWeb</NavLink>
        </div>
        <nav className='flex gap-4'>
          <NavLink to="/" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>Home</NavLink>
          <NavLink to="/about" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duratin-300 after:ease-in-out hover:after:w-full'>About</NavLink>
          <NavLink to="/service" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>Service</NavLink>
          <NavLink to="/login" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>Login</NavLink>
          <NavLink to="/register" className='relative me-4 md:me-6 after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full'>Register</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
