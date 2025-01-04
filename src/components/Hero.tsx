import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import ProfileImage from './ui/ProfileImage/ProfileImage';
import SocialLink from './ui/SocialLink';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')] opacity-10 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <ProfileImage
              size="xl"
              style="circle"
              border="gradient"
              className="shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">
            Sandeep Kommineni
          </h1>
          <p className="text-2xl text-blue-200 mb-8">
            AI/ML Engineer & Full-Stack Developer
          </p>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-12">
            Specializing in Deep Learning, Computer Vision, and Cloud Architecture
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex justify-center space-x-6">
              <SocialLink href="https://github.com/SANDEEPxKOMMINENI" icon={<Github />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/sandeep-kommineni-334037259" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="mailto:ksandeep2003@gmail.com" icon={<Mail />} label="Email" />
            </div>
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}