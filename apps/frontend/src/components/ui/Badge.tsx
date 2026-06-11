import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'sale' | 'hit' | 'outline' | 'new';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    sale: 'bg-red-600 text-white',
    hit: 'bg-amber-500 text-white',
    outline: 'bg-transparent text-gray-600 border border-gray-200',
    new: 'bg-green-600 text-white',
  };

  return (
    <span
      className={cn(
        'px-2 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
