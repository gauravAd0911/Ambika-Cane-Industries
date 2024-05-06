import React from 'react';
import bg from './../assets/images/bg.jpg';

function HomeComp() {
  return (
    <div
      className="min-h-screen caveat-custom relative bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center px-6 py-12"
      style={{
        backgroundImage: `url(${bg})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center', // Center the image horizontally and vertically
        transition: 'background-image 0.5s ease',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to Our Business</h1>
        <p className="text-3xl mb-8">We are a leading manufacturer of high-quality cane products, dedicated to providing elegant and sustainable solutions for your home and garden.</p>
      </div>
    </div>
  );
}

export default HomeComp;
