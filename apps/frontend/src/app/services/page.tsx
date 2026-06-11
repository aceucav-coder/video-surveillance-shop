'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { services, serviceCategories, getServicesByCategory } from '@/data/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationModal from '@/components/services/ConsultationModal';

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

// Service Icon Component
const ServiceIcon = ({ icon }: { icon: string }) => (
  <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center mb-4">
    <span className="text-2xl">{icon}</span>
  </div>
);

export default function ServicesPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState('');

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

  const openConsultationModal = (serviceName: string) => {
    setSelectedServiceName(serviceName);
    setIsConsultationModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-background-dark">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-background-mid text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="tag mb-3">Послуги</span>
          <h1 className="font-heading text-3xl md:text-5xl font-black mb-4 text-text-light">
            Професійні послуги відеоспостереження
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-text-softer">
            Проєктування, монтаж, налаштування та обслуговування систем відеоспостереження будь-якої складності
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uk" className="btn-primary">
              На головну
            </Link>
            <Link href="/catalog" className="btn-outline text-text-light border-border hover:border-accent">
              До каталогу →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section className="py-6 bg-background-mid border-t border-secondary/20 border-b border-primary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-secondary text-white'
                  : 'bg-transparent text-text-softer border border-border/30 hover:border-secondary/50'
              }`}
            >
              Усі послуги ({allServices.length})
            </button>
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-5 py-2.5 rounded-sm font-medium transition-all ${
                  activeCategory === category.slug
                    ? 'bg-secondary text-white'
                    : 'bg-transparent text-text-softer border border-border/30 hover:border-secondary/50'
                }`}
              >
                {category.nameUk}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayServices.map((service) => (
              <div
                key={service.id}
                className="service-card"
              >
                <div className="relative aspect-video bg-gray-50 rounded-t-lg overflow-hidden mb-5">
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
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-secondary text-white px-3 py-1.5 rounded-full text-sm font-medium">
                      від {service.basePrice} ₴/{service.unitLabel}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">{service.nameUk}</h3>
                  <p className="text-text-muted mb-4 line-clamp-2">{service.descriptionUk}</p>

                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="flex items-center gap-2 text-secondary font-medium hover:text-accent transition-colors mb-3"
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
                    <div className="mt-3 pt-4 border-t border-border/20">
                      <h4 className="font-heading font-semibold text-primary mb-3">Включено:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-text-muted">
                            <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {service.priceNote && (
                        <p className="text-sm text-text-muted mt-3 italic">{service.priceNote}</p>
                      )}
                      <div className="mt-4 flex gap-2">
                        <button
                          onClick={() => handleAddServiceToCart(service)}
                          className="flex-1 py-2 px-4 bg-secondary text-white rounded-sm text-sm font-medium hover:bg-secondary/90 transition-colors"
                        >
                          🛒 Додати до кошика
                        </button>
                        <button
                          onClick={() => openConsultationModal(service.nameUk)}
                          className="flex-1 py-2 px-4 bg-accent text-primary rounded-sm text-sm font-medium hover:bg-accent-dark transition-colors"
                        >
                          💬 Консультація
                        </button>
                      </div>
                    </div>
                  )}

                  {expandedService !== service.id && (
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => handleAddServiceToCart(service)}
                        className="flex-1 py-2 px-4 bg-secondary text-white rounded-sm text-sm font-medium hover:bg-secondary/90 transition-colors"
                      >
                        🛒 Додати до кошика
                      </button>
                      <button
                        onClick={() => openConsultationModal(service.nameUk)}
                        className="flex-1 py-2 px-4 bg-accent text-primary rounded-sm text-sm font-medium hover:bg-accent-dark transition-colors"
                      >
                        💬 Консультація
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
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="section-header text-center">
            <span className="tag">Тарифи</span>
            <h2 className="section-h2 mx-auto max-w-xl">Вартість послуг</h2>
            <p className="section-sub mx-auto max-w-xl mt-2">
              Ціни вказані орієнтовно. Точну вартість розраховуємо індивідуально після огляду об'єкту.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Базовий',
                price: 'від 1500 ₴',
                description: 'Монтаж до 4 камер',
                features: ['До 4 камер', 'Прокладка кабелю', 'Налаштування', 'Гарантія 12 міс.'],
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
                className={`bg-white rounded-lg p-6 shadow-sm border-2 ${
                  plan.popular
                    ? 'border-secondary ring-4 ring-secondary/10'
                    : 'border-border hover:border-secondary/30'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="font-heading text-xl font-bold text-primary">{plan.title}</h3>
                  <p className="text-text-muted text-sm mt-1">{plan.description}</p>
                </div>
                <div className="text-center mb-6">
                  <span className="font-heading text-4xl font-bold text-secondary">{plan.price.split(' ')[0]}</span>
                  <span className="text-lg text-text-muted"> {plan.price.split(' ')[1]}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openConsultationModal(plan.title)}
                  className={`w-full py-3 px-6 rounded-sm font-medium transition-colors ${
                    plan.popular
                      ? 'bg-secondary text-white hover:bg-secondary/90'
                      : 'bg-white text-primary border border-secondary hover:bg-secondary/10'
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-header text-center">
            <span className="tag">FAQ</span>
            <h2 className="section-h2 mx-auto max-w-xl">Часті запитання</h2>
          </div>
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
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{faq.question}</h3>
                <p className="text-text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-lg p-8 md:p-14 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-black text-white mb-3">
              Потрібна консультація?
            </h2>
            <p className="text-text-light/85 text-sm md:text-base max-w-2xl mx-auto mb-8">
              Залиште заявку і наш фахівець зв'яжеться з вами протягом 30 хвилин
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button
                onClick={() => openConsultationModal('Швидка консультація')}
                className="btn-primary flex-1"
              >
                +38 (044) 123-45-67
              </button>
              <button
                onClick={() => openConsultationModal('Зворотний дзвінок')}
                className="btn-outline text-secondary border-border flex-1"
              >
                Замовити дзвінок
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        serviceName={selectedServiceName}
      />

      <Footer />
    </main>
  );
}
