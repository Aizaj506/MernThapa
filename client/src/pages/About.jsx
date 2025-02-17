import React from 'react'
import { useNavigate } from 'react-router'
import aboutImage from "/src/assets/images/aboutImage.webp"
import aboutImage2 from "/src/assets/images/aboutImage2.webp"


const About = () => {
  const navigate = useNavigate()
  const btnConnectNow = () => {
    navigate('/contact')
  }
  const btnLearnMore = () => {
    navigate('/service')
  }
  return (
    <main className=' bg-blue-950 mt-14'>
      <section>
        <div className="container flex flex-col justify-around items-start sm:flex-row">
          <div className='text-content w-[350px] sm:w-[550px] mt-10 ml-4 text-white font-bold'>
            <p className='text-sm'>Welcome Aizaj Samani</p>
            <h1 className='text-2xl my-3'>Welcome to MyWeb</h1>
            <p className='mb-3 '>
              Welcome to our world of innovation and technology! We are a passionate team of developers dedicated to crafting high-quality web solutions that drive businesses forward. With expertise in modern technologies like React.js, Node.js, and JavaScript, we build user-friendly, scalable, and performance-driven applications.
            </p>
            <p className='mb-3 '>
              Our journey began with a vision to simplify digital experiences. Over the years, we have worked with various clients, helping them bring their ideas to life through cutting-edge development. Whether it's a startup or an established business, we strive to deliver solutions that are both creative and efficient.
            </p>
            <p className='mb-3 '>
              At the heart of our work lies a deep commitment to code quality, performance, and user experience. We believe that great software is not just about functionality but also about intuitive design and seamless interactions. Our goal is to build applications that not only work flawlessly but also enhance user engagement.
            </p>
            <p className='mb-3 '>
              Collaboration is our strength. We work closely with our clients to understand their unique requirements and transform them into reality. By combining our technical skills with a problem-solving mindset, we ensure that every project is aligned with business goals and industry standards.
            </p>
            <p className='mb-3 '>
              As technology continues to evolve, so do we. We stay up to date with the latest trends in web development, adopting best practices and modern frameworks to deliver future-ready solutions. Whether it’s full-stack development, API integration, or cloud deployment, we have the expertise to handle it all.
            </p>
            <p className="mb-3">
              Join us on this journey of digital transformation! Let’s create something exceptional together. 🚀
            </p>
            <div className='flex justify-start gap-5'>
              <button onClick={btnConnectNow} className='p-2 font-bold text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Connect Now</button>
              <button onClick={btnLearnMore} className='p-2 font-bold text-white bg-transparent rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Learn More...</button>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='image w-[350px] h-auto mt-10 flex justify-center '>
              <img src={aboutImage} alt="" className='rounded-xl shadow-md shadow-blue-300 ml-5' />
            </div>
            <div className='image w-[350px] h-auto mt-10 flex justify-center '>
              <img src={aboutImage2} alt="" className='rounded-xl shadow-md shadow-blue-300 ml-5' />
            </div>
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
            <h2 className='text-xl'>650k+</h2>
            <p className='text-sm'>YouTube Subscribers</p>
          </div>
          <div className='ml-5 border-r-2 pr-3 flex flex-col justify-center items-center'>
            <h2 className='text-xl'>200+</h2>
            <p className='text-sm'>Project Done</p>
          </div>
          <div className='ml-2 flex flex-col justify-center items-center'>
            <h2 className='text-xl'>24/7</h2>
            <p className='text-sm'>Services</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
