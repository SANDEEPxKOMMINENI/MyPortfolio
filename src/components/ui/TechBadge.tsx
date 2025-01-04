import React from 'react';

interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="px-2 py-1 text-sm bg-blue-900/50 rounded-full">
      {tech}
    </span>
  );
}