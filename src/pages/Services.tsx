import { Breadcrumbs, Button, Reveal, Rise } from "../components/ui";
import { FinalCta } from "../components/sections";
import { services, type Service } from "../content/services";

function Offerings({ items }: { items: string[] }) {
  return <ul className="ledger">{items.map((o) => <li className="ledger-row" key={o} style={{ gridTemplateColumns: "1fr", padding: "var(--s-3) 0" }}>{o}</li>)}</ul>;
}

function Detail({ s, n, dark }: { s: Service; n: number; dark?: boolean }) {
  const size = s.tier === 1 ? "h-xl" : s.tier === 2 ? "h-lg" : "h-md";
  return (
    <section id={s.id} className={`section ${s.tier === 1 ? "" : "section--tight"} ${dark ? "on-ink" : s.tier === 3 ? "on-paper-2" : ""}`} aria-labelledby={`${s.id}-h`}>
      <div className="container split split--top">
        <Reveal>
          <p className="eyebrow"><span className="index">{String(n).padStart(2, "0")}</span>{s.tier === 1 ? "Lead offer" : s.tier === 2 ? "Core offer" : "Also available"}</p>
          <h2 id={`${s.id}-h`} className={`display ${size}`} style={{ marginTop: "var(--s-4)" }}>{s.title}</h2>
          <p className="lead" style={{ marginTop: "var(--s-5)" }}>{s.outcome} {s.summary}</p>
          <dl style={{ margin: "var(--s-6) 0 0", display: "grid", gap: "var(--s-4)" }}>
            <div><dt className="tag">Who it's for</dt><dd style={{ margin: 0 }} className="muted">{s.audience}</dd></div>
            <div><dt className="tag">Format</dt><dd style={{ margin: 0 }} className="muted">{s.format}</dd></div>
          </dl>
          <div className="cta-row" style={{ marginTop: "var(--s-6)" }}>
            <Button to={s.cta.to} variant={s.tier === 1 ? "signal" : "solid"}>{s.cta.label}</Button>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <p className="tag">What's included</p>
          <Offerings items={s.offerings} />
        </Reveal>
      </div>
    </section>
  );
}

export default function Services() {
  const tier1 = services.filter((s) => s.tier === 1);
  const rest = services.filter((s) => s.tier !== 1);
  return (
    <>
      <section className="page-hero on-ink" aria-labelledby="h1">
        <div className="container">
          <Breadcrumbs trail={[{ label: "Services" }]} />
          <Rise><p className="eyebrow">Work with Anuj</p></Rise>
          <Rise d={1}><h1 id="h1" className="display h-xl" style={{ maxWidth: "18ch" }}>Seven ways to turn ideas into <em>progress.</em></h1></Rise>
          <Rise d={2}><p className="lead">Speaking and corporate training lead the work, supported by coaching, personal branding and AI education. Not sure where to start? Tell Anuj what you're trying to change.</p></Rise>
          <Rise d={3}>
            <div className="cta-row">
              <Button to="/speaking#invite" variant="signal">Invite Anuj to speak</Button>
              <Button to="/contact" variant="ghost">Tell us what you need</Button>
            </div>
          </Rise>
          <nav aria-label="Services on this page" style={{ marginTop: "var(--s-8)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2) var(--s-5)", fontSize: "var(--fs-0)" }}>
              {services.map((s) => <li key={s.id}><a className="link" href={`#${s.id}`}>{s.title}</a></li>)}
            </ul>
          </nav>
        </div>
      </section>

      {tier1.map((s, i) => <Detail key={s.id} s={s} n={i + 1} dark={i % 2 === 1} />)}
      {rest.map((s, i) => <Detail key={s.id} s={s} n={tier1.length + i + 1} />)}

      <FinalCta title={<>Not sure which fits? <em>Start here.</em></>} lead="A short message is enough. Share the situation and Anuj will suggest the right format." primary={{ label: "Send an enquiry", to: "/contact" }} secondary={{ label: "Invite Anuj to speak", to: "/speaking#invite" }} />
    </>
  );
}
