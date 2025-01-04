import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
}

export default function ProjectCard({ title, description, tech, github, live, image }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-900 transform hover:-translate-y-2 transition-all duration-300">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-300"
        />
      </div>
      <div className="relative p-6 h-full flex flex-col">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <TechBadge key={i} tech={t} />
            ))}
          </div>
          <div className="flex gap-4">
            {github && (
              <a
                href={github}
                className="flex items-center text-blue-400 hover:text-blue-300"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            )}
            {live && (
              <a
                href={live}
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
  );
}