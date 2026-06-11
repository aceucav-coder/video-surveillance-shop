import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'], 
  variable: '--font-body',
});

const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'VideoShop - Професійне відеоспостереження | Монтаж під ключ',
  description: 'Проєктування, встановлення та обслуговування систем відеоспостереження для магазинів, офісів, складів та АЗС. IP-камери, реєстратори, хмарний відеозапис.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${montserrat.variable} font-body text-text`}>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
