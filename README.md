<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a0a,50:1a1400,100:0a0a0a&height=140&section=header&text=taynet&fontSize=48&fontColor=c8a45c&fontAlignY=55&animation=fadeIn" width="100%"/>

**Personal portfolio site for Arizen / gritty-sloth**

[![Live](https://img.shields.io/badge/live-taynet.vercel.app-c8a45c?style=flat-square&logo=vercel&logoColor=black)](https://taynet.vercel.app)
[![Stack](https://img.shields.io/badge/React_19-0a0a0a?style=flat-square&logo=react&logoColor=61dafb)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-0a0a0a?style=flat-square&logo=typescript&logoColor=3178c6)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-0a0a0a?style=flat-square&logo=tailwindcss&logoColor=38bdf8)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-0a0a0a?style=flat-square&logo=vite&logoColor=646cff)](https://vite.dev)

</div>

---

## What this is

Minimal dark portfolio built from scratch.

Live data from the GitHub API. Smooth scroll via Lenis. Click ripples, orbiting keywords, a floating dock nav. Reads dark because everything is.

---

## Sections

| Section | What it does |
|---|---|
| **Hero** | Full-viewport landing — name, live clock, orbit ring, typewriter line |
| **About** | Bio + identity card (`alias`, `handle`, `status: building`) |
| **GitHub** | Live-fetched stats + full public repo list from GitHub API |
| **Projects** | Filterable grid — ZURI, SHARLETT, AUTOMATION TOOLS, ZEPHYRIA |
| **Contact** | Footer with links |

---

## Stack

**Core**

![React](https://img.shields.io/badge/React_19-0f0f0f?style=for-the-badge&logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-0f0f0f?style=for-the-badge&logo=typescript&logoColor=3178c6)
![Vite](https://img.shields.io/badge/Vite-0f0f0f?style=for-the-badge&logo=vite&logoColor=646cff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-0f0f0f?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8)

**UI & Motion**

![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-0f0f0f?style=for-the-badge&logo=shadcnui&logoColor=ffffff)
![Lenis](https://img.shields.io/badge/Lenis-0f0f0f?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=&logoColor=c8a45c)
![Lucide](https://img.shields.io/badge/Lucide_Icons-0f0f0f?style=for-the-badge&logo=lucide&logoColor=ffffff)

**Data**

![GitHub API](https://img.shields.io/badge/GitHub_API-0f0f0f?style=for-the-badge&logo=github&logoColor=ffffff)

**Deploy**

![Vercel](https://img.shields.io/badge/Vercel-0f0f0f?style=for-the-badge&logo=vercel&logoColor=ffffff)

---

## Project structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── ClickRipple.tsx  # golden ring on click
│   ├── DockNav.tsx      # floating bottom nav with active section tracking
│   └── OrbitRing.tsx    # rotating keyword ring in Hero
├── sections/
│   ├── Hero.tsx         # full-viewport landing
│   ├── About.tsx        # bio + identity card
│   ├── GitHubStats.tsx  # live GitHub API data
│   ├── Projects.tsx     # filterable project grid
│   └── Contact.tsx      # footer + links
├── hooks/
│   └── use-mobile.ts    # responsive breakpoint hook
├── lib/
│   └── utils.ts         # cn() class merge utility
├── App.tsx              # root — Lenis setup + section layout
├── main.tsx             # entry point
└── index.css            # global styles + CSS variables + keyframes
```

---

## Running locally

```bash
git clone https://github.com/gritty-sloth/portfolio
cd portfolio
npm install
npm run dev
# → http://localhost:3000
```

**Build for production**

```bash
npm run build     # type-check + bundle → /dist
npm run preview   # preview the production build locally
```

---

## Deploying to Vercel

1. Push to GitHub
2. [vercel.com](https://vercel.com) → **New Project** → import this repo
3. Vercel auto-detects Vite — no config needed
4. Hit **Deploy**

Every `git push` to `main` triggers a redeploy automatically.

---

## Customising

**Change the name in Hero**
```tsx
// src/sections/Hero.tsx
<h1>ARIZEN</h1>     // line ~64 — replace AYUSH
<p>alias</p>         // line ~74 — replace yadav
```

**Update contact links**
```tsx
// src/sections/Contact.tsx
const CONTACTS = [
  { label: 'email', value: 'your@email.com', href: 'mailto:your@email.com' },
  // ...
]
```

**Add a project**
```tsx
// src/sections/Projects.tsx
{
  name: 'YOUR PROJECT',
  status: 'WIP',           // 'LIVE' | 'WIP' | 'IDEA'
  description: '...',
  tags: 'stack · here',
  filter: ['all', 'code'], // 'all' | 'code' | 'concept'
}
```

**Change the orbit keywords**
```tsx
// src/components/OrbitRing.tsx
const KEYWORDS = ['your', 'tech', 'stack', 'here', ...]
```

---

## Design decisions

**Why no router?** Single page, single scroll. React Router adds nothing here.

**Why raw inline styles alongside Tailwind?** Tailwind handles layout and spacing. Precise one-off values (exact font sizes, specific hex colors, animation timing) stay inline rather than polluting the config with arbitrary values.

**Why `kimi-plugin-inspect-react` in vite.config?** Scaffolded via Kimi. Safe to remove if you're working outside that environment — delete the import and remove it from `plugins: []`.

**Why Lenis over native scroll?** The `lerp: 0.1` gives that butter smooth deceleration. Native CSS `scroll-behavior: smooth` doesn't come close.

---

<div align="center">

built with passion. 

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a0a,50:1a1400,100:0a0a0a&height=80&section=footer" width="100%"/>

</div>
