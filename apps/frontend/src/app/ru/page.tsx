import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Hero Illustration Component (Hexagonal Network)
const HeroIllustration = () => (
  <div className="flex-shrink-0 w-72 h-64 hidden lg:block" aria-hidden="true">
    <svg width="300" height="280" viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Hexagon */}
      <polygon points="150,30 210,64 210,132 150,166 90,132 90,64" fill="#0C2340" stroke="#1D9E75" strokeWidth="1.5"/>
      {/* Lens */}
      <circle cx="150" cy="98" r="24" fill="#1D9E75"/>
      <circle cx="141" cy="89" r="8" fill="white" opacity="0.25"/>
      <circle cx="150" cy="98" r="10" fill="#5DCAA5"/>
      <circle cx="146" cy="94" r="3.5" fill="white" opacity="0.5"/>
      {/* Inner ring hex */}
      <polygon points="150,46 198,72 198,124 150,150 102,124 102,72" fill="none" stroke="#5DCAA5" strokeWidth="0.8" opacity="0.5"/>
      {/* Neighbor hexagons */}
      <polygon points="90,64 30,30 30,98 90,132" fill="none" stroke="#085041" strokeWidth="1" opacity="0.5"/>
      <polygon points="210,64 270,30 270,98 210,132" fill="none" stroke="#085041" strokeWidth="1" opacity="0.5"/>
      <polygon points="150,166 210,200 210,268 150,302 90,268 90,200" fill="none" stroke="#085041" strokeWidth="1" opacity="0.35"/>
      {/* Corner points */}
      <circle cx="150" cy="30" r="4" fill="#5DCAA5"/>
      <circle cx="210" cy="64" r="4" fill="#5DCAA5"/>
      <circle cx="210" cy="132" r="4" fill="#5DCAA5"/>
      <circle cx="150" cy="166" r="4" fill="#5DCAA5"/>
      <circle cx="90" cy="132" r="4" fill="#5DCAA5"/>
      <circle cx="90" cy="64" r="4" fill="#5DCAA5"/>
      {/* Dotted rays */}
      <line x1="150" y1="30" x2="150" y2="8" stroke="#1D9E75" strokeWidth="1" strokeDasharray="3,4" opacity="0.7"/>
      <line x1="210" y1="64" x2="238" y2="48" stroke="#1D9E75" strokeWidth="1" strokeDasharray="3,4" opacity="0.7"/>
      <line x1="210" y1="132" x2="238" y2="148" stroke="#1D9E75" strokeWidth="1" strokeDasharray="3,4" opacity="0.5"/>
      <line x1="90" y1="64" x2="62" y2="48" stroke="#1D9E75" strokeWidth="1" strokeDasharray="3,4" opacity="0.7"/>
      <line x1="90" y1="132" x2="62" y2="148" stroke="#1D9E75" strokeWidth="1" strokeDasharray="3,4" opacity="0.5"/>
    </svg>
  </div>
);

// Stats Section
const StatsSection = () => (
  <div className="bg-background-mid border-t border-secondary/30 border-b border-primary/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        <div className="stat-item py-6 px-4 text-center border-r border-primary/50 last:border-r-0">
          <div className="stat-number">150+</div>
          <div className="stat-label">Объектов защищено</div>
        </div>
        <div className="stat-item py-6 px-4 text-center border-r border-primary/50 last:border-r-0">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Техническая поддержка</div>
        </div>
        <div className="stat-item py-6 px-4 text-center border-r border-primary/50 last:border-r-0">
          <div className="stat-number">5 лет</div>
          <div className="stat-label">Опыт на рынке</div>
        </div>
        <div className="stat-item py-6 px-4 text-center">
          <div className="stat-number">100%</div>
          <div className="stat-label">Гарантия на монтаж</div>
        </div>
      </div>
    </div>
  </div>
);

// Service Icon Component
const ServiceIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-11 h-11 bg-primary rounded-sm flex items-center justify-center mb-4.5">
    {children}
  </div>
);

