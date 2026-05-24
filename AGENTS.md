# sat-landing-page — Agent Guide

## Project

Landing page for "San Antón Trail — La conquista del Molino" (annual trail race in Puerto Lápice, Ciudad Real, January). Fully static, no backend/auth/DB.

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (light use: fade-in on scroll, hover transitions only)
- **Icons:** Lucide React
- **Hosting:** Vercel (auto-deploy on push to `main`)
- **Language:** TypeScript required

## Architecture

- All content data lives in `data/race.ts` (export a `raceData` object). Components import from there — no hardcoded strings.
- Dark theme: `bg: #0B0B0B`, `accent: #FF5A1F`, `text: #FFFFFF`, `muted: #9CA3AF`
- Mobile-first responsive design. Priority: mobile > tablet > desktop.
- SEO: dynamic metadata, Open Graph, sitemap, robots.txt, Schema.org Event.

## Planned sections (in order)

Navbar (sticky, blur on scroll) → Hero (fullscreen bg, countdown, CTAs) → Countdown → About → Modalities (Senderismo 10K / Carrera 15.2K cards) → Route (static map + GPX download) → Gallery (Next.js Image, lazy, hover zoom) → Sponsors → FAQ (accordion) → Footer

## Conventions

- Use Next.js `<Image>` for all images (optimization required)
- Use `next/font` for typography
- Avoid parallax, excessive JS, complex effects
- SVG logos in `/public/logos/`, gallery in `/public/gallery/`, maps in `/public/maps/`
- All sections are client components where animation is needed, server components otherwise
- Target Lighthouse >90

## Development

```sh
npm run dev    # dev server
npm run build  # production build
```

## Out of scope

Login, admin panel, payments, database, results system, user management, backend of any kind.
