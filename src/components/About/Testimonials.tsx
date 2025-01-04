import React from 'react';
import { MessageSquare } from 'lucide-react';
import { testimonials } from './data';

export default function Testimonials() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        Testimonials
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
            <blockquote className="text-gray-300 italic mb-4">"{testimonial.quote}"</blockquote>
            <div className="text-sm">
              <p className="text-blue-400 font-medium">{testimonial.author}</p>
              <p className="text-gray-400">{testimonial.title}</p>
              <p className="text-gray-500">{testimonial.relation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}