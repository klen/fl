# AGENTS

## Repo at a glance

- Stack: Next.js 14 App Router + React 18 + TypeScript + Mantine 7.
- This app is deployed as a static export (`next.config.js` sets `output: "export"`), so production output is `out/`.
- Package manager is Yarn (lockfile + CI use `yarn`).

## Commands that match CI

- Install: `yarn`
- Dev server: `yarn dev` (or `make dev`)
- Lint + typecheck (same order as CI): `yarn lint && yarn tsc --noEmit --pretty` (or `make lint`)
- Tests: `yarn jest` (or `make test`)
- Build static site: `yarn build` (or `make build`)
- Serve exported site locally: `make serve` (serves `out/` on port 8000)

## Focused verification

- Run one test file: `yarn jest utils/links.test.ts`
- Run one test by name: `yarn jest -t "should modify path"`

## Routing/deploy gotchas

- Use `siteLink()` from `utils/links.ts` for internal links that must work in static export/GitHub Pages.
- In non-dev envs, `siteLink()` appends `.html` by default and prefixes with `assetPrefix`; pass `false` for root/about links that should not get `.html`.
- `next.config.js` treats `NODE_ENV=test` as production-like for `assetPrefix`; link tests depend on this.

## App wiring (where to change what)

- Route entrypoints are `app/*/page.tsx`.
- Generation logic is in `generate/**` (`Item` in `generate/proto.ts` provides seeded random helpers).
- UI rendering lives in `components/**` (`components/info/*`, `components/place/*`, `components/layouts/*`).
- Shared hooks/utils are in `utils/**` (`useSeed` reads/writes URL hash; `useStorage` uses localStorage key `fl-storage`).

## Client-only and i18n quirks

- Most pages/components are client-side; keep `"use client"` where hooks/browser APIs are used.
- `ClientSide` layout wrapper is used to avoid mount-time/hydration issues when reading browser state.
- i18n initializes in `utils/i18n.ts`; it is pulled in via `utils/index.ts` re-export side effect. Do not remove that export unless you initialize i18n elsewhere.
- Locale files are in `public/locales/{ru,en}/common.json`; English intentionally falls back to source strings (`{}`).

## Files to avoid editing directly

- Build artifacts: `.next/`, `out/`, `tsconfig.tsbuildinfo`.
