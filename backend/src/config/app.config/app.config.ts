import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  environment: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  apiPrefix: process.env.API_PREFIX || 'api',
  name: process.env.APP_NAME || 'LicitaLAB API',
  url: process.env.APP_URL || 'http://localhost:3000',
}));
