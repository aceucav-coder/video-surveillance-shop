import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Price } from '@/components/ui/Price';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface Product {
  id: string;
  slug: string;
  nameUk: string;
  nameRu: string;
  price: number;
  oldPrice?: number;
  images: string[];
}

interface PromotionsProps {
  products: Product[];
}

export const Promotions: React.FC<PromotionsProps> = ({ products }) => {
  if (products.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => {
        const discountPercent = product.oldPrice
          ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
          : 0;

        return (
          <Card key={product.id} variant="shadow" className="overflow-hidden">
            <Link href={`/product/${product.slug}`} className="block">
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                  src={product.images[0] || '/images/placeholder-product.jpg'}
                  alt={product.nameUk}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="sale">-{discountPercent}%</Badge>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 line-clamp-1 mb-2">
                  {product.nameUk}
                </h3>
                <Price price={product.price} oldPrice={product.oldPrice} />
              </div>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};
