import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Address */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">123 Main Street, City</p>
          <p className="text-sm">Country, ZIP Code</p>
          <p className="text-sm">Phone: 123-456-7890</p>
          <p className="text-sm">Email: info@example.com</p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center md:justify-end">
          <a href="#" className="text-white mr-4">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8zm14 0v4c0 .992-.01 1.98-.03 2.973-.019.937-.047 1.918-.12 2.854-.075.936-.204 1.825-.392 2.685-.188.86-.437 1.693-.776 2.483-.342.794-.771 1.49-1.276 2.123-.506.635-1.078 1.215-1.707 1.74-.63.526-1.323.994-2.074 1.4-.75.406-1.554.76-2.396 1.027-.841.266-1.706.444-2.574.525-.87.08-1.753.065-2.631-.024-.88-.09-1.76-.262-2.622-.54-.862-.279-1.6-.693-2.266-1.247-.666-.553-1.156-1.228-1.47-1.978-.316-.75-.472-1.61-.546-2.556-.075-.947-.057-1.95.095-2.917.15-.967.4-1.893.807-2.769.408-.878.99-1.706 1.762-2.417.773-.71 1.727-1.266 2.77-1.637.432-.145.886-.273 1.343-.374.457-.1.925-.18 1.395-.236.47-.057.947-.09 1.425-.078.479-.012.957.02 1.435.07.479.058.957.135 1.433.236.476.1.946.222 1.405.374.462.153.916.33 1.36.525.447.194.88.406 1.3.647.416.243.82.51 1.21.8.39.293.77.604 1.123.944.357.341.68.717.95 1.127.274.415.497.86.672 1.326.175.466.288.952.334 1.448.046.496.032.998-.023 1.498-.054.5-.14 1.003-.267 1.5-.125.498-.283.99-.49 1.472-.206.48-.462.947-.772 1.393-.31.445-.673.866-1.075 1.253-.398.387-.837.748-1.31 1.06-.473.31-.982.57-1.516.782-.532.213-1.095.378-1.665.493-.57.116-1.151.181-1.737.183h-.002c-.586-.002-1.168-.067-1.74-.183-.57-.115-1.133-.28-1.665-.493-.532-.213-1.043-.472-1.516-.782-.473-.31-.912-.673-1.31-1.06-.398-.387-.76-.808-1.075-1.253-.31-.446-.567-.913-.772-1.393-.205-.482-.363-.975-.49-1.472-.126-.497-.22-1-.267-1.5-.054-.496-.069-1-.023-1.498.046-.496.16-.982.334-1.448.175-.466.398-.91.672-1.326.274-.415.597-.792.95-1.127.352-.34.733-.65 1.123-.944.39-.29.784-.557 1.2-.8.417-.24.85-.453 1.3-.647.457-.193.9-.372 1.36-.525.47-.062.946-.113 1.433-.236.478-.113.957-.184 1.435-.236.478-.052.946-.098 1.425-.07.47.056.938.126 1.395.236.457.1.91.229 1.343.374.527.37 1.003.927 1.767 1.637.764.71 1.354 1.539 1.762 2.417.407.876.657 1.802.807 2.769.15.967.17 1.97.095 2.917-.075.946-.23 1.806-.546 2.556-.316.75-.804 1.425-1.47 1.978-.665.554-1.403.968-2.266 1.247-.862.278-1.741.45-2.622.54-.882.09-1.754.104-2.631.024-.87-.081-1.733-.259-2.574-.525-.841-.267-1.645-.62-2.396-1.027-.752-.506-1.444-1.075-1.95-1.7-.506-.634-.935-1.33-1.276-2.123-.341-.79-.58-1.623-.776-2.483-.188-.86-.317-1.75-.392-2.685-.073-.936-.101-1.917-.12-2.854C6.01 16.98 6 15.992 6 15v-4" />
            </svg>
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
      
      {/* Additional Content */}
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Ambika Cane Industries. All rights reserved.</p>
        {/* Add more additional content here */}
      </div>
    </footer>
  );
}

export default Footer;