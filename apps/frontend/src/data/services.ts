interface Service {
  id: string;
  slug: string;
  nameUk: string;
  nameRu: string;
  descriptionUk: string;
  descriptionRu: string;
  basePrice: number;
  unit: string;
  unitLabel: string;
  priceNote?: string;
  features: string[];
  icon: string;
  image: string;
  category: { slug: string; nameUk: string; nameRu: string };
}

interface ServiceCategory {
  id: string;
  nameUk: string;
  nameRu: string;
  slug: string;
  descriptionUk: string;
  descriptionRu: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'installation',
    nameUk: 'Монтаж',
    nameRu: 'Монтаж',
    slug: 'installation',
    descriptionUk: 'Професійний монтаж систем відеоспостереження будь-якої складності',
    descriptionRu: 'Профессиональный монтаж систем видеонаблюдения любой сложности'
  },
  {
    id: 'configuration',
    nameUk: 'Налаштування',
    nameRu: 'Настройка',
    slug: 'configuration',
    descriptionUk: 'Повна налаштування обладнання для відеоспостереження',
    descriptionRu: 'Полная настройка оборудования для видеонаблюдения'
  },
  {
    id: 'maintenance',
    nameUk: 'Обслуговування',
    nameRu: 'Обслуживание',
    slug: 'maintenance',
    descriptionUk: 'Технічне обслуговування та підтримка систем відеоспостереження',
    descriptionRu: 'Техническое обслуживание и поддержка систем видеонаблюдения'
  },
  {
    id: 'repair',
    nameUk: 'Ремонт',
    nameRu: 'Ремонт',
    slug: 'repair',
    descriptionUk: 'Ремонт та заміна обладнання відеоспостереження',
    descriptionRu: 'Ремонт и замена оборудования видеонаблюдения'
  },
  {
    id: 'consultation',
    nameUk: 'Консультація',
    nameRu: 'Консультация',
    slug: 'consultation',
    descriptionUk: 'Професійна консультація щодо вибору та установки систем відеоспостереження',
    descriptionRu: 'Профессиональная консультация по выбору и установке систем видеонаблюдения'
  }
];

