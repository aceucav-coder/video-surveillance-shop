# VideoShop - Магазин відеоспостереження

## 📹 Про проект

**VideoShop** - це повноцінний MVP інтернет-магазин обладнання для відеоспостереження з:
- Каталогом 50+ товарів у 7 категоріях
- Системою замовлення послуг (20 послуг у 5 категоріях)
- Авторизацією користувачів (вхід/реєстрація/особистий кабінет)
- Кошиком покупок з підтримкою товарів та послуг

## 🚀 Функціонал

### ✅ Реалізовано

- **Каталог товарів** - 57 товарів у категоріях:
  - IP-камери
  - Аналогові камери
  - Відеореєстратори
  - Кабелі та живлення
  - Кріплення
  - Готові комплекти
  - Аксесуари

- **Послуги** - 20 послуг у 5 категоріях:
  - Монтаж
  - Налаштування
  - Обслуговування
  - Ремонт
  - Консультація

- **Авторизація**:
  - Реєстрація користувачів
  - Вхід/вихід
  - Особистий кабінет з:
    - Профілем користувача
    - Історією замовлень
    - Налаштуваннями
  - Авторизація через Google та Facebook (demo)

- **Кошик покупок**:
  - Додавання товарів
  - Додавання послуг
  - Зміна кількості
  - Видалення
  - Збереження в localStorage

- **Двомовність**: Українська та Російська

### 📁 Структура проекту

```
video-surveillance-shop/
├── apps/
│   ├── backend/          # Backend (Node.js + Express + Prisma)
│   │   ├── src/
│   │   │   ├── app.ts
│   │   │   ├── index.ts
│   │   │   └── config/
│   │   └── prisma/
│   │       └── schema.prisma
│   │
│   └── frontend/        # Frontend (Next.js 14 + TypeScript)
│       ├── src/
│       │   ├── app/     # Pages
│       │   │   ├── uk/
│       │   │   ├── ru/
│       │   │   ├── catalog/
│       │   │   ├── services/
│       │   │   ├── login/
│       │   │   ├── register/
│       │   │   ├── cabinet/
│       │   │   └── cart/
│       │   │
│       │   ├── components/
│       │   │   ├── layout/    # Header, Footer
│       │   │   └── ui/        # UI components
│       │   │
│       │   ├── context/      # React Context (Auth, Cart)
│       │   ├── data/         # Products, Services
│       │   └── lib/
│       │
│       ├── next.config.js
│       ├── tailwind.config.js
│       └── postcss.config.js
│
├── docker-compose.yml
└── README.md
```

## 🛠 Технології

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Context API** для управління станом
- **localStorage** для збереження кошика

### Backend (заготовка)
- **Node.js**
- **Express**
- **Prisma ORM**
- **PostgreSQL**

### Інфраструктура
- **Docker & Docker Compose**

## 🏃‍♂️ Запуск проекту

### Frontend

```bash
cd apps/frontend
npm install
npm run dev
```

Відкрити [http://localhost:3000](http://localhost:3000)

### Backend (для розробки)

```bash
cd apps/backend
npm install
npm run dev
```

API буде доступний на [http://localhost:4000](http://localhost:4000)

### через Docker

```bash
docker-compose up -d
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:4000](http://localhost:4000)

## 📦 Основні сторінки

| Маршрут | Опис |
|---------|------|
| `/uk` | Головна сторінка (Українська) |
| `/ru` | Головна сторінка (Російська) |
| `/catalog` | Каталог усіх товарів |
| `/catalog/[category]` | Товари за категорією |
| `/services` | Усі послуги |
| `/login` | Вхід |
| `/register` | Реєстрація |
| `/cabinet` | Особистий кабінет |
| `/cart` | Кошик покупок |

## 🎯 API Endpoints (Backend)

### Користувачі
- `POST /api/auth/register` - Реєстрація
- `POST /api/auth/login` - Вхід
- `GET /api/auth/me` - Поточний користувач

### Продукти
- `GET /api/products` - Усі продукти
- `GET /api/products/:id` - Один продукт
- `GET /api/products/category/:slug` - Продукти за категорією

### Послуги
- `GET /api/services` - Усі послуги
- `GET /api/services/:id` - Одна послуга

### Кошик
- `GET /api/cart` - Отримати кошик
- `POST /api/cart` - Додати до кошика
- `DELETE /api/cart/:id` - Видалити з кошика

## 📊 Статистика проекту

- **Товари**: 57 у 7 категоріях
- **Послуги**: 20 у 5 категоріях
- **Бренди**: 8 (Hikvision, Dahua, EZVIZ, Uniview, Axis, Bosch, Samsung, Panasonic)
- **Сторінки**: 10+ 
- **Компоненти**: 20+

## 🔧 Maiбутні покращення

- [ ] Додати реальну автентифікацію через JWT
- [ ] Підключити базу даних
- [ ] Додати оплату через LiqPay/Privat24
- [ ] Додати адмін-панель
- [ ] Налаштувати доставку
- [ ] Додати відгуки та рейтинги
- [ ] SEO оптимізація
- [ ] Тестування

## 🤝 Внесок

1. Форкніть репозиторій
2. Створіть гілку (`git checkout -b feature/your-feature`)
3. Зробіть коміт (`git commit -m 'Add some feature'`)
4. Запуште (`git push origin feature/your-feature`)
5. Відкрийте Pull Request

## 📄 Ліцензія

MIT License

## 📞 Контакти

- Email: info@videoshop.ua
- Телефон: +38 (044) 123-45-67
- Адреса: м. Київ, вул. Січових Стрільців, 50

---

Створено з ❤️ для України
