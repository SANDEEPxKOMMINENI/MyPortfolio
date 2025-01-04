import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}