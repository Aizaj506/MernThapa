import React from 'react'
import home1 from "/src/assets/images/home1.webp"
import home2 from "/src/assets/images/home2.webp"
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()
  const btnConnectNow = () => {
    navigate('/contact')
  }
  const btnLearnMore = () => {
    navigate('/service')
  }
  return (
    <main className=' bg-blue-950 pb-10 pt-15'>
      <section>
        <div className="container flex flex-col justify-around items-center sm:flex-row">
          <div className='text-content w-[350px] sm:w-[450px] mt-10 ml-4 text-white font-bold'>
            <p className='text-sm'>We are the Developer</p>
            <h1 className='text-2xl my-3'>Welcome to MyWeb</h1>
            <p className='mb-3 '>
              Are you ready to take your business to the next level with
              cutting-age IT solutions? Look no further! At MyWeb,
              we specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className='flex justify-start gap-5'>
              <button onClick={btnConnectNow} className='p-2 font-bold text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Connect Now</button>
              <button onClick={btnLearnMore} className='p-2 font-bold text-white bg-transparent rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Learn More...</button>
            </div>
          </div>
          <div className='image w-[350px] h-auto mt-10 flex justify-center '>
            <img src={home1} alt="" className='rounded-xl shadow-md shadow-blue-300 ml-5' />
          </div>
        </div>
      </section>

      <section className='mt-10 p-10 w-full md:w-[70%] m-auto'>
        <div className='p-4 grid grid-cols-4 text-sm bg-gray-300 text-black font-bold rounded-lg shadow-md shadow-blue-300 hover:shadow-green-300'>
          <div className='border-r-2 pr-3 flex flex-col justify-center items-center'>
            <h2 className='text-xl'>50+</h2>
            <p className='text-sm'>Registered Companies</p>
          </div>
          <div className='ml-2 border-r-2 pr-3 flex flex-col justify-center items-center'>
            <h2 className='text-xl'>100,000+</h2>
            <p className='text-sm'>Happy Clients</p>
          </div>
          <div className='ml-5 border-r-2 pr-3 flex flex-col justify-center items-center'>
            <h2 className='text-xl'>500+</h2>
            <p className='text-sm'>Well Known Developers</p>
          </div>
          <div className='ml-2 flex flex-col justify-center items-center'>
            <h2 className='text-xl'>24/7</h2>
            <p className='text-sm'>Services</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col justify-around items-center sm:flex-row">
          <div className='image w-[350px] h-auto mt-10 flex justify-center '>
            <img src={home2} alt="" className='rounded-xl shadow-md shadow-blue-300 ml-5' />
          </div>
          <div className='text-content w-[350px] sm:w-[450px] mt-10 ml-4 text-white font-bold'>
            <p className='text-sm'>We are here to help you</p>
            <h1 className='text-2xl my-3'>Welcome to MyWeb</h1>
            <p className='mb-3 '>
              Are you ready to take your business to the next level with
              cutting-age IT solutions? Look no further! At MyWeb,
              we specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className='flex justify-start gap-5'>
              <button onClick={btnConnectNow} className='p-2 font-bold text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Connect Now</button>
              <button onClick={btnLearnMore} className='p-2 font-bold text-white bg-transparent rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Learn More...</button>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Home
