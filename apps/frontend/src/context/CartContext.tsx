'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string;
  slug: string;
  nameUk: string;
  nameRu: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
  type: 'product' | 'service';
  unit?: string;
  unitLabel?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  serviceCount: number;
  productCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('videoshop-cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('videoshop-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => {
      return prev.map(item => {
        if (item.id !== id) return item;
        const newQuantity = item.quantity + delta;
        return newQuantity <= 0 
          ? { ...item, quantity: 1 }
          : { ...item, quantity: newQuantity };
      });
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const serviceCount = items.filter(i => i.type === 'service').reduce((sum, item) => sum + item.quantity, 0);
  const productCount = items.filter(i => i.type === 'product').reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart,
        total,
        itemCount,
        serviceCount,
        productCount
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
