import React, { useContext, useState } from 'react'
import axios from 'axios'
import regImage from '../assets/images/registration.webp';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/authContext';

const Register = () => {

  const navigate = useNavigate()
  const storeTokenInLocalStorage = useContext(AuthContext)
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  })

  const handleInputChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    // console.log({ [name]: val })
    setUser({ ...user, [name]: val })
  }

  const handleUserFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Response Data:", response);

      if(response.status === 201){
        console.log("Response From Server : ", response.data);
        storeTokenInLocalStorage(response.data.token)
        setUser({username: "", email: "", phone: "", password: ""})
        navigate('/login')
      }
    } catch (error) {
      console.error("Registered Error", error.response?.data || error.message);
    }
  };
  return (
    <section className='h-[700px] bg-blue-950 text-white'>
      <main>
        <div className='h-screen flex justify-around'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center'>
            <div className="image rounded-md flex items-center">
              <img src={regImage} alt="Registration Image" className='rounded-xl shadow-md shadow-blue-300 sm:w-[400px] sm:h-[400px] w-[250px] h-[250px] mt-5 sm:ml-5' />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center m-auto'>
              <h1 className='text-2xl font-bold'>Please Register Your Self!</h1>
              <hr className="border-t-2 border-gray-400 w-full my-4" />
              <form onSubmit={handleUserFormSubmit} action="" className='flex flex-col gap-4 w-full'>
                <div className='flex items-center justify-between'>
                  <label htmlFor="username" className='font-bold'>Name</label>
                  <input type="text" name='username' id='username' value={user.username} onChange={handleInputChange} placeholder='Enter Your Name' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <div className='flex items-center justify-between'>
                  <label htmlFor="email" className='font-bold'>Email</label>
                  <input type="email" name='email' id='email' value={user.email} onChange={handleInputChange} placeholder='Email' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <div className='flex items-center justify-between'>
                  <label htmlFor="phone" className='font-bold'>Contact</label>
                  <input type="phone" name='phone' id='phone' value={user.phone} onChange={handleInputChange} placeholder='Mobile number' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <div className='flex items-center justify-between'>
                  <label htmlFor="password" className='font-bold'>Password</label>
                  <input type="password" name='password' id='password' value={user.password} onChange={handleInputChange} placeholder='Password' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <hr className="border-t-2 border-gray-400 w-full my-4" />
                <button type="submit" className='w-[80%] m-auto p-2 font-bold text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Register Now</button>
              </form>
              <p className="text-sm mt-4">
                Already have an account?
                <Link to="/login" className="text-blue-400 ml-2 hover:underline">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Register
