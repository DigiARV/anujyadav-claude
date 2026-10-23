import { topics, formats } from "./speaking";
import { trainingTracks } from "./pages";
import { programmes } from "./pages";

export type FieldType = "text" | "email" | "date" | "select" | "textarea" | "number";
export interface Field {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  hint?: string;
  autoComplete?: string;
  wide?: boolean;
}
export interface FormDef {
  kind: string;
  subject: string;
  submitLabel: string;
  fields: Field[];
  successTitle: string;
  successBody: string;
  consent: string;
}

const consent =
  "I agree to Anuj Yadav (or his team) using these details to reply to my enquiry. I understand my information will not be sold or used for unrelated marketing.";

export const forms: Record<string, FormDef> = {
  speaking: {
    kind: "speaking",
    subject: "Speaking enquiry",
    submitLabel: "Send speaking enquiry",
    successTitle: "Thank you — your invitation has been received.",
    successBody: "Your enquiry has gone through. Expect a personal reply from Anuj or his team about availability and next steps.",
    consent,
    fields: [
      { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name" },
      { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email", placeholder: "you@company.com" },
      { name: "organization", label: "Organisation", type: "text", required: true, autoComplete: "organization" },
      { name: "eventName", label: "Event name", type: "text", required: true },
      { name: "eventDate", label: "Event date", type: "date", required: true, hint: "Approximate is fine — pick the closest date." },
      { name: "location", label: "City / venue, or virtual", type: "text", required: true, placeholder: "e.g. Mumbai, or Virtual" },
      { name: "audienceSize", label: "Expected audience size", type: "text", placeholder: "e.g. 300", hint: "Optional" },
      { name: "sessionType", label: "Preferred session type", type: "select", required: true, options: [...formats.map((f) => f.label), "Not sure yet"] },
      { name: "topic", label: "Topic of interest", type: "select", required: true, wide: true, options: [...topics.map((t) => t.title), "Custom / not sure yet"] },
      { name: "budget", label: "Indicative budget", type: "text", placeholder: "Optional", hint: "Optional — helps shape the right format." },
      { name: "message", label: "Anything else we should know?", type: "textarea", wide: true, placeholder: "Theme of the event, audience profile, other speakers…", hint: "Optional" },
    ],
  },
  training: {
    kind: "training",
    subject: "Corporate training enquiry",
    submitLabel: "Send training enquiry",
    successTitle: "Thank you — your training enquiry has been received.",
    successBody: "Your enquiry has gone through. You can expect a reply to discuss goals, audience and format.",
    consent,
    fields: [
      { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name" },
      { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
      { name: "organization", label: "Organisation", type: "text", required: true, autoComplete: "organization" },
      { name: "role", label: "Your role", type: "text", hint: "Optional", autoComplete: "organization-title" },
      { name: "trainingArea", label: "Training area", type: "select", required: true, wide: true, options: [...trainingTracks.map((t) => t.title), "Custom programme / not sure yet"] },
      { name: "participants", label: "Number of participants", type: "text", placeholder: "e.g. 40", hint: "Optional" },
      { name: "format", label: "Preferred format", type: "select", options: ["Half-day workshop", "Full-day programme", "Multi-session series", "Virtual or hybrid", "Not sure yet"] },
      { name: "timeline", label: "Target timeline", type: "text", placeholder: "e.g. next quarter", hint: "Optional" },
      { name: "message", label: "What are you hoping to change?", type: "textarea", wide: true, hint: "Optional" },
    ],
  },
  coaching: {
    kind: "coaching",
    subject: "Coaching / consulting enquiry",
    submitLabel: "Send enquiry",
    successTitle: "Thank you — your enquiry has been received.",
    successBody: "Your message has gone through. Expect a reply about a short introductory conversation.",
    consent,
    fields: [
      { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "interest", label: "I'm interested in", type: "select", required: true, wide: true, options: ["Business coaching & strategy", "Leadership / executive coaching", "A one-to-one clarity session", "Advisory engagement", "Not sure yet"] },
      { name: "stage", label: "About you", type: "text", placeholder: "Your role or business, in a line", hint: "Optional" },
      { name: "message", label: "What would you like to work on?", type: "textarea", required: true, wide: true },
    ],
  },
  education: {
    kind: "education",
    subject: "Education waitlist",
    submitLabel: "Join the waitlist",
    successTitle: "You're on the list.",
    successBody: "Your details have gone through. You'll hear about workshops and cohorts as they are confirmed.",
    consent: "I agree to be contacted about upcoming workshops, cohorts and programmes. I can opt out at any time.",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "interest", label: "Most interested in", type: "select", wide: true, options: [...programmes.map((p) => p.title), "Something else"] },
      { name: "message", label: "Anything you'd like to learn?", type: "textarea", wide: true, hint: "Optional" },
    ],
  },
  general: {
    kind: "general",
    subject: "General enquiry",
    submitLabel: "Send message",
    successTitle: "Thank you — your message has been received.",
    successBody: "Your message has gone through. You can expect a reply soon.",
    consent,
    fields: [
      { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "topic", label: "Topic", type: "select", required: true, wide: true, options: ["Keynote speaking", "Corporate training", "Coaching", "Consulting", "Personal branding", "Media or collaboration", "General question"] },
      { name: "message", label: "Message", type: "textarea", required: true, wide: true },
    ],
  },
};
