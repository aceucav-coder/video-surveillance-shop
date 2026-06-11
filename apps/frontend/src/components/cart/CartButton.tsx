'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartButton() {
  const { itemCount, total } = useCart();

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
    >
      <span className="text-xl">🛒</span>
      {itemCount > 0 && (
        <>
          <span className="hidden sm:inline text-sm font-medium">
            {itemCount} товар{itemCount > 1 ? 'ів' : ''}
          </span>
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
            {itemCount}
          </span>
        </>
      )}
      {itemCount === 0 && (
        <span className="text-sm font-medium">Кошик</span>
      )}
    </Link>
  );
}
