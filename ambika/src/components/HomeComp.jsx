import React from 'react'
import fLogo from './../assets/images/fLogo.jpeg'
function HomeComp() {
  const a=()=>{<div className="">
          {/* Image 1 */}
          <div className="flex justify-center">
            <img src={fLogo} alt="Image 1" className="w-full rounded-lg shadow-lg " />
          </div>
          {/* Image 2 */}
          <div className="flex justify-center">
            <img src="/path/to/image2.jpg" alt="Image 2" className="w-full rounded-lg shadow-lg" />
          </div>
          {/* Add more images as needed */}
        </div>}
  return (
    
      <div className="min-h-screen  caveat-custom bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center px-6 py-12">
      <div className=" text-center ">
        <div className='justify-center '>
          <h1 className="text-6xl font-bold mb-4">Welcome to Our Business</h1>
          <p className="text-3xl mb-8">We are a leading manufacturer of high-quality cane products, dedicated to providing elegant and sustainable solutions for your home and garden.</p>
        </div>
        {/* a */}
      </div>
    </div>
    
  )
}

export default HomeComp
