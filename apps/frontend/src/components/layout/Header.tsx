'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import CartButton from '@/components/cart/CartButton';

export default function Header() {
  const { user, isAuthenticated } = useAuth();
  const { itemCount } = useCart();

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/uk" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">VideoShop</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/catalog" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Каталог
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Послуги
            </Link>
            <Link href="/uk#partners" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Партнери
            </Link>
            <Link href="/uk#contacts" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Контакти
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <CartButton />
            
            {/* Auth Links */}
            {isAuthenticated && user ? (
              <div className="flex items-center gap-3">
                <Link 
                  href="/cabinet" 
                  className="hidden sm:block px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                >
                  👤 {user.name.split(' ')[0]}
                </Link>
                <Link 
                  href="/cabinet" 
                  className="sm:hidden px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Кабінет
                </Link>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Вхід
                </Link>
                <Link 
                  href="/register" 
                  className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Реєстрація
                </Link>
              </div>
            )}
            
            {/* Language Switcher */}
            <div className="flex gap-2">
              <Link 
                href="/uk" 
                className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                UA
              </Link>
              <Link 
                href="/ru" 
                className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                RU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
