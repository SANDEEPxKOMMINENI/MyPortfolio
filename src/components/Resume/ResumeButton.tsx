import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ResumeButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  download?: string;
  target?: string;
  rel?: string;
}

export default function ResumeButton({
  href,
  icon: Icon,
  label,
  variant,
  onClick,
  ...props
}: ResumeButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg transition-all duration-300";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 hover:scale-105 group",
    secondary: "bg-gray-700 hover:bg-gray-600 hover:scale-105"
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
      {...props}
    >
      <Icon className="w-5 h-5 mr-2 group-hover:animate-bounce" />
      {label}
    </a>
  );
}