// Services Section
const ServicesSection = () => (
  <section className="bg-background-light py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="section-header text-center">
        <span className="tag">Что мы делаем</span>
        <h2 className="section-h2 mx-auto max-w-2xl">Услуги PaxVision</h2>
        <p className="section-sub mx-auto max-w-xl mt-2">
          Полный цикл — от проекта до постоянного обслуживания
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {/* Service 1 */}
        <div className="service-card">
          <ServiceIcon>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
              <line x1="12" y1="7" x2="12" y2="14"/><line x1="12" y1="14" x2="5" y2="17"/><line x1="12" y1="14" x2="19" y2="17"/>
            </svg>
          </ServiceIcon>
          <h3 className="font-heading text-lg font-bold text-primary mb-2.5">Проектирование</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Разрабатываем схему размещения камер с учетом всех слепых зон, особенностей освещения и специфики вашего объекта.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <ServiceIcon>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="1.5" strokeLinecap="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </ServiceIcon>
          <h3 className="font-heading text-lg font-bold text-primary mb-2.5">Монтаж</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Устанавливаем камеры, видеорегистраторы и кабельные трассы любой сложности. Аккуратно, быстро, без лишней пыли и мусора.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <ServiceIcon>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
            </svg>
          </ServiceIcon>
          <h3 className="font-heading text-lg font-bold text-primary mb-2.5">Беспроводные системы</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            IP-камеры с Wi-Fi и 4G подключением для объектов, где прокладка кабеля невозможна или нежелательна.
          </p>
        </div>

        {/* Service 4 */}
        <div className="service-card">
          <ServiceIcon>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="1.5" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </ServiceIcon>
          <h3 className="font-heading text-lg font-bold text-primary mb-2.5">Облачное видеохранение</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Настраиваем облачное хранение видео — доступ к записи с любого устройства, без локального сервера.
          </p>
        </div>

        {/* Service 5 */}
        <div className="service-card">
          <ServiceIcon>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </ServiceIcon>
          <h3 className="font-heading text-lg font-bold text-primary mb-2.5">Охранная сигнализация</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Интеграция систем видеонаблюдения с датчиками движения, сирены и уведомлением на телефон.
          </p>
        </div>

        {/* Service 6 */}
        <div className="service-card">
          <ServiceIcon>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </ServiceIcon>
          <h3 className="font-heading text-lg font-bold text-primary mb-2.5">Техническое обслуживание</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Регулярное техническое обслуживание, обновление прошивок и быстрая замена неисправных компонентов.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/services" className="btn-primary text-sm px-6 py-3">
          Все услуги →
        </Link>
      </div>
    </div>
  </section>
);

// Process Section
const ProcessSection = () => (
  <section className="bg-primary py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="text-center section-header">
        <span className="tag">Как мы работаем</span>
        <h2 className="text-text-light text-3xl md:text-4xl font-black mb-2">От заявки до запуска</h2>
        <p className="text-text-softer">Четкий процесс без лишних вопросов</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* Step 1 */}
        <div className="process-step">
          <div className="step-num">01</div>
          <div className="step-line"></div>
          <h3 className="step-title">Заявка и консультация</h3>
          <p className="step-text">
            Звоните или заполняете форму — наш специалист свяжется в течение 1 часа и уточняет задачу.
          </p>
        </div>

        {/* Step 2 */}
        <div className="process-step">
          <div className="step-num">02</div>
          <div className="step-line"></div>
          <h3 className="step-title">Выезд и замер</h3>
          <p className="step-text">
            Приезжаем на объект, проводим осмотр, составляем точный план размещения камер и коммерческое предложение.
          </p>
        </div>

        {/* Step 3 */}
        <div className="process-step">
          <div className="step-num">03</div>
          <div className="step-line"></div>
          <h3 className="step-title">Монтаж</h3>
          <p className="step-text">
            Устанавливаем оборудование в согласованные сроки. Среднее время монтажа типового магазина — 1 рабочий день.
          </p>
        </div>

        {/* Step 4 */}
        <div className="process-step">
          <div className="step-num">04</div>
          <div className="step-line"></div>
          <h3 className="step-title">Запуск и обучение</h3>
          <p className="step-text">
            Настраиваем систему, подключаем мобильный доступ и показываем как ею пользоваться. Гарантия на все работы.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// CTA Section
