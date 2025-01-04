import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="transform hover:scale-110 transition-transform duration-200 bg-white/10 p-3 rounded-full hover:bg-white/20"
      aria-label={label}
    >
      {icon}
    </a>
  );
}