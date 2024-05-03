import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" />
        <h1 className="text-lg font-bold">Ambika Cane Idustries</h1>
      </div>
      
      {/* Header links */}
      <ul className="flex gap-4">
        <li className="text-lg font-medium">Home</li>
        <li className="text-lg font-medium">About Us</li>
        <li className="text-lg font-medium">Products</li>
        <li className="text-lg font-medium">Gallery</li>
        <li className="text-lg font-medium">Blogs</li>
        {/* Add more header links as needed */}
      </ul>
      
      {/* Contact us Button */}
      <button className="bg-transparent hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-white rounded flex items-center">
        Contact Us
        
      </button>
    </header>
  );
}

export default Header;
