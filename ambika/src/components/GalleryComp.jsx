import React from 'react';
import p1 from './../assets/images/p1.png';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div className="caveat-custom bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold text-white mb-12 text-center">Gallery</h2>
        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Individual image items */}
          <div className="flex flex-col rounded-lg overflow-hidden border border-orange-300">
            <img src={p1} alt="Gallery img" className="w-full h-auto" />
          </div>
          <div className="flex flex-col rounded-lg overflow-hidden border border-orange-300">
            <img src={p1} alt="Gallery img" className="w-full h-auto" />
          </div>
          <div className="flex flex-col rounded-lg overflow-hidden border border-orange-300">
            <img src={p1} alt="Gallery img" className="w-full h-auto" />
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
      {/* See more link */}
      <div className="flex justify-center mt-8">
        <Link to="https://drive.google.com/drive/folders/183LNvXepgxCERM5sFQHw49NGjJtotPwS" target='_' className="text-orange-500 text-3xl underline">
          See more
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
