import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { environment } from 'src/environment';
import { createHash } from 'crypto';

@Injectable()
export class CacheRedisService implements OnModuleDestroy {

    private readonly logger = new Logger(CacheRedisService.name);
    private readonly redisClient: Redis;

    constructor() {
        this.redisClient = new Redis({
            host: environment.redis.host,
            port: environment.redis.port,
            password: environment.redis.auth_pass,
        });
        this.redisClient.on('error', (err) => {
            this.logger.error('Redis cache error ' + err.toString());
        });
    }

    onModuleDestroy() {
        this.redisClient.disconnect();
    }

    public async saveInCache(key: string, ttl: number, data: string | object): Promise<void> {
        const value = typeof data === 'object' ? JSON.stringify(data) : data;
        await this.redisClient.setex(key, ttl, value);
    }

    public async getFromCache(key: string, asObject?: boolean): Promise<any> {
        const data = await this.redisClient.get(key);
        if (!data) return false;
        if (asObject) {
            try {
                return JSON.parse(data);
            } catch (e) {}
        }
        return data;
    }

    public async invalidate(key: string): Promise<boolean> {
        const result = await this.redisClient.del(key);
        return result > 0;
    }

    public checksum(data: string): string {
        return createHash('md5').update(data).digest('hex');
    }

    public async flushAll(): Promise<void> {
        await this.redisClient.flushall();
    }
}
