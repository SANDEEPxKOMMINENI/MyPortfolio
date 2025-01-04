import React from 'react';
import { Heart } from 'lucide-react';
import { hobbies } from './data';

export default function Hobbies() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
        <Heart className="w-5 h-5" />
        Hobbies & Interests
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {hobbies.map((hobby, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-all duration-300">
            <div className="text-2xl mb-2">{hobby.icon}</div>
            <h4 className="font-medium text-white">{hobby.name}</h4>
            <p className="text-gray-400 text-sm mt-1">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}