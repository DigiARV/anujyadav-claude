/**
 * Service catalogue. Edit freely — pages render from this data.
 * `tier` controls visual priority on the Services page:
 *   1 = lead offer (large), 2 = core offer, 3 = supporting offer.
 * Nothing here asserts past engagements, results or credentials.
 */

export type EnquiryKind = "speaking" | "training" | "coaching" | "education" | "general";

export interface Service {
  id: string;
  tier: 1 | 2 | 3;
  title: string;
  /** One-line outcome promise, written as direction of travel, not a guarantee. */
  outcome: string;
  summary: string;
  audience: string;
  format: string;
  offerings: string[];
  cta: { label: string; to: string };
  enquiry: EnquiryKind;
}

export const services: Service[] = [
  {
    id: "keynote-speaking",
    tier: 1,
    title: "Keynote Speaking",
    outcome: "Give your people a reason — and a plan — to move.",
    summary:
      "Talks that pair a clear idea with practical takeaways, designed around your audience and the point your event needs to land.",
    audience: "Conference organisers, corporate leadership teams, industry bodies, campuses and community events.",
    format: "Keynote, fireside chat, panel, workshop or corporate session — in person or virtual (subject to confirmation).",
    offerings: [
      "Conference keynotes",
      "Corporate events and town halls",
      "Leadership offsites",
      "Industry events and business summits",
      "Motivational and growth-oriented sessions",
      "AI, future of work and digital transformation talks",
    ],
    cta: { label: "Invite Anuj to speak", to: "/speaking#invite" },
    enquiry: "speaking",
  },
  {
    id: "corporate-training",
    tier: 1,
    title: "Corporate Training & Workshops",
    outcome: "Build skills teams actually use on Monday morning.",
    summary:
      "Interactive, practical programmes that turn leadership, communication and technology ideas into everyday working habits.",
    audience: "HR and L&D leaders, department heads, founders and teams from emerging managers to senior leaders.",
    format: "Half-day and full-day workshops, multi-session programmes, customised to your context.",
    offerings: [
      "Leadership and managerial effectiveness",
      "Communication and presentation skills",
      "Soft skills and professional effectiveness",
      "Public speaking and confidence",
      "Personal branding and professional visibility",
      "AI awareness, productivity and practical adoption",
      "Digital marketing and business growth",
    ],
    cta: { label: "Plan a training programme", to: "/training#enquire" },
    enquiry: "training",
  },
  {
    id: "business-coaching",
    tier: 2,
    title: "Business Coaching & Strategy",
    outcome: "Find clarity on where to grow — then execute.",
    summary:
      "Structured thinking for founders and business owners who need sharper priorities, a clearer growth path and accountability to follow through.",
    audience: "Founders, entrepreneurs, small-business owners and early-stage teams.",
    format: "One-to-one sessions or short advisory engagements.",
    offerings: [
      "Business growth and strategic clarity",
      "Entrepreneurship and startup thinking",
      "Marketing and customer acquisition",
      "Digital presence and growth opportunities",
      "Goal-setting, execution and accountability",
    ],
    cta: { label: "Discuss your business", to: "/coaching#enquire" },
    enquiry: "coaching",
  },
  {
    id: "leadership-coaching",
    tier: 2,
    title: "Leadership & Executive Coaching",
    outcome: "Lead with more presence, better decisions and clearer direction.",
    summary:
      "Focused conversations for professionals stepping into larger responsibility, or leaders who want to communicate and decide with more confidence.",
    audience: "Managers, senior professionals, executives and emerging leaders.",
    format: "One-to-one coaching over an agreed period.",
    offerings: [
      "Leadership development",
      "Executive presence",
      "Communication and influence",
      "Decision-making and professional growth",
      "Career clarity and development",
    ],
    cta: { label: "Explore leadership coaching", to: "/coaching#enquire" },
    enquiry: "coaching",
  },
  {
    id: "personal-branding",
    tier: 3,
    title: "Personal Branding & Creator Growth",
    outcome: "Be known for something specific — and be easy to find.",
    summary:
      "Positioning, content and visibility strategy for professionals, experts and creators building authority online.",
    audience: "Professionals, consultants, founders and creators.",
    format: "Workshops, strategy sessions and cohorts.",
    offerings: [
      "Personal brand strategy",
      "Content positioning",
      "YouTube and social media strategy",
      "Thought leadership",
      "Digital visibility and audience development",
    ],
    cta: { label: "Build your brand", to: "/contact?topic=branding" },
    enquiry: "general",
  },
  {
    id: "ai-digital-education",
    tier: 3,
    title: "AI, Digital Marketing & Education",
    outcome: "Understand the tools, then put them to work.",
    summary:
      "Plain-language, practical education on AI and digital marketing for people who want to use them in real work.",
    audience: "Professionals, business owners, marketers and students of modern business.",
    format: "Workshops, live cohorts and future programmes.",
    offerings: [
      "Practical AI tools for professionals and businesses",
      "AI-assisted content creation and workflows",
      "Digital marketing fundamentals",
      "SEO and answer-engine visibility",
      "Workshops, live cohorts and educational programmes",
    ],
    cta: { label: "Join the waitlist", to: "/education#waitlist" },
    enquiry: "education",
  },
  {
    id: "individual-coaching",
    tier: 3,
    title: "Individual Coaching & Consulting",
    outcome: "One focused conversation can change the next quarter.",
    summary: "Direct, one-to-one time to work through a specific problem, decision or goal.",
    audience: "Individuals and owners who want a thinking partner rather than a programme.",
    format: "Strategy and clarity sessions; customised advisory engagements.",
    offerings: [
      "One-to-one strategy and clarity sessions",
      "Professional growth and execution",
      "Customised advisory engagements",
    ],
    cta: { label: "Book a conversation", to: "/coaching#enquire" },
    enquiry: "coaching",
  },
];

export const pathways = [
  {
    id: "organisations",
    label: "Organisations",
    line: "Events, leadership teams and training that sticks.",
    to: "/speaking",
  },
  {
    id: "professionals",
    label: "Professionals",
    line: "Leadership, communication and career clarity.",
    to: "/coaching",
  },
  {
    id: "entrepreneurs",
    label: "Entrepreneurs",
    line: "Growth strategy, marketing and execution.",
    to: "/services#business-coaching",
  },
  {
    id: "creators",
    label: "Creators",
    line: "Personal brand, content and visibility.",
    to: "/services#personal-branding",
  },
];
