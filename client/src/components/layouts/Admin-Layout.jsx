import React from 'react'
import { NavLink, Outlet } from 'react-router'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";


const AdminLayout = () => {
  return (
    <header className=' h-full flex gap-5 bg-blue-950 text-white'>
      <div className='w-[20%]'>
        <nav>
          <ul className='flex flex-col text-2xl p-3 gap-5 '>
            <li><NavLink to="/admin" className='flex gap-1 items-center hover:text-gray-200 transition-all'><IoHome />Home</NavLink></li>
            <li><NavLink to="/admin/users" className='flex gap-1 items-center hover:text-gray-200 transition-all'><FaUser />Users</NavLink></li>
            <li><NavLink to="/admin/contacts" className='flex gap-1 items-center hover:text-gray-200 transition-all'><FaMessage />Contacts</NavLink></li>
            <li><NavLink to="/admin/services" className='flex gap-1 items-center hover:text-gray-200 transition-all'><MdDesignServices />Services</NavLink></li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </header>
  )
}

export default AdminLayout
