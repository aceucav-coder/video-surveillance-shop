# PaxVision - Deployment Guide

## 🚀 Without cost deployment on Free Services

This guide provides step-by-step instructions to deploy PaxVision e-commerce platform using only free-tier services.

---

## 📋 Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Vercel        │────▶│  Cloudinary     │     │   SendGrid      │
│   (Frontend)    │     │  (Images/CDN)   │     │   (Emails)      │
└────────┬────────┘     └─────────────────┘     └─────────────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│   Railway       │◀────┤   Neon.tech      │
│   (Backend API) │     │  (PostgreSQL)    │
└─────────────────┘     └─────────────────┘
```

### Free Tier Limits:

| Service | Free Tier | Notes |
|---------|-----------|-------|
| **Vercel** | 100GB bandwidth/month | Next.js optimized |
| **Neon.tech** | 3GB storage, 10M rows | PostgreSQL |
| **Cloudinary** | 25GB/month bandwidth | Image hosting |
| **SendGrid** | 100 emails/day | Transactional emails |
| **Railway** | $5/month free credits | Backend hosting |

---

## Step 1: Set up Vercel for Frontend

### 1.1 Create Vercel Account
1. Go to [https://vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or email
3. Confirm your email address

### 1.2 Import Repository
1. Click **"Add New"** → **"Project"**
2. Select **"Import"** from Git repository
3. Choose `aceucav-coder/video-surveillance-shop`
4. Click **"Import"**

### 1.3 Configure Project
```
Project Name: paxvision-frontend
Framework: Next.js
Root Directory: apps/frontend
Build Command: npm run build
Output Directory: .next
Node.js Version: 18.x
```

### 1.4 Add Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables:

```bash
# Required for Next.js
NEXT_PUBLIC_API_URL=https://your-backend-url.up.railway.app
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name

# Optional - for analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 1.5 Deploy
1. Click **"Deploy"** button
2. Wait for build completion (2-5 minutes)
3. Your site will be live at: `https://paxvision-frontend.vercel.app`

