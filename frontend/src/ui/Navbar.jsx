//Navbar.jsx
import React from 'react';
import { Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center p-4 fixed top-0 left-0 bg-[#0f141e]/80 backdrop-blur-sm border-b border-gray-700 rounded-b-xl z-50'>
      <div className="flex items-center gap-2">
        <Globe className='text-blue-900'/> 
        <span className="text-white font-semibold text-lg">CollabSuite</span>
      </div>
      <div className='flex space-x-6'>
        <span className='text-blue-500 hover:text-blue-300 m-2 cursor-pointer'>Features</span>
        <span className='text-blue-500 hover:text-blue-300 m-2 cursor-pointer'>Testimonials</span>
        <span className='text-blue-500 hover:text-blue-300 m-2 cursor-pointer'>FAQs</span>
      </div>
      <div className="justify-end">
        <button className='ml-3 mr-3 rounded-xl border border-gray-700 px-5 py-2 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer transition-colors duration-200 hover:border-[#4A90E2]'>Login</button>
        <button className='rounded-xl border border-gray-700 px-5 py-2 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer transition-colors duration-200 hover:border-[#4A90E2]'>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
