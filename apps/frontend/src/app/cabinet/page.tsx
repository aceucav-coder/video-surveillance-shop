'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CabinetPage() {
  const { user, isAuthenticated, isLoading, logout, updateProfile, error } = useAuth();
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'settings'>('profile');
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  // Load user data
  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        address: user.address || ''
      });
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    clearCart();
    router.push('/uk');
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const success = await updateProfile({
      name: profileData.name,
      phone: profileData.phone,
      address: profileData.address
    });

    if (success) {
      setEditMode(false);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background-dark">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin text-4xl text-secondary">⏳</div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-background-mid text-white py-10">
        <div className="container mx-auto px-4">
          <span className="tag mb-3">Особистий кабінет</span>
          <h1 className="font-heading text-3xl md:text-4xl font-black mb-2 text-text-light">
            Ласкаво просимо, {user.name}!
          </h1>
          <p className="text-text-softer">
            Керуйте своїми замовленнями та особистими даними
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white font-heading font-bold">{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary">{user.name}</h3>
                  <p className="text-text-muted text-sm">{user.email}</p>
                </div>

                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-3 rounded-sm transition-colors font-medium ${
                      activeTab === 'profile'
                        ? 'bg-secondary text-white'
                        : 'text-primary hover:bg-primary/5'
                    }`}
                  >
                    👤 Мій профіль
                  </button>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full text-left px-4 py-3 rounded-sm transition-colors font-medium ${
                      activeTab === 'orders'
                        ? 'bg-secondary text-white'
                        : 'text-primary hover:bg-primary/5'
                    }`}
                  >
                    📦 Мої замовлення
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-4 py-3 rounded-sm transition-colors font-medium ${
                      activeTab === 'settings'
                        ? 'bg-secondary text-white'
                        : 'text-primary hover:bg-primary/5'
                    }`}
                  >
                    ⚙️ Налаштування
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 rounded-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                  >
                    🔒 Вийти
                  </button>
                </nav>

                <div className="mt-8 p-4 bg-background-light rounded-lg border border-border/20">
                  <p className="text-sm text-text-muted mb-2">Кошик</p>
                  <p className="text-2xl font-bold text-secondary">{items.length} товарів</p>
                  <p className="text-lg font-semibold text-primary">Сума: {total} ₴</p>
                  <Link 
                    href="/cart" 
                    className="block w-full text-center mt-3 py-2 bg-secondary text-white rounded-sm text-sm font-medium hover:bg-secondary/90 transition-colors"
                  >
                    Перейти до кошика
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {activeTab === 'profile' && (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-2xl font-bold text-primary">Мій профіль</h2>
                    {!editMode && (
                      <button
                        onClick={() => setEditMode(true)}
                        className="py-2 px-4 bg-primary/10 text-primary rounded-sm text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        Редагувати
                      </button>
                    )}
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-sm mb-6 text-sm">
                      {error}
                    </div>
                  )}

                  {editMode ? (
                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-body text-sm font-medium text-primary mb-2">
                            ПІБ *
                          </label>
                          <input
                            type="text"
                            value={profileData.name}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            required
                            className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block font-body text-sm font-medium text-primary mb-2">
                            Електронна пошта *
                          </label>
                          <input
                            type="email"
                            value={profileData.email}
                            readOnly
                            className="w-full px-4 py-3 border border-border rounded-sm bg-gray-50 text-text-muted"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-body text-sm font-medium text-primary mb-2">
                            Телефон
                          </label>
                          <input
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            placeholder="+38 (044) 123-45-67"
                            className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block font-body text-sm font-medium text-primary mb-2">
                            Адреса
                          </label>
                          <input
                            type="text"
                            value={profileData.address}
                            onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                            placeholder="Ваша адреса"
                            className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setEditMode(false)}
                          className="py-2 px-6 bg-border text-primary rounded-sm font-medium hover:bg-primary/10 transition-colors"
                        >
                          Скасувати
                        </button>
                        <button
                          type="submit"
                          className="py-2 px-6 bg-secondary text-white rounded-sm font-medium hover:bg-secondary/90 transition-colors"
                        >
                          Зберегти зміни
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-text-muted mb-1">ПІБ</h3>
                          <p className="text-lg text-primary font-medium">{user.name}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-text-muted mb-1">Електронна пошта</h3>
                          <p className="text-lg text-primary font-medium">{user.email}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-text-muted mb-1">Телефон</h3>
                          <p className="text-lg text-primary">{user.phone || 'Не вказано'}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-text-muted mb-1">Адреса</h3>
                          <p className="text-lg text-primary">{user.address || 'Не вказано'}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-text-muted mb-1">Дата реєстрації</h3>
                        <p className="text-lg text-primary">
                          {new Date(user.createdAt).toLocaleDateString('uk-UA', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-6">Мої замовлення</h2>
                  
                  <div className="bg-primary/5 rounded-lg p-6 text-center mb-8 border border-primary/20">
                    <div className="text-6xl mb-4">📦</div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                      У вас поки що немає замовлень
                    </h3>
                    <p className="text-text-muted mb-4">
                      Оформлюйте замовлення, щоб відстежувати їх статус
                    </p>
                    <Link 
                      href="/catalog" 
                      className="btn-primary inline-block"
                    >
                      Перейти до каталогу
                    </Link>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-semibold text-primary">Історія замовлень</h3>
                    <p className="text-text-muted text-sm">
                      Тут буде відображатися історія ваших замовлень після їх оформлення
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-6">Налаштування</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                        Налаштування сповіщень
                      </h3>
                      <p className="text-text-muted mb-4">
                        Керуйте сповіщеннями про статус замовлень
                      </p>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 text-secondary border-border rounded focus:ring-accent"
                          />
                          <span className="text-text-muted">Сповіщення про нове замовлення</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 text-secondary border-border rounded focus:ring-accent"
                          />
                          <span className="text-text-muted">Сповіщення про зміну статусу</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-5 h-5 text-secondary border-border rounded focus:ring-accent"
                          />
                          <span className="text-text-muted">Рекламні розсилки</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                        Мова інтерфейсу
                      </h3>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="language"
                            value="uk"
                            defaultChecked
                            className="w-4 h-4 text-secondary border-border focus:ring-accent"
                          />
                          <span className="text-text-muted">Українська</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="language"
                            value="ru"
                            className="w-4 h-4 text-secondary border-border focus:ring-accent"
                          />
                          <span className="text-text-muted">Русский</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                        Безпека
                      </h3>
                      <Link 
                        href="/change-password" 
                        className="text-secondary hover:text-accent font-medium"
                      >
                        Змінити пароль →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
