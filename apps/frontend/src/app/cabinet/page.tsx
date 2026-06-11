'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';

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
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin text-4xl">⏳</div>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 mt-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Особистий кабінет</h1>
          <p className="opacity-80">Ласкаво просимо, {user.name}!</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white">{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
                  <p className="text-gray-500 text-sm">{user.email}</p>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    👤 Мій профіль
                  </button>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'orders'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    📦 Мої замовлення
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'settings'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    ⚙️ Налаштування
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                  >
                    🔒 Вийти
                  </button>
                </nav>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-600 mb-2">Кошик</p>
                  <p className="text-2xl font-bold text-blue-700">{items.length} товарів</p>
                  <p className="text-lg font-semibold text-gray-800">Сума: {total} ₴</p>
                  <Link 
                    href="/cart" 
                    className="block w-full text-center mt-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Перейти до кошика
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {activeTab === 'profile' && (
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Мій профіль</h2>
                    {!editMode && (
                      <button
                        onClick={() => setEditMode(true)}
                        className="py-2 px-4 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        Редагувати
                      </button>
                    )}
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
                      {error}
                    </div>
                  )}

                  {editMode ? (
                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            ПІБ *
                          </label>
                          <input
                            type="text"
                            value={profileData.name}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Електронна пошта *
                          </label>
                          <input
                            type="email"
                            value={profileData.email}
                            readOnly
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Телефон
                          </label>
                          <input
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            placeholder="+38 (044) 123-45-67"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Адреса
                          </label>
                          <input
                            type="text"
                            value={profileData.address}
                            onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                            placeholder="Ваша адреса"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setEditMode(false)}
                          className="py-2 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                        >
                          Скасувати
                        </button>
                        <button
                          type="submit"
                          className="py-2 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                          Зберегти зміни
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">ПІБ</h3>
                          <p className="text-lg text-gray-800">{user.name}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">Електронна пошта</h3>
                          <p className="text-lg text-gray-800">{user.email}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">Телефон</h3>
                          <p className="text-lg text-gray-800">{user.phone || 'Не вказано'}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">Адреса</h3>
                          <p className="text-lg text-gray-800">{user.address || 'Не вказано'}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Дата реєстрації</h3>
                        <p className="text-lg text-gray-800">
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
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Мої замовлення</h2>
                  
                  <div className="bg-blue-50 rounded-lg p-6 text-center mb-8">
                    <div className="text-6xl mb-4">📦</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      У вас поки що немає замовлень
                    </h3>
                    <p className="text-gray-600 mb-4">
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
                    <h3 className="text-lg font-semibold text-gray-700"> historia</h3>
                    <p className="text-gray-500 text-sm">
                      Тут буде відображатися історія ваших замовлень після їх оформлення
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Налаштування</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Налаштування сповіщень
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Керуйте сповіщеннями про status замовлень
                      </p>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                          />
                          <span className="text-gray-700">Сповіщення про нове замовлення</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                          />
                          <span className="text-gray-700">Сповіщення про зміну статусу</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                          />
                          <span className="text-gray-700">Рекламні розсилки</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Мова інтерфейсу
                      </h3>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="language"
                            value="uk"
                            defaultChecked
                            className="w-4 h-4 text-blue-600 border-gray-300"
                          />
                          <span className="text-gray-700">Українська</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="language"
                            value="ru"
                            className="w-4 h-4 text-blue-600 border-gray-300"
                          />
                          <span className="text-gray-700">Русский</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Безпека
                      </h3>
                      <Link 
                        href="/change-password" 
                        className="text-blue-600 hover:text-blue-700"
                      >
                        Змінити пароль
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
