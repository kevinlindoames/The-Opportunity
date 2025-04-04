import { Module, Global } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import appConfig from './app.config/app.config';
import authConfig from './auth.config/auth.config';
import cacheConfig from './cache.config/cache.config';
import databaseConfig from './database.config/database.config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, authConfig, cacheConfig],
      envFilePath: '.env',
    }),
  ],
})
export class ConfigModule {}
