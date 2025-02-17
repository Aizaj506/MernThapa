import React from 'react'
import errorImage from '../assets/images/404Image.webp';
import { useNavigate } from 'react-router';


const ErrorPage = () => {
    const navigate = useNavigate();

    const returnToHome = () => {
        navigate('/')
    }

    const reportIssue = () => {
        navigate('/contact')
    }
    return (
        <section className='h-screen bg-blue-950'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='  '>
                    <img src={errorImage} alt="404 Error Image" className='rounded-xl shadow-md shadow-blue-300 sm:w-[400px] sm:h-[400px] w-[250px] h-auto mt-5 sm:ml-5' />
                </div>
                <div className='text-white font-bold flex items-center justify-center flex-col w-[60%] text-center'>
                    <h2>Sorry!, Page Not Found</h2>
                    <p>
                        Oops! It seems like the page you're trying to acces dosen't exist.
                        If you belive there's an issue, feel free to report it, and we'll look into it.
                    </p>
                </div>
                <div className='text-white font-bold flex justify-center gap-10 w-[60%]'>
                    <button onClick={returnToHome} className='p-2 font-bold text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Return Home</button>
                    <button onClick={reportIssue} className='p-2 font-bold text-black bg-gray-300 rounded-md shadow-md shadow-blue-300 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer'>Report Problem</button>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage
