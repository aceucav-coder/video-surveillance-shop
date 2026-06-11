'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function LoginPage() {
  const { login, loginWithGoogle, loginWithFacebook, isAuthenticated, isLoading, error } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/cabinet');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      return;
    }

    const success = await login(email, password);
    if (success) {
      router.push('/cabinet');
    }
  };

  const handleGoogleLogin = async () => {
    const success = await loginWithGoogle();
    if (success) {
      router.push('/cabinet');
    }
  };

  const handleFacebookLogin = async () => {
    const success = await loginWithFacebook();
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
          <span className="tag mb-3">Авторизація</span>
          <h1 className="font-heading text-3xl md:text-4xl font-black mb-2 text-text-light">
            Вхід до особистого кабінету
          </h1>
          <p className="text-text-softer">
            Увійдіть, щоб отримати доступ до своїх замовлень та особистих даних
          </p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-12 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
              <h2 className="font-heading text-2xl font-bold text-center text-primary mb-6">
                Вхід
              </h2>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-sm mb-6 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
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
                  <label htmlFor="password" className="block font-body text-sm font-medium text-primary mb-2">
                    Пароль *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Введіть пароль"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 text-secondary border-border rounded focus:ring-accent"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-text-muted">
                      Запам'ятати мене
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-secondary hover:text-accent font-medium">
                    Забули пароль?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email || !password}
                  className={`w-full py-4 px-6 rounded-sm font-heading font-bold text-lg transition-colors ${
                    isLoading || !email || !password
                      ? 'bg-border text-text-muted cursor-not-allowed'
                      : 'bg-secondary text-white hover:bg-secondary/90'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Вхід...
                    </span>
                  ) : (
                    'Увійти'
                  )}
                </button>

                <div className="text-center text-text-muted text-sm pt-2 border-t border-border/20">
                  Або увійти через
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    className="flex-1 py-3 px-4 border border-border rounded-sm text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">G</span>
                    <span className="font-medium">Google</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleFacebookLogin}
                    disabled={isLoading}
                    className="flex-1 py-3 px-4 border border-border rounded-sm text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                  >
                    <span className="text-xl text-blue-600">f</span>
                    <span className="font-medium">Facebook</span>
                  </button>
                </div>
              </form>

              <div className="mt-8 text-center pt-6 border-t border-border/20">
                <p className="text-text-muted">
                  Не маєте облікового запису?{' '}
                  <Link href="/register" className="text-secondary font-medium hover:text-accent">
                    Зареєструватися
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-text-muted text-sm">
            <p>
              Авторизуючись, ви погоджуєтеся з нашими{' '}
              <Link href="/terms" className="text-secondary hover:text-accent">
                Умовами користування
              </Link>{' '}
              та{' '}
              <Link href="/privacy" className="text-secondary hover:text-accent">
                Політикою конфіденційності
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
