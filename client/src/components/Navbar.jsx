import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <header className='shadow-md text-xl h-15 flex justify-center items-center font-bold text-violet-800 bg-gray-300'>
      <div className="container flex justify-between">
        <div className="logo-brand text-2xl">
          <NavLink href="/">MyWeb</NavLink>
        </div>
        <nav className='flex gap-4'>
          <NavLink to="/" className='hover:text-green-900'>Home</NavLink>
          <NavLink to="/about" className='hover:text-green-900'>About</NavLink>
          <NavLink to="/service" className='hover:text-green-900'>Service</NavLink>
          <NavLink to="/login" className='hover:text-green-900'>Login</NavLink>
          <NavLink to="/register" className='hover:text-green-900'>Register</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
