import React from 'react';

export default function Logo() {
  return (
    <a href="#home" className="group flex items-center">
      <div className="relative">
        <span className="text-2xl font-bold font-serif">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
            Sandeep
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
            Kommineni
          </span>
        </span>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
      </div>
    </a>
  );
}