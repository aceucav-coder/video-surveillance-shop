'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
      <main className="min-h-screen bg-background-dark">
        <Header />
        <section className="py-16 md:py-24 text-center">
          <div id="success-message" className="container mx-auto px-4">
            <div className="bg-secondary/10 rounded-xl p-8 md:p-12 max-w-2xl mx-auto border border-secondary/20">
              <div className="text-8xl mb-6">🎉</div>
              <h1 className="font-heading text-3xl md:text-4xl font-black text-secondary mb-4">
                Дякуємо за замовлення!
              </h1>
              <p className="text-xl text-primary mb-6">
                Ваше замовлення №<span className="font-bold text-secondary">{Math.floor(Math.random() * 10000) + 1000}</span> 
                успішно оформлено.
              </p>
              <p className="text-text-muted mb-8">
                Наш менеджер зв&apos;яжеться з вами найближчим часом для підтвердження замовлення.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/catalog" className="btn-primary">
                  Повернутися до каталогу
                </Link>
                <Link href="/uk" className="btn-outline text-primary border-primary">
                  На головну
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background-dark">
        <Header />
        <section className="py-16 md:py-24 text-center">
          <div className="container mx-auto px-4">
            <div className="bg-primary/80 rounded-xl p-8 md:p-12 max-w-2xl mx-auto border border-accent/20">
              <div className="text-8xl mb-6">🛒</div>
              <h1 className="font-heading text-3xl md:text-4xl font-black text-text-light mb-4">
                Кошик порожній
              </h1>
              <p className="text-text-softer mb-8 max-w-md mx-auto">
                Додайте товари до кошика, щоб оформити замовлення
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/catalog" className="btn-primary">
                  Перейти до каталогу
                </Link>
                <Link href="/services" className="btn-outline text-text-light border-border hover:border-accent">
                  Ознайомитися з послугами
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recommended Products */}
        <section className="py-12 bg-background-light">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-center mb-8 text-primary">
              Популярні товари
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { id: '1', nameUk: 'IP-камера Hikvision 4MP', price: 4500, image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop' },
                { id: '2', nameUk: 'Відеореєстратор Dahua 16CH', price: 12500, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
                { id: '3', nameUk: 'Wi-Fi камера EZVIZ', price: 3200, image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop' },
              ].map((product, i) => (
                <div key={i} className="card overflow-hidden">
                  <div className="relative aspect-video bg-gray-50 rounded-t-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.nameUk}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-primary mb-1 line-clamp-1">{product.nameUk}</h3>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-heading text-lg font-bold text-secondary">{product.price} ₴</span>
                      <Link 
                        href="/catalog" 
                        className="text-sm text-secondary hover:text-accent font-medium"
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
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background-dark">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-background-mid text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-3xl font-black text-text-light mb-1">
                Кошик покупок
              </h1>
              <p className="text-text-softer">
                {itemCount} товар{itemCount > 1 ? 'ів' : ''} на суму <span className="font-bold text-accent">{total} ₴</span>
              </p>
            </div>
            <Link href="/catalog" className="btn-outline text-text-light border-border hover:border-accent">
              ← Продовжити покупки
            </Link>
          </div>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-8 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-heading text-xl font-bold text-primary mb-4">
                Товари у кошику
              </h2>
              
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="card p-4 flex gap-4 items-center"
                >
                  {item.image && (
                    <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.nameUk}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-primary mb-1">{item.nameUk}</h3>
                    {item.category && (
                      <p className="text-sm text-text-muted">{item.category}</p>
                    )}
                    {item.unit && (
                      <p className="text-xs text-text-muted mt-1">
                        {item.unitLabel}: {item.unit}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-sm bg-border hover:bg-text-muted/10 flex items-center justify-center text-primary transition-colors"
                    >
                      −
                    </button>
                    <span className="font-heading font-bold text-lg min-w-[30px] text-center text-primary">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-sm bg-border hover:bg-text-muted/10 flex items-center justify-center text-primary transition-colors"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 rounded-sm bg-red-100 hover:bg-red-200 flex items-center justify-center text-red-600 transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-8 shadow-sm border border-border">
                <h2 className="font-heading text-xl font-bold text-primary mb-6">
                  Рахунок
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-text-muted">
                    <span>Товари ({itemCount})</span>
                    <span className="font-medium text-primary">{total} ₴</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Доставка</span>
                    <span className="font-medium text-primary">{shippingCost === 0 ? 'Безкоштовно' : `${shippingCost} ₴`}</span>
                  </div>
                  <div className="border-t border-border/30 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-primary">Всього:</span>
                      <span className="text-secondary">{grandTotal} ₴</span>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше ім'я *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <textarea
                    name="address"
                    placeholder="Адреса доставки"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                  <textarea
                    name="notes"
                    placeholder="Коментар до замовлення (необов'язково)"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className={`w-full py-4 px-6 rounded-sm font-heading font-bold text-lg transition-colors ${
                      isSubmitting || items.length === 0
                        ? 'bg-border text-text-muted cursor-not-allowed'
                        : 'bg-secondary text-white hover:bg-secondary/90'
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
