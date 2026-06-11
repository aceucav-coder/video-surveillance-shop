import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create categories first
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'ip-cameras' },
      update: {},
      create: {
        slug: 'ip-cameras',
        nameUk: 'IP-камери',
        nameRu: 'IP-камеры',
        sortOrder: 1
      }
    }),
    prisma.category.upsert({
      where: { slug: 'recorders' },
      update: {},
      create: {
        slug: 'recorders',
        nameUk: 'Відеореєстратори',
        nameRu: 'Видеорегистраторы',
        sortOrder: 2
      }
    }),
    prisma.category.upsert({
      where: { slug: 'services' },
      update: {},
      create: {
        slug: 'services',
        nameUk: 'Послуги',
        nameRu: 'Услуги',
        sortOrder: 3
      }
    })
  ]);

  // Create brands
  const brands = await Promise.all([
    prisma.brand.upsert({
      where: { slug: 'hikvision' },
      update: {},
      create: {
        slug: 'hikvision',
        name: 'Hikvision',
        sortOrder: 1
      }
    }),
    prisma.brand.upsert({
      where: { slug: 'dahua' },
      update: {},
      create: {
        slug: 'dahua',
        name: 'Dahua',
        sortOrder: 2
      }
    })
  ]);

  // Create products
  await prisma.product.createMany({
    data: [
      {
        slug: 'hikvision-4mp',
        type: 'PHYSICAL',
        nameUk: 'IP-камера Hikvision 4MP',
        nameRu: 'IP-камера Hikvision 4MP',
        price: 4500,
        oldPrice: 5200,
        quantity: 15,
        isAvailable: true,
        isFeatured: true,
        isOnSale: true,
        categoryId: categories[0].id,
        brandId: brands[0].id,
        tags: ['4MP'],
        specifications: { "Роздільна здатність": "4MP" },
        images: ['/placeholder.jpg'],
      },
      {
        slug: 'dahua-nvr',
        type: 'PHYSICAL',
        nameUk: 'Відеореєстратор Dahua 8CH',
        nameRu: 'Видеорегистратор Dahua 8CH',
        price: 8500,
        quantity: 5,
        isAvailable: true,
        isFeatured: true,
        categoryId: categories[1].id,
        brandId: brands[1].id,
        tags: ['8CH'],
        specifications: { "Кількість каналів": "8" },
        images: ['/placeholder.jpg'],
      },
    ],
    skipDuplicates: true,
  });

  // Create service
  await prisma.service.create({
    data: {
      slug: 'installation',
      nameUk: 'Монтаж відеоспостереження',
      nameRu: 'Монтаж видеонаблюдения',
      descriptionUk: 'Професійний монтаж системи відеоспостереження',
      descriptionRu: 'Профессиональный монтаж системы видеонаблюдения',
      basePrice: 500,
      unit: 'PROJECT',
      categoryId: categories[2].id,
    },
  });

  // Create admin user
  await prisma.user.upsert({
    where: { email: 'admin@test.com' },
    update: {},
    create: {
      email: 'admin@test.com',
      firstName: 'Admin',
      lastName: 'User',
      password: '$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGgaYlPO', // admin123
      role: 'ADMIN',
      isVerified: true,
    },
  });

  console.log('Seeding completed!');
}

main()
  .catch(e => { 
    console.error(e); 
    process.exit(1); 
  })
  .finally(() => prisma.$disconnect());
