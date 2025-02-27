import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { ToastContainer, toast } from 'react-toastify';

const Users = () => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/users", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response.data)
      setUsers(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getAllUsers();
  }, [])

  // Edit User
  const handleEdit = (id) => {
    console.log(id)
  }

  // Delete User
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const response = await axios.delete(`http://localhost:5000/api/admin/users/delete/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      toast.success(response.data.message);
      const updatedUsers = users.filter(user => id !== user._id)
      setUsers(updatedUsers);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.warning("You cannot delete an admin user!");
      } else {
        console.error("Delete failed:", error);
        toast.error("Error deleting user");
      }
    }
  }
  return (
    <section className='p-6 w-full bg-green-900 text-white'>
      <div className='mb-4'>
        <h1 className='text-2xl font-semibold'>Users Details</h1>
      </div>
      <div className='rounded-lg overflow-hidden border'>
        <table className='w-full border-gray-300 rounded-lg shadow-lg'>
          <thead className='bg-gray-800'>
            <tr>
              <th className='p-3 border border-gray-300'>Name</th>
              <th className='p-3 border border-gray-300'>Email</th>
              <th className='p-3 border border-gray-300'>Phone</th>
              <th className='p-3 border border-gray-300'>Update</th>
              <th className='p-3 border border-gray-300'>Delete</th>
            </tr>
          </thead>
          <tbody className='"rounded-b-lg'>
            {users.map((currUser, index) => {
              return (
                <tr key={index} className='m-1 odd:bg-gray-100 even:bg-white hover:bg-gray-200 transition-all text-gray-800 font-semibold'>
                  <td className="p-3 border border-gray-300">{currUser.username}</td>
                  <td className="p-3 border border-gray-300">{currUser.email}</td>
                  <td className="p-3 border border-gray-300">{currUser.phone}</td>
                  <td className="p-3 border border-gray-300 text-center">
                    <Link to={`/admin/users/${currUser._id}/edit`} className='hover:bg-green-400 px-5 py-1 transition-all rounded-lg cursor-pointer'>Edit</Link>
                  </td>
                  <td className="p-3 border border-gray-300 text-center"><button onClick={() => handleDelete(currUser._id)} className='hover:bg-red-400 px-2 py-1 transition-all w-full rounded-lg cursor-pointer'>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {/* React Tostify Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </section>

  )
}

export default Users