export const services: Service[] = [
  // Installation Services
  {
    id: 's1',
    slug: 'basic-installation',
    nameUk: 'Базовий монтаж системи відеоспостереження',
    nameRu: 'Базовый монтаж системы видеонаблюдения',
    descriptionUk: 'Монтаж до 4 камер з підключенням до існуючої мережі. Включає налаштування обладнання та тестування системи.',
    descriptionRu: 'Монтаж до 4 камер с подключением к существующей сети. Включает настройку оборудования и тестирование системы.',
    basePrice: 1500,
    unit: 'project',
    unitLabel: 'проект',
    priceNote: 'ціна за об\'єкт',
    features: [
      'Монтаж до 4 IP-камер',
      'Прокладка кабелю до 50м',
      'Підключення до мережі',
      'Налаштування NVR/DVR',
      'Тестування системи',
      'Гарантія 12 місяців'
    ],
    icon: '🔨',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    category: { slug: 'installation', nameUk: 'Монтаж', nameRu: 'Монтаж' }
  },
  {
    id: 's2',
    slug: 'professional-installation',
    nameUk: 'Професійний монтаж з кабельними каналами',
    nameRu: 'Профессиональный монтаж с кабельными каналами',
    descriptionUk: 'Комплексний монтаж з прокладкою кабельних каналів, установкою кріплень та захистом обладнання.',
    descriptionRu: 'Комплексный монтаж с прокладкой кабельных каналов, установкой креплений и защитой оборудования.',
    basePrice: 3500,
    unit: 'project',
    unitLabel: 'проект',
    priceNote: 'ціна за об\'єкт',
    features: [
      'Монтаж 5+ камер',
      'Прокладка кабельних каналів',
      'Установка кріплень',
      'Захист від негоди',
      'Пусконалагоджувальні роботи',
      'Гарантія 24 місяці'
    ],
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    category: { slug: 'installation', nameUk: 'Монтаж', nameRu: 'Монтаж' }
  },
  {
    id: 's3',
    slug: 'wireless-installation',
    nameUk: 'Монтаж безпровідної системи',
    nameRu: 'Монтаж беспроводной системы',
    descriptionUk: 'Установка Wi-Fi камер без прокладки кабелю. Ідеально для приватних будинків та офісів.',
    descriptionRu: 'Установка Wi-Fi камер без прокладки кабеля. Идеально для частных домов и офисов.',
    basePrice: 2500,
    unit: 'project',
    unitLabel: 'проект',
    priceNote: 'ціна за об\'єкт',
    features: [
      'Установка Wi-Fi камер',
      'Налаштування мережі',
      'Синхронізація з хмарним сховищем',
      'Мобільний доступ',
      'Швидкий монтаж',
      'Гарантія 12 місяців'
    ],
    icon: '📡',
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop',
    category: { slug: 'installation', nameUk: 'Монтаж', nameRu: 'Монтаж' }
  },
  {
    id: 's4',
    slug: 'outdoor-installation',
    nameUk: 'Монтаж зовнішньої системи',
    nameRu: 'Монтаж наружной системы',
    descriptionUk: 'Установка камер для зовнішнього спостереження з захистом від погодних умов.',
    descriptionRu: 'Установка камер для наружного наблюдения с защитой от погодных условий.',
    basePrice: 4500,
    unit: 'project',
    unitLabel: 'проект',
    priceNote: 'ціна за об\'єкт',
    features: [
      'Установка зовнішніх камер',
      'Захист від дощу та снігу (IP66/67)',
      'Монтаж на фасад будівлі',
      'Прокладка кабелю в гофрі',
      'Налаштування нічного режиму',
      'Гарантія 24 місяці'
    ],
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    category: { slug: 'installation', nameUk: 'Монтаж', nameRu: 'Монтаж' }
  },
  {
    id: 's5',
    slug: 'commercial-installation',
    nameUk: 'Монтаж для комерційних об\'єктів',
    nameRu: 'Монтаж для коммерческих объектов',
    descriptionUk: 'Професійний монтаж для магазинів, офісів, складів та інших комерційних приміщень.',
    descriptionRu: 'Профессиональный монтаж для магазинов, офисов, складов и других коммерческих помещений.',
    basePrice: 8000,
    unit: 'project',
    unitLabel: 'проект',
    priceNote: 'ціна за об\'єкт',
    features: [
      'Монтаж 8+ камер',
      'Повне покриття приміщення',
      'Інтеграція з охоронною сигналізацією',
      'Налаштування запису за розкладом',
      'Хмарне сховище',
      'Гарантія 36 місяців'
    ],
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    category: { slug: 'installation', nameUk: 'Монтаж', nameRu: 'Монтаж' }
  },

  // Configuration Services
  {
    id: 's6',
    slug: 'basic-configuration',
    nameUk: 'Базове налаштування системи',
    nameRu: 'Базовая настройка системы',
    descriptionUk: 'Налаштування IP-адрес, мережевих параметрів та базових функцій камер.',
    descriptionRu: 'Настройка IP-адресов, сетевых параметров и базовых функций камер.',
    basePrice: 500,
    unit: 'hour',
    unitLabel: 'година',
    features: [
      'Налаштування мережі',
      'Встановлення IP-адрес',
      'Перевірка підключення',
      'Оновлення прошивки',
      'Тестування роботи'
    ],
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    category: { slug: 'configuration', nameUk: 'Налаштування', nameRu: 'Настройка' }
  },
  {
    id: 's7',
    slug: 'advanced-configuration',
    nameUk: 'Розширене налаштування',
    nameRu: 'Расширенная настройка',
    descriptionUk: 'Повне налаштування систем з детекцією руху, записом за розкладом та інтеграцією з іншими системами.',
    descriptionRu: 'Полная настройка систем с детекцией движения, записью по расписанию и интеграцией с другими системами.',
    basePrice: 1200,
    unit: 'project',
    unitLabel: 'проект',
    features: [
      'Детекція руху',
      'Запис за розкладом',
      'Налаштування тривог',
      'Інтеграція з охоронними системами',
      'Хмарне сховище',
      'Мобільні сповіщення'
    ],
    icon: '🎛️',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    category: { slug: 'configuration', nameUk: 'Налаштування', nameRu: 'Настройка' }
  },
  {
    id: 's8',
    slug: 'nvr-configuration',
    nameUk: 'Налаштування відеореєстратора',
    nameRu: 'Настройка видеорегистратора',
    descriptionUk: 'Повна налаштування відеореєстратора з підключенням всіх камер та налаштуванням запису.',
    descriptionRu: 'Полная настройка видеорегистратора с подключением всех камер и настройкой записи.',
    basePrice: 800,
    unit: 'unit',
    unitLabel: 'реєстратор',
    features: [
      'Підключення всіх камер',
      'Налаштування каналів',
      'Конфігурація запису',
      'Налаштування мережі',
      'Тестування роботи',
      'Навчання користувача'
    ],
    icon: '💾',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: { slug: 'configuration', nameUk: 'Налаштування', nameRu: 'Настройка' }
  },
  {
    id: 's9',
    slug: 'network-configuration',
    nameUk: 'Налаштування мережевої інфраструктури',
    nameRu: 'Настройка сетевой инфраструктуры',
    descriptionUk: 'Налаштування маршрутизаторів, комутаторів та інших мережевих пристроїв для системи відеоспостереження.',
    descriptionRu: 'Настройка маршрутизаторов, коммутаторов и других сетевых устройств для системы видеонаблюдения.',
    basePrice: 1500,
    unit: 'project',
    unitLabel: 'проект',
    features: [
      'Налаштування маршрутизатора',
      'Конфігурація PoE комутатора',
      'Оптимізація мережевого трафіку',
      'Налаштування QoS',
      'Тестування швидкості',
      'Документація налаштувань'
    ],
    icon: '🌐',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: { slug: 'configuration', nameUk: 'Налаштування', nameRu: 'Настройка' }
  },
  {
    id: 's10',
    slug: 'cloud-configuration',
    nameUk: 'Налаштування хмарного доступу',
    nameRu: 'Настройка облачного доступа',
    descriptionUk: 'Налаштування доступу до системи відеоспостереження через хмарні сервіси для віддаленого перегляду.',
    descriptionRu: 'Настройка доступа к системе видеонаблюдения через облачные сервисы для удаленного просмотра.',
    basePrice: 600,
    unit: 'project',
    unitLabel: 'проект',
    features: [
      'Реєстрація в хмарному сервісі',
      'Підключення обладнання',
      'Налаштування доступу',
      'Конфігурація мобільного додатку',
      'Тестування віддаленого доступу',
      'Навчання користувача'
    ],
    icon: '☁️',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: { slug: 'configuration', nameUk: 'Налаштування', nameRu: 'Настройка' }
  },

  // Maintenance Services
  {
    id: 's11',
    slug: 'monthly-maintenance',
    nameUk: 'Щомісячне технічне обслуговування',
    nameRu: 'Ежемесячное техническое обслуживание',
    descriptionUk: 'Регулярний огляд обладнання, очистка камер, перевірка працездатності системи.',
    descriptionRu: 'Регулярный осмотр оборудования, очистка камер, проверка работоспособности системы.',
    basePrice: 300,
    unit: 'month',
    unitLabel: 'місяць',
    features: [
      'Огляд обладнання',
      'Очистка камер',
      'Перевірка запису',
      'Тестування системи',
      'Профілактика поломок',
      'Програма лояльності'
    ],
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    category: { slug: 'maintenance', nameUk: 'Обслуговування', nameRu: 'Обслуживание' }
  },
  {
    id: 's12',
    slug: 'emergency-maintenance',
    nameUk: 'Екстрене обслуговування',
    nameRu: 'Экстренное обслуживание',
    descriptionUk: 'Терміновий виїзд фахівця у випадку поломки обладнання. Реагування протягом 2 годин.',
    descriptionRu: 'Срочный выезд специалиста в случае поломки оборудования. Реагирование в течение 2 часов.',
    basePrice: 800,
    unit: 'call',
    unitLabel: 'виїзд',
    features: [
      'Терміновий виїзд',
      'Діагностика несправностей',
      'Ремонт на місці',
      'Заміна обладнання',
      'Гарантійний ремонт',
      'Цілодобова підтримка'
    ],
    icon: '🚑',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    category: { slug: 'maintenance', nameUk: 'Обслуговування', nameRu: 'Обслуживание' }
  },
  {
    id: 's13',
    slug: 'seasonal-maintenance',
    nameUk: 'Сезонове обслуговування',
    nameRu: 'Сезонное обслуживание',
    descriptionUk: 'Комплексна перевірка системи перед зміною сезону (зима/літо).',
    descriptionRu: 'Комплексная проверка системы перед сменой сезона (зима/лето).',
    basePrice: 1200,
    unit: 'season',
    unitLabel: 'сезон',
    features: [
      'Повна діагностика системи',
      'Очистка обладнання',
      'Перевірка живлення',
      'Тестування в екстремальних умовах',
      'Заміна зношених деталей',
      'Рекомендації з експлуатації'
    ],
    icon: '🍂',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    category: { slug: 'maintenance', nameUk: 'Обслуговування', nameRu: 'Обслуживание' }
  },
  {
    id: 's14',
    slug: 'premium-maintenance',
    nameUk: 'Преміум обслуговування',
    nameRu: 'Премиум обслуживание',
    descriptionUk: 'Включає всі види обслуговування з пріоритетним виїздом та знижками на ремонт.',
    descriptionRu: 'Включает все виды обслуживания с приоритетным выездом и скидками на ремонт.',
    basePrice: 500,
    unit: 'month',
    unitLabel: 'місяць',
    features: [
      'Пріоритетний виїзд',
      'Безкоштовна діагностика',
      'Знижка 20% на ремонт',
      'Заплановане обслуговування',
      'Віддалений моніторинг',
      'Гарантія 48 місяців'
    ],
    icon: '👑',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    category: { slug: 'maintenance', nameUk: 'Обслуговування', nameRu: 'Обслуживание' }
  },

  // Repair Services
  {
    id: 's15',
    slug: 'camera-repair',
    nameUk: 'Ремонт камери відеоспостереження',
    nameRu: 'Ремонт камеры видеонаблюдения',
    descriptionUk: 'Діагностика та ремонт камер відеоспостереження будь-яких типів.',
    descriptionRu: 'Диагностика и ремонт камер видеонаблюдения любых типов.',
    basePrice: 400,
    unit: 'unit',
    unitLabel: 'камера',
    features: [
      'Діагностика несправностей',
      'Заміна несправних деталей',
      'Чистка оптичних елементів',
      'Тестування після ремонту',
      'Гарантія на ремонт 6 місяців',
      ' Видача акта виконаних робіт'
    ],
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    category: { slug: 'repair', nameUk: 'Ремонт', nameRu: 'Ремонт' }
  },
  {
    id: 's16',
    slug: 'recorder-repair',
    nameUk: 'Ремонт відеореєстратора',
    nameRu: 'Ремонт видеорегистратора',
    descriptionUk: 'Ремонт та відновлення працездатності відеореєстраторів (NVR/DVR).',
    descriptionRu: 'Ремонт и восстановление работоспособности видеорегистраторов (NVR/DVR).',
    basePrice: 800,
    unit: 'unit',
    unitLabel: 'реєстратор',
    features: [
      'Діагностика пристрою',
      'Заміна жорсткого диска',
      'Відновлення прошивки',
      'Ремонт блоку живлення',
      'Гарантія на ремонт 12 місяців',
      'Безкоштовна консультація'
    ],
    icon: '💾',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: { slug: 'repair', nameUk: 'Ремонт', nameRu: 'Ремонт' }
  },
  {
    id: 's17',
    slug: 'cable-repair',
    nameUk: 'Відновлення кабельних ліній',
    nameRu: 'Восстановление кабельных линий',
    descriptionUk: 'Пошук та усунення пошкоджень в кабельних лініях системи відеоспостереження.',
    descriptionRu: 'Поиск и устранение повреждений в кабельных линиях системы видеонаблюдения.',
    basePrice: 150,
    unit: 'meter',
    unitLabel: 'метр',
    features: [
      'Пошук обриву кабелю',
      'Заміна пошкодженої ділянки',
      'Тестування лінії',
      'Прокладка нового кабелю',
      'Герметизація з\'єднань',
      'Гарантія 12 місяців'
    ],
    icon: '🔌',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop',
    category: { slug: 'repair', nameUk: 'Ремонт', nameRu: 'Ремонт' }
  },

  // Consultation Services
  {
    id: 's18',
    slug: 'online-consultation',
    nameUk: 'Онлайн консультація',
    nameRu: 'Онлайн консультация',
    descriptionUk: 'Дистанційна консультація щодо вибору обладнання та особливостей монтажу.',
    descriptionRu: 'Дистанционная консультация по выбору оборудования и особенностям монтажа.',
    basePrice: 200,
    unit: 'hour',
    unitLabel: 'година',
    features: [
      'Аналіз ваших потреб',
      'Рекомендації щодо обладнання',
      'Складання кошторису',
      'Відповіді на запитання',
      'Надсилання матеріалів на пошту',
      'Підтримка після консультації'
    ],
    icon: '💬',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    category: { slug: 'consultation', nameUk: 'Консультація', nameRu: 'Консультация' }
  },
  {
    id: 's19',
    slug: 'onsite-consultation',
    nameUk: 'Виїзна консультація',
    nameRu: 'Выездная консультация',
    descriptionUk: 'Виїзд фахівця на об\'єкт для оцінки та складання детального плану системи відеоспостереження.',
    descriptionRu: 'Выезд специалиста на объект для оценки и составления детального плана системы видеонаблюдения.',
    basePrice: 500,
    unit: 'visit',
    unitLabel: 'виїзд',
    features: [
      'Огляд об\'єкту',
      'Виміри та схемостатування',
      'Аналіз існуючої інфраструктури',
      'Складання кошторису',
      'Рекомендації з обладнання',
      'План монтажу'
    ],
    icon: '🚗',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    category: { slug: 'consultation', nameUk: 'Консультація', nameRu: 'Консультация' }
  },
  {
    id: 's20',
    slug: 'technical-audit',
    nameUk: 'Технічний аудит системи',
    nameRu: 'Технический аудит системы',
    descriptionUk: 'Комплексна перевірка існуючої системи відеоспостереження з виявленням недоліків та рекомендаціями.',
    descriptionRu: 'Комплексная проверка существующей системы видеонаблюдения с выявлением недостатков и рекомендациями.',
    basePrice: 1500,
    unit: 'project',
    unitLabel: 'проект',
    features: [
      'Повна діагностика системи',
      'Тестування усіх камер',
      'Перевірка якості зображення',
      'Аналіз мережевої інфраструктури',
      'Звіт з рекомендаціями',
      'Кошторис на модернізацію'
    ],
    icon: '🔍',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    category: { slug: 'consultation', nameUk: 'Консультація', nameRu: 'Консультация' }
  }
];

export const getServicesByCategory = (categorySlug: string) => {
  return services.filter(s => s.category.slug === categorySlug);
};

export const getServiceBySlug = (slug: string) => {
  return services.find(s => s.slug === slug);
};

export const getAllServiceCategories = () => {
  return serviceCategories;
};

export const getFeaturedServices = () => {
  return services.slice(0, 6);
};
