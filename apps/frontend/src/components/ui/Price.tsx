import React from 'react';
import { cn } from '@/lib/utils';

interface PriceProps {
  price: number;
  oldPrice?: number;
  className?: string;
  showCurrency?: boolean;
}

export const Price: React.FC<PriceProps> = ({
  price,
  oldPrice,
  className,
  showCurrency = true,
}) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('uk-UA', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="price text-xl font-bold">
        {formatPrice(price)} {showCurrency && '₴'}
      </span>
      {oldPrice && oldPrice > price && (
        <span className="old-price text-lg text-gray-500 line-through">
          {formatPrice(oldPrice)} ₴
        </span>
      )}
    </div>
  );
};
