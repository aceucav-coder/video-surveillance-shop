import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export const Footer: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">VS</span>
              </div>
              <span className="text-xl font-bold text-white">VideoShop</span>
            </div>
            <p className="text-sm text-gray-400">
              Магазин обладнання відеоспостереження №1 в Україні. IP-камери, реєстратори, аксесуари та комплексні рішення для безпеки.
            </p>
            <div className="flex gap-2 mt-4">
              <Link href="/uk" className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                UA
              </Link>
              <Link href="/ru" className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                RU
              </Link>
            </div>
          </div>

          {/* Column 2: Catalog */}
          <div>
            <h3 className="text-white font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link href="/catalog" className="hover:text-white transition-colors">Усі товари</Link></li>
              <li><Link href="/catalog/ip-cameras" className="hover:text-white transition-colors">IP-камери</Link></li>
              <li><Link href="/catalog/analog-cameras" className="hover:text-white transition-colors">Аналогові камери</Link></li>
              <li><Link href="/catalog/recorders" className="hover:text-white transition-colors">Відеореєстратори</Link></li>
              <li><Link href="/catalog/cables" className="hover:text-white transition-colors">Кабелі та живлення</Link></li>
              <li><Link href="/catalog/mounts" className="hover:text-white transition-colors">Кріплення</Link></li>
              <li><Link href="/catalog/kits" className="hover:text-white transition-colors">Готові комплекти</Link></li>
              <li><Link href="/catalog/accessories" className="hover:text-white transition-colors">Аксесуари</Link></li>
            </ul>
          </div>

          {/* Column 3: Services & User */}
          <div>
            <h3 className="text-white font-semibold mb-4">Послуги</h3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/services" className="hover:text-white transition-colors">Усі послуги</Link></li>
              <li><Link href="/services#installation" className="hover:text-white transition-colors">Монтаж</Link></li>
              <li><Link href="/services#configuration" className="hover:text-white transition-colors">Налаштування</Link></li>
              <li><Link href="/services#maintenance" className="hover:text-white transition-colors">Обслуговування</Link></li>
              <li><Link href="/services#repair" className="hover:text-white transition-colors">Ремонт</Link></li>
              <li><Link href="/services#consultation" className="hover:text-white transition-colors">Консультація</Link></li>
            </ul>
            
            <h3 className="text-white font-semibold mb-4">Користувач</h3>
            <ul className="space-y-2">
              {!isAuthenticated ? (
                <>
                  <li><Link href="/login" className="hover:text-white transition-colors">Вхід</Link></li>
                  <li><Link href="/register" className="hover:text-white transition-colors">Реєстрація</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/cabinet" className="hover:text-white transition-colors">Особистий кабінет</Link></li>
                  <li><Link href="/cabinet#orders" className="hover:text-white transition-colors">Мої замовлення</Link></li>
                  <li><Link href="/cabinet#profile" className="hover:text-white transition-colors">Мій профіль</Link></li>
                </>
              )}
              <li><Link href="/cart" className="hover:text-white transition-colors">Кошик</Link></li>
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+380441234567" className="hover:text-white transition-colors">+38 (044) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@videoshop.ua" className="hover:text-white transition-colors">info@videoshop.ua</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>м. Київ, вул. Січових Стрільців, 50</span>
              </li>
            </ul>
            
            <h3 className="text-white font-semibold mb-4 mt-6">Ми в мережах</h3>
            <div className="flex gap-3">
              <a href="https://facebook.com/videoshop" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <span className="text-xl font-bold">f</span>
              </a>
              <a href="https://instagram.com/videoshop" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="https://t.me/videoshop" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <span className="text-xl">✈️</span>
              </a>
              <a href="https://viber.com/videoshop" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                <span className="text-xl">💜</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} VideoShop. Усі права захищені.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Політика конфіденційності</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Умови використання</Link>
            <Link href="/delivery" className="hover:text-white transition-colors">Доставка та оплата</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
