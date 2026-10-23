import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { services, type Service } from "../content/services";
import { insights, type Insight } from "../content/insights";
import { insightThemes, programmes } from "../content/pages";
import { site, mailto, socialLinks } from "../config/site";
import { Arrow, ArrowUR, Button, Reveal, TextLink } from "./ui";

/** Placeholder slot — rendered only while site.showPlaceholders is true. */
export function Slot({ title, children, dark }: { title: string; children: ReactNode; dark?: boolean }) {
  if (!site.showPlaceholders) return null;
  return (
    <div className="verify-slot" style={dark ? { borderColor: "var(--paper-soft)", color: "var(--paper-soft)" } : undefined}>
      <strong style={dark ? { color: "var(--paper)" } : undefined}>{title}</strong>
      {children}
    </div>
  );
}

export function ServiceRow({ s, index }: { s: Service; index: number }) {
  return (
    <Reveal as="li" delay={index % 4}>
      <Link to={s.cta.to} className="service-row">
        <span className="index">{String(index + 1).padStart(2, "0")}</span>
        <div className="stack" style={{ ["--s-5" as string]: "0.75rem" }}>
          <h3>{s.title}</h3>
          <p className="outcome">{s.outcome}</p>
        </div>
        <p className="muted" style={{ fontSize: "var(--fs-0)", maxWidth: "46ch" }}>{s.offerings.slice(0, 4).join(" · ")}{s.offerings.length > 4 ? " · …" : ""}</p>
        <span className="row-cta"><span>{s.cta.label}</span><span className="circle"><Arrow /></span></span>
      </Link>
    </Reveal>
  );
}

export function ServiceIndex({ items = services }: { items?: Service[] }) {
  return <ul className="service-index">{items.map((s, i) => <ServiceRow key={s.id} s={s} index={i} />)}</ul>;
}

export function InsightCard({ i }: { i: Insight }) {
  const d = new Date(i.date + "T00:00:00");
  return (
    <Reveal as="article" className="insight">
      <span className="tag">{i.type} · {insightThemes.find((t) => t.id === i.theme)?.label}</span>
      <h3><a href={i.href} target="_blank" rel="noopener noreferrer">{i.title}<span className="sr-only"> (opens in a new tab)</span></a></h3>
      <p className="muted">{i.excerpt}</p>
      <time className="muted" dateTime={i.date} style={{ fontSize: "var(--fs-0)" }}>{d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time>
    </Reveal>
  );
}

/** Shown when no insight items have been added yet. Honest and useful: themes + a way to follow along. */
export function InsightsEmpty() {
  return (
    <div className="empty">
      <h3 className="display h-md">The first pieces are on their way.</h3>
      <p className="muted" style={{ maxWidth: "52ch" }}>New articles, videos and tutorials will appear here. In the meantime, you can follow Anuj or tell him what you'd most like covered.</p>
      <div className="cta-row">
        <Button to="/contact?topic=Media+or+collaboration" variant="ghost" small>Suggest a topic</Button>
        {socialLinks.map(([n, u]) => <TextLink key={n} href={u}>Follow on {n}</TextLink>)}
      </div>
    </div>
  );
}

export function InsightsPreview() {
  const items = insights.slice(0, 3);
  return items.length ? <div className="insight-grid">{items.map((i) => <InsightCard key={i.id} i={i} />)}</div> : <InsightsEmpty />;
}

export function ProgrammeList({ dark }: { dark?: boolean }) {
  return (
    <ul className="ledger" style={dark ? undefined : undefined}>
      {programmes.map((p) => (
        <Reveal as="li" key={p.title} className="ledger-row ledger-row--3">
          <div>
            <h3 className="serif">{p.title}</h3>
            <p className="muted" style={{ marginTop: "var(--s-2)", maxWidth: "46ch" }}>{p.summary}</p>
          </div>
          <p className="muted" style={{ fontSize: "var(--fs-0)" }}>{p.format}{p.date ? ` · ${p.date}` : ""}</p>
          <div><span className={`status ${p.status === "In development" ? "status--dev" : "status--waitlist"}`}>{p.status}</span></div>
        </Reveal>
      ))}
    </ul>
  );
}

export function FinalCta({ title = <>Let's build what's <em>next</em>.</>, lead = "Whether it's a stage, a team or a single decision — share what you're working on and Anuj will take it from there.", primary = { label: "Invite Anuj to speak", to: "/speaking#invite" }, secondary = { label: "Explore how we can work together", to: "/services" } }: { title?: ReactNode; lead?: string; primary?: { label: string; to: string }; secondary?: { label: string; to: string } }) {
  return (
    <section className="section final-cta on-signal" aria-labelledby="final-cta-h">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Next step</p>
          <h2 id="final-cta-h" className="display h-xl" style={{ marginTop: "var(--s-5)" }}>{title}</h2>
          <p className="lead" style={{ marginTop: "var(--s-6)" }}>{lead}</p>
          <div className="cta-row" style={{ marginTop: "var(--s-7)" }}>
            <Button to={primary.to}>{primary.label}</Button>
            <Button to={secondary.to} variant="ghost">{secondary.label}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function DirectContact({ subject = "Enquiry" }: { subject?: string }) {
  const book = site.booking.general;
  if (!site.contact.email && !book) return null;
  return (
    <div className="cta-row">
      {book && <TextLink href={book}>Book a call</TextLink>}
      {site.contact.email && <TextLink href={mailto(subject)}>{site.contact.email}</TextLink>}
    </div>
  );
}

export { ArrowUR };
