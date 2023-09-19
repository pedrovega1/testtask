import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-lg font-semibold mb-6">Contact</h2>
            <p className="text-22 font-inter font-medium leading-[154.4%] uppercase">
              nfrealmusicmerch@gmail.com
            </p>
          </div>
          {/* Navigation */}
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-lg font-semibold mb-6">Navigation</h2>
            <ul className="text-18 font-inter font-medium leading-[154.4%] uppercase flex flex-col md:flex-row gap-3">
              <li className="mb-2 md:mb-0">
                <a href="#" className="hover:underline">Music</a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" className="hover:underline">Video</a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" className="hover:underline">Merch</a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" className="hover:underline">Tour</a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" className="hover:underline">FAQs</a>
              </li>
            </ul>
          </div>
          {/* Account */}
          <div className="md:col-span-1 text-center md:text-left">
            <h2 className="text-lg font-semibold mb-6">Account</h2>
           
          </div>
          {/* Cart */}
          <div className="md:col-span-1 text-center md:text-left">
            <h2 className="text-lg font-semibold mb-6">Cart</h2>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
