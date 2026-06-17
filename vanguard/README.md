# VANGUARD — Hero Landing Page

A fullscreen, single-viewport hero section for a creative agency, built with React, Tailwind CSS, and Vite.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/App.tsx` — the entire hero (navbar, mobile menu, hero copy, CTAs, stats)
- `src/index.css` — Tailwind directives + the fade-up/fade-in/scale-in keyframe utilities
- `tailwind.config.js` — registers the `podium` and `inter` font families
- `index.html` — loads Inter from Google Fonts and the custom "FSP DEMO - PODIUM Sharp 4.11" display font

## Notes

- The background video is loaded directly from the provided CloudFront URL.
- A subtle dark gradient overlay sits between the video and the content to keep white text legible regardless of what's playing underneath — remove it from `App.tsx` if you'd like the raw, unfiltered footage.
- Below the `md` breakpoint, the nav collapses into a hamburger that opens a fullscreen menu with staggered link animations.
