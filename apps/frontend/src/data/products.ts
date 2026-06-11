interface Product {
  id: string;
  slug: string;
  nameUk: string;
  nameRu: string;
  price: number;
  oldPrice?: number;
  isAvailable: boolean;
  isFeatured: boolean;
  isOnSale: boolean;
  quantity: number;
  images: string[];
  descriptionUk: string;
  descriptionRu: string;
  specifications: Record<string, string>;
  category: { slug: string; nameUk: string; nameRu: string };
  brand: { name: string; slug: string };
}

const cameraImages = [
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
];

const recorderImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
];

const cableImages = [
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1585238342070-61e1e758c547?w=800&h=600&fit=crop',
];

const mountImages = [
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
];

const kitImages = [
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
];

const accessoryImages = [
  'https://images.unsplash.com/photo-1585238342070-61e1e758c547?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
];

const getRandomImage = (category: string) => {
  const imageSets: Record<string, string[]> = {
    'ip-cameras': cameraImages,
    'analog-cameras': cameraImages,
    'recorders': recorderImages,
    'cables': cableImages,
    'mounts': mountImages,
    'kits': kitImages,
    'accessories': accessoryImages,
  };
  const images = imageSets[category] || cameraImages;
  return images[Math.floor(Math.random() * images.length)];
};

const brands = [
  { name: 'Hikvision', slug: 'hikvision' },
  { name: 'Dahua', slug: 'dahua' },
  { name: 'EZVIZ', slug: 'ezviz' },
  { name: 'Uniview', slug: 'uniview' },
  { name: 'Axis', slug: 'axis' },
  { name: 'Bosch', slug: 'bosch' },
  { name: 'Samsung', slug: 'samsung' },
  { name: 'Panasonic', slug: 'panasonic' },
];

const getRandomBrand = () => {
  return brands[Math.floor(Math.random() * brands.length)];
};

