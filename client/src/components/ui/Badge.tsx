import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  variant = 'primary', 
  children, 
  className = '' 
}) => {
  const variantClasses = {
    primary: 'bg-orange-100 text-orange-800 border-orange-200',
    secondary: 'bg-blue-100 text-blue-800 border-blue-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    danger: 'bg-red-100 text-red-800 border-red-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    info: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  };

  return (
    <span 
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
        border ${variantClasses[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;