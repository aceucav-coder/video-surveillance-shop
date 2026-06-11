'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RegisterPage() {
  const { register, isAuthenticated, isLoading, error } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/cabinet');
    }
  }, [isAuthenticated, router]);

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Паролі не збігаються');
      return false;
    }
    if (password.length < 6) {
      setPasswordError('Пароль повинен містити щонайменше 6 символів');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePassword()) {
      return;
    }

    if (!name || !email || !password) {
      return;
    }

    const success = await register(email, password, name, phone || undefined);
    if (success) {
      router.push('/cabinet');
    }
  };

  return (
    <main className="min-h-screen bg-background-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-background-mid text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <span className="tag mb-3">Реєстрація</span>
          <h1 className="font-heading text-3xl md:text-4xl font-black mb-2 text-text-light">
            Створіть обліковий запис
          </h1>
          <p className="text-text-softer">
            Для отримання доступу до особистого кабінету та збереження замовлень
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
              <h2 className="font-heading text-2xl font-bold text-center text-primary mb-6">
                Створити обліковий запис
              </h2>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-sm mb-6 text-sm">
                  {error}
                </div>
              )}

              {passwordError && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-sm mb-6 text-sm">
                  {passwordError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-primary mb-2">
                    ПІБ *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше ім'я"
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-primary mb-2">
                    Електронна пошта *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-sm font-medium text-primary mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+38 (044) 123-45-67"
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block font-body text-sm font-medium text-primary mb-2">
                    Пароль *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Створіть пароль"
                      required
                      minLength={6}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      <svg className="w-5 h-5 text-text-muted hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-text-muted mt-1">Пароль повинен містити щонайменше 6 символів</p>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block font-body text-sm font-medium text-primary mb-2">
                    Підтвердіть пароль *
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Підтвердіть пароль"
                      required
                      className="w-full px-4 py-3 border border-border rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      <svg className="w-5 h-5 text-text-muted hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 text-secondary border-border rounded focus:ring-accent mt-0.5"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-text-muted">
                    Я погоджуюсь з{' '}
                    <Link href="/terms" className="text-secondary hover:text-accent">
                      Умовами користування
                    </Link>{' '}
                    та{' '}
                    <Link href="/privacy" className="text-secondary hover:text-accent">
                      Політикою конфіденційності
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !name || !email || !password || !confirmPassword}
                  className={`w-full py-4 px-6 rounded-sm font-heading font-bold text-lg transition-colors ${
                    isLoading || !name || !email || !password || !confirmPassword
                      ? 'bg-border text-text-muted cursor-not-allowed'
                      : 'bg-secondary text-white hover:bg-secondary/90'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Реєстрація...
                    </span>
                  ) : (
                    'Зареєструватися'
                  )}
                </button>

                <div className="text-center text-text-muted text-sm pt-2 border-t border-border/20">
                  Або зареєструватися через
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    disabled={isLoading}
                    className="flex-1 py-3 px-4 border border-border rounded-sm text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">G</span>
                    <span className="font-medium">Google</span>
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
                    className="flex-1 py-3 px-4 border border-border rounded-sm text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                  >
                    <span className="text-xl text-blue-600">f</span>
                    <span className="font-medium">Facebook</span>
                  </button>
                </div>

                <div className="text-center text-text-muted text-sm mt-6 pt-4 border-t border-border/20">
                  Вже маєте обліковий запис?{' '}
                  <Link href="/login" className="text-secondary font-medium hover:text-accent">
                    Увійти
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-center mb-8 text-primary">
            Переваги реєстрації
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Швидке оформлення',
                desc: 'Оформлюйте замовлення в кілька кліків',
                icon: '⚡'
              },
              {
                title: 'Історія замовлень',
                desc: 'Відстежуйте всі свої покупки',
                icon: '📋'
              },
              {
                title: 'Персональні знижки',
                desc: 'Отримуйте спеціальні пропозиції',
                icon: '🎁'
              }
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <span className="text-4xl mb-3 block text-secondary">{item.icon}</span>
                <h3 className="font-heading text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
