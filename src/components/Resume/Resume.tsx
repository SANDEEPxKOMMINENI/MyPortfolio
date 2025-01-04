import React from 'react';
import { FileDown, ExternalLink, Mail, Linkedin } from 'lucide-react';
import ResumeButton from './ResumeButton';
import { trackResumeInteraction } from './ResumeAnalytics';

export default function Resume() {
  const handleDownload = () => {
    trackResumeInteraction('download');
  };

  const handleView = () => {
    trackResumeInteraction('view');
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Resume
        </h2>
        
        <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700 shadow-xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-blue-400">Professional Resume</h3>
              <span className="text-gray-400 text-sm">PDF Format</span>
            </div>
            
            <p className="text-gray-300">
              Get a comprehensive overview of my professional experience, technical skills, and achievements. 
              Feel free to download or view my resume directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ResumeButton
                href="/resume.pdf"
                icon={FileDown}
                label="Download Resume"
                variant="primary"
                download="Sandeep_Kommineni_Resume.pdf"
                onClick={handleDownload}
              />
              
              <ResumeButton
                href="/resume.pdf"
                icon={ExternalLink}
                label="View Resume"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleView}
              />
            </div>

            <div className="pt-6 mt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-4">Prefer to connect directly?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ResumeButton
                  href="mailto:ksandeep2003@gmail.com"
                  icon={Mail}
                  label="Email Me"
                  variant="secondary"
                />
                
                <ResumeButton
                  href="https://www.linkedin.com/in/sandeep-kommineni-334037259"
                  icon={Linkedin}
                  label="LinkedIn Profile"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}