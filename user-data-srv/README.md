# RustMon Backend (user-data-srv)

NestJS 10 backend service for RustMon. Provides Steam profile lookups, IP geolocation, and Rustmap integration with Redis caching.

## Stack

- NestJS 10
- ioredis 5
- Axios
- Node 20

## Environment Variables

| Variable | Description |
|---|---|
| `STEAM_API` | Steam Web API key |
| `CACHE_HOST` | Redis host |
| `CACHE_PORT` | Redis port |
| `CACHE_AUTH` | Redis password |
| `CACHE_TTL` | Cache TTL in seconds (default: 604800) |

## Docker

From the repo root:

```bash
docker compose build backend
docker compose up backend
```

## Local Development

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Run in development mode:

```bash
npm run start:dev
```

Run in production mode:

```bash
npm run build
npm run start:prod
```
