
import React from 'react';

interface CircuitIconProps {
  className?: string;
}

export const CircuitIcon: React.FC<CircuitIconProps> = ({ className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 16h-6v-8h6" />
      <path d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 12v4" />
      <path d="M6 8h4" />
      <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M6 16H4a2 2 0 0 0-2 2" />
      <path d="M4 10a2 2 0 0 0-2 2v2" />
    </svg>
  );
};
