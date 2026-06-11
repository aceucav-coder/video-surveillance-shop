import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';

interface Category {
  id: string;
  slug: string;
  nameUk: string;
  nameRu: string;
  image?: string;
  descriptionUk?: string;
  descriptionRu?: string;
}

interface CategoryGridProps {
  categories: Category[];
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/catalog/${category.slug}`} className="block group">
          <Card className="h-full overflow-hidden border-0 shadow-none">
            <div className="relative aspect-video overflow-hidden bg-gray-200 rounded-xl mb-4">
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.nameUk}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="px-2">
              <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                {category.nameUk}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {category.descriptionUk}
              </p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
