import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 flex items-start">
            <span className="text-blue-400 mr-2 mt-1">•</span>
            <span className="hover:text-white transition-colors duration-200">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}