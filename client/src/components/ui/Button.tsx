import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  onClick,
  disabled = false,
  type = 'button',
  icon
}) => {
  const variantClasses = {
    primary: 'bg-orange-600 hover:bg-orange-700 text-white',
    secondary: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline: 'bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-800',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-800',
    link: 'bg-transparent text-blue-600 hover:underline p-0',
    danger: 'bg-red-600 hover:bg-red-700 text-white'
  };

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3'
  };

  // Don't apply padding for link variant
  const padding = variant === 'link' ? '' : sizeClasses[size];
  
  return (
    <button
      type={type}
      className={`
        ${variantClasses[variant]}
        ${padding}
        ${fullWidth ? 'w-full' : ''}
        rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${variant === 'primary' ? 'focus:ring-orange-500' : 'focus:ring-blue-500'}
        transition duration-150 ease-in-out
        flex items-center justify-center gap-2
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;