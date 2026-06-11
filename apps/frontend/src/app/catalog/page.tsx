'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ProductCard } from '@/components/catalog/ProductCard';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const categories = getCategories();
  const allBrands = getBrands();

  // Filter products
  let filteredProducts = [...products].filter(product => {
    const matchesSearch = searchQuery === '' || 
      product.nameUk.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameRu.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      product.category.slug === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort products
  switch (sortBy) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'featured':
      filteredProducts.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
      break;
    default:
      break;
  }

  // Group products by category
  const productsByCategory: Record<string, number> = {};
  categories.forEach(cat => {
    productsByCategory[cat.slug] = products.filter(p => p.category.slug === cat.slug).length;
  });

  return (
    <main className="min-h-screen bg-background-dark">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-background-mid text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="tag mb-3">Каталог продукції</span>
              <h1 className="font-heading text-3xl md:text-5xl font-black mb-4 text-text-light">
                Оберіть обладнання для відеоспостереження
              </h1>
              <p className="text-xl mb-6 text-text-softer">
                IP-камери, відеореєстратори, аксесуари та komplexні рішення від провідних брендів
              </p>
              <div className="flex gap-4">
                <Link href="/uk" className="btn-primary">
                  На головну
                </Link>
                <Link href="/services" className="btn-outline text-text-light border-text-softer hover:border-accent">
                  Послуги →
                </Link>
              </div>
            </div>
            <div className="flex-1 relative hidden md:block">
              <div className="bg-primary/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-accent/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">📹</div>
                  <p className="text-lg text-text-light">IP-камери, реєстратори, комплекти</p>
                  <p className="text-sm text-text-softer mt-2">{products.length} товарів у каталозі</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Пошук товарів..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-sm font-medium transition-all ${
                  selectedCategory === 'all' 
                    ? 'bg-secondary text-white' 
                    : 'bg-white text-primary border border-border hover:border-secondary'
                }`}
              >
                Усі товари ({products.length})
              </button>
              {categories.map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-sm font-medium transition-all flex items-center gap-1 ${
                    selectedCategory === cat.slug 
                      ? 'bg-secondary text-white' 
                      : 'bg-white text-primary border border-border hover:border-secondary'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.nameUk}</span>
                  <span className="text-xs bg-accent/20 text-primary px-2 py-0.5 rounded-full">
                    {productsByCategory[cat.slug] || 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Results */}
      <section className="py-12 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary">
                {selectedCategory === 'all' ? 'Усі товари' : 
                 categories.find(c => c.slug === selectedCategory)?.nameUk || 'Товари'}
                <span className="text-text-muted ml-2">({filteredProducts.length} товарів)</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-muted">Сортування:</span>
              <select 
                className="px-4 py-2 border border-border rounded-sm bg-white text-primary focus:outline-none focus:ring-1 focus:ring-accent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">За замовчуванням</option>
                <option value="price-asc">Від дешевших до дорожчих</option>
                <option value="price-desc">Від дорожчих до дешевших</option>
                <option value="featured">Популярні</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Товарів не знайдено</h3>
              <p className="text-text-muted">Спробуйте змінити параметри пошуку</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-center mb-8 text-primary">
            Популярні бренди
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {allBrands.map((brand, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer group"
              >
                <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{brand.name}</span>
                <p className="text-xs text-text-muted text-center mt-1">{brand.count} товарів</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
