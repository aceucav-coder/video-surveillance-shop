'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartButton() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-2 px-3 py-2 bg-white/10 text-text-softer rounded-sm border border-border/20 hover:bg-white/15 hover:border-accent/30 transition-colors"
    >
      <span className="text-lg">🛒</span>
      {itemCount > 0 && (
        <>
          <span className="hidden sm:inline text-sm font-medium text-text-light">
            {itemCount}
          </span>
          <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {itemCount}
          </span>
        </>
      )}
      {itemCount === 0 && (
        <span className="text-sm font-medium text-text-softer">Кошик</span>
      )}
    </Link>
  );
}
