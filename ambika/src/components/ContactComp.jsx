import React from 'react'

function Contact() {
  return (
    <div className=" caveat-custom bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: Contact form */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Send us a message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white font-medium mb-1">Your Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-medium mb-1">Your Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white font-medium mb-1">Your Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600">Send Message</button>
            </form>
          </div>
          {/* Right column: Contact information */}
          <div className='ml-8 pt-10 border border-orange-400  '>
            <div className='px-8 pt-5'>

            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            <p className="mb-2 text-white"><span className="font-semibold">Address:</span> Opp. Collem-Shivgoan Panchayat Office, Kulem, Goa, India </p>
            <p className="mb-2 text-white"><span className="font-semibold">Phone:</span> +91 9113625539</p>
            <p className="mb-2 text-white"><span className="font-semibold">Email:</span> info@ambikaCane.com</p>
            {/* Add more contact information as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
