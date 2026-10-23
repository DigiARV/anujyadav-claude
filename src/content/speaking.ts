/**
 * Speaking content. Topics are PROPOSED areas — not claims about past keynotes.
 * Anuj to confirm/refine titles, abstracts and session formats before launch.
 */

export interface Topic {
  id: string;
  title: string;
  /** The situation this talk is built for. */
  premise: string;
  takeaways: string[];
  suitedFor: string;
}

export const topics: Topic[] = [
  {
    id: "growth-mindset",
    title: "Growth Mindset and High-Performance Thinking",
    premise: "Why capable people stall — and the habits of thought that keep progress moving when conditions are not ideal.",
    takeaways: ["A practical frame for setbacks and ambition", "Daily habits that compound", "How to build a growth culture in a team"],
    suitedFor: "All-hands, sales kickoffs, campus and youth events",
  },
  {
    id: "leadership-communication",
    title: "Leadership, Communication and Influence",
    premise: "Leadership is mostly conversation. How to say what matters so that people understand, trust and act.",
    takeaways: ["Structuring a message that lands", "Influence without authority", "Presence in rooms, meetings and on stage"],
    suitedFor: "Leadership summits, manager programmes, offsites",
  },
  {
    id: "future-of-work",
    title: "The Future of Work: AI, Skills and Human Potential",
    premise: "What changes, what does not, and which human skills grow in value as AI becomes ordinary.",
    takeaways: ["A sober view of AI and jobs", "The skills worth building now", "How organisations can prepare without panic"],
    suitedFor: "Industry conferences, HR and L&D forums, digital transformation events",
  },
  {
    id: "ai-productivity",
    title: "AI for Business and Professional Productivity",
    premise: "A grounded tour of how professionals and businesses can use AI tools today — what to try first and what to avoid.",
    takeaways: ["Practical use-cases by role", "A simple adoption approach", "Common pitfalls and responsible use"],
    suitedFor: "Business summits, chambers, corporate sessions",
  },
  {
    id: "personal-branding",
    title: "Personal Branding and Thought Leadership",
    premise: "Visibility is a leadership skill. How to become known for something specific, credibly and sustainably.",
    takeaways: ["Positioning in one sentence", "A repeatable content rhythm", "Turning expertise into opportunity"],
    suitedFor: "Professional networks, creator and founder events",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship, Execution and Sustainable Growth",
    premise: "From idea to traction without burning out — priorities, systems and the discipline of finishing.",
    takeaways: ["Focus over frenzy", "Simple operating systems for small teams", "Growth that holds up"],
    suitedFor: "Startup events, entrepreneurship cells, business forums",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing and Modern Customer Acquisition",
    premise: "How customers discover and choose today — across search, social and AI answers — and what businesses should do about it.",
    takeaways: ["How discovery is changing", "Fundamentals that still work", "Where to invest limited time and budget"],
    suitedFor: "Marketing forums, SME programmes, business associations",
  },
];

export const formats = [
  { id: "keynote", label: "Keynote", note: "A single, high-impact talk shaped to your theme." },
  { id: "fireside", label: "Fireside chat", note: "A moderated conversation with your host." },
  { id: "panel", label: "Panel", note: "A perspective for a wider discussion." },
  { id: "workshop", label: "Workshop", note: "Interactive, hands-on and outcome-led." },
  { id: "corporate", label: "Corporate session", note: "A tailored session for your team or leadership group." },
];

export const audiences = [
  "Corporate and leadership teams",
  "Conferences and industry summits",
  "Business associations and chambers",
  "Universities, colleges and youth programmes",
  "Startup and entrepreneurship communities",
  "Creator and professional-branding events",
];

export const speakerBio = {
  short:
    "Anuj Yadav is a coach, trainer, entrepreneur and educator who works across business growth, leadership, personal development, digital marketing, AI and personal branding.",
  /** TODO(Anuj): add verified bio details — roles, institutions, notable audiences — before launch. */
  placeholderNote: "Add your verified long-form speaker bio here (150–250 words) — see LAUNCH-CHECKLIST.md.",
};
