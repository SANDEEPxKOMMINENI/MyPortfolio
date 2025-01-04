import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import SocialLink from './ui/SocialLink';

const contactLinks = [
  {
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:ksandeep2003@gmail.com",
    label: "Email",
    text: "ksandeep2003@gmail.com"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/sandeep-kommineni-334037259",
    label: "LinkedIn",
    text: "Connect on LinkedIn"
  },
  {
    icon: <Github className="w-6 h-6" />,
    href: "https://github.com/SANDEEPxKOMMINENI",
    label: "GitHub",
    text: "View GitHub Profile"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Let's Connect
        </h2>
        <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
          I'm always excited to collaborate on innovative projects in AI/ML, Deep Learning, and Full-stack Development.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-blue-500/20 mb-4">
                {link.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{link.label}</h3>
              <p className="text-blue-200">{link.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}