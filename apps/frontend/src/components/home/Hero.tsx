import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Професійне відеоспостереження
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Комплексні рішення для безпеки вашого бізнесу, будинку та офісу.
            IP-камери, реєстратори, аксесуари від провідних світових брендів.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              <Link href="/catalog">
                До каталогу →
              </Link>
            </Button>
            <Button variant="secondary" size="lg">
              <Link href="/services">
                Послуги монтажу
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