const CTASection = () => (
  <section className="bg-background-dark py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="bg-secondary rounded-lg p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
        <div className="flex-1">
          <h2 className="font-heading text-2xl md:text-3xl font-black text-white mb-3 -tracking-tight">
            Готовы защитить свой бизнес?
          </h2>
          <p className="text-text-light/85 text-sm md:text-base max-w-xl">
            Оставьте заявку — наш специалист свяжется с вами в течение часа и ответит на все вопросы бесплатно.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link href="/contact" className="btn-cta">
            Заказать консультацию
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// Partners Section
const PartnersSection = () => (
  <section id="partners" className="bg-background-light py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="section-header text-center">
        <span className="tag">Партнеры</span>
        <h2 className="section-h2 mx-auto max-w-xl">Наши партнеры</h2>
        <p className="section-sub mx-auto max-w-xl mt-2">
          Мы сотрудничаем с ведущими мировыми брендами оборудования видеонаблюдения
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {[
          { name: 'Hikvision', desc: 'Мировой лидер в производстве систем видеонаблюдения' },
          { name: 'Dahua', desc: 'Инновационные решения для безопасности и наблюдения' },
          { name: 'EZVIZ', desc: 'Умные камеры для дома и бизнеса' },
          { name: 'Uniview', desc: 'Профессиональное видеонаблюдение для предприятий' },
          { name: 'Axis', desc: 'Премиальные решения для сетевого видео' },
          { name: 'Bosch', desc: 'Немецкое качество и надежность' },
        ].map((brand, i) => (
          <div key={i} className="partner-card">
            <div className="mb-4">
              <span className="text-xl font-bold text-primary">{brand.name}</span>
            </div>
            <h3 className="font-bold text-primary mb-1.5">{brand.name}</h3>
            <p className="text-xs text-text-muted">{brand.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contacts Section
const ContactsSection = () => (
  <section id="contacts" className="bg-background-light py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="section-header text-center">
        <span className="tag">Контакты</span>
        <h2 className="section-h2 mx-auto max-w-xl">Свяжитесь с нами</h2>
        <p className="section-sub mx-auto max-w-xl mt-2">
          Для консультации и заказа
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Phone */}
        <div className="card p-6 text-center">
          <div className="text-4xl mb-4 text-secondary">📞</div>
          <h3 className="font-heading text-xl font-bold text-primary mb-3">Телефон</h3>
          <p className="text-lg font-semibold text-secondary mb-2">+38 (044) 123-45-67</p>
          <p className="text-sm text-text-muted">Пн-Пт: 9:00 - 18:00</p>
        </div>

        {/* Email */}
        <div className="card p-6 text-center">
          <div className="text-4xl mb-4 text-secondary">📧</div>
          <h3 className="font-heading text-xl font-bold text-primary mb-3">Электронная почта</h3>
          <p className="text-lg font-semibold text-secondary mb-2">info@paxvision.ua</p>
          <p className="text-sm text-text-muted">Отвечаем в течение 24 часов</p>
        </div>

        {/* Address */}
        <div className="card p-6 text-center">
          <div className="text-4xl mb-4 text-secondary">📍</div>
          <h3 className="font-heading text-xl font-bold text-primary mb-3">Адрес</h3>
          <p className="text-lg font-semibold text-primary mb-2">г. Киев, ул. Сечевых Стрельцов, 50</p>
          <p className="text-sm text-text-muted">Офис и склад</p>
        </div>
      </div>

      {/* Social Networks */}
      <div className="mt-12">
        <h3 className="font-heading text-xl font-bold text-center text-primary mb-6">
          Мы в социальных сетях
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: 'Facebook', icon: 'f', color: 'bg-blue-600', link: 'https://facebook.com' },
            { name: 'Instagram', icon: '📷', color: 'bg-pink-600', link: 'https://instagram.com' },
            { name: 'Telegram', icon: '✈️', color: 'bg-blue-500', link: 'https://telegram.org' },
            { name: 'Viber', icon: '💜', color: 'bg-purple-600', link: 'https://viber.com' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-16 h-16 ${social.color} rounded-xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform shadow-lg`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Why Choose Us Section
const WhyChooseUsSection = () => (
  <section className="bg-background-light py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="section-header text-center">
        <span className="tag">Преимущества</span>
        <h2 className="section-h2 mx-auto max-w-xl">Почему выбирают нас?</h2>
        <p className="section-sub mx-auto max-w-xl mt-2">
          Мы предлагаем полный комплекс услуг и гарантируем качество
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Качественное оборудование',
            desc: 'Только оригинальные товары от ведущих мировых производителей с официальной гарантией',
            icon: '✅',
            color: 'text-secondary',
          },
          {
            title: 'Профессиональный монтаж',
            desc: 'Опытные специалисты с гарантией на работы до 36 месяцев',
            icon: '✅',
            color: 'text-secondary',
          },
          {
            title: 'Поддержка 24/7',
            desc: 'Техническая поддержка и сервисное обслуживание без выходных',
            icon: '✅',
            color: 'text-secondary',
          },
        ].map((item, i) => (
          <div key={i} className="card p-6 group hover:shadow-lg transition-shadow">
            <span className={`text-4xl mb-4 block ${item.color}`}>{item.icon}</span>
            <h3 className="font-heading text-xl font-bold mb-3 text-primary">{item.title}</h3>
            <p className="text-text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Main Page Component
export default function RuPage() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-background-dark py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="flex-1 max-w-2xl">
              <span className="tag">Видеонаблюдение под ключ</span>
              <h1 className="hero-h1">
                See everything.<br />
                <span className="accent">Fear nothing.</span>
              </h1>
              <p className="hero-sub">
                Проектируем, устанавливаем и обслуживаем системы видеонаблюдения для магазинов, офисов, складов и АЗС. 
                Полный контроль — без лишних хлопот.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary text-base px-6 py-3">
                  Заказать консультацию
                </Link>
                <Link href="/services" className="btn-outline text-base px-6 py-3">
                  Наши услуги →
                </Link>
              </div>
            </div>
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Services */}
      <ServicesSection />

      {/* Process */}
      <ProcessSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Partners */}
      <PartnersSection />

      {/* Contacts */}
      <ContactsSection />

      {/* CTA */}
      <CTASection />

      <Footer />
    </main>
  );
}
