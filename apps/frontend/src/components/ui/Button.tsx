import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const baseStyles = 'font-heading font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm';

  const variants = {
    primary: 'bg-accent hover:bg-accent-dark text-primary shadow-md hover:shadow-lg active:scale-95',
    secondary: 'bg-white hover:bg-gray-50 text-primary border border-gray-200',
    outline: 'bg-transparent hover:bg-accent/10 text-accent border border-secondary hover:border-accent',
    ghost: 'bg-transparent hover:bg-primary/10 text-text-softer',
    cta: 'bg-white hover:bg-accent-light text-secondary shadow-lg',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
