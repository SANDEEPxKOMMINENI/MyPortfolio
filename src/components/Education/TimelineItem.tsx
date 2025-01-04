import React from 'react';
import { EducationItem } from './types';

interface TimelineItemProps {
  item: EducationItem;
  isLast: boolean;
}

export default function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-transparent" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-blue-400 border-4 border-gray-900 z-10" />
      
      {/* Content */}
      <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
        <h4 className="text-xl font-semibold text-blue-400">{item.institution}</h4>
        <p className="text-lg text-white mt-1">{item.degree}</p>
        {item.specialization && (
          <p className="text-blue-300 mt-1">{item.specialization}</p>
        )}
        <p className="text-gray-400 mt-1">{item.location}</p>
        <p className="text-gray-500 mt-1">{item.duration}</p>
        <ul className="mt-4 space-y-2">
          {item.achievements.map((achievement, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}