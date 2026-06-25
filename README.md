# GHD Hotels — Luxury Hospitality Website

A minimalist, premium landing page for **GHD Hotels** and **Nivaãra Coco Beach**, built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and shadcn/ui.

## Stack

- **Next.js 15** — App Router, SEO metadata, optimized images
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — fade-up reveals, parallax hero, hover transitions
- **shadcn/ui** — property dropdown, buttons
- **Google Fonts** — Cormorant Garamond (brand/headings), Inter (body/buttons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx      # Fonts, metadata
  page.tsx        # Landing page assembly
  globals.css     # Luxury theme tokens

components/
  Header.tsx
  Hero.tsx
  Welcome.tsx
  Experiences.tsx
  Highlights.tsx
  Gallery.tsx
  CTA.tsx
  Footer.tsx

lib/
  constants.ts    # Contact info, images, copy
  animations.ts   # Shared Framer Motion variants
```

## Images

Property photography lives in `public/images/nivaara/` (optimized WebP). Source assets can be added as PNG and converted for production.
