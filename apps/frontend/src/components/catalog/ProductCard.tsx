import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Price } from '@/components/ui/Price';
import { ShoppingCart, Eye } from 'lucide-react';

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
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isOutOfStock = !product.isAvailable || product.quantity <= 0;
  const imageSrc = product.images[0] || '/images/placeholder-product.jpg';

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={imageSrc}
            alt={product.nameUk}
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
          <h3 className="font-medium text-gray-900 line-clamp-1 mb-2">{product.nameUk}</h3>
          {product.brand && (
            <p className="text-sm text-gray-500 mb-2">{product.brand.name}</p>
          )}
          <Price
            price={product.price}
            oldPrice={product.oldPrice}
            className="mb-3"
          />
          {!isOutOfStock && (
            <div className="flex items-center justify-between">
              <button className="text-sm text-primary hover:text-primary-dark transition-colors">
                В кошик
              </button>
              <button className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                <Eye size={16} /> Детальніше
              </button>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
