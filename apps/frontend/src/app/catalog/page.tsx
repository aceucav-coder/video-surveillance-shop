'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import { products, getCategories, getBrands } from '@/data/products';

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
  category: { slug: string; nameUk: string; nameRu: string };
  brand: { name: string; slug: string };
}

export default function CatalogPage() {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = getCategories();
  const allBrands = getBrands();

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery === '' || 
      product.nameUk.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameRu.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      product.category.slug === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group products by category
  const productsByCategory: Record<string, number> = {};
  categories.forEach(cat => {
    productsByCategory[cat.slug] = products.filter(p => p.category.slug === cat.slug).length;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 mt-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Каталог продукції</h1>
              <p className="text-xl mb-6 opacity-90">
                Оберіть з {products.length}+ товарів для відеоспостереження
              </p>
              <div className="flex gap-4">
                <Link href="/uk" className="btn-secondary text-blue-400 border-blue-400">
                  На головну
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-blue-800 rounded-2xl p-8 shadow-2xl border border-blue-600">
                <div className="text-center">
                  <div className="text-6xl mb-4">📹</div>
                  <p className="text-lg">IP-камери, реєстратори, комплекти</p>
                  <p className="text-sm opacity-80 mt-2">{products.length} товарів у каталозі</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Пошук товарів..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Усі товари ({products.length})
              </button>
              {categories.map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-1 ${
                    selectedCategory === cat.slug 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.nameUk}</span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                    {productsByCategory[cat.slug] || 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCategory === 'all' ? 'Усі товари' : 
               categories.find(c => c.slug === selectedCategory)?.nameUk || 'Товари'}
              <span className="text-gray-500 ml-2">({filteredProducts.length} товарів)</span>
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Сортування:</span>
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                onChange={(e) => {
                  // Sorting logic would go here
                }}
              >
                <option>За замовчуванням</option>
                <option>Від дешевших до дорожчих</option>
                <option>Від дорожчих до дешевших</option>
                <option>Популярні</option>
                <option>Новинки</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">Товарів не знайдено</h3>
              <p className="text-gray-500">Спробуйте змінити параметри пошуку</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="card group overflow-hidden"
                >
                  <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <img
                      src={product.images[0] || '/placeholder.jpg'}
                      alt={product.nameUk}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(product.nameUk)}`;
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
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">{product.nameUk}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.brand.name}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {product.oldPrice && (
                          <span className="old-price">{product.oldPrice} ₴</span>
                        )}
                        <span className="price">{product.price} ₴</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {product.quantity > 0 ? `${product.quantity} шт.` : 'Під замовлення'}
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Link
                        href={`/catalog/${product.slug}`}
                        className="flex-1 text-center py-2 px-4 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
                      >
                        Деталі
                      </Link>
                      <button 
                        onClick={() => addToCart({
                          id: product.id,
                          slug: product.slug,
                          nameUk: product.nameUk,
                          nameRu: product.nameRu,
                          price: product.price,
                          image: product.images[0],
                          category: product.category.slug
                        })}
                        disabled={!product.isAvailable}
                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          product.isAvailable 
                            ? 'bg-green-600 text-white hover:bg-green-700' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {product.isAvailable ? '🛒 До кошика' : 'Немає в наявності'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Популярні бренди
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {allBrands.map((brand, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="text-lg font-bold text-gray-700">{brand.name}</span>
                <p className="text-xs text-gray-400 text-center mt-1">{brand.count} товарів</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
