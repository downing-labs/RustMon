# RustMon Frontend

Angular 19 frontend for RustMon — a Rust game server admin panel.

This app is intended to be built and served via Docker. See the root `docker-compose.yml` for the full stack setup.

## Stack

- Angular 19
- PrimeNG 19 (Aura dark theme)
- FontAwesome
- TypeScript 5.8

## Development

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Run local dev server (connects to backend at `http://localhost:3000`):

```bash
npx ng serve
```

Navigate to `http://localhost:4200/`.

## Build

```bash
npx ng build --configuration production
```

Output goes to `dist/rustmon/browser/`.

## Docker

The frontend is built and served via nginx. From the repo root:

```bash
docker compose build frontend
docker compose up frontend
```
