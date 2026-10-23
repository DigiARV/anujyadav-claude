# Anuj The Coach — personal brand website

Vite + React 18 + TypeScript + React Router. No animation library (motion is CSS + IntersectionObserver, and respects `prefers-reduced-motion`).
Every route is **prerendered to static HTML at build time** (real content, unique title/meta/canonical/Open Graph, JSON-LD, sitemap, robots, 404), then hydrated — it deploys to any static host.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + client build + SSR prerender → dist/
npm run lint
```
To preview the built output use any static server on `dist/` (e.g. `npx serve dist`). Note: `vite preview` falls back to the home page for sub-routes and causes hydration warnings; use a server that serves `<route>/index.html`.

## Configure (everything lives in one file)

Edit **`src/config/site.ts`**: email, WhatsApp, phone, location, booking URLs (Cal.com/Calendly), LinkedIn/YouTube/Instagram/X, portrait path, OG image, speaker reel embed, media kit, ventures.
**Empty value = hidden** — no dead links, nothing invented.

Environment (copy `.env.example` → `.env`; only `VITE_*` public values, never secrets):

| Variable | Purpose |
|---|---|
| `VITE_SITE_URL` | Production domain → canonical URLs, sitemap, OG. **Set before deploying.** |
| `VITE_FORM_ENDPOINT` | Form backend URL (JSON POST). |
| `VITE_FORM_ACCESS_KEY` | Optional public key for services like Web3Forms. |

### Connecting the forms
All five forms (speaking, training, coaching, education waitlist, general) share `src/components/EnquiryForm.tsx` and are defined in `src/content/forms.ts`.
1. **Form service (recommended):** create a form at Formspree / Web3Forms / Getform, set `VITE_FORM_ENDPOINT` (and key if required). Payload: the fields + `form`, `subject`, `consent`, `page`.
2. **No backend:** set `contact.email`; the form opens a prefilled email draft and says plainly that *nothing has been sent* until the visitor presses Send.
3. **Neither:** the form shows a "not connected" notice and refuses to claim success.
A "success" state is shown **only** after the endpoint returns 2xx. A hidden honeypot field filters basic bots.

### Editing content
- `src/content/services.ts` — services, outcomes, audiences, pathways
- `src/content/speaking.ts` — topics (proposed), formats, audiences, bio
- `src/content/pages.ts` — training, coaching, education programmes, About, insight themes
- `src/content/insights.ts` — **add real articles/videos here**; the hub, filters and home preview update automatically
- `src/config/routes.json` — per-page title/description (also drives sitemap)
- `site.showPlaceholders` — set `false` at launch to hide every "add verified info" slot.

### Design system
Tokens (colour, type scale, spacing, motion) are at the top of `src/styles/index.css`, with documented contrast rules. Display: Instrument Serif; body: Hanken Grotesk (both self-hosted via Fontsource, latin subset loaded).

## Deploy
`dist/` is fully static. 
- **Hostinger / Apache:** upload the *contents* of `dist/` to `public_html/` (the `.htaccess` provides the 404 page and caching).
- **Netlify / Vercel / Cloudflare Pages:** build command `npm run build`, output `dist`, env `VITE_SITE_URL` (+ form vars). Point the 404 to `/404.html` if the host needs it.
Photos: drop files in `public/images/` and reference them in `site.ts` (use `.webp`/`.jpg`, portrait ≈ 1600×2000).

See **LAUNCH-CHECKLIST.md** for what Anuj must supply before going live.
