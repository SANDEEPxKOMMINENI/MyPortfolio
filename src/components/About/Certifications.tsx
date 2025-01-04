import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from './data';

export default function Certifications() {
  return (
    <section id="certifications" className="space-y-6">
      <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
        <Award className="w-5 h-5" />
        Certifications & Achievements
      </h3>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h4 className="text-lg font-medium text-blue-400">
                  {cert.name}
                </h4>
                <p className="text-gray-400 mt-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
              </div>
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Verify Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}