# Just-Chemicals Marketing Site

Static marketing site for **Juschem Solutions Pvt. Ltd.** (brand: Just-Chemicals / JCSPL).
Built with Astro 5 + Tailwind v4. Deploys to Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output to ./dist
npm run preview  # preview ./dist locally
npm run check    # astro type-check (optional)
```

## Deploy

The repo includes `vercel.json` (framework: astro, clean URLs, legacy redirects).
Push to the branch linked to a Vercel project, or `vercel --prod`.

## Content sources

- Site constants (brand, contact, nav, verticals): `src/lib/site.ts`
- Per-page SEO: `src/lib/seo-config.ts`
- Vertical MDX (chemicals / trainings / techie): `src/content/verticals/`
- Static pages (home, chemicals, trainings, legal): `src/pages/`

## Brand

- Domain: https://www.just-chemicals.com
- Email: Contact@just-chemicals.com
- Phone: +91 798 563 5683
- CIN: U52603KA2018PTC112946
