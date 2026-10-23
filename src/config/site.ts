/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — the single place to edit contact details, social links,
 *  booking links, form wiring and the production domain.
 *
 *  Rule: leave a value as `""` (empty) until it is verified. The UI hides any
 *  link or contact route whose value is empty — nothing is invented, and no
 *  dead links are rendered.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const env = import.meta.env;

export const site = {
  name: "Anuj Yadav",
  brand: "Anuj The Coach",
  tagline: "Helping people and businesses turn potential into progress.",

  /** Production domain (no trailing slash). Set VITE_SITE_URL at build time, or edit the fallback. */
  url: ((env.VITE_SITE_URL as string | undefined) || "https://example.com").replace(/\/$/, ""),

  /**
   * Pre-launch switch. `true` shows clearly-labelled "add this" slots wherever verified facts are still needed
   * (testimonials, event photos, background). Set to `false` at launch to hide every placeholder slot.
   */
  showPlaceholders: true,

  /** Language / locale for metadata. */
  locale: "en",

  contact: {
    /** Verified public email, e.g. "hello@yourdomain.com". Empty = hidden. */
    email: "",
    /** International format without symbols, e.g. "919999999999" (wa.me style). Empty = WhatsApp hidden. */
    whatsapp: "",
    /** Verified phone number to show publicly. Empty = hidden. */
    phone: "",
    /** Base city / region, e.g. "India". Empty = hidden. */
    location: "",
  },

  /** Booking calendar (Cal.com, Calendly, Google Appointment Schedule...). Empty = "Book a call" hidden. */
  booking: {
    general: "",
    speaking: "",
    coaching: "",
  },

  /** Full profile URLs. Empty = icon hidden. */
  social: {
    linkedin: "",
    youtube: "",
    instagram: "",
    x: "",
  },

  /** Related ventures — shown as supporting credentials only. Add `url` when ready. */
  ventures: [
    { name: "DigiARV", role: "Digital marketing, AI-enabled business solutions and digital education", url: "" },
    { name: "NourishNudge", role: "Coaching, training, soft skills, communication and professional development", url: "" },
  ],

  /**
   * Form delivery. Pick ONE:
   *  1. `endpoint` — any service that accepts a JSON POST (Formspree, Web3Forms, Getform, Make/Zapier webhook, your API).
   *  2. Leave empty and set `contact.email` — the form then offers a prefilled mailto: draft (clearly labelled as such).
   * If neither exists the form says plainly that it is not connected yet. It NEVER pretends a message was sent.
   */
  forms: {
    endpoint: (env.VITE_FORM_ENDPOINT as string | undefined) || "",
    /** Public access key (e.g. Web3Forms). Public by design — never put a private secret here. */
    accessKey: (env.VITE_FORM_ACCESS_KEY as string | undefined) || "",
  },

  /** Image paths served from /public. `null` = show the clearly-labelled placeholder. */
  images: {
    /** e.g. "/images/anuj-portrait.jpg" — a real, approved portrait (approx. 4:5, min 1600px tall). */
    portrait: "/images/anuj-hero.webp" as string | null,
    /** CSS object-position used when the photo is cropped (portrait frames). Tune to keep the face in view. */
    portraitFocus: "72% 30%",
    portraitAlt: "Anuj Yadav seated at a desk in a dark, warmly lit office, smiling toward the camera",
    /** Wide hero photograph (landscape, ≥1600px). null = the brand-mark hero is used instead. */
    hero: "/images/anuj-hero.webp" as string | null,
    heroFocus: "72% 38%",
    heroWidth: 1672,
    heroHeight: 941,
    /** Social sharing card (1200×630). e.g. "/images/og.jpg". Empty = no og:image tag. */
    og: "/images/og.jpg",
    /** Optional landscape on-stage photo for the speaking page (16:9). */
    speaking: null as string | null,
  },

  /** Speaker reel embed (YouTube/Vimeo embed URL). null = reel placeholder. */
  speakerReelEmbed: null as string | null,
  /** Real downloadable speaker profile / media kit PDF in /public. null = download hidden. */
  mediaKit: null as string | null,
};

/* ── Derived helpers (don't edit) ─────────────────────────────────────────── */

export const socialLinks = (
  [
    ["LinkedIn", site.social.linkedin],
    ["YouTube", site.social.youtube],
    ["Instagram", site.social.instagram],
    ["X", site.social.x],
  ] as const
).filter(([, url]) => !!url) as unknown as [string, string][];

export const mailto = (subject: string, body = "") =>
  site.contact.email
    ? `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`
    : "";

export const whatsappLink = (text = "Hello Anuj, I'd like to enquire about…") =>
  site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}` : "";
