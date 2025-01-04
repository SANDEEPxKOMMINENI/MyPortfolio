import React from 'react';

const skillCategories = [
  {
    title: "AI/ML Technologies",
    skills: [
      "PyTorch", "TensorFlow", "Scikit-learn",
      "Computer Vision", "NLP", "Deep Learning",
      "Neural Networks", "Machine Learning",
      "Data Analysis", "Pandas", "NumPy",
      "Generative AI", "LLMs", "Diffusion Models",
      "Prompt Engineering", "RAG Systems"
    ],
    icon: "🤖"
  },
  {
    title: "Programming Languages",
    skills: [
      "Python", "JavaScript", "TypeScript",
      "Java", "C++", "SQL", "C Language",
      "HTML", "CSS"
    ],
    icon: "💻"
  },
  {
    title: "Web Development",
    skills: [
      "React.js", "Node.js", "Next.js",
      "Express.js", "Django", "FastAPI",
      "GraphQL", "RESTful APIs",
      "Tailwind CSS", "MongoDB"
    ],
    icon: "🌐"
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS Services", "Azure Cloud",
      "Serverless Architecture",
      "Cloud Databases", "Auto-scaling",
      "Cloud Security", "Microservices"
    ],
    icon: "☁️"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}