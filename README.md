<div align="center">

# Navigo Website

**The public-facing marketing site for Navigo — Nairobi's matatu navigation app.**

---

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![GitHub](https://img.shields.io/badge/GitHub-navigo--website-181717?style=flat-square&logo=github)](https://github.com/Navigo-Kenya/navigo-website)
[![Live](https://img.shields.io/badge/Live-navigo.co.ke-FF6F00?style=flat-square&logo=cloudflare&logoColor=white)](https://navigo.co.ke)

</div>

---

## Screenshot

<div align="center">

<img src="public/og-image.png" width="800" alt="Navigo website homepage"/>

</div>

> Add a full-page screenshot at `public/og-image.png` — recommended: 1200 × 630 px (also used as the OpenGraph social preview image).

---

## What this is

This is the **marketing website** for the Navigo app — the page someone lands on when they hear about Navigo and want to learn more. It explains what the app does, who it's for, and where to download it. It is not the app itself, not the admin console, and not the API.

The site lives at **[navigo.co.ke](https://navigo.co.ke)** and is deployed automatically through Cloudflare Pages on every push to `main`.

---

## Pages

| Page | URL | What it covers |
|------|-----|----------------|
| **Home** | `/` | Full landing page — hero, features, how it works, coverage map, community, for operators, download links |
| **Community** | `/community` | Community contributions programme — how riders help improve stop data |
| **Privacy Policy** | `/privacy` | Data & privacy policy |
| **Terms of Service** | `/terms` | Terms of use |

---

## Sections on the homepage

- **Hero** — Headline, app description, and download buttons (App Store / Google Play)
- **Features** — What Navigo does: real-time navigation, AI route planning, alerts, offline support
- **How it works** — Three-step visual: search → plan → go
- **Coverage** — Interactive Mapbox map showing the matatu routes and stops Navigo covers across Nairobi
- **Data Credits** — Acknowledgement of the Digital Matatus / University of Nairobi GTFS dataset
- **Community** — How crowdsourced stop photos and edits from riders improve the app
- **For Operators** — How SACCOs and bus operators can plug into the Navigo platform
- **Download** — App Store and Google Play links

---

## Running locally

```bash
cd website
npm install
cp .env.local.example .env.local   # fill in your tokens (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `website/.env.local`:

```env
# Your site's public URL — used for the sitemap and OG metadata
NEXT_PUBLIC_SITE_URL=https://navigo.co.ke

# Mapbox public token — powers the Coverage section map
# Same account as EXPO_PUBLIC_MAPBOX_TOKEN in hopln/.env
NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_public_token

# Navigo API base URL — used to fetch live stop/route coverage data
# Dev: http://localhost:8000  |  Prod: https://api.navigo.co.ke
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## Deployment

The site is deployed on **Cloudflare Pages** with automatic builds on every push to `main`.

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `out` |
| Node.js version | 20 |

> After transferring the repo to the `Navigo-Kenya` GitHub organization, reconnect the Git integration in **Cloudflare Dashboard → Pages → navigo-website → Settings → Builds & Deployments → Git repository**. Without this, auto-deploys may stop working once GitHub's redirect expires.

---

## Tech stack

| Tool | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org) | React framework — static export (`output: "export"`) |
| [React 19](https://react.dev) | UI |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [Framer Motion](https://framer.com/motion) | Page animations and scroll-triggered reveals |
| [Mapbox GL](https://mapbox.com) | Interactive coverage map |
| [Lucide React](https://lucide.dev) | Icons |
| [Geist](https://vercel.com/font) | Primary typeface |
| [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) | Auto-generated `sitemap.xml` and `robots.txt` |

---

<div align="center">

Built for Nairobi's commuters.

</div>
