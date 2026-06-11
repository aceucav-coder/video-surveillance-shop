import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifyCookie from '@fastify/cookie';
import { PrismaClient } from '@prisma/client';
import { Redis } from 'ioredis';
import { config } from './config';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

const prisma = new PrismaClient();
const redis = new Redis(config.REDIS_URL);

export const app = fastify({ logger: true });

// Plugins
app.register(fastifyCors, { origin: true, credentials: true });
app.register(fastifyHelmet);
app.register(fastifyCookie);

// Swagger for API docs
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'VideoShop API',
      description: 'E-commerce API for Video Surveillance Shop',
      version: '1.0.0'
    }
  }
});
app.register(fastifySwaggerUi, { routePrefix: '/docs' });

// Root route
app.get('/', async (request, reply) => {
  reply.redirect('/docs');
});

// Health check routes
app.get('/api/health', async () => ({
  status: 'ok',
  timestamp: new Date().toISOString(),
  service: 'VideoShop Backend'
}));

app.get('/api/db-check', async () => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return { database: 'connected' };
  } catch (e) {
    return { database: 'disconnected', error: String(e) };
  }
});

app.get('/api/redis-check', async () => {
  try {
    await redis.ping();
    return { redis: 'connected' };
  } catch (e) {
    return { redis: 'disconnected', error: String(e) };
  }
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  await redis.disconnect();
  await app.close();
  process.exit(0);
});
