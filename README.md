# krish-poetfolio

> My first real frontend project — a personal portfolio built to showcase who I am as a developer.

This is where it all started. **krish-poetfolio** is my personal developer portfolio, built from scratch as my first serious dive into frontend development. It features an animated landing page with stats, a projects showcase, a services section, a resume page, and a contact form — all wrapped in a dark, immersive aesthetic.

---

## ✨ Features

- **Animated hero section** — photo animation, social links, and a downloadable CV button
- **Work / Projects page** — swipeable project cards with live + GitHub links
- **Services page** — overview of what I offer
- **Resume page** — skills, experience, and education
- **Contact page** — reach out form
- **Smooth page transitions** powered by Framer Motion
- **Fully responsive** layout

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) |
| Language | TypeScript |
| Styling | Tailwind CSS + tailwind-merge |
| Animations | Framer Motion |
| UI Components | Radix UI (Tabs, Tooltip, Select, Scroll Area) |
| Icons | Lucide React + React Icons |
| Slider | Swiper.js |
| Utilities | clsx, class-variance-authority |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
krish-poetfolio/
├── app/
│   ├── page.tsx          # Home / hero
│   ├── work/             # Projects showcase
│   ├── services/         # Services offered
│   ├── resume/           # Resume / CV
│   └── contact/          # Contact form
├── components/
│   ├── Stats.tsx          # Animated stat counters
│   ├── Socials.tsx        # Social media links
│   ├── navbar/            # Navigation bar
│   ├── animation/         # Photo & page animations
│   └── ui/                # Shared UI components
└── public/               # Static assets & images
```

---

## 🌐 Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` and it ships automatically.

```bash
npm run build   # verify production build locally
npm run start   # preview the production build
```

---

*Built with a lot of curiosity, a few late nights, and way too many browser tabs open. — Krish*
