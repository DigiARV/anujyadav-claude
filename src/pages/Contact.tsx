import { useSearchParams, Link } from "react-router-dom";
import { Breadcrumbs, Reveal, Rise, TextLink, Arrow } from "../components/ui";
import { EnquiryForm } from "../components/EnquiryForm";
import { site, socialLinks, mailto, whatsappLink } from "../config/site";

const routes = [
  { n: "01", t: "Keynote speaking", d: "Conferences, corporate events and offsites.", to: "/speaking#invite", cta: "Speaking enquiry" },
  { n: "02", t: "Corporate training", d: "Workshops and programmes for teams.", to: "/training#enquire", cta: "Training enquiry" },
  { n: "03", t: "Coaching & consulting", d: "One-to-one business and leadership support.", to: "/coaching#enquire", cta: "Coaching enquiry" },
  { n: "04", t: "AI & digital education", d: "Waitlist for workshops and cohorts.", to: "/education#waitlist", cta: "Join the waitlist" },
];

export default function Contact() {
  const [params] = useSearchParams();
  const topic = params.get("topic") ?? "";
  const wa = whatsappLink();
  return (
    <>
      <section className="page-hero light" aria-labelledby="h1">
        <div className="container">
          <Breadcrumbs trail={[{ label: "Contact" }]} />
          <Rise><p className="eyebrow">Contact</p></Rise>
          <Rise d={1}><h1 id="h1" className="display h-xl" style={{ maxWidth: "14ch" }}>Let's start a <em>conversation.</em></h1></Rise>
          <Rise d={2}><p className="lead">Choose the route that fits, or send a general message below.</p></Rise>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }} aria-labelledby="routes-h">
        <div className="container">
          <h2 id="routes-h" className="sr-only">Enquiry routes</h2>
          <div className="routes">
            {routes.map((r) => (
              <Reveal key={r.n}>
                <Link to={r.to} className="route">
                  <span className="index">{r.n}</span>
                  <h3>{r.t}</h3>
                  <p className="muted">{r.d}</p>
                  <span className="link">{r.cta}<Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="message" className="section on-ink" aria-labelledby="gen-h">
        <div className="container form-layout">
          <Reveal className="form-aside">
            <p className="eyebrow">General enquiry</p>
            <h2 id="gen-h" className="display h-lg" style={{ marginTop: "var(--s-4)" }}>Send a <em>message.</em></h2>
            <div className="stack" style={{ marginTop: "var(--s-6)" }}>
              {site.contact.email && <p><span className="tag">Email</span><a className="inline-link" href={mailto("Enquiry")}>{site.contact.email}</a></p>}
              {site.contact.phone && <p><span className="tag">Phone</span><a className="inline-link" href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>{site.contact.phone}</a></p>}
              {wa && <p><TextLink href={wa}>Message on WhatsApp</TextLink></p>}
              {site.booking.general && <p><TextLink href={site.booking.general}>Book a call</TextLink></p>}
              {site.contact.location && <p><span className="tag">Based in</span>{site.contact.location}</p>}
              {socialLinks.length > 0 && <div className="social">{socialLinks.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noopener noreferrer">{n}<span className="sr-only"> (opens in a new tab)</span></a>)}</div>}
            </div>
          </Reveal>
          <Reveal delay={1}><EnquiryForm kind="general" defaults={topic ? { topic } : {}} /></Reveal>
        </div>
      </section>
    </>
  );
}
