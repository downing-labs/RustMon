export const environment = {
  steamApiKey: process.env.STEAM_API,
  ipstackApiKey: process.env.IPSTACK_API ?? '',
  redis: {
    host: process.env.CACHE_HOST ?? 'localhost',
    auth_pass: process.env.CACHE_AUTH,
    port: process.env.CACHE_PORT ? parseInt(process.env.CACHE_PORT) : 6379
  },
  secondsCacheUsers: process.env.CACHE_TTL ? parseInt(process.env.CACHE_TTL) : 604800,
}
