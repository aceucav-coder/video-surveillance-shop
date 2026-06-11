'use client';

import { useState, useEffect } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function ConsultationModal({ isOpen, onClose, serviceName }: ConsultationModalProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isCalling, setIsCalling] = useState(false);

  // Таймер для дзвінка
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCalling && timeLeft !== null && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (isCalling && timeLeft === 0) {
      setIsCalling(false);
      // Дзвінок закінчився - можливо відкрити спливаюче вікно
      alert('Час вичерпано! Спробуйте ще раз.');
    }
    return () => clearTimeout(timer);
  }, [isCalling, timeLeft]);

  const startCallTimer = () => {
    setSelectedOption('call');
    setIsCalling(true);
    setTimeLeft(60); // 1 хвилина = 60 секунд
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption === 'email' && email) {
      alert(`Дякуємо! Ми зв'яжемося з вами на ${email} найближчим часом.`);
      onClose();
    } else if (selectedOption === 'call' && phone) {
      alert(`Дякуємо! Очікуйте дзвінок на ${phone} протягом 1 хвилини.`);
      startCallTimer();
    }
  };

  const formatTime = (seconds: number | null) => {
    if (seconds === null) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            {serviceName ? `Консультація: ${serviceName}` : 'Отримати консультацію'}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="text-xl">×</span>
          </button>
        </div>

        <p className="text-gray-600 mb-6">
          Оберіть зручний спосіб зв&apos;язку:
        </p>

        {/* Options */}
        <div className="space-y-4 mb-6">
          {/* Email Option */}
          <button
            onClick={() => setSelectedOption('email')}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              selectedOption === 'email'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-semibold text-gray-800">Електронна пошта</h3>
                <p className="text-sm text-gray-500">Відповімо протягом 24 годин</p>
              </div>
            </div>
          </button>

          {/* Messenger Option */}
          <button
            onClick={() => setSelectedOption('messenger')}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              selectedOption === 'messenger'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">💬</span>
              <div>
                <h3 className="font-semibold text-gray-800">Месенджери</h3>
                <p className="text-sm text-gray-500">Telegram, Viber, WhatsApp</p>
              </div>
            </div>
          </button>

          {/* Call Option */}
          <button
            onClick={() => setSelectedOption('call')}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              selectedOption === 'call'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-semibold text-gray-800">Дзвінок</h3>
                <p className="text-sm text-gray-500">Фахівець зателефонує вам</p>
              </div>
            </div>
          </button>
        </div>

        {/* Selected Option Form */}
        {selectedOption === 'email' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ваша електронна пошта *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Відправити запит
            </button>
          </form>
        )}

        {selectedOption === 'messenger' && (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              Оберіть месенджер для зв&apos;язку:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://t.me/videoshop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
              >
                <span className="text-2xl">✈️</span>
                <span className="text-sm">Telegram</span>
              </a>
              <a
                href="https://viber.com/videoshop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors"
              >
                <span className="text-2xl">💜</span>
                <span className="text-sm">Viber</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
              >
                <span className="text-2xl">📱</span>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {selectedOption === 'call' && (
          <div className="space-y-4">
            {isCalling ? (
              <div className="text-center py-6">
                <div className="text-6xl mb-4">{timeLeft !== null ? formatTime(timeLeft) : '00:00'}</div>
                <p className="text-lg font-semibold text-gray-800">
                  Очікуйте дзвінок...
                </p>
                <p className="text-gray-500 text-sm">
                  Фахівець зателефонує вам протягом {formatTime(timeLeft)}
                </p>
                <button
                  onClick={() => {
                    setIsCalling(false);
                    setTimeLeft(null);
                    setSelectedOption(null);
                  }}
                  className="mt-4 py-2 px-6 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Скасувати
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваш номер телефону *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+38 (044) 123-45-67"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
                >
                  Замовити дзвінок
                </button>
              </form>
            )}
          </div>
        )}

        {/* Close button at bottom */}
        {!isCalling && (
          <button
            onClick={onClose}
            className="mt-4 w-full py-2 px-6 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Закрити
          </button>
        )}
      </div>
    </div>
  );
}