### 1.6 Set up Custom Domain (Optional - Free)
1. Go to **Settings → Domains**
2. Click **"Add Domain"**
3. Enter your free domain from [Freenom](https://www.freenom.com) or use Vercel's free `.vercel.app` subdomain

---

## Step 2: Set up Neon.tech for Database

### 2.1 Create Neon Account
1. Go to [https://neon.tech](https://neon.tech)
2. Sign up with GitHub or email
3. Verify your email

### 2.2 Create Project
1. Click **"New Project"**
2. Enter project name: `paxvision-db`
3. Select region (choose closest to you)
4. Click **"Create Project"**

### 2.3 Get Connection String
1. Go to **Project → Settings → Database**
2. Copy **Connection String** (PostgreSQL):
   ```
   postgresql://user:password@ep-cool-name-123456.us-east-2.aws.neon.tech/paxvision-db?sslmode=require
   ```
3. Save this for backend configuration

### 2.4 Configure Database Schema
Connect using any PostgreSQL client (DBeaver, TablePlus, or [Neon SQL Editor](https://neon.tech/docs/edit/data)):

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  phone VARCHAR(20),
  role VARCHAR(20) DEFAULT 'customer' CHECK (role IN ('customer', 'manager', 'admin')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name_uk VARCHAR(255) NOT NULL,
  name_ru VARCHAR(255) NOT NULL,
  description_uk TEXT,
  description_ru TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(50) NOT NULL,
  brand VARCHAR(50),
  image_url VARCHAR(500),
  stock_quantity INTEGER DEFAULT 0,
  sku VARCHAR(50) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Services table
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name_uk VARCHAR(255) NOT NULL,
  name_ru VARCHAR(255) NOT NULL,
  description_uk TEXT,
  description_ru TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'completed', 'cancelled')),
  total_amount DECIMAL(10,2) NOT NULL,
  shipping_address TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Order items (products)
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  price DECIMAL(10,2) NOT NULL
);

-- Order services
CREATE TABLE order_services (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  service_id INTEGER REFERENCES services(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  price DECIMAL(10,2) NOT NULL
);

-- Cart table (optional - for logged-in users)
CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Cart items
CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES cart(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id),
  service_id INTEGER REFERENCES services(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  type VARCHAR(10) NOT NULL CHECK (type IN ('product', 'service'))
);

-- CRM: Customer interactions
CREATE TABLE customer_interactions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  manager_id INTEGER REFERENCES users(id),
  interaction_type VARCHAR(50) NOT NULL, -- call, email, chat, meeting
  subject VARCHAR(255),
  notes TEXT,
  status VARCHAR(20) DEFAULT 'open',
  created_at TIMESTAMP DEFAULT NOW()
);

-- CRM: Order history for consultants
CREATE TABLE order_history (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  action VARCHAR(50) NOT NULL,
  performed_by INTEGER REFERENCES users(id),
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_brand ON products(brand);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_crm_user ON customer_interactions(user_id);
```

---

## Step 3: Set up Cloudinary for Images

### 3.1 Create Cloudinary Account
1. Go to [https://cloudinary.com](https://cloudinary.com)
2. Click **"Sign up for Free"**
3. Fill in your details
4. Verify email

### 3.2 Get API Credentials
1. Go to **Dashboard → Account → API Keys**
2. Copy:
   - **Cloud Name**: `your-cloud-name`
   - **API Key**: `123456789012345`
   - **API Secret**: `abcdefghijklmnopqrstuvwxyz123456`

### 3.3 Create Upload Preset (for direct uploads from frontend)
1. Go to **Settings → Upload → Upload Presets**
2. Click **"Add upload preset"**
3. Name: `paxvision-products`
4. Signing Mode: **Unsigned** (for testing) or **Signed** (for production)
5. Folder: `paxvision/products`
6. Allowed formats: `jpg, png, webp, svg`
7. Save

### 3.4 Backend Configuration
Add to your backend environment:
```bash
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLOUDINARY_UPLOAD_PRESET=paxvision-products
```

---

## Step 4: Set up SendGrid for Emails

### 4.1 Create SendGrid Account
1. Go to [https://sendgrid.com](https://sendgrid.com)
2. Click **"Try for Free"**
3. Fill in registration form
4. Verify email

### 4.2 Create API Key
1. Go to **Settings → API Keys**
2. Click **"Create API Key"**
3. Name: `paxvision-api-key`
4. Select **Full Access** (or restrict to Mail Send only)
5. Click **"Create & View"**
6. **SAVE THIS KEY - IT WON'T BE SHOWN AGAIN!**

### 4.3 Configure Sender Identity
1. Go to **Settings → Sender Authentication**
2. Click **"Create New Sender"**
3. Choose **"Single Sender Verification"**
4. Enter email: `noreply@paxvision.ua` (or use your own)
5. Enter name: `PaxVision`
6. Complete verification

### 4.4 Backend Configuration
```bash
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@paxvision.ua
SENDGRID_FROM_NAME=PaxVision
```

---

## Step 5: Set up Railway for Backend (Optional)

If you need a backend API server:

### 5.1 Create Railway Account
1. Go to [https://railway.app](https://railway.app)
2. Sign up with GitHub
3. Get $5 free monthly credits

### 5.2 Create Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose `video-surveillance-shop` repository
4. Select **apps/backend** as root directory
5. Click **"Deploy"**

### 5.3 Configure Environment
Add these variables in Railway Dashboard → Variables:
```bash
# Database
DATABASE_URL=postgresql://user:password@ep-cool-name-123456.us-east-2.aws.neon.tech/paxvision-db?sslmode=require

# JWT Secret (generate with: openssl rand -hex 32)
JWT_SECRET=your-64-character-random-string

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@paxvision.ua

# CORS
FRONTEND_URL=https://paxvision-frontend.vercel.app
ALLOWED_ORIGINS=https://paxvision-frontend.vercel.app,http://localhost:3000
```

### 5.4 Deploy
1. Click **"Deploy"** button
2. Backend will be available at: `https://your-project-name.up.railway.app`

---

## Step 6: Update Frontend Configuration

### 6.1 Update `apps/frontend/.env.local`
```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://your-backend-name.up.railway.app

# Cloudinary for direct uploads (if using)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=paxvision-products

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 6.2 Update `apps/frontend/src/lib/api.ts`
```typescript
// Create this file for API calls
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  return response.json();
};

export const fetchProductById = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  return response.json();
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);
  
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );
  return response.json();
};
```

---

## Step 7: Frontend - Update Product Display

### 7.1 Update `apps/frontend/src/app/catalog/page.tsx`
```typescript
'use client';

import { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/api';

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
        // Fallback to local data
        const localData = await import('@/data/products');
        setProducts(localData.default);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Каталог товарів</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="aspect-video bg-gray-100 relative">
        {product.image_url ? (
          <img 
            src={product.image_url} 
            alt={product.name_uk}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name_uk}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {product.brand} | {product.category}
        </p>
        <p className="text-lg font-bold text-secondary mb-3">
          ₴{product.price?.toLocaleString()}
        </p>
        <button className="w-full bg-secondary text-white py-2 px-4 rounded hover:bg-secondary/80 transition-colors">
          Додати до кошика
        </button>
      </div>
    </div>
  );
}
```

---

## Step 8: Shopping Cart Implementation

### 8.1 Update `apps/frontend/src/context/CartContext.tsx`
```typescript
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: number;
  type: 'product' | 'service';
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, type: 'product' | 'service') => void;
  updateQuantity: (id: number, type: 'product' | 'service', quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('paxvision-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('paxvision-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (i) => i.id === item.id && i.type === item.type
      );
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id && i.type === item.type
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number, type: 'product' | 'service') => {
    setCart((prev) => prev.filter((i) => !(i.id === id && i.type === type)));
  };

  const updateQuantity = (id: number, type: 'product' | 'service', quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, type);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === id && i.type === type ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
