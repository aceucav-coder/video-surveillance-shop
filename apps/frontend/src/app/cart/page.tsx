'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Header from '@/components/layout/Header';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total, clearCart, itemCount } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const shippingCost = 0; // Free shipping for now
  const grandTotal = total + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setOrderSuccess(true);
    clearCart();
    setIsSubmitting(false);
    
    // Scroll to success message
    setTimeout(() => {
      const element = document.getElementById('success-message');
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (orderSuccess) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <section className="py-20 text-center">
          <div id="success-message" className="container mx-auto px-4">
            <div className="bg-green-50 rounded-3xl p-12 max-w-2xl mx-auto border border-green-200">
              <div className="text-8xl mb-6">🎉</div>
              <h1 className="text-4xl font-bold text-green-700 mb-4">
                Дякуємо за замовлення!
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Ваше замовлення №<span className="font-bold text-blue-600">{Math.floor(Math.random() * 10000) + 1000}</span> 
                успішно оформлено.
              </p>
              <p className="text-gray-600 mb-8">
                Наш менеджер зв&apos;яжеться з вами найближчим часом для підтвердження замовлення.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/catalog" className="btn-primary">
                  Повернутися до каталогу
                </Link>
                <Link href="/uk" className="btn-secondary text-blue-600 border-blue-600">
                  На головну
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-4xl font-bold text-gray-700 mb-4">
              Кошик порожній
            </h1>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Додайте товари до кошика, щоб оформити замовлення
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog" className="btn-primary">
                Перейти до каталогу
              </Link>
              <Link href="/services" className="btn-secondary text-blue-600 border-blue-600">
                Ознайомитися з послугами
              </Link>
            </div>
          </div>
        </section>
        
        {/* Recommended Products */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Популярні товари
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { id: '1', nameUk: 'IP-камера Hikvision 4MP', price: 4500, image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop' },
                { id: '2', nameUk: 'Відеореєстратор Dahua 16CH', price: 12500, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
                { id: '3', nameUk: 'Wi-Fi камера EZVIZ', price: 3200, image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop' },
              ].map((product, i) => (
                <div key={i} className="card overflow-hidden">
                  <div className="relative aspect-video bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.nameUk}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">{product.nameUk}</h3>
                    <div className="flex items-center justify-between">
                      <span className="price">{product.price} ₴</span>
                      <Link 
                        href="/catalog" 
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        Деталі →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 mt-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Кошик покупок</h1>
          <p className="opacity-80">{itemCount} товар{itemCount > 1 ? 'ів' : ''} на суму {total} ₴</p>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="card p-4 flex gap-4 items-center"
                >
                  {item.image && (
                    <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.nameUk}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">{item.nameUk}</h3>
                    <p className="text-sm text-gray-500">{item.category && `Категорія: ${item.category}`}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.price} ₴ × {item.quantity} = 
                      <span className="font-bold text-blue-600">{item.price * item.quantity} ₴</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                    >
                      −
                    </button>
                    <span className="font-bold text-lg min-w-[30px] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 rounded-lg bg-red-100 hover:bg-red-200 flex items-center justify-center text-red-600 transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Рахунок
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Товари ({itemCount})</span>
                    <span>{total} ₴</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Доставка</span>
                    <span>{shippingCost === 0 ? 'Безкоштовно' : `${shippingCost} ₴`}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-bold text-gray-800">
                      <span>Всього:</span>
                      <span className="text-blue-600">{grandTotal} ₴</span>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше ім'я"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    name="address"
                    placeholder="Адреса доставки"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  <textarea
                    name="notes"
                    placeholder="Коментар до замовлення (необов'язково)"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-colors ${
                      isSubmitting || items.length === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⏳</span>
                        Обробка...
                      </span>
                    ) : (
                      `Оформити замовлення: ${grandTotal} ₴`
                    )}
                  </button>
                  
                  <Link
                    href="/catalog"
                    className="block text-center text-blue-600 hover:text-blue-700 text-sm"
                  >
                    ← Продовжити покупки
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
