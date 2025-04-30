import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <div 
      className={`relative rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to initials if image fails to load
          (e.target as HTMLImageElement).style.display = 'none';
          (e.currentTarget.parentNode as HTMLDivElement).classList.add('bg-orange-500');
          (e.currentTarget.parentNode as HTMLDivElement).setAttribute(
            'data-content', 
            alt.split(' ').map(n => n[0]).join('')
          );
        }}
      />
    </div>
  );
};

export default Avatar;