export const products: Product[] = [
  // IP Cameras (10)
  {
    id: '1',
    slug: 'hikvision-ds-2cd2043g2-i-4mp',
    nameUk: 'IP-камера Hikvision DS-2CD2043G2-I 4MP',
    nameRu: 'IP-камера Hikvision DS-2CD2043G2-I 4MP',
    price: 4500,
    oldPrice: 5200,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 15,
    images: [cameraImages[0]],
    descriptionUk: 'IP-камера Hikvision з роздільною здатністю 4MP, нічним баченням до 30м, захистом від вологи IP67.',
    descriptionRu: 'IP-камера Hikvision с разрешением 4MP, ночным видением до 30м, защитой от влаги IP67.',
    specifications: {
      'Роздільна здатність': '4MP (2560x1440)',
      'Нічний режим': 'До 30м',
      'Кут огляду': '110°',
      'Захист': 'IP67',
      'Живлення': 'PoE / 12V DC'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '2',
    slug: 'hikvision-ds-2cd2347g2-lu-4mp',
    nameUk: 'IP-камера Hikvision DS-2CD2347G2-LU 4MP',
    nameRu: 'IP-камера Hikvision DS-2CD2347G2-LU 4MP',
    price: 5800,
    isAvailable: true,
    isFeatured: true,
    isOnSale: false,
    quantity: 12,
    images: [cameraImages[1]],
    descriptionUk: 'IP-камера з мегапіксельною роздільною здатністю, вбудованим мікрофоном.',
    descriptionRu: 'IP-камера с мегапиксельным разрешением, встроенным микрофоном.',
    specifications: {
      'Роздільна здатність': '4MP',
      'Аудіо': 'Так',
      'Захист': 'IP67',
      'Живлення': 'PoE'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '3',
    slug: 'dahua-ipc-hfw5449h1-ase-4mp',
    nameUk: 'IP-камера Dahua IPC-HFW5449H1-ASE 4MP',
    nameRu: 'IP-камера Dahua IPC-HFW5449H1-ASE 4MP',
    price: 4200,
    oldPrice: 4800,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 8,
    images: [cameraImages[2]],
    descriptionUk: '4MP камера з інтелектуальним аналізом відео.',
    descriptionRu: '4MP камера с интеллектуальным анализом видео.',
    specifications: {
      'Роздільна здатність': '4MP',
      'Нічний режим': 'До 40м',
      'Захист': 'IP67',
      'Аудіо': 'Так'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },
  {
    id: '4',
    slug: 'ezviz-c6n-1080p',
    nameUk: 'Wi-Fi камера EZVIZ C6N 1080p',
    nameRu: 'Wi-Fi камера EZVIZ C6N 1080p',
    price: 3200,
    oldPrice: 3800,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 20,
    images: [cameraImages[0]],
    descriptionUk: 'Wi-Fi камера з роздільною здатністю 1080p, двостороннім аудіо.',
    descriptionRu: 'Wi-Fi камера с разрешением 1080p, двусторонним аудио.',
    specifications: {
      'Роздільна здатність': '1080p',
      'Двосторонній аудіо': 'Так',
      'Детекція руху': 'Так',
      'Кут огляду': '105°'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'EZVIZ', slug: 'ezviz' }
  },
  {
    id: '5',
    slug: 'uniview-ipc3645er3-dpf28-4mp',
    nameUk: 'IP-камера Uniview IPC3645ER3-DPF28 4MP',
    nameRu: 'IP-камера Uniview IPC3645ER3-DPF28 4MP',
    price: 4700,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 10,
    images: [cameraImages[1]],
    descriptionUk: 'Професійна 4MP камера з довгим радіусом дії.',
    descriptionRu: 'Профессиональная 4MP камера с большим радиусом действия.',
    specifications: {
      'Роздільна здатність': '4MP',
      'Нічний режим': 'До 50м',
      'Захист': 'IP67'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Uniview', slug: 'uniview' }
  },
  {
    id: '6',
    slug: 'axis-p3225-lv-4mp',
    nameUk: 'IP-камера Axis P3225-LV 4MP',
    nameRu: 'IP-камера Axis P3225-LV 4MP',
    price: 7200,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 5,
    images: [cameraImages[2]],
    descriptionUk: 'Преміальна камера від Axis з високою якістю зображення.',
    descriptionRu: 'Премиальная камера от Axis с высоким качеством изображения.',
    specifications: {
      'Роздільна здатність': '4MP',
      'Бренд': 'Axis',
      'Захист': 'IP67'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Axis', slug: 'axis' }
  },
  {
    id: '7',
    slug: 'bosch-nbc-455-p-2mp',
    nameUk: 'IP-камера Bosch NBC-455-P 2MP',
    nameRu: 'IP-камера Bosch NBC-455-P 2MP',
    price: 5500,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 7,
    images: [cameraImages[0]],
    descriptionUk: 'Надійна 2MP камера від Bosch для зовнішнього використання.',
    descriptionRu: 'Надежная 2MP камера от Bosch для наружного использования.',
    specifications: {
      'Роздільна здатність': '2MP',
      'Нічний режим': 'До 30м',
      'Захист': 'IP66'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Bosch', slug: 'bosch' }
  },
  {
    id: '8',
    slug: 'samsung-sno-5080r-2mp',
    nameUk: 'IP-камера Samsung SNO-5080R 2MP',
    nameRu: 'IP-камера Samsung SNO-5080R 2MP',
    price: 4800,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 6,
    images: [cameraImages[1]],
    descriptionUk: '2MP камера Samsung з функцією Smart IR.',
    descriptionRu: '2MP камера Samsung с функцией Smart IR.',
    specifications: {
      'Роздільна здатність': '2MP',
      'Нічний режим': 'Smart IR до 40м',
      'Захист': 'IP67'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Samsung', slug: 'samsung' }
  },
  {
    id: '9',
    slug: 'panasonic-wv-s2531l-2mp',
    nameUk: 'IP-камера Panasonic WV-S2531L 2MP',
    nameRu: 'IP-камера Panasonic WV-S2531L 2MP',
    price: 6800,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 4,
    images: [cameraImages[2]],
    descriptionUk: 'Високоякісна 2MP камера з довгостроковою надійністю.',
    descriptionRu: 'Высококачественная 2MP камера с долговременной надежностью.',
    specifications: {
      'Роздільна здатність': '2MP',
      'Бренд': 'Panasonic',
      'Захист': 'IP67'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Panasonic', slug: 'panasonic' }
  },
  {
    id: '10',
    slug: 'dahua-ipc-hdbw5449h1-ase-5mp',
    nameUk: 'IP-камера Dahua IPC-HDBW5449H1-ASE 5MP',
    nameRu: 'IP-камера Dahua IPC-HDBW5449H1-ASE 5MP',
    price: 5500,
    oldPrice: 6200,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 9,
    images: [cameraImages[0]],
    descriptionUk: '5MP камера з покращеним нічним баченням.',
    descriptionRu: '5MP камера с улучшенным ночным видением.',
    specifications: {
      'Роздільна здатність': '5MP',
      'Нічний режим': 'До 50м',
      'Захист': 'IP67'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },

  // Analog Cameras (5)
  {
    id: '11',
    slug: 'hikvision-ds-2ce16d1t-it3-2mp',
    nameUk: 'Аналогова камера Hikvision DS-2CE16D1T-IT3 2MP',
    nameRu: 'Аналоговая камера Hikvision DS-2CE16D1T-IT3 2MP',
    price: 2800,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 14,
    images: [cameraImages[1]],
    descriptionUk: '2MP аналогова камера з TVI виходом.',
    descriptionRu: '2MP аналоговая камера с TVI выходом.',
    specifications: {
      'Роздільна здатність': '2MP TVI',
      'Нічний режим': 'До 20м',
      'Захист': 'IP66'
    },
    category: { slug: 'analog-cameras', nameUk: 'Аналогові камери', nameRu: 'Аналоговые камеры' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '12',
    slug: 'dahua-hac-hfw1200m-ah-2mp',
    nameUk: 'Аналогова камера Dahua HAC-HFW1200M-AH 2MP',
    nameRu: 'Аналоговая камера Dahua HAC-HFW1200M-AH 2MP',
    price: 3200,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 11,
    images: [cameraImages[2]],
    descriptionUk: 'Аналогова камера з високою чутливістю.',
    descriptionRu: 'Аналоговая камера с высокой чувствительностью.',
    specifications: {
      'Роздільна здатність': '2MP',
      'Нічний режим': 'До 25м',
      'Захист': 'IP66'
    },
    category: { slug: 'analog-cameras', nameUk: 'Аналогові камери', nameRu: 'Аналоговые камеры' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },
  {
    id: '13',
    slug: 'hikvision-ds-2ce56d1t-it5-5mp',
    nameUk: 'Аналогова камера Hikvision DS-2CE56D1T-IT5 5MP',
    nameRu: 'Аналоговая камера Hikvision DS-2CE56D1T-IT5 5MP',
    price: 3800,
    oldPrice: 4500,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 7,
    images: [cameraImages[0]],
    descriptionUk: '5MP аналогова камера преміум класу.',
    descriptionRu: '5MP аналоговая камера премиум класса.',
    specifications: {
      'Роздільна здатність': '5MP TVI',
      'Нічний режим': 'До 30м',
      'Захист': 'IP67'
    },
    category: { slug: 'analog-cameras', nameUk: 'Аналогові камери', nameRu: 'Аналоговые камеры' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '14',
    slug: 'uniview-tvi-5040d-ahd-4mp',
    nameUk: 'Аналогова камера Uniview TVI-5040D-AHD 4MP',
    nameRu: 'Аналоговая камера Uniview TVI-5040D-AHD 4MP',
    price: 3500,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 8,
    images: [cameraImages[1]],
    descriptionUk: '4MP аналогова камера з підтримкою AHD.',
    descriptionRu: '4MP аналоговая камера с поддержкой AHD.',
    specifications: {
      'Роздільна здатність': '4MP AHD',
      'Нічний режим': 'До 20м',
      'Захист': 'IP66'
    },
    category: { slug: 'analog-cameras', nameUk: 'Аналогові камери', nameRu: 'Аналоговые камеры' },
    brand: { name: 'Uniview', slug: 'uniview' }
  },
  {
    id: '15',
    slug: 'bosch-ltc-0495-90-2mp',
    nameUk: 'Аналогова камера Bosch LTC-0495/90 2MP',
    nameRu: 'Аналоговая камера Bosch LTC-0495/90 2MP',
    price: 4200,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 5,
    images: [cameraImages[2]],
    descriptionUk: 'Аналогова камера Bosch з високою роздільною здатністю.',
    descriptionRu: 'Аналоговая камера Bosch с высокой разрешающей способностью.',
    specifications: {
      'Роздільна здатність': '2MP',
      'Бренд': 'Bosch',
      'Захист': 'IP66'
    },
    category: { slug: 'analog-cameras', nameUk: 'Аналогові камери', nameRu: 'Аналоговые камеры' },
    brand: { name: 'Bosch', slug: 'bosch' }
  },

  // Recorders (5)
  {
    id: '16',
    slug: 'dahua-nvr5216-4ks2',
    nameUk: 'Відеореєстратор Dahua NVR5216-4KS2 16-канальний',
    nameRu: 'Видеорегистратор Dahua NVR5216-4KS2 16-канальный',
    price: 12500,
    oldPrice: 14000,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 8,
    images: [recorderImages[0]],
    descriptionUk: '16-канальний NVR реєстратор з підтримкою 4K.',
    descriptionRu: '16-канальный NVR регистратор с поддержкой 4K.',
    specifications: {
      'Кількість каналів': '16',
      'Роздільна здатність': '4K UHD',
      'Підтримка PoE': 'Так',
      'Об\'єм HDD': 'До 10ТБ',
      'Аудіо': 'Так'
    },
    category: { slug: 'recorders', nameUk: 'Відеореєстратори', nameRu: 'Видеорегистраторы' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },
  {
    id: '17',
    slug: 'hikvision-ds-7608ni-i2-8p',
    nameUk: 'Відеореєстратор Hikvision DS-7608NI-I2/8P 8-канальний',
    nameRu: 'Видеорегистратор Hikvision DS-7608NI-I2/8P 8-канальный',
    price: 9800,
    isAvailable: true,
    isFeatured: true,
    isOnSale: false,
    quantity: 12,
    images: [recorderImages[1]],
    descriptionUk: '8-канальний NVR з підтримкою PoE.',
    descriptionRu: '8-канальный NVR с поддержкой PoE.',
    specifications: {
      'Кількість каналів': '8',
      'Роздільна здатність': '4K',
      'Підтримка PoE': 'Так (8 портів)',
      'Об\'єм HDD': 'До 6ТБ'
    },
    category: { slug: 'recorders', nameUk: 'Відеореєстратори', nameRu: 'Видеорегистраторы' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '18',
    slug: 'uniview-nvr4016-4k',
    nameUk: 'Відеореєстратор Uniview NVR4016-4K 16-канальний',
    nameRu: 'Видеорегистратор Uniview NVR4016-4K 16-канальный',
    price: 11500,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 6,
    images: [recorderImages[0]],
    descriptionUk: '16-канальний NVR від Uniview.',
    descriptionRu: '16-канальный NVR от Uniview.',
    specifications: {
      'Кількість каналів': '16',
      'Роздільна здатність': '4K',
      'Підтримка PoE': 'Ні',
      'Об\'єм HDD': 'До 8ТБ'
    },
    category: { slug: 'recorders', nameUk: 'Відеореєстратори', nameRu: 'Видеорегистраторы' },
    brand: { name: 'Uniview', slug: 'uniview' }
  },
  {
    id: '19',
    slug: 'axis-m3006-v-4k',
    nameUk: 'Відеореєстратор Axis M3006-V 4K',
    nameRu: 'Видеорегистратор Axis M3006-V 4K',
    price: 18000,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 4,
    images: [recorderImages[1]],
    descriptionUk: 'Професійний 4K реєстратор від Axis.',
    descriptionRu: 'Профессиональный 4K регистратор от Axis.',
    specifications: {
      'Кількість каналів': '6',
      'Роздільна здатність': '4K',
      'Бренд': 'Axis',
      'Особливості': 'Висока якість'
    },
    category: { slug: 'recorders', nameUk: 'Відеореєстратори', nameRu: 'Видеорегистраторы' },
    brand: { name: 'Axis', slug: 'axis' }
  },
  {
    id: '20',
    slug: 'bosch-divar-ip-3000-16ch',
    nameUk: 'Відеореєстратор Bosch DIVAR IP 3000 16-канальний',
    nameRu: 'Видеорегистратор Bosch DIVAR IP 3000 16-канальный',
    price: 15000,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 5,
    images: [recorderImages[0]],
    descriptionUk: '16-канальний реєстратор Bosch для професійного використання.',
    descriptionRu: '16-канальный регистратор Bosch для профессионального использования.',
    specifications: {
      'Кількість каналів': '16',
      'Роздільна здатність': '4K',
      'Бренд': 'Bosch',
      'Об\'єм HDD': 'До 10ТБ'
    },
    category: { slug: 'recorders', nameUk: 'Відеореєстратори', nameRu: 'Видеорегистраторы' },
    brand: { name: 'Bosch', slug: 'bosch' }
  },

  // Cables (5)
  {
    id: '21',
    slug: 'uniview-cat5e-100m',
    nameUk: 'Кабель UTP Cat.5e 100м',
    nameRu: 'Кабель UTP Cat.5e 100м',
    price: 450,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 50,
    images: [cableImages[0]],
    descriptionUk: 'Мідний кабель Cat.5e для мережевих підключень.',
    descriptionRu: 'Медный кабель Cat.5e для сетевых подключений.',
    specifications: {
      'Категорія': 'Cat.5e',
      'Довжина': '100м',
      'Матеріал': 'Мідь',
      'Кольор': 'Сірий'
    },
    category: { slug: 'cables', nameUk: 'Кабелі та живлення', nameRu: 'Кабели и питание' },
    brand: { name: 'Uniview', slug: 'uniview' }
  },
  {
    id: '22',
    slug: 'dahua-cat6-50m',
    nameUk: 'Кабель UTP Cat.6 50м',
    nameRu: 'Кабель UTP Cat.6 50м',
    price: 380,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 30,
    images: [cableImages[1]],
    descriptionUk: 'Кабель Cat.6 для високошвидкісних мереж.',
    descriptionRu: 'Кабель Cat.6 для высокоскоростных сетей.',
    specifications: {
      'Категорія': 'Cat.6',
      'Довжина': '50м',
      'Матеріал': 'Мідь',
      'Кольор': ' Блакитний'
    },
    category: { slug: 'cables', nameUk: 'Кабелі та живлення', nameRu: 'Кабели и питание' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },
  {
    id: '23',
    slug: 'hikvision-sfp-module',
    nameUk: 'Модуль SFP для оптоволокна',
    nameRu: 'Модуль SFP для оптоволокна',
    price: 1200,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 20,
    images: [cableImages[0]],
    descriptionUk: 'SFP модуль для оптичних мереж.',
    descriptionRu: 'SFP модуль для оптических сетей.',
    specifications: {
      'Тип': 'SFP',
      'Довжина хвилі': '1310nm',
      'Відстань': 'До 10км'
    },
    category: { slug: 'cables', nameUk: 'Кабелі та живлення', nameRu: 'Кабели и питание' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '24',
    slug: 'power-supply-12v-2a',
    nameUk: 'Блок живлення 12V 2A',
    nameRu: 'Блок питания 12V 2A',
    price: 250,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 40,
    images: [cableImages[1]],
    descriptionUk: 'Блок живлення для камер відеоспостереження.',
    descriptionRu: 'Блок питания для камер видеонаблюдения.',
    specifications: {
      'Напруга': '12V DC',
      'Струм': '2A',
      'Потужність': '24W'
    },
    category: { slug: 'cables', nameUk: 'Кабелі та живлення', nameRu: 'Кабели и питание' },
    brand: { name: 'Generic', slug: 'generic' }
  },
  {
    id: '25',
    slug: 'poe-switch-8port',
    nameUk: 'PoE комутaтор 8 портів',
    nameRu: 'PoE коммутатор 8 портов',
    price: 2800,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 15,
    images: [cableImages[0]],
    descriptionUk: '8-портовий PoE комутатор для підключення IP-камер.',
    descriptionRu: '8-портовый PoE коммутатор для подключения IP-камер.',
    specifications: {
      'Кількість портів': '8',
      'PoE порти': '8',
      'Швидкість': 'Gigabit',
      'Потужність': '120W'
    },
    category: { slug: 'cables', nameUk: 'Кабелі та живлення', nameRu: 'Кабели и питание' },
    brand: { name: 'Generic', slug: 'generic' }
  },

  // Mounts (5)
  {
    id: '26',
    slug: 'hikvision-ds-1275zj-bracket',
    nameUk: 'Кріплення кутові Hikvision DS-1275ZJ',
    nameRu: 'Крепление угловое Hikvision DS-1275ZJ',
    price: 350,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 25,
    images: [mountImages[0]],
    descriptionUk: 'Універсальне кутове кріплення для камер.',
    descriptionRu: 'Универсальное угловое крепление для камер.',
    specifications: {
      'Матеріал': 'Метал',
      'Кольор': 'Сірий',
      'Вага': '0.5кг'
    },
    category: { slug: 'mounts', nameUk: 'Кріплення', nameRu: 'Крепления' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '27',
    slug: 'dahua-pfb203w-wall-mount',
    nameUk: 'Настінне кріплення Dahua PFB203W',
    nameRu: 'Настенное крепление Dahua PFB203W',
    price: 420,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 18,
    images: [mountImages[1]],
    descriptionUk: 'Настінне кріплення для важких камер.',
    descriptionRu: 'Настенное крепление для тяжелых камер.',
    specifications: {
      'Матеріал': 'Алюміній',
      'Кольор': 'Білий',
      'Макс. вага': '5кг'
    },
    category: { slug: 'mounts', nameUk: 'Кріплення', nameRu: 'Крепления' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },
  {
    id: '28',
    slug: 'ezviz-ceiling-mount',
    nameUk: 'Кріплення стельове EZVIZ',
    nameRu: 'Крепление потолочное EZVIZ',
    price: 280,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 20,
    images: [mountImages[0]],
    descriptionUk: 'Стельове кріплення для куполових камер.',
    descriptionRu: 'Потолочное крепление для купольных камер.',
    specifications: {
      'Матеріал': 'Метал',
      'Кольор': 'Білий',
      'Діаметр': '100мм'
    },
    category: { slug: 'mounts', nameUk: 'Кріплення', nameRu: 'Крепления' },
    brand: { name: 'EZVIZ', slug: 'ezviz' }
  },
  {
    id: '29',
    slug: 'universal-pole-mount',
    nameUk: 'Кріплення на стовп універсальне',
    nameRu: 'Крепление на столб универсальное',
    price: 550,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 12,
    images: [mountImages[1]],
    descriptionUk: 'Універсальне кріплення для монтажу на стовпі.',
    descriptionRu: 'Универсальное крепление для монтажа на столбе.',
    specifications: {
      'Матеріал': 'Нержавіюча сталь',
      'Кольор': 'Сірий',
      'Макс. вага': '10кг'
    },
    category: { slug: 'mounts', nameUk: 'Кріплення', nameRu: 'Крепления' },
    brand: { name: 'Generic', slug: 'generic' }
  },
  {
    id: '30',
    slug: 'corner-mount-indoor',
    nameUk: 'Кутове кріплення для приміщень',
    nameRu: 'Угловое крепление для помещений',
    price: 180,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 30,
    images: [mountImages[0]],
    descriptionUk: 'Кompaktне кутове кріплення для внутрішнього монтажу.',
    descriptionRu: 'Компактное угловое крепление для внутреннего монтажа.',
    specifications: {
      'Матеріал': 'Пластик',
      'Кольор': 'Білий',
      'Вага': '0.2кг'
    },
    category: { slug: 'mounts', nameUk: 'Кріплення', nameRu: 'Крепления' },
    brand: { name: 'Generic', slug: 'generic' }
  },

  // Kits (5)
  {
    id: '31',
    slug: 'hikvision-kit-4-cameras-nvr',
    nameUk: 'Комплект Hikvision 4 камери + NVR',
    nameRu: 'Комплект Hikvision 4 камеры + NVR',
    price: 25000,
    oldPrice: 28000,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 10,
    images: [kitImages[0]],
    descriptionUk: 'Комплект з 4 IP-камер та 8-канального NVR.',
    descriptionRu: 'Комплект из 4 IP-камер и 8-канального NVR.',
    specifications: {
      'Кількість камер': '4',
      'Роздільна здатність': '4MP',
      'Реєстратор': '8-канальний',
      'Об\'єм HDD': '1ТБ',
      'Гарантія': '24 місяці'
    },
    category: { slug: 'kits', nameUk: 'Готові комплекти', nameRu: 'Готовые комплекты' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '32',
    slug: 'dahua-kit-8-cameras-nvr',
    nameUk: 'Комплект Dahua 8 камер + NVR',
    nameRu: 'Комплект Dahua 8 камер + NVR',
    price: 45000,
    oldPrice: 52000,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 5,
    images: [kitImages[1]],
    descriptionUk: 'Комплект з 8 IP-камер та 16-канального NVR.',
    descriptionRu: 'Комплект из 8 IP-камер и 16-канального NVR.',
    specifications: {
      'Кількість камер': '8',
      'Роздільна здатність': '4MP',
      'Реєстратор': '16-канальний',
      'Об\'єм HDD': '2ТБ',
      'Гарантія': '24 місяці'
    },
    category: { slug: 'kits', nameUk: 'Готові комплекти', nameRu: 'Готовые комплекты' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },
  {
    id: '33',
    slug: 'ezviz-kit-4-wifi-cameras',
    nameUk: 'Комплект EZVIZ 4 Wi-Fi камери',
    nameRu: 'Комплект EZVIZ 4 Wi-Fi камеры',
    price: 18000,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 8,
    images: [kitImages[0]],
    descriptionUk: 'Комплект з 4 Wi-Fi камер без дротів.',
    descriptionRu: 'Комплект из 4 Wi-Fi камер без проводов.',
    specifications: {
      'Кількість камер': '4',
      'Роздільна здатність': '1080p',
      'Тип': 'Wi-Fi',
      'Керування': 'Мобільний додаток',
      'Гарантія': '12 місяців'
    },
    category: { slug: 'kits', nameUk: 'Готові комплекти', nameRu: 'Готовые комплекты' },
    brand: { name: 'EZVIZ', slug: 'ezviz' }
  },
  {
    id: '34',
    slug: 'home-security-kit',
    nameUk: 'Комплект для будинку (2 камери + NVR)',
    nameRu: 'Комплект для дома (2 камеры + NVR)',
    price: 12000,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 15,
    images: [kitImages[1]],
    descriptionUk: 'Бюджетний комплект для домашнього відеоспостереження.',
    descriptionRu: 'Бюджетный комплект для домашнего видеонаблюдения.',
    specifications: {
      'Кількість камер': '2',
      'Роздільна здатність': '2MP',
      'Реєстратор': '4-канальний',
      'Об\'єм HDD': '500ГБ',
      'Гарантія': '12 місяців'
    },
    category: { slug: 'kits', nameUk: 'Готові комплекти', nameRu: 'Готовые комплекты' },
    brand: { name: 'Generic', slug: 'generic' }
  },
  {
    id: '35',
    slug: 'business-security-kit',
    nameUk: 'Комплект для бізнесу (16 камер + NVR)',
    nameRu: 'Комплект для бизнеса (16 камер + NVR)',
    price: 85000,
    oldPrice: 98000,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 3,
    images: [kitImages[0]],
    descriptionUk: 'Професійний комплект для бізнес-об\'єктів.',
    descriptionRu: 'Профессиональный комплект для бизнес-объектов.',
    specifications: {
      'Кількість камер': '16',
      'Роздільна здатність': '4MP',
      'Реєстратор': '16-канальний',
      'Об\'єм HDD': '10ТБ',
      'Гарантія': '36 місяців'
    },
    category: { slug: 'kits', nameUk: 'Готові комплекти', nameRu: 'Готовые комплекты' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },

  // Accessories (5)
  {
    id: '36',
    slug: 'power-adapter-12v-1a',
    nameUk: 'Адаптер живлення 12V 1A',
    nameRu: 'Адаптер питания 12V 1A',
    price: 150,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 50,
    images: [accessoryImages[0]],
    descriptionUk: 'Адаптер живлення для камер відеоспостереження.',
    descriptionRu: 'Адаптер питания для камер видеонаблюдения.',
    specifications: {
      'Напруга': '12V DC',
      'Струм': '1A',
      'Потужність': '12W',
      'Роз\'єм': 'EU'
    },
    category: { slug: 'accessories', nameUk: 'Аксесуари', nameRu: 'Аксессуары' },
    brand: { name: 'Generic', slug: 'generic' }
  },
  {
    id: '37',
    slug: 'camera-housing-outdoor',
    nameUk: 'Корпус для зовнішньої камери',
    nameRu: 'Корпус для наружной камеры',
    price: 450,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 20,
    images: [accessoryImages[1]],
    descriptionUk: 'Захисний корпус для зовнішніх камер.',
    descriptionRu: 'Защитный корпус для наружных камер.',
    specifications: {
      'Матеріал': 'Метал + Пластик',
      'Кольор': 'Сірий',
      'Захист': 'IP66',
      'Обігрів': 'Ні'
    },
    category: { slug: 'accessories', nameUk: 'Аксесуари', nameRu: 'Аксессуары' },
    brand: { name: 'Generic', slug: 'generic' }
  },
  {
    id: '38',
    slug: 'camera-housing-with-heater',
    nameUk: 'Корпус з обігрівом для зовнішньої камери',
    nameRu: 'Корпус с обогревом для наружной камеры',
    price: 850,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 12,
    images: [accessoryImages[0]],
    descriptionUk: 'Корпус з вбудованим обігрівачем для зимової експлуатації.',
    descriptionRu: 'Корпус со встроенным обогревателем для зимней эксплуатации.',
    specifications: {
      'Матеріал': 'Метал',
      'Кольор': 'Сірий',
      'Захист': 'IP66',
      'Обігрів': 'Так'
    },
    category: { slug: 'accessories', nameUk: 'Аксесуари', nameRu: 'Аксессуары' },
    brand: { name: 'Generic', slug: 'generic' }
  },
  {
    id: '39',
    slug: 'monitor-27-inch-4k',
    nameUk: 'Монітор 27" 4K для відеоспостереження',
    nameRu: 'Монитор 27" 4K для видеонаблюдения',
    price: 8500,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 8,
    images: [accessoryImages[1]],
    descriptionUk: 'Професійний монітор для перегляду відео.',
    descriptionRu: 'Профессиональный монитор для просмотра видео.',
    specifications: {
      'Діагональ': '27"',
      'Роздільна здатність': '4K UHD',
      'Тип матриці': 'IPS',
      'Частота': '60Hz'
    },
    category: { slug: 'accessories', nameUk: 'Аксесуари', nameRu: 'Аксессуары' },
    brand: { name: 'Generic', slug: 'generic' }
  },
  {
    id: '40',
    slug: 'hard-drive-4tb-surveillance',
    nameUk: 'Жорсткий диск 4ТБ для відеоспостереження',
    nameRu: 'Жесткий диск 4ТБ для видеонаблюдения',
    price: 3200,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 15,
    images: [accessoryImages[0]],
    descriptionUk: 'Жорсткий диск великого об\'єму для запису відео.',
    descriptionRu: 'Жесткий диск большого объема для записи видео.',
    specifications: {
      'Об\'єм': '4ТБ',
      'Тип': 'HDD',
      'Швидкість': '5400 RPM',
      'Інтерфейс': 'SATA III',
      'Назначення': 'Відеоспостереження'
    },
    category: { slug: 'accessories', nameUk: 'Аксесуари', nameRu: 'Аксессуары' },
    brand: { name: 'Seagate', slug: 'seagate' }
  },

  // Additional IP Cameras (5 more)
  {
    id: '41',
    slug: 'hikvision-ds-2cd2746g2-izs-5mp',
    nameUk: 'IP-камера Hikvision DS-2CD2746G2-IZS 5MP',
    nameRu: 'IP-камера Hikvision DS-2CD2746G2-IZS 5MP',
    price: 6500,
    oldPrice: 7200,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 10,
    images: [cameraImages[1]],
    descriptionUk: '5MP камера з інтелектуальним аналізом таAudio.',
    descriptionRu: '5MP камера с интеллектуальным анализом и аудио.',
    specifications: {
      'Роздільна здатність': '5MP (2944x1656)',
      'Нічний режим': 'До 40м',
      'Кут огляду': '110°',
      'Захист': 'IP67',
      'Аудіо': 'Так',
      'Живлення': 'PoE / 12V DC'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '42',
    slug: 'dahua-ipc-hfw3549h1-ase-5mp',
    nameUk: 'IP-камера Dahua IPC-HFW3549H1-ASE 5MP',
    nameRu: 'IP-камера Dahua IPC-HFW3549H1-ASE 5MP',
    price: 5200,
    oldPrice: 5800,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 8,
    images: [cameraImages[2]],
    descriptionUk: '5MP купол особлива камера з широким кутом огляду.',
    descriptionRu: '5MP купольная камера с широким углом обзора.',
    specifications: {
      'Роздільна здатність': '5MP',
      'Нічний режим': 'До 30м',
      'Кут огляду': '105°',
      'Захист': 'IP67',
      'Тип': 'Купол'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },
  {
    id: '43',
    slug: 'ezviz-c8c-4mp',
    nameUk: 'Wi-Fi камера EZVIZ C8C 4MP',
    nameRu: 'Wi-Fi камера EZVIZ C8C 4MP',
    price: 4800,
    isAvailable: true,
    isFeatured: true,
    isOnSale: false,
    quantity: 12,
    images: [cameraImages[0]],
    descriptionUk: '4MP Wi-Fi камера з обертом на 360° та нічним баченням.',
    descriptionRu: '4MP Wi-Fi камера с поворотом на 360° и ночным видением.',
    specifications: {
      'Роздільна здатність': '4MP',
      'Кут огляду': '360°',
      'Нічний режим': 'До 10м',
      'Двосторонній аудіо': 'Так',
      'Живлення': '220V'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'EZVIZ', slug: 'ezviz' }
  },
  {
    id: '44',
    slug: 'uniview-ipc3647er3-dpz-4mp',
    nameUk: 'IP-камера Uniview IPC3647ER3-DPZ 4MP',
    nameRu: 'IP-камера Uniview IPC3647ER3-DPZ 4MP',
    price: 4200,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 15,
    images: [cameraImages[1]],
    descriptionUk: '4MP камера з zoom об\'єктивом для великих території.',
    descriptionRu: '4MP камера с zoom объективом для больших территорий.',
    specifications: {
      'Роздільна здатність': '4MP',
      'Optical Zoom': '2.8-12mm',
      'Нічний режим': 'До 50м',
      'Захист': 'IP67',
      'Живлення': 'PoE'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Uniview', slug: 'uniview' }
  },
  {
    id: '45',
    slug: 'axis-q3518-lve-4mp',
    nameUk: 'IP-камера Axis Q3518-LVE 4MP',
    nameRu: 'IP-камера Axis Q3518-LVE 4MP',
    price: 8500,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 6,
    images: [cameraImages[2]],
    descriptionUk: 'Преміальна 4MP камера з Lightfinder технологією.',
    descriptionRu: 'Премиальная 4MP камера с технологией Lightfinder.',
    specifications: {
      'Роздільна здатність': '4MP',
      'Нічний режим': 'Lightfinder',
      'Кут огляду': '100°',
      'Захист': 'IP66/IP67',
      'Бренд': 'Axis'
    },
    category: { slug: 'ip-cameras', nameUk: 'IP-камери', nameRu: 'IP-камеры' },
    brand: { name: 'Axis', slug: 'axis' }
  },

  // Additional Analog Cameras (3 more)
  {
    id: '46',
    slug: 'hikvision-ds-2ce56c1t-it5-5mp',
    nameUk: 'Аналогова камера Hikvision DS-2CE56C1T-IT5 5MP ColorVu',
    nameRu: 'Аналоговая камера Hikvision DS-2CE56C1T-IT5 5MP ColorVu',
    price: 4500,
    oldPrice: 5200,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 9,
    images: [cameraImages[0]],
    descriptionUk: '5MP аналогова камера з ColorVu технологією для кольорового нічного бачення.',
    descriptionRu: '5MP аналоговая камера с технологией ColorVu для цветного ночного видения.',
    specifications: {
      'Роздільна здатність': '5MP TVI',
      'Нічний режим': 'ColorVu до 30м',
      'Захист': 'IP67',
      'Кут огляду': '110°'
    },
    category: { slug: 'analog-cameras', nameUk: 'Аналогові камери', nameRu: 'Аналоговые камеры' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '47',
    slug: 'dahua-hac-hfw3200rp-z-2mp',
    nameUk: 'Аналогова камера Dahua HAC-HFW3200RP-Z 2MP',
    nameRu: 'Аналоговая камера Dahua HAC-HFW3200RP-Z 2MP',
    price: 3800,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 11,
    images: [cameraImages[1]],
    descriptionUk: '2MP аналогова камера з вариофокальним об\'єктивом.',
    descriptionRu: '2MP аналоговая камера с вариофокальным объективом.',
    specifications: {
      'Роздільна здатність': '2MP',
      'Об\'єктив': '2.8-12mm',
      'Нічний режим': 'До 30м',
      'Захист': 'IP66'
    },
    category: { slug: 'analog-cameras', nameUk: 'Аналогові камери', nameRu: 'Аналоговые камеры' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },
  {
    id: '48',
    slug: 'uniview-tvi-5080d-ahd-5mp',
    nameUk: 'Аналогова камера Uniview TVI-5080D-AHD 5MP',
    nameRu: 'Аналоговая камера Uniview TVI-5080D-AHD 5MP',
    price: 4100,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 7,
    images: [cameraImages[2]],
    descriptionUk: '5MP AHD камера з високою чутливістю.',
    descriptionRu: '5MP AHD камера с высокой чувствительностью.',
    specifications: {
      'Роздільна здатність': '5MP AHD',
      'Нічний режим': 'До 30м',
      'Захист': 'IP66',
      'Кут огляду': '90°'
    },
    category: { slug: 'analog-cameras', nameUk: 'Аналогові камери', nameRu: 'Аналоговые камеры' },
    brand: { name: 'Uniview', slug: 'uniview' }
  },

  // Additional Recorders (2 more)
  {
    id: '49',
    slug: 'dahua-nvr5432-4ks2-32ch',
    nameUk: 'Відеореєстратор Dahua NVR5432-4KS2 32-канальний',
    nameRu: 'Видеорегистратор Dahua NVR5432-4KS2 32-канальный',
    price: 28000,
    oldPrice: 32000,
    isAvailable: true,
    isFeatured: true,
    isOnSale: true,
    quantity: 4,
    images: [recorderImages[0]],
    descriptionUk: '32-канальний NVR реєстратор для великих систем відеоспостереження.',
    descriptionRu: '32-канальный NVR регистратор для больших систем видеонаблюдения.',
    specifications: {
      'Кількість каналів': '32',
      'Роздільна здатність': '4K UHD',
      'Підтримка PoE': 'Так (16 портів)',
      'Об\'єм HDD': 'До 48ТБ',
      'Аудіо': 'Так'
    },
    category: { slug: 'recorders', nameUk: 'Відеореєстратори', nameRu: 'Видеорегистраторы' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },
  {
    id: '50',
    slug: 'hikvision-ds-7732ni-i4-32p',
    nameUk: 'Відеореєстратор Hikvision DS-7732NI-I4/32P 32-канальний',
    nameRu: 'Видеорегистратор Hikvision DS-7732NI-I4/32P 32-канальный',
    price: 35000,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 3,
    images: [recorderImages[1]],
    descriptionUk: '32-канальний NVR з повною підтримкою PoE для великих мереж.',
    descriptionRu: '32-канальный NVR с полной поддержкой PoE для больших сетей.',
    specifications: {
      'Кількість каналів': '32',
      'Роздільна здатність': '4K',
      'Підтримка PoE': 'Так (32 порти)',
      'Об\'єм HDD': 'До 64ТБ',
      'Потужність PoE': '370W'
    },
    category: { slug: 'recorders', nameUk: 'Відеореєстратори', nameRu: 'Видеорегистраторы' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },

  // Additional Cables (2 more)
  {
    id: '51',
    slug: 'cat6-utp-305m',
    nameUk: 'Кабель UTP Cat.6 305м бухта',
    nameRu: 'Кабель UTP Cat.6 305м бухта',
    price: 2800,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 20,
    images: [cableImages[0]],
    descriptionUk: 'Мідний кабель Cat.6 для мережевих підключень, 305 метрів.',
    descriptionRu: 'Медный кабель Cat.6 для сетевых подключений, 305 метров.',
    specifications: {
      'Категорія': 'Cat.6',
      'Довжина': '305м',
      'Матеріал': 'Мідь',
      'Кольор': 'Сірий',
      'Пакування': 'Бухта'
    },
    category: { slug: 'cables', nameUk: 'Кабелі та живлення', nameRu: 'Кабели и питание' },
    brand: { name: 'Generic', slug: 'generic' }
  },
  {
    id: '52',
    slug: 'fiber-optic-cable-100m',
    nameUk: 'Оптоволоконний кабель 100м',
    nameRu: 'Оптоволоконный кабель 100м',
    price: 4500,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 10,
    images: [cableImages[1]],
    descriptionUk: 'Оптоволоконний кабель для високошвидкісної передачі даних.',
    descriptionRu: 'Оптоволоконный кабель для высокоскоростной передачи данных.',
    specifications: {
      'Тип': 'Мultimode',
      'Довжина': '100м',
      'Пропускна здатність': '10Gbps',
      'Кольор': 'Оранжевий',
      'Захист': 'LSZH'
    },
    category: { slug: 'cables', nameUk: 'Кабелі та живлення', nameRu: 'Кабели и питание' },
    brand: { name: 'Generic', slug: 'generic' }
  },

  // Additional Mounts (2 more)
  {
    id: '53',
    slug: 'hikvision-ds-1278zj-ceiling-mount',
    nameUk: 'Стельове кріплення Hikvision DS-1278ZJ',
    nameRu: 'Потолочное крепление Hikvision DS-1278ZJ',
    price: 420,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 15,
    images: [mountImages[0]],
    descriptionUk: 'Стельове кріплення для куполових камер з регулюванням кута.',
    descriptionRu: 'Потолочное крепление для купольных камер с регулировкой угла.',
    specifications: {
      'Матеріал': 'Метал',
      'Кольор': 'Білий',
      'Макс. вага': '3кг',
      'Діаметр': 'Універсальний'
    },
    category: { slug: 'mounts', nameUk: 'Кріплення', nameRu: 'Крепления' },
    brand: { name: 'Hikvision', slug: 'hikvision' }
  },
  {
    id: '54',
    slug: 'dahua-pfb303w-pole-mount',
    nameUk: 'Кріплення на стовп Dahua PFB303W',
    nameRu: 'Крепление на столб Dahua PFB303W',
    price: 650,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 8,
    images: [mountImages[1]],
    descriptionUk: 'Міцне кріплення для монтажу на стовпі або стіні.',
    descriptionRu: 'Прочное крепление для монтажа на столбе или стене.',
    specifications: {
      'Матеріал': 'Нержавіюча сталь',
      'Кольор': 'Сірий',
      'Макс. вага': '15кг',
      'Монтаж': 'Універсальний'
    },
    category: { slug: 'mounts', nameUk: 'Кріплення', nameRu: 'Крепления' },
    brand: { name: 'Dahua', slug: 'dahua' }
  },

  // Additional Accessories (3 more)
  {
    id: '55',
    slug: 'ups-1000va',
    nameUk: 'ДБЖ 1000VA для систем відеоспостереження',
    nameRu: 'ИБП 1000VA для систем видеонаблюдения',
    price: 3800,
    isAvailable: true,
    isFeatured: true,
    isOnSale: false,
    quantity: 12,
    images: [accessoryImages[1]],
    descriptionUk: 'Джерело безперебійного живлення для захисту обладнання від стрибків напруги.',
    descriptionRu: 'Источник бесперебойного питания для защиты оборудования от перепадов напряжения.',
    specifications: {
      'Потужність': '1000VA / 600W',
      'Час роботи': '15-30 хв',
      'Кількість розеток': '4',
      'Тип': 'Line-Interactive',
      'Захист': 'AVR'
    },
    category: { slug: 'accessories', nameUk: 'Аксесуари', nameRu: 'Аксессуары' },
    brand: { name: 'APC', slug: 'apc' }
  },
  {
    id: '56',
    slug: 'network-switch-24port',
    nameUk: 'Мережевий комутатор 24 порти',
    nameRu: 'Сетевой коммутатор 24 порта',
    price: 4200,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 10,
    images: [accessoryImages[0]],
    descriptionUk: '24-портовий мережевий комутатор для великих систем відеоспостереження.',
    descriptionRu: '24-портовой сетевой коммутатор для больших систем видеонаблюдения.',
    specifications: {
      'Кількість портів': '24',
      'Швидкість': 'Gigabit',
      'PoE': 'Ні',
      'Тип': 'Managed',
      'Потужність': '40W'
    },
    category: { slug: 'accessories', nameUk: 'Аксесуари', nameRu: 'Аксессуары' },
    brand: { name: 'TP-Link', slug: 'tp-link' }
  },
  {
    id: '57',
    slug: 'surveillance-keyboard',
    nameUk: 'Клавіатура для відеоспостереження',
    nameRu: 'Клавиатура для видеонаблюдения',
    price: 1200,
    isAvailable: true,
    isFeatured: false,
    isOnSale: false,
    quantity: 15,
    images: [accessoryImages[1]],
    descriptionUk: 'Клавіатура з Джойстиком для керування PTZ камерами.',
    descriptionRu: 'Клавиатура с джойстиком для управления PTZ камерами.',
    specifications: {
      'Тип': 'USB',
      'Джойстик': '3D',
      'Кнопки': '16 програмованих',
      'Сумісність': 'Windows, Mac',
      'Матеріал': 'Пластик + Метал'
    },
    category: { slug: 'accessories', nameUk: 'Аксесуари', nameRu: 'Аксессуары' },
    brand: { name: 'Generic', slug: 'generic' }
  }
];

export const getProductsByCategory = (categorySlug: string) => {
  return products.filter(p => p.category.slug === categorySlug);
};

export const getProductBySlug = (slug: string) => {
  return products.find(p => p.slug === slug);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.isFeatured).slice(0, 8);
};

export const getOnSaleProducts = () => {
  return products.filter(p => p.isOnSale).slice(0, 8);
};

export const getCategories = () => {
  const categoriesMap = new Map<string, { slug: string; nameUk: string; nameRu: string; count: number; icon: string }>();
  
  products.forEach(product => {
    const cat = product.category;
    if (!categoriesMap.has(cat.slug)) {
      const icons: Record<string, string> = {
        'ip-cameras': '📹',
        'analog-cameras': '📺',
        'recorders': '💾',
        'cables': '🔌',
        'mounts': '🔧',
        'kits': '📦',
        'accessories': '🎁',
      };
      categoriesMap.set(cat.slug, {
        slug: cat.slug,
        nameUk: cat.nameUk,
        nameRu: cat.nameRu,
        count: 0,
        icon: icons[cat.slug] || '📦'
      });
    }
    const category = categoriesMap.get(cat.slug)!;
    category.count += 1;
  });
  
  return Array.from(categoriesMap.values()).sort((a, b) => b.count - a.count);
};

export const getBrands = () => {
  const brandsMap = new Map<string, { name: string; slug: string; count: number }>();
  
  products.forEach(product => {
    const brand = product.brand;
    if (!brandsMap.has(brand.slug)) {
      brandsMap.set(brand.slug, {
        name: brand.name,
        slug: brand.slug,
        count: 0
      });
    }
    const brandData = brandsMap.get(brand.slug)!;
    brandData.count += 1;
  });
  
  return Array.from(brandsMap.values()).sort((a, b) => b.count - a.count);
};
