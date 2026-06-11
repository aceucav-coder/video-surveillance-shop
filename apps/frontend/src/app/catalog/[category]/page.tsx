'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';

interface Product {
  id: string;
  slug: string;
  nameUk: string;
  nameRu: string;
  price: number;
  oldPrice?: number;
  isAvailable: boolean;
  isFeatured: boolean;
  isOnSale: boolean;
  quantity: number;
  images: string[];
  descriptionUk: string;
  descriptionRu: string;
  specifications: Record<string, string>;
  category: { slug: string; nameUk: string; nameRu: string };
  brand: { name: string };
}

const products: Product[] = [
  {
    id: '1',
    slug: 'hikvision-ds-2cd2043g2-i',
    nameUk: 'IP-камера Hikvision DS-2CD2043G2-I 4MP',
    nameRu: 'IP-камера Hikvision DS-2CD2043G2-I 4MP',
    price: 4500,
    oldPrice: 5200,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 15,
    images: ['https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'],
    descriptionUk: 'IP-камера Hikvision з роздільною здатністю 4MP, нічним баченням до 30м, захистом від вологи IP67. Ідеальна для зовнішнього спостереження.',
    descriptionRu: 'IP-камера Hikvision с разрешением 4MP, ночным видением до 30м, защитой от влаги IP67. Идеальна для наружного наблюдения.',
    specifications: {
      'Роздільна здатність': '4MP (2560x1440)',
      'Нічний режим': 'До 30м',
      'Кут огляду': '110°',
      'Захист': 'IP67',
      'Живлення': 'PoE / 12V DC'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Hikvision' }
  },
  {
    id: '2',
    slug: 'dahua-nvr5216-4ks2',
    nameUk: 'Відеореєстратор Dahua NVR5216-4KS2 16-канальний',
    nameRu: 'Видеорегистратор Dahua NVR5216-4KS2 16-канальный',
    price: 12500,
    oldPrice: 14000,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 8,
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'],
    descriptionUk: '16-канальний NVR реєстратор Dahua з підтримкою 4K роздільної здатності. Об\'єм жорсткого диску до 10ТБ, підтримка PoE.',
    descriptionRu: '16-канальный NVR регистратор Dahua с поддержкой 4K разрешения. Объем жесткого диска до 10ТБ, поддержка PoE.',
    specifications: {
      'Кількість каналів': '16',
      'Роздільна здатність': '4K UHD',
      'Підтримка PoE': 'Так',
      'Об\'єм HDD': 'До 10ТБ',
      'Аудіо': 'Так'
    },
    category: { slug: 'recorders', nameUk: 'Відеореєстратори', nameRu: 'Видеорегистраторы' },
    brand: { name: 'Dahua' }
  },
  {
    id: '3',
    slug: 'ezviz-c6n',
    nameUk: 'Wi-Fi камера EZVIZ C6N 1080p',
    nameRu: 'Wi-Fi камера EZVIZ C6N 1080p',
    price: 3200,
    oldPrice: 3800,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 20,
    images: ['https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=600&fit=crop'],
    descriptionUk: 'Wi-Fi камера EZVIZ C6N з роздільною здатністю 1080p, двостороннім аудіо, детекцією руху. Керування через додаток на смартфоні.',
    descriptionRu: 'Wi-Fi камера EZVIZ C6N с разрешением 1080p, двусторонним аудио, детекцией движения. Управление через приложение на смартфоне.',
    specifications: {
      'Роздільна здатність': '1080p',
      'Двосторонній аудіо': 'Так',
      'Детекція руху': 'Так',
      'Кут огляду': '105°',
      'Живлення': 'USB / Адаптер'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'EZVIZ' }
  },
];

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { addToCart } = useCart();
  const categorySlug = params.category;
  const categoryName = decodeURIComponent(categorySlug);
  
  // Find products in this category
  const categoryProducts = products.filter(p => p.category.slug === categorySlug);
  
  if (categoryProducts.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Категорію не знайдено</h1>
            <p className="text-gray-500 mb-8">Спробуйте іншу категорію</p>
            <Link href="/catalog" className="btn-primary inline-block">
              до каталогу
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const categoryInfo = categoryProducts[0].category;
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 mt-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <nav className="text-sm mb-4">
                <Link href="/uk" className="hover:text-blue-200">Головна</Link>
                <span className="mx-2">/</span>
                <Link href="/catalog" className="hover:text-blue-200">Каталог</Link>
                <span className="mx-2">/</span>
                <span>{categoryInfo.nameUk}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryInfo.nameUk}</h1>
              <p className="text-xl mb-6 opacity-90">
                {categoryProducts.length} товарів у категорії
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="card overflow-hidden"
              >
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src={product.images[0]}
                    alt={product.nameUk}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(product.nameUk)}`;
                    }}
                  />
                  {product.isOnSale && (
                    <span className="absolute top-3 left-3 badge-sale">-Акція!</span>
                  )}
                  {product.isFeatured && (
                    <span className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Популярне
                    </span>
                  )}
                  {!product.isAvailable && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium">
                        Немає в наявності
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{product.nameUk}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.brand.name}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.descriptionUk}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {product.oldPrice && (
                        <span className="old-price">{product.oldPrice} ₴</span>
                      )}
                      <span className="price text-xl">{product.price} ₴</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.quantity > 0 ? `${product.quantity} шт.` : 'Під замовлення'}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-500">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <button 
                      onClick={() => addToCart({
                        id: product.id,
                        slug: product.slug,
                        nameUk: product.nameUk,
                        nameRu: product.nameRu,
                        price: product.price,
                        image: product.images[0],
                        category: product.category.slug,
                        type: 'product'
                      })}
                      className="flex-1 py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      🛒 Додати до кошика
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Інші категорії
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { slug: 'ip-cameras', nameUk: 'IP-камери', icon: '📹' },
              { slug: 'analog-cameras', nameUk: 'Аналогові камери', icon: '📺' },
              { slug: 'recorders', nameUk: 'Відеореєстратори', icon: '💾' },
              { slug: 'cables', nameUk: 'Кабелі', icon: '🔌' },
              { slug: 'mounts', nameUk: 'Кріплення', icon: '🔧' },
              { slug: 'kits', nameUk: 'Комплекти', icon: '📦' },
            ].map((cat, i) => (
              <Link
                key={i}
                href={`/catalog/${cat.slug}`}
                className={`card p-4 text-center transition-all ${
                  cat.slug === categorySlug ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <span className="text-3xl block mb-2">{cat.icon}</span>
                <span className="font-medium">{cat.nameUk}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
