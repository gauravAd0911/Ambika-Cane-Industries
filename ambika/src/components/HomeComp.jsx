import React from 'react'

function HomeComp() {
  return (
    
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Business</h1>
        <p className="text-lg mb-8">We are a leading manufacturer of high-quality cane products, dedicated to providing elegant and sustainable solutions for your home and garden.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Image 1 */}
          <div className="flex justify-center">
            <img src="/path/to/image1.jpg" alt="Image 1" className="w-full rounded-lg shadow-lg" />
          </div>
          {/* Image 2 */}
          <div className="flex justify-center">
            <img src="/path/to/image2.jpg" alt="Image 2" className="w-full rounded-lg shadow-lg" />
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
    
  )
}

export default HomeComp
