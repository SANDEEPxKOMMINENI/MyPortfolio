import React from 'react';

export default function ProfileImage() {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse"></div>
      <img
        src="/profile.jpg" // You'll need to add your image to the public folder
        alt="Sandeep Kommineni"
        className="rounded-full w-full h-full object-cover border-4 border-blue-400/50 shadow-xl"
      />
      <div className="absolute inset-0 rounded-full ring-2 ring-blue-400/50 ring-offset-2 ring-offset-transparent"></div>
    </div>
  );
}