import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function RuPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Head>
        <title>VideoShop - Магазин видеонаблюдения №1 в Украине</title>
        <meta name="description" content="IP-камеры, видеорегистраторы, аксессуары и услуги монтажа от ведущих мировых брендов" />
      </Head>
      
      <Header />
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-600/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            <span className="text-blue-300">Video</span><span className="text-white">Shop</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Магазин видеонаблюдения №1 в Украине
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-80">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Категории товаров
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'IP-камеры',
                desc: 'Высокая разрешающая способность, ночной режим, купол и сферические камеры',
                icon: '📹',
                color: 'from-blue-500 to-blue-700'
              },
              {
                name: 'Аналоговые камеры',
                desc: 'Традиционные камеры с высоким качеством изображения',
                icon: '📺',
                color: 'from-green-500 to-green-700'
              },
              {
                name: 'Видеорегистраторы',
                desc: 'NVR, DVR регистраторы для хранения видео',
                icon: '💾',
                color: 'from-purple-500 to-purple-700'
              },
              {
                name: 'Кабели и питание',
                desc: 'Кабели, блоки питания, разъемы',
                icon: '🔌',
                color: 'from-orange-500 to-orange-700'
              },
              {
                name: 'Крепления',
                desc: 'Крепления для камер всех типов',
                icon: '🔧',
                color: 'from-red-500 to-red-700'
              },
              {
                name: 'Готовые комплекты',
                desc: 'Комплекты видеонаблюдения под ключ',
                icon: '📦',
                color: 'from-indigo-500 to-indigo-700'
              },
            ].map((cat, i) => (
              <Link
                key={i}
                href={`/catalog/${cat.name.toLowerCase().replace(/ /g, '-')}`}
                className={`card p-6 text-white bg-gradient-to-br ${cat.color} hover:scale-105 transition-transform`}
              >
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-sm opacity-90">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Монтаж видеонаблюдения',
                desc: 'Профессиональный монтаж систем видеонаблюдения любой сложности',
                price: 'от 500 ₴/м²',
                icon: '🔨'
              },
              {
                name: 'Настройка оборудования',
                desc: 'Полная настройка камер, регистраторов и сетевого оборудования',
                price: 'от 800 ₴',
                icon: '⚙️'
              },
              {
                name: 'Техническое обслуживание',
                desc: 'Регулярный осмотр и профилактика систем видеонаблюдения',
                price: 'от 300 ₴/мес',
                icon: '🔧'
              },
            ].map((service, i) => (
              <div key={i} className="card p-6 text-center">
                <span className="text-4xl mb-3 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <p className="text-primary font-bold text-lg">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Наши партнеры
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Hikvision', 'Dahua', 'EZVIZ', 'Uniview', 'Axis', 'Bosch'].map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-16 w-40 bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <span className="text-xl font-bold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Качественное оборудование',
                desc: 'Только оригинальные товары от ведущих мировых производителей',
                icon: '✅'
              },
              {
                title: 'Профессиональный монтаж',
                desc: 'Опытные специалисты с гарантией на работы',
                icon: '✅'
              },
              {
                title: 'Поддержка 24/7',
                desc: 'Техническая поддержка и сервисное обслуживание',
                icon: '✅'
              },
            ].map((item, i) => (
              <div key={i} className="card p-6">
                <span className="text-3xl mb-3 block text-green-600">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VideoShop</h3>
              <p className="text-gray-400">
                Магазин оборудования видеонаблюдения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/catalog/ip-cameras" className="hover:text-white">IP-камеры</Link></li>
                <li><Link href="/catalog/recorders" className="hover:text-white">Регистраторы</Link></li>
                <li><Link href="/catalog/services" className="hover:text-white">Услуги</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Язык</h4>
              <div className="space-y-2">
                <Link href="/uk" className="block text-gray-400 hover:text-white">🇺🇦 Українська</Link>
                <Link href="/ru" className="block text-blue-400 hover:text-white">🇷🇺 Русский</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-gray-400">+38 (044) 123-45-67</p>
              <p className="text-gray-400">info@videoshop.ua</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 VideoShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
