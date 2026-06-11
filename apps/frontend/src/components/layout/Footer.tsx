'use client';
import React from 'react';
import Link from 'next/link';

// Footer Logo Component
const FooterLogo = () => (
  <div className="flex items-center gap-2.5 mb-2">
    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="18,2 30,8 30,22 18,28 6,22 6,8" fill="#085041"/>
      <polygon points="18,7 27,12 27,21 18,26 9,21 9,12" fill="none" stroke="#5DCAA5" strokeWidth="1"/>
      <circle cx="18" cy="16" r="5" fill="#5DCAA5"/>
      <circle cx="15.5" cy="13.5" r="1.8" fill="white" opacity="0.45"/>
    </svg>
    <div className="flex items-baseline gap-1">
      <span className="font-heading text-lg font-black text-text-light">Pax</span>
      <span className="font-heading text-lg font-light text-accent tracking-wider">Vision</span>
    </div>
  </div>
);

// Social Links
const SocialLinks = () => (
  <div className="flex gap-3">
    <a href="https://facebook.com/paxvision" target="_blank" rel="noopener noreferrer" 
       className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
      <span className="text-xl font-bold">f</span>
    </a>
    <a href="https://instagram.com/paxvision" target="_blank" rel="noopener noreferrer" 
       className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
      <span className="text-xl">📷</span>
    </a>
    <a href="https://t.me/paxvision" target="_blank" rel="noopener noreferrer" 
       className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
      <span className="text-xl">✈️</span>
    </a>
    <a href="https://viber.com/paxvision" target="_blank" rel="noopener noreferrer" 
       className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
      <span className="text-xl">💜</span>
    </a>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-accent/15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left: Logo & Slogan */}
          <div className="flex-1">
            <FooterLogo />
            <div className="font-heading text-xs font-semibold text-accent tracking-[2.5px] uppercase mt-1">
              YOUR PEACE. OUR VISION.
            </div>
            <p className="text-sm text-text-muted mt-4 max-w-xs">
              Магазин обладнання відеоспостереження №1 в Україні. IP-камери, реєстратори, аксесуари та комплексні рішення для безпеки.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap gap-6">
            <Link href="/catalog" className="text-text-softer hover:text-accent transition-colors text-sm font-medium">
              Каталог
            </Link>
            <Link href="/services" className="text-text-softer hover:text-accent transition-colors text-sm font-medium">
              Послуги
            </Link>
            <Link href="/uk#partners" className="text-text-softer hover:text-accent transition-colors text-sm font-medium">
              Партнери
            </Link>
            <Link href="/uk#contacts" className="text-text-softer hover:text-accent transition-colors text-sm font-medium">
              Контакти
            </Link>
            <Link href="/login" className="text-text-softer hover:text-accent transition-colors text-sm font-medium">
              Вхід
            </Link>
            <Link href="/cart" className="text-text-softer hover:text-accent transition-colors text-sm font-medium">
              Кошик
            </Link>
          </div>

          {/* Right: Social Networks */}
          <div className="flex-shrink-0">
            <SocialLinks />
          </div>
        </div>

        {/* Bottom: Copyright & Legal */}
        <div className="border-t border-border/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} PaxVision. Усі права захищені.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-text-muted hover:text-accent transition-colors">
              Політика конфіденційності
            </Link>
            <Link href="/terms" className="text-text-muted hover:text-accent transition-colors">
              Умови використання
            </Link>
            <Link href="/delivery" className="text-text-muted hover:text-accent transition-colors">
              Доставка та оплата
            </Link>
          </div>
          <div className="text-sm text-text-muted">
            📞 +38 (044) 123-45-67
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
