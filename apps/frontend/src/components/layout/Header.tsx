'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

// PaxVision Logo SVG Component
const PaxVisionLogo = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="18,2 30,8 30,22 18,28 6,22 6,8" fill="#085041"/>
      <polygon points="18,7 27,12 27,21 18,26 9,21 9,12" fill="none" stroke="#5DCAA5" strokeWidth="1.1"/>
      <circle cx="18" cy="16" r="5.5" fill="#5DCAA5"/>
      <circle cx="15.5" cy="13.5" r="2" fill="white" opacity="0.5"/>
    </svg>
    <div className="flex items-baseline gap-1">
      <span className="font-heading text-xl font-black text-text-light -tracking-tight">Video</span>
      <span className="font-heading text-xl font-light text-accent tracking-widest">Shop</span>
    </div>
  </div>
);

// Mobile Menu Component
const MobileMenu = ({ isOpen }: { isOpen: boolean }) => (
  <div className={`md:hidden absolute top-full left-0 right-0 bg-primary/98 backdrop-blur-sm border-t border-border/20 ${isOpen ? 'block' : 'hidden'}`}>
    <div className="px-4 py-4 space-y-3">
      <Link href="/catalog" className="block text-text-softer hover:text-accent transition-colors py-2">Каталог</Link>
      <Link href="/services" className="block text-text-softer hover:text-accent transition-colors py-2">Послуги</Link>
      <Link href="/uk#partners" className="block text-text-softer hover:text-accent transition-colors py-2">Партнери</Link>
      <Link href="/uk#contacts" className="block text-text-softer hover:text-accent transition-colors py-2">Контакти</Link>
      <div className="pt-2 border-t border-border/20">
        <Link href="/login" className="block btn-outline w-full text-center mt-2">Вхід</Link>
      </div>
    </div>
  </div>
);

export default function Header() {
  const { user, isAuthenticated } = useAuth();
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-accent/15">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/uk" className="flex-shrink-0">
            <PaxVisionLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/catalog" className="text-text-softer hover:text-accent transition-colors font-medium text-sm">
              Каталог
            </Link>
            <Link href="/services" className="text-text-softer hover:text-accent transition-colors font-medium text-sm">
              Послуги
            </Link>
            <Link href="/uk#partners" className="text-text-softer hover:text-accent transition-colors font-medium text-sm">
              Партнери
            </Link>
            <Link href="/uk#contacts" className="text-text-softer hover:text-accent transition-colors font-medium text-sm">
              Контакти
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <Link 
              href="/cart" 
              className="relative p-2 text-text-softer hover:text-accent transition-colors"
            >
              <span className="text-xl">🛒</span>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {/* Auth Links */}
            {isAuthenticated && user ? (
              <Link 
                href="/cabinet" 
                className="btn-primary text-sm px-4 py-2"
              >
                👤 {user.name.split(' ')[0]}
              </Link>
            ) : (
              <div className="flex gap-2">
                <Link 
                  href="/login" 
                  className="btn-primary text-sm px-4 py-2"
                >
                  Вхід
                </Link>
                <Link 
                  href="/register" 
                  className="hidden sm:block btn-outline text-sm px-4 py-2"
                >
                  Реєстрація
                </Link>
              </div>
            )}
            
            {/* Language Switcher */}
            <div className="flex gap-1">
              <Link 
                href="/uk" 
                className="px-3 py-1.5 text-xs font-medium text-text-light bg-accent/20 rounded-sm hover:bg-accent/30 transition-colors"
              >
                UA
              </Link>
              <Link 
                href="/ru" 
                className="px-3 py-1.5 text-xs font-medium text-text-softer hover:bg-white/10 rounded-sm transition-colors"
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
