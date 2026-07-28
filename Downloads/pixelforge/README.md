# Gaith — Startup Web Design Website

A Next.js 14 + TypeScript + Tailwind + Framer Motion website for a startup web studio.

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
git commit -m "Initial commit: Gaith site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

(Create the empty repo on GitHub first, then swap in its URL above.)

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In GitHub, go to **Settings → Pages** and set the source to **GitHub Actions**.
3. Push to `main` and the workflow will build the static export and publish it.
4. Your site will be available at `https://YOUR_USERNAME.github.io/Gaith/`.

## Notes

- Colours, spacing and copy live in `src/lib/constants.ts` and `tailwind.config.ts` — start there to customise.
- Portfolio images currently pull from Unsplash; swap the `image` URLs in `constants.ts` for your own project screenshots.
- The contact form currently simulates a submission (no backend). Wire `src/components/sections/ContactForm.tsx` up to Formspree, Resend, or your own API route to actually receive messages.
- Inter font loads via a `<link>` tag in `src/app/layout.tsx` — works out of the box on any real host.
