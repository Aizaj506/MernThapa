import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import contactImage from '../assets/images/contactImage.webp';
import { AuthContext } from '../context/authContext';

const Contact = () => {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState(true)
  // console.log(userData)
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  })

  // If User is Logged In, Pre-fill Contact Details
  useEffect(() => {
    if (userData && user) {
      setContact({
        name: user.username,
        email: user.email,
        message: ""
      });
      setUserData(false);
    }
  }, [user, userData]);
  
  const handleInputChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    // console.log({ [name]: val })
    setContact({ ...contact, [name]: val })
  }

  const handleUserContactFormSubmit = async (event) => {
    event.preventDefault();
    console.log(contact)
    try {
      const response = await axios.post( "http://localhost:5000/api/form/contact", contact);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
    }
  }
  return (
    <section className='h-[700px] bg-blue-950 text-white mt-10'>
      <main>
        <div className='h-screen flex justify-around'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center'>
            <div className='flex flex-col gap-4 justify-center items-center m-auto w-[284px]'>
              <h1 className='text-2xl font-bold'>Contact Us!</h1>
              <hr className="border-t-2 border-gray-400 w-full my-4" />
              <form onSubmit={handleUserContactFormSubmit} className='flex flex-col gap-4 w-full'>
                <div className='flex items-center justify-between'>
                  <label htmlFor="name" className='font-bold'>Name</label>
                  <input type="text" name='name' id='name' value={contact.name} onChange={handleInputChange} placeholder='Your name' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <div className='flex items-center justify-between'>
                  <label htmlFor="email" className='font-bold'>Email</label>
                  <input type="email" name='email' id='email' value={contact.email} onChange={handleInputChange} placeholder='Email' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="message" className='font-bold'>Enter Your Query/Message</label>
                  <textarea name="message" id="message" value={contact.message} onChange={handleInputChange} placeholder='Type here...' className='p-1 outline-none text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:shadow-green-500' ></textarea>
                </div>
                <hr className="border-t-2 border-gray-400 w-full my-4" />
                <button type="submit" className='w-[80%] m-auto p-2 font-bold text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Submit</button>
              </form>
            </div>
            <div className="image rounded-md flex items-center pr-2">
              <img src={contactImage} alt="Registration Image" className='rounded-xl shadow-md shadow-blue-300 sm:w-[400px] sm:h-[400px] w-[250px] h-auto mt-5 sm:ml-5 ' />
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Contact
