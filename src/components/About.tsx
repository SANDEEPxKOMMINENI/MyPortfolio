import React from 'react';
import Education from './Education/Education';
import Certifications from './About/Certifications';
import Hobbies from './About/Hobbies';
import Testimonials from './About/Testimonials';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          About Me
        </h2>

        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-300">
            "I am passionate about harnessing the power of AI to solve real-world challenges and create innovative solutions that make a difference."
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Education />
          <Certifications />
        </div>

        {/* Hobbies Section */}
        <div className="mb-16">
          <Hobbies />
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <Testimonials />
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-blue-400">Let's Build Something Amazing Together</h3>
          <div className="flex justify-center gap-4">
            <a
              href="#resume"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}