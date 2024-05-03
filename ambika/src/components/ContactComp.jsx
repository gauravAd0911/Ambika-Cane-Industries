import React from 'react'

function Contact() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: Contact form */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Send us a message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Your Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Your Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600">Send Message</button>
            </form>
          </div>
          {/* Right column: Contact information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
            <p className="mb-2"><span className="font-semibold">Address:</span> 123 Street, City, Country</p>
            <p className="mb-2"><span className="font-semibold">Phone:</span> +1234567890</p>
            <p className="mb-2"><span className="font-semibold">Email:</span> info@example.com</p>
            {/* Add more contact information as needed */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
