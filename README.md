# Marco & Youstina — Wedding Invitation

A single-page wedding invitation (Vite + React + TypeScript), themed
"evening by the sea": midnight navy, gold, twinkling stars and rising sparks.

- **Date:** Sunday, 30 August 2026 — 8:30 PM
- **Venue:** Sea Mariage Wedding Hall, Alexandria

## Customize

Everything personal lives in [`src/config.ts`](src/config.ts) — names, verses,
date/time (also drives the countdown), venue, gallery photos and music.

Photos: drop six images named `couple-01.jpg` … `couple-06.jpg` into
`public/images/`. Until a file exists, the gallery shows an elegant
placeholder.

Music: `public/audio/perfect.mp3` starts when the guest taps
"Open Invitation" (mobile browsers require a tap before audio can play).

## Run locally

```
npm install
npm run dev
```

## Deploy (Vercel)

Import the folder as a Vite project — defaults work:
build command `npm run build`, output directory `dist`.
