import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function UkPage() {
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
            Магазин відеоспостереження №1 в Україні
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
            IP-камери, відеореєстратори, аксесуари та професійний монтаж від провідних світових брендів
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog" className="btn-primary text-lg px-8 py-4">
              📹 Перейти до каталогу
            </Link>
            <Link href="/services" className="btn-secondary text-blue-600 border-blue-400 text-lg px-8 py-4">
              🔧 Наші послуги
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Категорії товарів
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Оберіть необхідне обладнання для вашої системи відеоспостереження
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'IP-камери',
                desc: 'Висока роздільна здатність, нічний режим, купол та кулеві камери',
                icon: '📹',
                color: 'from-blue-500 to-blue-700',
                link: '/catalog/ip-cameras'
              },
              {
                name: 'Аналогові камери',
                desc: 'Традиційні камери з високою якістю зображення',
                icon: '📺',
                color: 'from-green-500 to-green-700',
                link: '/catalog/analog-cameras'
              },
              {
                name: 'Відеореєстратори',
                desc: 'NVR, DVR реєстратори для зберігання відео',
                icon: '💾',
                color: 'from-purple-500 to-purple-700',
                link: '/catalog/recorders'
              },
              {
                name: 'Кабелі та живлення',
                desc: 'Кабелі, блоки живлення, роз\'єми',
                icon: '🔌',
                color: 'from-orange-500 to-orange-700',
                link: '/catalog/cables'
              },
              {
                name: 'Кріплення',
                desc: 'Кріплення для камер усіх типів',
                icon: '🔧',
                color: 'from-red-500 to-red-700',
                link: '/catalog/mounts'
              },
              {
                name: 'Готові комплекти',
                desc: 'Комплекти відеоспостереження під ключ',
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
            Наші послуги
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Професійні послуги від установки до обслуговування
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Монтаж відеоспостереження',
                desc: 'Професійний монтаж системи відеоспостереження будь-якої складності',
                price: 'від 1500 ₴/проект',
                icon: '🔨',
                link: '/services#installation'
              },
              {
                name: 'Налаштування обладнання',
                desc: 'Повна налаштування камер, реєстраторів та мережевого обладнання',
                price: 'від 500 ₴/година',
                icon: '⚙️',
                link: '/services#configuration'
              },
              {
                name: 'Технічне обслуговування',
                desc: 'Регулярний огляд та профілактика систем відеоспостереження',
                price: 'від 300 ₴/місяць',
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
                  Детальніше →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="btn-secondary text-blue-600 border-blue-600 px-8 py-3"
            >
              Усі послуги
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Чому вибирають нас?
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Ми пропонуємо повний комплекс послуг та гарантуємо якість
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Якісне обладнання',
                desc: 'Тільки оригінальні товари від провідних світових виробників з офіційною гарантією',
                icon: '✅',
                color: 'green'
              },
              {
                title: 'Професійний монтаж',
                desc: 'Досвідчені фахівці з гарантією на роботи до 36 місяців',
                icon: '✅',
                color: 'blue'
              },
              {
                title: 'Підтримка 24/7',
                desc: 'Технічна підтримка та сервісне обслуговування без вихідних',
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
            Наші партнери
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Ми співпрацюємо з провідними світовими брендами обладнання відеоспостереження
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Hikvision', desc: 'Світовий лідер у виробництві систем відеоспостереження', logo: 'Hikvision' },
              { name: 'Dahua', desc: 'Інноваційні рішення для безпеки та спостереження', logo: 'Dahua' },
              { name: 'EZVIZ', desc: 'Розумні камери для дому та бізнесу', logo: 'EZVIZ' },
              { name: 'Uniview', desc: 'Професійне відеоспостереження для підприємств', logo: 'Uniview' },
              { name: 'Axis', desc: 'Преміальні рішення для мережевого відео', logo: 'Axis' },
              { name: 'Bosch', desc: 'Німецька якість та надійність', logo: 'Bosch' },
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
            Контакти
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Зв\'яжіться з нами для консультації та замовлення
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">Електронна пошта</h3>
              <p className="text-lg font-semibold text-primary mb-2">info@videoshop.ua</p>
              <p className="text-sm text-gray-500">Відповідаємо протягом 24 годин</p>
            </div>
            
            {/* Address */}
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4 text-purple-600">📍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Адреса</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">м. Київ, вул. Січових Стрільців, 50</p>
              <p className="text-sm text-gray-500">Офіс та склад</p>
            </div>
          </div>
          
          {/* Social Networks */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
              Ми в соціальних мережах
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
            Потрібна консультація?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Залиште заявку і наш фахівець зв\'яжеться з вами протягом 30 хвилин
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Перейти до каталогу
            </Link>
            <Link href="/services" className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-400 transition-colors border-2 border-blue-400">
              Ознайомитися з послугами
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
