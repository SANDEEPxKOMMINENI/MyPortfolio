import React from 'react';

const services = [
  {
    title: "AI/ML Development",
    description: "Custom AI/ML solutions including model development, training, and deployment. Specializing in computer vision, NLP, and predictive analytics.",
    icon: "🤖"
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies like React, Node.js, and cloud services.",
    icon: "💻"
  },
  {
    title: "Cloud Architecture",
    description: "Design and implementation of scalable cloud solutions using AWS and Azure, including serverless architectures and microservices.",
    icon: "☁️"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}