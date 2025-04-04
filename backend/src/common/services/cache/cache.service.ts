import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async get<T>(key: string): Promise<T | null> {
    // Cambiamos el tipo de retorno para incluir null
    return this.cacheManager.get<T>(key);
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    await this.cacheManager.set(key, value, ttl);
  }

  async del(key: string): Promise<void> {
    await this.cacheManager.del(key);
  }

  // Reemplazamos el método reset que no existe en la interfaz Cache
  async clear(): Promise<void> {
    // Verificamos si el método está disponible en la implementación subyacente
    if (typeof (this.cacheManager as any).reset === 'function') {
      await (this.cacheManager as any).reset();
    } else if (typeof (this.cacheManager as any).clear === 'function') {
      await (this.cacheManager as any).clear();
    } else {
      console.warn('No clear/reset method available on cache manager');
    }
  }

  // Método para construir claves de caché basadas en filtros
  buildKey(prefix: string, filters: Record<string, any>): string {
    const filterString = Object.entries(filters)
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
      .map(([key, value]) => `${key}:${value}`)
      .join('|');

    return `${prefix}:${filterString || 'all'}`;
  }
}
