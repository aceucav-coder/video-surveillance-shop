'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { services, serviceCategories, getServicesByCategory } from '@/data/services';
import Header from '@/components/layout/Header';

interface Service {
  id: string;
  slug: string;
  nameUk: string;
  nameRu: string;
  descriptionUk: string;
  descriptionRu: string;
  basePrice: number;
  unit: string;
  unitLabel: string;
  priceNote?: string;
  features: string[];
  icon: string;
  image: string;
  category: { slug: string; nameUk: string; nameRu: string };
}

export default function ServicesPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const allServices = services;

  const displayServices = activeCategory === 'all' 
    ? allServices 
    : getServicesByCategory(activeCategory);

  const handleAddServiceToCart = (service: Service) => {
    addToCart({
      id: service.id,
      slug: service.slug,
      nameUk: service.nameUk,
      nameRu: service.nameRu,
      price: service.basePrice,
      image: service.image,
      category: service.category.slug,
      type: 'service',
      unit: service.unit,
      unitLabel: service.unitLabel
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-blue-900 text-white py-16 mt-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Наші послуги
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Професійні послуги з монтажу, налаштування та обслуговування систем відеоспостереження
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uk" className="btn-secondary text-blue-400 border-blue-400">
              На головну
            </Link>
            <Link href="/catalog" className="btn-secondary text-blue-400 border-blue-400">
              До каталогу
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Усі послуги ({allServices.length})
            </button>
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category.slug
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.nameUk}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((service) => (
              <div
                key={service.id}
                className="card overflow-hidden"
              >
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.nameUk}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(service.nameUk)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      від {service.basePrice} ₴/{service.unitLabel}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.nameUk}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.descriptionUk}</p>
                  
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors mb-3"
                  >
                    <span>{expandedService === service.id ? 'Приховати' : 'Деталі'}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedService === service.id ? 'rotate-180' : ''
                      }`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {expandedService === service.id && (
                    <div className="mt-3 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-3">Включено:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {service.priceNote && (
                        <p className="text-sm text-gray-500 mt-3 italic">{service.priceNote}</p>
                      )}
                      <div className="mt-4 flex gap-3">
                        <button 
                          onClick={() => handleAddServiceToCart(service)}
                          className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                          🛒 Додати до кошика
                        </button>
                        <button className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                          Консультація
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {expandedService !== service.id && (
                    <div className="mt-4 flex gap-3">
                      <button 
                        onClick={() => handleAddServiceToCart(service)}
                        className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                      >
                        🛒 Додати до кошика
                      </button>
                      <button 
                        onClick={() => setExpandedService(service.id)}
                        className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        Деталі
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Вартість послуг
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Ціни вказані орієнтовно. Точну вартість розраховуємо індивідуально після огляду об'єкту.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Базовий',
                price: 'від 1500 ₴',
                description: 'Монтаж до 4 камер',
                features: ['Do 4 камер', 'Прокладка кабелю', 'Налаштування', 'Гарантія 12 міс.'],
                popular: false
              },
              {
                title: 'Стандартний',
                price: 'від 3500 ₴',
                description: 'Монтаж 5-8 камер',
                features: ['5-8 камер', 'Кабельні канали', 'Захист обладнання', 'Гарантія 24 міс.'],
                popular: true
              },
              {
                title: 'Преміум',
                price: 'від 8000 ₴',
                description: 'Комплексний монтаж',
                features: ['9+ камер', 'Повна інтеграція', 'Хмарне сховище', 'Гарантія 36 міс.'],
                popular: false
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-blue-500 ring-4 ring-blue-100' 
                    : 'border-gray-200'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">{plan.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">{plan.price.split(' ')[0]}</span>
                  <span className="text-lg text-gray-500">{plan.price.split(' ')[1]}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Обрати план
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Часті запитання
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: 'Скільки коштує монтаж відеоспостереження?',
                answer: 'Вартість залежить від кількості камер, типу обладнання та складності об\'єкту. Ми розраховуємо індивідуальну вартість після безкоштовного виїзду фахівця.'
              },
              {
                question: 'Яка гарантія на монтаж?',
                answer: 'Ми надаємо гарантію від 12 до 36 місяців залежно від пакета послуг. Усі роботи виконуються з дотриманням стандартів якості.'
              },
              {
                question: 'Чи можу я саме встановлювати обладнання?',
                answer: 'Так, ви можете придбати обладнання і встановлювати його самостійно. Але ми рекомендуємо скористатися послугами професіоналів для забезпечення максимальної ефективності системи.'
              },
              {
                question: 'Як часто потрібно обслуговувати систему?',
                answer: 'Рекомендуємо проводити профілактичний огляд системи кожні 6 місяців. Це допоможе уникнути поломок і забезпечити довготривалу роботу обладнання.'
              }
            ].map((faq, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Потрібна консультація?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Залиште заявку і наш фахівець зв\'яжеться з вами протягом 30 хвилин
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="btn-primary flex-1">
              +38 (044) 123-45-67
            </button>
            <button className="btn-secondary text-blue-600 border-blue-400 flex-1">
              Замовити дзвінок
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
