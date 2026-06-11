import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'shadow' | 'service';
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-white',
    bordered: 'bg-white border border-border',
    shadow: 'bg-white shadow-md',
    service: 'bg-white border border-border/50 hover:border-secondary transition-colors duration-200',
  };

  return (
    <div
      className={cn(
        'rounded-lg',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
