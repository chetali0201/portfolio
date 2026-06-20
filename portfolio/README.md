# Chetali Kumbhare — Portfolio

A premium, dark-themed personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Customize

- **Profile photo** — drop a photo at `public/profile.jpg` (square, ≥600×600px). The hero falls back to a styled "CK" monogram if it's missing.
- **Resume** — replace `public/resume-chetali-kumbhare.pdf` with your real resume (same filename, or update the links in `Hero.jsx` and `Contact.jsx`).
- **EmailJS** — the contact form uses [EmailJS](https://www.emailjs.com/). Create a free account, then fill in `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` at the top of `src/components/Contact.jsx`. Until configured, the form simulates a successful send so the UI stays demoable.
- **Social links** — update the GitHub/LinkedIn/Twitter URLs in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`.
- **Projects, testimonials, experience** — edit the data arrays at the top of `Projects.jsx`, `Testimonials.jsx`, `Experience.jsx`, and `About.jsx`.
- **Theme tokens** — colors, fonts and spacing live in `tailwind.config.js` under `theme.extend`.

## Folder structure

```
src/
  components/   UI sections and building blocks
  hooks/        useTheme, useTypewriter
  animations/   shared Framer Motion variants
  assets/       images/icons you add
```

## Features

- Dark/light theme toggle (persisted to localStorage)
- Glassmorphism cards, animated gradients, floating particles
- Cursor glow effect (desktop only, respects `prefers-reduced-motion`)
- Typewriter hero subtitle, animated stat counters
- Animated project filter (All / Full Stack / AI-ML / Frontend)
- Vertical animated experience timeline
- EmailJS-powered contact form
- SEO meta tags + Open Graph/Twitter cards, `robots.txt`
- Fully responsive, keyboard-focus visible, reduced-motion aware
