# B-JOB FBS v2

Новая версия системы создаётся с нуля. Старые компоненты и данные не используются.

## Этапы
- COMMIT 1 — Foundation
- COMMIT 2 — Core Business
- COMMIT 3 — Final

## Foundation
React + Vite, маршрутизация, единый layout, RBAC-контур, dashboard, управление пользователями и изолированный persistence adapter.

> На Foundation используется локальный demo persistence для возможности сразу запустить приложение. Он намеренно изолирован за `src/core/persistence.js`; shared production persistence/auth будет подключён до финального этапа.

## Запуск
```bash
npm install
npm run dev
```

Сборка:
```bash
npm run build
```

Первичный вход: `Admin1` / `Admin123`.

## Deployment
Для Vercel задан `vercel.json`: проект собирается командой `npm run build`, а production output берётся из `dist`.
