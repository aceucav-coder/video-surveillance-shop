import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">VideoShop</span>
            </div>
            <p className="text-sm text-gray-400">
              Магазин обладнання відеоспостереження. IP-камери, реєстратори, аксесуари та комплексні рішення для безпеки.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Catalog */}
          <div>
            <h3 className="text-white font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link href="/catalog/ip-cameras" className="hover:text-white transition-colors">IP-камери</Link></li>
              <li><Link href="/catalog/analog-cameras" className="hover:text-white transition-colors">Аналогові камери</Link></li>
              <li><Link href="/catalog/recorders" className="hover:text-white transition-colors">Реєстратори</Link></li>
              <li><Link href="/catalog/cables" className="hover:text-white transition-colors">Кабелі та живлення</Link></li>
              <li><Link href="/catalog/mounts" className="hover:text-white transition-colors">Кріплення</Link></li>
              <li><Link href="/catalog/kits" className="hover:text-white transition-colors">Готові комплекти</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Послуги</h3>
            <ul className="space-y-2">
              <li><Link href="/services/installation" className="hover:text-white transition-colors">Монтаж відеоспостереження</Link></li>
              <li><Link href="/services/configuration" className="hover:text-white transition-colors">Налаштування обладнання</Link></li>
              <li><Link href="/services/maintenance" className="hover:text-white transition-colors">Технічне обслуговування</Link></li>
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакти</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+380441234567" className="hover:text-white transition-colors">+38 (044) 123-45-67</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@videosurveillance.shop" className="hover:text-white transition-colors">info@videosurveillance.shop</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span>м. Київ, вул. Велика Васильківська, 100</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 VideoShop. Усі права захищені.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Політика конфіденційності</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Умови використання</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
