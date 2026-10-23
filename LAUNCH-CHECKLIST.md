# Launch checklist — what Anuj must provide

Nothing below has been invented. Until supplied, the site shows neutral wording or a clearly labelled placeholder (hide them all with `showPlaceholders: false`).

## Must have (blocks launch)
- [ ] **Production domain** → `VITE_SITE_URL`
- [ ] **Form delivery**: a form-service endpoint (`VITE_FORM_ENDPOINT`) and/or verified contact email
- [ ] **Verified contact email** (and phone / WhatsApp number if public) → `site.contact`
- [ ] **Approved portrait** (≈ 4:5, 1600×2000+) → `public/images/`, `site.images.portrait`
- [ ] **Social profile URLs** → `site.social`
- [ ] **Booking calendar link(s)** → `site.booking` (optional but recommended)
- [ ] **Privacy policy page / wording** — consent text on forms refers to reply-only use; confirm it matches reality and add a policy page if you collect data beyond replying
- [ ] **Review & approve all copy** — About text and approach statements are drafts written from the brief; correct anything that doesn't reflect Anuj

## Strongly recommended
- [ ] Verified long-form speaker bio (150–250 words) and background (education, roles, institutions)
- [ ] Final topic titles/abstracts and session formats Anuj is happy to deliver
- [ ] Speaker reel (YouTube/Vimeo embed) → `speakerReelEmbed`
- [ ] Real event photographs (with permission) and written testimonials (with permission to publish name/title)
- [ ] Media kit PDF → `public/` + `site.mediaKit`
- [ ] OG share image 1200×630 → `site.images.og`
- [ ] Real articles/videos → `src/content/insights.ts`
- [ ] Confirm programme names/status in `src/content/pages.ts` (currently "waitlist"/"in development" with no dates or prices)
- [ ] Venture links (DigiARV, NourishNudge) → `site.ventures[].url`

## Deliberately NOT on the site (add only if true)
Client logos, testimonials, speaking-engagement history, audience sizes, years of experience, headcount trained, results, certifications, awards, fees, guarantees. No Event/Article/Review structured data is emitted; JSON-LD is limited to Person, WebSite, BreadcrumbList, AboutPage and ContactPage.
