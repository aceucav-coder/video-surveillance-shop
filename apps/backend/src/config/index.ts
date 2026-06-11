import dotenv from 'dotenv';
dotenv.config();

export const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3001'),
  HOST: process.env.HOST || '0.0.0.0',
  SERVER_URL: process.env.SERVER_URL || `http://localhost:${process.env.PORT || 3001}`,
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/video_shop?schema=public',
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  JWT_SECRET: process.env.JWT_SECRET || 'dev-secret-key-change-me',
  CORS_ORIGINS: process.env.CORS_ORIGINS || 'http://localhost:3000',
};
