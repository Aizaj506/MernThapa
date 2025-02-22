import React, { useContext } from 'react'
import webdevelopment from "/src/assets/imgService/webdevelopment.webp"
import { AuthContext } from '../context/authContext'


const Service = () => {
  const { services } = useContext(AuthContext);
  return (
    <section>
      <div>
        <h1>Services</h1>
      </div>
      <div className='grid grid-cols-3 gap-3 p-5'>
        {
          services.map((currService, index) => {
            const {provider,price,service,description} = currService;
            return (
              <div className='border'>
                <div className='image'>
                  <img src={webdevelopment} alt="Web Development Services" width={400} className='' />
                </div>
                <div>
                  <div className='flex justify-between p-2 mx-4'>
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Service
