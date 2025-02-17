import React, { useState } from 'react'
import logImage from '../assets/images/login.webp';
import { Link } from 'react-router';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    console.log({ [name]: val })
    setUser({ ...user, [name]: val })
  }

  const handleUserFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  }
  return (
    <section className='h-[700px] bg-blue-950 text-white'>
      <main>
        <div className='h-screen flex justify-around'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center'>
            <div className='flex flex-col gap-4 justify-center items-center m-auto w-[284px]'>
              <h1 className='text-2xl font-bold'>Please Login!</h1>
              <hr className="border-t-2 border-gray-400 w-full my-4" />
              <form onSubmit={handleUserFormSubmit} action="" className='flex flex-col gap-4 w-full'>
                <div className='flex items-center justify-between'>
                  <label htmlFor="email" className='font-bold'>Email</label>
                  <input type="email" name='email' id='email' value={user.email} onChange={handleInputChange} placeholder='Email' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <div className='flex items-center justify-between'>
                  <label htmlFor="password" className='font-bold'>Password</label>
                  <input type="password" name='password' id='password' value={user.password} onChange={handleInputChange} placeholder='Password' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <hr className="border-t-2 border-gray-400 w-full my-4" />
                <button type="submit" className='w-[80%] m-auto p-2 font-bold text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Login</button>
              </form>
              <p className="text-sm mt-4">
                Don't have an account?
                <Link to="/register" className="text-blue-400 ml-2 hover:underline">Register here</Link>
              </p>
            </div>
            <div className="image rounded-md flex items-center">
              <img src={logImage} alt="Registration Image" className='rounded-xl shadow-md shadow-blue-300 sm:w-[400px] sm:h-[400px] w-[250px] h-[250px] mt-5 sm:ml-5' />
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Login
