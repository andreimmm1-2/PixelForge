# PixelForge — Premium Web Agency Website

A Next.js 14 + TypeScript + Tailwind + Framer Motion website for a fictional UK web design agency.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Push to GitHub

```bash
cd pixelforge
git init
git add .
git commit -m "Initial commit: PixelForge agency site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

(Create the empty repo on GitHub first, then swap in its URL above.)

## Deploy (recommended: Vercel)

1. Push the repo to GitHub (above).
2. Go to https://vercel.com/new, import the repo.
3. Framework preset "Next.js" is auto-detected — just click Deploy.
4. Your site goes live at a `*.vercel.app` URL, with a custom domain option.

## Notes

- Colours, spacing and copy live in `src/lib/constants.ts` and `tailwind.config.ts` — start there to customise.
- Portfolio images currently pull from Unsplash; swap the `image` URLs in `constants.ts` for your own project screenshots.
- The contact form currently simulates a submission (no backend). Wire `src/components/sections/ContactForm.tsx` up to Formspree, Resend, or your own API route to actually receive messages.
- Inter font loads via a `<link>` tag in `src/app/layout.tsx` — works out of the box on any real host.
