import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../context/authContext';

const UpdateSingleUser = () => {
  const params = useParams(); // ✅ To get user ID from URL params
  // console.log(params)
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()

  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  })

  // ✅ Fetch user data when the component loads
  useEffect(() => {
    getSingleUserData();
  }, [])


  const getSingleUserData = async (event) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/users/${params.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response)
      setData(response.data);
    } catch (error) {
      toast.error("Error fetching user details");
      console.error(error);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value })
  }

  const handleUpdateFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:5000/api/admin/users/update/${params.id}`,data,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log("Update Response:", response);
      toast.success(response.data.message);
      // ✅ Redirect after update
      setTimeout(() => navigate("/admin/users"), 2000);
    } catch (error) {
      toast.error("Error updating user");
      console.error(error);
    }
  };
  return (
    <section className='w-full bg-green-900 text-white'>
      <main>
        <div className='h-screen flex justify-around'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center'>
            <div className='flex flex-col gap-4 justify-center items-center m-auto'>
              <h1 className='text-2xl font-bold'>Update User Data!</h1>
              <hr className="border-t-2 border-gray-400 w-full my-4" />
              <form onSubmit={handleUpdateFormSubmit} action="" className='flex flex-col gap-4 w-full'>
                <div className='flex items-center justify-between'>
                  <label htmlFor="username" className='font-bold'>Name</label>
                  <input type="text" name='username' id='username' value={data.username} onChange={handleInputChange} placeholder='Enter Your Name' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <div className='flex items-center justify-between'>
                  <label htmlFor="email" className='font-bold'>Email</label>
                  <input type="email" name='email' id='email' value={data.email} onChange={handleInputChange} placeholder='Email' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <div className='flex items-center justify-between'>
                  <label htmlFor="phone" className='font-bold'>Contact</label>
                  <input type="phone" name='phone' id='phone' value={data.phone} onChange={handleInputChange} placeholder='Mobile number' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <hr className="border-t-2 border-gray-400 w-full my-4" />
                <button type="submit" className='w-[80%] m-auto p-2 font-bold text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Click to update</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      {/* React Tostify Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </section>
  )
}

export default UpdateSingleUser
