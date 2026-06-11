import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RuPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-600/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            <span className="text-blue-300">Video</span><span className="text-white">Shop</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto drop-shadow-md">
            Магазин видеонаблюдения №1 в Украине
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
            IP-камеры, видеорегистраторы, аксессуары и профессиональный монтаж от ведущих мировых брендов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog" className="btn-primary text-lg px-8 py-4">
              📹 Перейти в каталог
            </Link>
            <Link href="/services" className="btn-secondary text-blue-600 border-blue-400 text-lg px-8 py-4">
              🔧 Наши услуги
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Категории товаров
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Выберите необходимое оборудование для вашей системы видеонаблюдения
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'IP-камеры',
                desc: 'Высокая разрешающая способность, ночной режим, купольные и сферические камеры',
                icon: '📹',
                color: 'from-blue-500 to-blue-700',
                link: '/catalog/ip-cameras'
              },
              {
                name: 'Аналоговые камеры',
                desc: 'Традиционные камеры с высоким качеством изображения',
                icon: '📺',
                color: 'from-green-500 to-green-700',
                link: '/catalog/analog-cameras'
              },
              {
                name: 'Видеорегистраторы',
                desc: 'NVR, DVR регистраторы для хранения видео',
                icon: '💾',
                color: 'from-purple-500 to-purple-700',
                link: '/catalog/recorders'
              },
              {
                name: 'Кабели и питание',
                desc: 'Кабели, блоки питания, разъемы',
                icon: '🔌',
                color: 'from-orange-500 to-orange-700',
                link: '/catalog/cables'
              },
              {
                name: 'Крепления',
                desc: 'Крепления для камер всех типов',
                icon: '🔧',
                color: 'from-red-500 to-red-700',
                link: '/catalog/mounts'
              },
              {
                name: 'Готовые комплекты',
                desc: 'Комплекты видеонаблюдения под ключ',
                icon: '📦',
                color: 'from-indigo-500 to-indigo-700',
                link: '/catalog/kits'
              },
            ].map((cat, i) => (
              <Link
                key={i}
                href={cat.link}
                className={`card p-6 text-white bg-gradient-to-br ${cat.color} hover:scale-105 transition-transform group`}
              >
                <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{cat.icon}</span>
                <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-sm opacity-90">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Наши услуги
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Профессиональные услуги от установки до обслуживания
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Монтаж видеонаблюдения',
                desc: 'Профессиональный монтаж системы видеонаблюдения любой сложности',
                price: 'от 1500 ₴/проект',
                icon: '🔨',
                link: '/services#installation'
              },
              {
                name: 'Настройка оборудования',
                desc: 'Полная настройка камер, регистраторов и сетевого оборудования',
                price: 'от 500 ₴/час',
                icon: '⚙️',
                link: '/services#configuration'
              },
              {
                name: 'Техническое обслуживание',
                desc: 'Регулярный осмотр и профилактика систем видеонаблюдения',
                price: 'от 300 ₴/месяц',
                icon: '🔧',
                link: '/services#maintenance'
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.link}
                className="card p-6 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4 block text-blue-600">{service.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <p className="text-primary font-bold text-lg">{service.price}</p>
                <span className="text-blue-600 text-sm font-medium mt-2 inline-block">
                  Подробнее →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="btn-secondary text-blue-600 border-blue-600 px-8 py-3"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Почему выбирают нас?
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Мы предлагаем полный комплекс услуг и гарантируем качество
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Качественное оборудование',
                desc: 'Только оригинальные товары от ведущих мировых производителей с официальной гарантией',
                icon: '✅',
                color: 'green'
              },
              {
                title: 'Профессиональный монтаж',
                desc: 'Опытные специалисты с гарантией на работы до 36 месяцев',
                icon: '✅',
                color: 'blue'
              },
              {
                title: 'Поддержка 24/7',
                desc: 'Техническая поддержка и сервисное обслуживание без выходных',
                icon: '✅',
                color: 'purple'
              },
            ].map((item, i) => (
              <div key={i} className="card p-6 group hover:shadow-lg transition-shadow">
                <span className={`text-4xl mb-4 block text-${item.color}-600`}>{item.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Наши партнеры
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Мы сотрудничаем с ведущими мировыми брендами оборудования видеонаблюдения
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Hikvision', desc: 'Мировой лидер в производстве систем видеонаблюдения', logo: 'Hikvision' },
              { name: 'Dahua', desc: 'Инновационные решения для безопасности и наблюдения', logo: 'Dahua' },
              { name: 'EZVIZ', desc: 'Умные камеры для дома и бизнеса', logo: 'EZVIZ' },
              { name: 'Uniview', desc: 'Профессиональное видеонаблюдение для предприятий', logo: 'Uniview' },
              { name: 'Axis', desc: 'Премиальные решения для сетевого видео', logo: 'Axis' },
              { name: 'Bosch', desc: 'Немецкое качество и надежность', logo: 'Bosch' },
            ].map((brand, i) => (
              <div
                key={i}
                className="card p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{brand.logo}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{brand.name}</h3>
                <p className="text-sm text-gray-500">{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Контакты
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и заказа
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone & Email */}
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4 text-green-600">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Телефон</h3>
              <p className="text-lg font-semibold text-primary mb-2">+38 (044) 123-45-67</p>
              <p className="text-sm text-gray-500">Пн-Пт: 9:00 - 18:00</p>
            </div>
            
            {/* Email */}
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4 text-blue-600">📧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Электронная почта</h3>
              <p className="text-lg font-semibold text-primary mb-2">info@videoshop.ua</p>
              <p className="text-sm text-gray-500">Отвечаем в течение 24 часов</p>
            </div>
            
            {/* Address */}
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4 text-purple-600">📍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Адрес</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">г. Киев, ул. Сечевых Стрельцов, 50</p>
              <p className="text-sm text-gray-500">Офис и склад</p>
            </div>
          </div>
          
          {/* Social Networks */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нужна консультация?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Оставьте заявку и наш специалист свяжется с вами в течение 30 минут
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Перейти в каталог
            </Link>
            <Link href="/services" className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-400 transition-colors border-2 border-blue-400">
              Ознакомиться с услугами
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