```

### 8.2 Create Cart Page
Create `apps/frontend/src/app/uk/cart/page.tsx`:
```typescript
'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Кошик покупок</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">Ваш кошик порожній</p>
          <Link 
            href="/catalog" 
            className="bg-secondary text-white px-6 py-3 rounded hover:bg-secondary/80 transition-colors"
          >
            Повернутись до каталогу
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div 
                  key={`${item.id}-${item.type}`}
                  className="border rounded-lg p-4 flex items-center gap-4"
                >
                  {item.imageUrl && (
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.type === 'product' ? 'Товар' : 'Послуга'}
                    </p>
                    <p className="font-bold text-secondary">
                      ₴{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.type, item.quantity - 1)}
                      className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="min-w-[30px] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)}
                      className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.type)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={clearCart}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Очистити кошик
            </button>
          </div>

          {/* Cart Summary */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Разом</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Товари та послуги:</span>
                <span>₴{getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Доставка:</span>
                <span>Безкоштовно</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Всього:</span>
                <span>₴{getCartTotal().toLocaleString()}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="w-full bg-secondary text-white py-3 px-4 rounded text-center block hover:bg-secondary/80 transition-colors"
            >
              Оформити замовлення
            </Link>
            <Link
              href="/catalog"
              className="mt-3 block text-center text-secondary hover:underline"
            >
              Продовжити покупки
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
```

---

## Step 9: Admin/CRM Panel Setup

### 9.1 Create Admin Layout
Create `apps/frontend/src/app/admin/layout.tsx`:
```typescript
'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  // Check if user is admin or manager
  if (user?.role !== 'admin' && user?.role !== 'manager') {
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-primary text-white px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/admin" className="text-xl font-bold">PaxVision CRM</Link>
          <div className="flex items-center gap-6">
            <Link href="/admin/orders" className="hover:text-secondary transition-colors">
              Замовлення
            </Link>
            <Link href="/admin/customers" className="hover:text-secondary transition-colors">
              Клієнти
            </Link>
            <Link href="/admin/products" className="hover:text-secondary transition-colors">
              Товари
            </Link>
            <Link href="/admin/interactions" className="hover:text-secondary transition-colors">
              Взаємодії
            </Link>
            <Link href="/" className="hover:text-secondary transition-colors">
              На сайт
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
```

### 9.2 Create Admin Dashboard
Create `apps/frontend/src/app/admin/page.tsx`:
```typescript
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
    recentOrders: [],
    recentInteractions: [],
  });

  useEffect(() => {
    // Fetch dashboard stats from API
    const fetchStats = async () => {
      try {
        const [ordersRes, customersRes] = await Promise.all([
          fetch('/api/admin/stats'),
          fetch('/api/admin/customers'),
        ]);
        const ordersData = await ordersRes.json();
        const customersData = await customersRes.json();
        
        setStats({
          totalOrders: ordersData.total,
          pendingOrders: ordersData.pending,
          totalCustomers: customersData.total,
          totalRevenue: ordersData.totalRevenue,
          recentOrders: ordersData.recent,
          recentInteractions: [],
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Панель керування</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm mb-2">Загалом замовлень</h3>
          <p className="text-3xl font-bold">{stats.totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm mb-2">Очікують обробки</h3>
          <p className="text-3xl font-bold text-amber-600">{stats.pendingOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm mb-2">Клієнтів</h3>
          <p className="text-3xl font-bold">{stats.totalCustomers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm mb-2">Дохід</h3>
          <p className="text-3xl font-bold text-green-600">₴{stats.totalRevenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Останні замовлення</h2>
            <Link href="/admin/orders" className="text-secondary hover:underline text-sm">
              Усі замовлення
            </Link>
          </div>
          <div className="space-y-3">
            {stats.recentOrders.length > 0 ? (
              stats.recentOrders.map((order: any) => (
                <div key={order.id} className="p-3 border rounded-lg">
                  <div className="flex justify-between">
                    <span>#{order.id}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      order.status === 'pending' ? 'bg-amber-100 text-amber-800' :
                      order.status === 'completed' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="font-semibold">₴{order.totalAmount?.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{order.createdAt}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Немає останніх замовлень</p>
            )}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Останні взаємодії</h2>
            <Link href="/admin/interactions" className="text-secondary hover:underline text-sm">
              Усі взаємодії
            </Link>
          </div>
          <p className="text-gray-500">Взаємодії з клієнтами будуть відображатись тут</p>
        </div>
      </div>
    </div>
  );
}
```

---

## Step 10: Backend API Setup

### 10.1 Update `apps/backend/src/app.ts`
```typescript
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

const prisma = new PrismaClient();
const app = express();

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  credentials: true,
}));
app.use(express.json());

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Routes
app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true, brand: true },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(req.params.id) },
      include: { category: true, brand: true },
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Upload image to Cloudinary
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'paxvision/products' },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(req.file.buffer);
    });
    
    res.json({ url: (result as any).secure_url });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Admin routes
app.get('/api/admin/stats', async (req, res) => {
  try {
    const [totalOrders, pendingOrders, totalRevenue, recentOrders] = await Promise.all([
      prisma.order.count(),
      prisma.order.count({ where: { status: 'pending' } }),
      prisma.order.aggregate({ _sum: { totalAmount: true } }),
      prisma.order.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        include: { user: true, items: true },
      }),
    ]);
    
    res.json({
      total: totalOrders,
      pending: pendingOrders,
      totalRevenue: totalRevenue._sum.totalAmount || 0,
      recent: recentOrders,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
```

---

## Step 11: Environment Configuration

### 11.1 Backend `.env` (apps/backend/.env)
```bash
# Server
PORT=4000
NODE_ENV=production

# Database
DATABASE_URL=postgresql://user:password@ep-cool-name-123456.us-east-2.aws.neon.tech/paxvision-db?sslmode=require

# JWT
JWT_SECRET=your-64-character-random-string-generated-with-openssl-rand-hex-32
JWT_EXPIRES_IN=24h

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@paxvision.ua
SENDGRID_FROM_NAME=PaxVision

# CORS
ALLOWED_ORIGINS=https://paxvision-frontend.vercel.app,http://localhost:3000
FRONTEND_URL=https://paxvision-frontend.vercel.app
```

---

## Step 12: Prisma Schema

### 12.1 Update `apps/backend/prisma/schema.prisma`
```prisma
// This is your Prisma schema file
// Learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            Int      @id @default(autoincrement())
  email         String   @unique
  passwordHash  String
  name          String?
  phone         String?
  role          Role     @default(customer)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  orders        Order[]
  interactions  CustomerInteraction[] @relation("User")
  managedInteractions CustomerInteraction[] @relation("Manager")

  @@map("users")
}

model Product {
  id            Int      @id @default(autoincrement())
  sku           String   @unique
  nameUk        String   @map("name_uk")
  nameRu        String   @map("name_ru")
  descriptionUk String?  @map("description_uk")
  descriptionRu String?  @map("description_ru")
  price         Decimal  @db.Decimal(10, 2)
  categoryId    Int
  category     Category @relation(fields: [categoryId], references: [id])
  brandId       Int?
  brand         Brand?   @relation(fields: [brandId], references: [id])
  imageUrl      String?  @map("image_url")
  stockQuantity Int      @default(0) @map("stock_quantity")
  isActive      Boolean  @default(true)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  orderItems    OrderItem[]
  cartItems     CartItem[]

  @@map("products")
}

model Service {
  id            Int            @id @default(autoincrement())
  nameUk        String         @map("name_uk")
  nameRu        String         @map("name_ru")
  descriptionUk String?        @map("description_uk")
  descriptionRu String?        @map("description_ru")
  price         Decimal        @db.Decimal(10, 2)
  categoryId    Int
  category     ServiceCategory @relation(fields: [categoryId], references: [id])
  isActive      Boolean        @default(true)
  createdAt     DateTime       @default(now())
  orderServices OrderService[]
  cartItems     CartItem[]

  @@map("services")
}

model Category {
  id        Int      @id @default(autoincrement())
  nameUk    String   @unique @map("name_uk")
  nameRu    String   @unique @map("name_ru")
  slug      String   @unique
  products  Product[]
  createdAt DateTime @default(now())

  @@map("categories")
}

model Brand {
  id        Int      @id @default(autoincrement())
  name      String   @unique
  logoUrl   String?  @map("logo_url")
  products  Product[]
  createdAt DateTime @default(now())

  @@map("brands")
}

model ServiceCategory {
  id        Int      @id @default(autoincrement())
  nameUk    String   @unique @map("name_uk")
  nameRu    String   @unique @map("name_ru")
  slug      String   @unique
  services  Service[]
  createdAt DateTime @default(now())

  @@map("service_categories")
}

model Order {
  id              Int                @id @default(autoincrement())
  userId          Int?
  user            User?              @relation(fields: [userId], references: [id])
  status          OrderStatus        @default(pending)
  totalAmount     Decimal            @db.Decimal(10, 2) @map("total_amount")
  shippingAddress String?            @map("shipping_address")
  notes           String?
  createdAt       DateTime           @default(now())
  updatedAt       DateTime           @updatedAt
  items           OrderItem[]
  services        OrderService[]
  history         OrderHistory[]

  @@map("orders")
}

model OrderItem {
  id        Int     @id @default(autoincrement())
  orderId   Int
  order     Order  @relation(fields: [orderId], references: [id], onDelete: Cascade)
  productId Int
  product   Product @relation(fields: [productId], references: [id])
  quantity  Int     @default(1)
  price     Decimal @db.Decimal(10, 2)
  createdAt DateTime @default(now())

  @@map("order_items")
}

model OrderService {
  id        Int     @id @default(autoincrement())
  orderId   Int
  order     Order  @relation(fields: [orderId], references: [id], onDelete: Cascade)
  serviceId Int
  service   Service @relation(fields: [serviceId], references: [id])
  quantity  Int     @default(1)
  price     Decimal @db.Decimal(10, 2)
  createdAt DateTime @default(now())

  @@map("order_services")
}

model Cart {
  id        Int        @id @default(autoincrement())
  userId    Int        @unique
  user      User       @relation(fields: [userId], references: [id])
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  items     CartItem[]

  @@map("cart")
}

model CartItem {
  id        Int    @id @default(autoincrement())
  cartId    Int
  cart      Cart   @relation(fields: [cartId], references: [id], onDelete: Cascade)
  productId Int?
  product   Product? @relation(fields: [productId], references: [id])
  serviceId Int?
  service   Service? @relation(fields: [serviceId], references: [id])
  quantity  Int    @default(1)
  type      ItemType
  createdAt DateTime @default(now())

  @@map("cart_items")
}

model CustomerInteraction {
  id              Int              @id @default(autoincrement())
  userId          Int
  user            User             @relation("User", fields: [userId], references: [id])
  managerId       Int
  manager         User             @relation("Manager", fields: [managerId], references: [id])
  interactionType String            @map("interaction_type")
  subject         String?
  notes           String?
  status          InteractionStatus @default(open)
  scheduledAt     DateTime?        @map("scheduled_at")
  completedAt    DateTime?        @map("completed_at")
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  @@map("customer_interactions")
}

model OrderHistory {
  id          Int           @id @default(autoincrement())
  orderId     Int
  order       Order        @relation(fields: [orderId], references: [id], onDelete: Cascade)
  action      String
  performedBy Int?
  performedByUser User?     @relation(fields: [performedBy], references: [id])
  notes       String?
  createdAt   DateTime      @default(now())

  @@map("order_history")
}

enum Role {
  customer
  manager
  admin
}

enum OrderStatus {
  pending
  confirmed
  processing
  shipped
  completed
  cancelled
}

enum ItemType {
  product
  service
}

enum InteractionStatus {
  open
  in_progress
  completed
  cancelled
}
```

---

## Step 13: Migration & Seed Database

### 13.1 Create Migration
```bash
cd apps/backend
npx prisma migrate dev --name init
```

### 13.2 Seed Database
Create `apps/backend/prisma/seed.ts`:
```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Categories
  const categories = await Promise.all([
    prisma.category.upsert({ where: { slug: 'ip-cameras' }, create: {
      nameUk: 'IP-камери',
      nameRu: 'IP-камеры',
      slug: 'ip-cameras',
    }, update: {} }),
    prisma.category.upsert({ where: { slug: 'analog-cameras' }, create: {
      nameUk: 'Аналогові камери',
      nameRu: 'Аналоговые камеры',
      slug: 'analog-cameras',
    }, update: {} }),
    prisma.category.upsert({ where: { slug: 'recorders' }, create: {
      nameUk: 'Відеореєстратори',
      nameRu: 'Видеорегистраторы',
      slug: 'recorders',
    }, update: {} }),
  ]);

  // Seed Brands
  const brands = await Promise.all([
    prisma.brand.upsert({ where: { name: 'Hikvision' }, create: {
      name: 'Hikvision',
      logoUrl: '/brands/hikvision.png',
    }, update: {} }),
    prisma.brand.upsert({ where: { name: 'Dahua' }, create: {
      name: 'Dahua',
      logoUrl: '/brands/dahua.png',
    }, update: {} }),
  ]);

  // Seed Products
  const products = await Promise.all([
    prisma.product.upsert({ where: { sku: 'HIK-DS2CD2043G2-I' }, create: {
      sku: 'HIK-DS2CD2043G2-I',
      nameUk: 'IP-камера Hikvision DS-2CD2043G2-I 4MP',
      nameRu: 'IP-камера Hikvision DS-2CD2043G2-I 4MP',
      descriptionUk: 'Високої якості 4MP IP-камера з нічним баченням до 40м',
      descriptionRu: 'Качественная 4MP IP-камера с ночным видением до 40м',
      price: 3500,
      categoryId: categories[0].id,
      brandId: brands[0].id,
      imageUrl: 'https://res.cloudinary.com/your-cloud/image/upload/v1/paxvision/products/hikvision-camera.jpg',
      stockQuantity: 50,
    }, update: {} }),
    prisma.product.upsert({ where: { sku: 'DAH-IPC-HDW4431C-ASE' }, create: {
      sku: 'DAH-IPC-HDW4431C-ASE',
      nameUk: 'IP-камера Dahua IPC-HDW4431C-ASE 4MP',
      nameRu: 'IP-камера Dahua IPC-HDW4431C-ASE 4MP',
      descriptionUk: '4MP IP-камера Dahua з Starlight технологією',
      descriptionRu: '4MP IP-камера Dahua с технологией Starlight',
      price: 3200,
      categoryId: categories[0].id,
      brandId: brands[1].id,
      imageUrl: 'https://res.cloudinary.com/your-cloud/image/upload/v1/paxvision/products/dahua-camera.jpg',
      stockQuantity: 30,
    }, update: {} }),
  ]);

  // Seed Service Categories
  const serviceCategories = await Promise.all([
    prisma.serviceCategory.upsert({ where: { slug: 'installation' }, create: {
      nameUk: 'Монтаж',
      nameRu: 'Монтаж',
      slug: 'installation',
    }, update: {} }),
    prisma.serviceCategory.upsert({ where: { slug: 'consultation' }, create: {
      nameUk: 'Консультація',
      nameRu: 'Консультация',
      slug: 'consultation',
    }, update: {} }),
  ]);

  // Seed Services
  const services = await Promise.all([
    prisma.service.upsert({ where: { id: 1 }, create: {
      nameUk: 'Монтаж камери',
      nameRu: 'Монтаж камеры',
      descriptionUk: 'Професійний монтаж однієї IP-камери',
      descriptionRu: 'Профессиональный монтаж одной IP-камеры',
      price: 800,
      categoryId: serviceCategories[0].id,
    }, update: {} }),
    prisma.service.upsert({ where: { id: 2 }, create: {
      nameUk: 'Онлайн консультація',
      nameRu: 'Онлайн консультация',
      descriptionUk: '30 хвилин консультації по вибору обладнання',
      descriptionRu: '30 минут консультации по выбору оборудования',
      price: 0,
      categoryId: serviceCategories[1].id,
    }, update: {} }),
  ]);

  // Seed Admin User
  const adminPassword = await Bun.password.hash('admin123'); // Or use bcrypt in Node
  const admin = await prisma.user.upsert({ where: { email: 'admin@paxvision.ua' }, create: {
    email: 'admin@paxvision.ua',
    passwordHash: adminPassword,
    name: 'Admin User',
    role: 'admin',
  }, update: {} });

  console.log('Database seeded successfully!');
  console.log('Admin user created:', admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### 13.3 Run Seed
```bash
cd apps/backend
npx ts-node prisma/seed.ts
```

---

## Step 14: Testing the Deployment

### 14.1 Test Frontend
1. Visit: `https://paxvision-frontend.vercel.app`
2. Check all pages load correctly
3. Test product catalog
4. Test add to cart functionality
5. Test bilingual support

### 14.2 Test API Endpoints
```bash
# Test products endpoint
curl https://your-backend.up.railway.app/api/products

# Test health check
curl https://your-backend.up.railway.app/api/health

# Test upload (with file)
curl -X POST -F "image=@test.jpg" https://your-backend.up.railway.app/api/upload
```

---

## Step 15: Monitoring & Maintenance

### 15.1 Vercel Monitoring
- Go to **Vercel Dashboard → Project → Analytics**
- Set up alerts for errors
- Monitor bandwidth usage

### 15.2 Neon Database
- Go to **Neon Dashboard → Project → Metrics**
- Monitor query performance
- Check storage usage

### 15.3 Cloudinary
- Go to **Cloudinary Dashboard → Analytics**
- Monitor image usage
- Check bandwidth consumption

---

## Troubleshooting

### Common Issues

#### 1. CORS Errors
```bash
# Check CORS configuration in backend
ALLOWED_ORIGINS=https://your-frontend.vercel.app,http://localhost:3000
```

#### 2. Database Connection Failed
```bash
# Verify Neon connection string
DATABASE_URL=postgresql://user:password@ep-cool-name-123456.region.aws.neon.tech/dbname?sslmode=require
```

#### 3. Image Upload Failed
```bash
# Verify Cloudinary credentials
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-key
CLOUDINARY_API_SECRET=your-secret
```

#### 4. Build Failed on Vercel
- Check Node.js version (must be 18.x)
- Verify all dependencies are installed
- Check for missing environment variables

#### 5. Environment Variables Not Loading
- Ensure variables are added in Vercel Dashboard
- Variables must be prefixed with `NEXT_PUBLIC_` to be accessible in frontend
- Restart deployment after adding new variables

---

## Cost Optimization

### Current Free Usage:
- **Vercel**: ~$0/month (100GB bandwidth)
- **Neon**: ~$0/month (3GB storage)
- **Cloudinary**: ~$0/month (25GB bandwidth)
- **SendGrid**: ~$0/month (100 emails/day)
- **Railway**: ~$0/month ($5 free credits)

### Total: $0/month ✅

### To Stay Free:
1. Monitor Vercel bandwidth (stay under 100GB)
2. Limit Neon database to <3GB
3. Keep Cloudinary under 25GB/month
4. Send <100 emails/day with SendGrid
5. Use Railway free credits wisely

---

## Next Steps for Development

### Priority Features:
1. ✅ **Product Catalog with Real Images** - Using Cloudinary
2. ✅ **Shopping Cart** - With localStorage + backend sync
3. ✅ **Order Management** - Full CRUD in admin panel
4. ⏳ **User Authentication** - JWT-based with role management
5. ⏳ **CRM System** - Customer interactions tracking
6. ⏳ **Order History** - For both customers and managers
7. ⏳ **Email Notifications** - Order confirmations, updates
8. ⏳ **Search & Filters** - Product search, category filters
9. ⏳ **Payment Integration** - LiqPay or Privat24 (Ukrainian payment systems)
10. ⏳ **Delivery Options** - Nova Poshta, UkrPoshta integration

### Long-term Roadmap:
- Mobile App (React Native)
- Live Chat Support
- Loyalty Program
- Multi-currency Support
- Analytics Dashboard
- AI Product Recommendations

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Neon.tech Documentation](https://neon.tech/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [SendGrid Documentation](https://docs.sendgrid.com)
- [Railway Documentation](https://docs.railway.app)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)

---

## Support

For issues with:
- **Vercel**: support@vercel.com
- **Neon**: support@neon.tech
- **Cloudinary**: support@cloudinary.com
- **SendGrid**: support@sendgrid.com
- **Railway**: support@railway.app

---

*Created with ❤️ for PaxVision*
*Last updated: 2025-06-11*
