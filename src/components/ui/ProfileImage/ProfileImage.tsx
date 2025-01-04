import React from 'react';
import { ProfileImageProps } from './types';
import { sizes, shapes, borders } from './styles';

export default function ProfileImage({
  alt = 'Profile Image',
  size = 'lg',
  style = 'circle',
  border = 'gradient',
  className = '',
  customStyles
}: ProfileImageProps) {
  // Use relative path for profile image
  const profileImage = './profile.jpg';

  return (
    <div className="relative group">
      {/* Background glow effect */}
      <div className={`
        absolute inset-0 
        ${sizes[size]} 
        ${shapes[style]}
        bg-blue-500/20 
        filter blur-xl 
        group-hover:bg-blue-400/30
        transition-all duration-300
      `} />

      {/* Image container */}
      <div className={`
        relative
        ${sizes[size]}
        ${shapes[style]}
        ${borders[border]}
        overflow-hidden
        transition-transform duration-300
        group-hover:scale-[1.02]
        ${className}
      `}
        style={customStyles}
      >
        <img
          src={profileImage}
          alt={alt}
          className={`
            w-full h-full
            object-cover
            object-center
            transition-all duration-300
            group-hover:scale-105
          `}
          loading="eager"
          style={{
            objectPosition: '50% 50%'
          }}
        />
      </div>
    </div>
  );
}