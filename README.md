# Shopline — Frontend

Premium multi-tenant e-commerce SPA (React 18 + TypeScript + Vite) for a Laravel 12 + Passport API.

## Quick start
```bash
npm install
cp .env.example .env
npm run dev        # http://localhost:5173
npm run build      # production build
npm test           # Vitest unit tests
npm run e2e        # Playwright (needs dev server)
```

## Demo (no backend required)
The service layer ships with a demo adapter over seeded data so the whole product is explorable offline. Point `VITE_API_URL` to your Laravel API and the same services/query hooks work against `{success, message, data, meta}` responses — Axios interceptors already attach Bearer token, `X-Store-Slug`, `X-Request-Id` and `Accept-Language`, with single-flight 401 refresh.

- **Live stores:** `/store/nova` (fashion), `/store/techzone` (electronics), `/store/verde` (grocery) — catalog, PDP, cart drawer, 4-step checkout (coupon `SHOPLINE10`), tracking & customer account.
- **Login:** `/login` — one-click demo roles: Business → `/dashboard`, Seller → `/dashboard`, Admin → `/admin`, Customer → account.
- **Dashboard:** analytics, TanStack-style data tables, product form w/ variant matrix & dropzone, order fulfillment, discounts, React Flow automation builder, reports, theme customizer (live preview), Cmd+K palette.
- **Marketing:** animated hero, feature grid, vertical tabs, counters, testimonial carousel (Embla), pricing from `/plans` data, comparison, FAQ, blog.

## Architecture
`src/{router,layouts,pages,components/{ui,marketing,store,dashboard,charts,forms,common},features,hooks,lib,services,store,types,i18n,styles,config}` — Zustand (client state), TanStack Query (server state), RHF+Zod (forms), Framer Motion, Recharts, React Flow, i18next EN/ES, dark mode, PWA.

## Brand
Gradient `linear-gradient(135deg,#90d833,#0b80e6 45%,#703fed 75%,#8f39fa)`, colors & shadows in `tailwind.config.ts`, logo in `public/logo.svg`.
