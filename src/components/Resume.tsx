import React from 'react';
import { FileDown, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Resume
        </h2>
        
        <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-blue-400">Download Resume</h3>
              <span className="text-gray-400 text-sm">PDF Format</span>
            </div>
            
            <p className="text-gray-300">
              Get a detailed overview of my skills, experience, and qualifications in a downloadable format.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300 group"
                download="Sandeep_Kommineni_Resume.pdf"
              >
                <FileDown className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}