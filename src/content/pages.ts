/** Training, coaching, education, about and insights content. Edit here. */

export const trainingTracks = [
  {
    title: "Leadership & managerial effectiveness",
    for: "First-time managers to senior leaders",
    what: "Delegation, feedback, difficult conversations, and leading through change.",
  },
  {
    title: "Communication & presentation skills",
    for: "Teams that present, sell, report or influence",
    what: "Structuring ideas, storytelling with data, and presenting with clarity.",
  },
  {
    title: "Soft skills & professional effectiveness",
    for: "Early-career and mid-level professionals",
    what: "Ownership, collaboration, time and attention, and workplace presence.",
  },
  {
    title: "Public speaking & confidence",
    for: "Anyone who needs to speak in front of others",
    what: "Preparation, delivery, handling nerves and Q&A.",
  },
  {
    title: "Personal branding & visibility",
    for: "Experts, consultants, sales and leadership teams",
    what: "Positioning, LinkedIn presence and a sustainable content habit.",
  },
  {
    title: "AI awareness & productivity",
    for: "Non-technical teams and leaders",
    what: "What AI tools can do, where they help, and a safe, practical adoption path.",
  },
  {
    title: "Digital marketing & business growth",
    for: "Business owners, sales and marketing teams",
    what: "Fundamentals of search, social, content and customer acquisition.",
  },
];

export const trainingFormats = [
  { label: "Half-day workshop", note: "Focused on a single capability." },
  { label: "Full-day programme", note: "Deeper practice with exercises and discussion." },
  { label: "Multi-session series", note: "Spaced learning with follow-through between sessions." },
  { label: "Virtual or hybrid", note: "Designed for remote and distributed teams." },
];

export const trainingBenefits = [
  { t: "Customised to your context", d: "Examples, exercises and language drawn from your business rather than a generic deck." },
  { t: "Built around application", d: "Every session ends with something participants can do the next working day." },
  { t: "Aligned with your goals", d: "A short discovery conversation first, so the programme serves a defined need." },
];

export const coachingProblems = [
  "You have more options than clarity and need help choosing a direction.",
  "You are stepping into bigger responsibility and want to lead with more confidence.",
  "Your business is busy but growth feels unfocused.",
  "You know what to do but want accountability to do it.",
  "You want to be more visible and credible in your field.",
];

export const coachingEngagements = [
  { title: "Clarity session", d: "A single focused conversation on one question or decision." },
  { title: "Coaching engagement", d: "A series of sessions over an agreed period, with goals and check-ins." },
  { title: "Advisory engagement", d: "Ongoing, customised support for a founder or leadership team." },
];

export const coachingSteps = [
  { n: "01", t: "Enquire", d: "Tell Anuj what you are working on. It takes about two minutes." },
  { n: "02", t: "Introductory conversation", d: "A short call to understand your situation and whether coaching is the right fit." },
  { n: "03", t: "Agree the shape", d: "Together you define goals, format and cadence. No commitment is assumed." },
  { n: "04", t: "Work the plan", d: "Sessions focus on decisions, actions and accountability." },
];

/** Education programmes. Replace with real programmes ONLY when they exist. */
export interface Programme {
  title: string;
  status: "In development" | "Open for waitlist" | "Open for enrolment";
  summary: string;
  format: string;
  /** Add real dates only when confirmed. Leave undefined otherwise. */
  date?: string;
  link?: string;
}
export const programmes: Programme[] = [
  {
    title: "Practical AI for Professionals",
    status: "Open for waitlist",
    summary: "A hands-on introduction to using AI tools across everyday professional tasks, without jargon.",
    format: "Live cohort (format to be confirmed)",
  },
  {
    title: "AI-Assisted Content & Personal Branding",
    status: "Open for waitlist",
    summary: "Build a credible online presence with a repeatable, AI-supported content workflow.",
    format: "Workshop / cohort (format to be confirmed)",
  },
  {
    title: "Digital Marketing & Answer-Engine Visibility",
    status: "In development",
    summary: "Fundamentals of search, social and AI-driven discovery for small businesses.",
    format: "Programme (format to be confirmed)",
  },
];

export const aboutPrinciples = [
  { t: "Clarity before activity", d: "Most stuck situations are unclear priorities in disguise. Start by deciding what matters." },
  { t: "Practical over performative", d: "Ideas earn their place by being usable. Every session should leave you with something to do." },
  { t: "Human first, technology second", d: "AI and digital tools amplify good judgement and good communication. They do not replace them." },
  { t: "Growth is a system", d: "Sustainable progress comes from habits and structure more than bursts of motivation." },
];

export const aboutBlocks = [
  { t: "What he works on", d: "Anuj helps people and organisations grow — through leadership and communication, practical business strategy, personal branding, and an honest, hands-on approach to AI and digital marketing." },
  { t: "How he approaches growth", d: "He starts with the person or the problem, not the tool. Frameworks are kept simple enough to use in a real week, and sessions are built to end with decisions and actions." },
  { t: "Why the range", d: "Leadership, marketing, AI and personal branding look like separate subjects. In practice they share one question: how do people and businesses create progress? That is the thread through his coaching, training and entrepreneurial work." },
];

/** Editorial themes shown on the Insights hub, independent of published items. */
export const insightThemes = [
  { id: "ai", label: "AI tools & tutorials", d: "Practical walkthroughs of AI for real work." },
  { id: "growth", label: "Business growth", d: "Strategy, marketing and execution." },
  { id: "leadership", label: "Leadership & career", d: "Communication, influence and development." },
  { id: "branding", label: "Personal branding", d: "Positioning, content and visibility." },
  { id: "marketing", label: "Digital marketing", d: "Search, social and customer acquisition." },
];
