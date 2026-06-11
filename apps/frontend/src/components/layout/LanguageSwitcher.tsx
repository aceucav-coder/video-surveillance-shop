'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const changeLanguage = (lang: string) => {
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments[0] === 'uk' || pathSegments[0] === 'ru') {
      pathSegments[0] = lang;
    } else {
      pathSegments.unshift(lang);
    }
    router.push(`/${pathSegments.join('/')}`);
    setIsOpen(false);
  };

  const currentLang = pathname.split('/')[1] || 'uk';

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary"
      >
        <span>{currentLang.toUpperCase()}</span>
        <ChevronDown size={16} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
          <button
            onClick={() => changeLanguage('uk')}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            🇺🇦 Українська
          </button>
          <button
            onClick={() => changeLanguage('ru')}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            🇷🇺 Русский
          </button>
        </div>
      )}
    </div>
  );
};
