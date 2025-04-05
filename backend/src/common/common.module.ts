import { Module, Global } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter/http-exception.filter';
import { RolesGuard } from './guards/roles.guard/roles.guard';
import { CacheService } from './services/cache/cache.service';

@Global()
@Module({
  providers: [
    CacheService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [CacheService],
})
export class CommonModule {}
