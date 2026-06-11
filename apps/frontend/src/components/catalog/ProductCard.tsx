import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Price } from '@/components/ui/Price';

interface Product {
  id: string;
  slug: string;
  nameUk: string;
  nameRu: string;
  price: number;
  oldPrice?: number;
  isAvailable: boolean;
  isFeatured: boolean;
  isOnSale: boolean;
  quantity: number;
  images: string[];
  category: { slug: string };
  brand?: { name: string };
}

interface ProductCardProps {
  product: Product;
  locale?: 'uk' | 'ru';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, locale = 'uk' }) => {
  const isOutOfStock = !product.isAvailable || product.quantity <= 0;
  const imageSrc = product.images[0] || '/images/placeholder-product.jpg';
  const name = locale === 'uk' ? product.nameUk : product.nameRu;

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/20">
      <Link href={`/catalog/${product.category.slug}/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isOnSale && <Badge variant="sale">Акція</Badge>}
            {product.isFeatured && <Badge variant="hit">Хіт</Badge>}
          </div>
          {isOutOfStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Badge variant="outline">Немає в наявності</Badge>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-heading font-semibold text-primary line-clamp-1 mb-2">{name}</h3>
          {product.brand && (
            <p className="text-sm text-text-muted mb-2">{product.brand.name}</p>
          )}
          <Price
            price={product.price}
            oldPrice={product.oldPrice}
            className="mb-3"
          />
          {!isOutOfStock && (
            <div className="flex items-center justify-between pt-2 border-t border-border/20">
              <button className="text-sm text-secondary hover:text-accent transition-colors font-medium">
                В кошик
              </button>
              <button className="text-sm text-text-muted hover:text-secondary transition-colors font-medium">
                Детальніше →
              </button>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
