import { CSSProperties } from 'react';

export interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: 'circle' | 'rounded' | 'square';
  border?: 'none' | 'simple' | 'gradient' | 'glow';
  className?: string;
  customStyles?: CSSProperties;
}