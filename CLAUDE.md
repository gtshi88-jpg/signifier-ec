# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build (also the fastest way to type-check all routes)
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

There are no tests.

## Stack

Next.js 16 (App Router) with React 19, TypeScript, and Tailwind CSS v4 (CSS-first config via `@theme` in `app/globals.css` — there is no `tailwind.config`). Per AGENTS.md above: this Next.js version is newer than your training data; consult `node_modules/next/dist/docs/` before relying on remembered APIs.

## What this project is

A jewelry-brand storefront **layout study** — a static mockup with no backend, no state management, and no real commerce. All product, news, journal, and press content is hardcoded: shared entries live in `app/data/*.ts` (news/journal/press, each exporting typed arrays plus `getXBySlug`/`getAdjacentX` helpers), while product and collection data is defined inline in the page files. Cart/wishlist counts in the header are hardcoded strings. Site copy is Japanese (`lang="ja"`).

URL structure mimics Shopify: `/collections/all`, `/products/[handle]`, and static/content pages under `/pages/*` (philosophy, gallery, news, press, journal, contact, legal, ...). News/journal/press have `[slug]` detail routes under `/pages/<section>/[slug]`.

## Architecture

Nearly every page is a `"use client"` component. Dynamic routes therefore unwrap `params` (a Promise in this Next.js version) with React's `use()` hook, not `await`. Detail pages call `notFound()` for unknown slugs.

`app/components/chrome.tsx` is the shared foundation almost everything imports:
- **Constants**: `RED` (#b0301c vermillion accent), `BG` (#f2f0ec warm off-white), `nav`/`navLinks`/`footerGroups`
- **`u(id, w)`** — builds Unsplash image URLs from a photo id (ids prefixed `premium_` route to plus.unsplash.com); both hosts are allowlisted in `next.config.ts`
- **`Header` / `Footer`** — every page renders these itself (they are not in the root layout). `useHeaderTheme()` inside chrome.tsx maps pathname → header text treatment (`blend` on `/`, `dark` on `/pages/press*`, `light` elsewhere); a new page with a dark hero needs a case added there
- **Motion primitives**: `Reveal` (scroll-in fade/translate via IntersectionObserver), `CurtainImage` (curtain-wipe + settle-zoom image reveal), `Grain` and `Cursor` (site-wide overlays mounted in the root layout)

`app/components/static-page.tsx` provides `StaticPage` (breadcrumb + vertical side label + title shell) and `Article` — use these for any new support/legal-style page under `/pages/*`.

## Visual conventions

- Fonts come from the root layout via CSS variables: `--font-serif-brand` (Yeseva One, latin display) and `--font-serif-jp` (Shippori Mincho); body text is serif everywhere
- Wide letter-spacing (`tracking-[0.15em]`–`[0.35em]`) for headings/labels; vertical `writing-mode` side labels in `RED` are a recurring motif
- Apply the `img-tone` class to photographs for the unified desaturated grade; `u-line` gives the draw-in underline on links
- Interactive elements can set `data-cursor="LABEL"` to expand the custom cursor into a labeled circle
- Animations respect `prefers-reduced-motion` globally (see globals.css); keep new motion behind the existing primitives where possible
