import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
  activeSection: string;
}

export default function MobileMenu({ isOpen, setIsOpen, navItems, activeSection }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-400 hover:text-white transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/95 border-b border-gray-800 py-4">
          <div className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-400 bg-blue-900/20'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}