import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Sustainable Living Education Platform",
    description: "A comprehensive platform promoting eco-friendly living through interactive education and community engagement. Built with MySQL and modern web technologies.",
    tech: ["MySQL", "React", "Node.js", "Express"],
    github: "https://github.com/SANDEEPxKOMMINENI/Sustainable-Living-Education.git",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3"
  },
  {
    title: "Anime Rador",
    description: "An intelligent recommendation engine for anime enthusiasts featuring personalized content discovery and advanced search capabilities.",
    tech: ["React", "Node.js", "Machine Learning", "API Integration"],
    live: "https://animerador.netlify.app/",
    github: "https://github.com/SANDEEPxKOMMINENI/AnimeRador.git",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3"
  },
  {
    title: "Amazon ML Challenge 2024",
    description: "Implemented a sophisticated machine learning model achieving 90% accuracy in entity value extraction. Enhanced model efficiency through advanced feature engineering.",
    tech: ["Python", "Machine Learning", "NLP", "Data Analysis"],
    github: "https://github.com/SANDEEPxKOMMINENI/amazon_ml_2024-challenge.git",
    image: "https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixlib=rb-4.0.3"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-300"
                />
              </div>
              <div className="relative p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-sm bg-blue-900/50 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center text-blue-400 hover:text-blue-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}