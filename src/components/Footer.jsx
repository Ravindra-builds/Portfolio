import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Ravindra Yadav. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center text-sm text-gray-400">
          <span>Made with</span>
          <Heart size={16} className="mx-1 text-red-500 fill-current animate-pulse" />
          <span>using React & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
