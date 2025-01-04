import React from 'react';
import { Book } from 'lucide-react';
import { educationData } from './educationData';
import TimelineItem from './TimelineItem';

export default function Education() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
        <Book className="w-5 h-5" />
        Education Timeline
      </h3>
      <div className="space-y-2">
        {educationData.map((item, index) => (
          <TimelineItem 
            key={index} 
            item={item} 
            isLast={index === educationData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}