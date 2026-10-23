import { Breadcrumbs, Button, Reveal, Rise, SectionHead } from "../components/ui";
import { DirectContact, FinalCta } from "../components/sections";
import { EnquiryForm } from "../components/EnquiryForm";
import { coachingEngagements, coachingProblems, coachingSteps } from "../content/pages";
import { site } from "../config/site";

export default function Coaching() {
  return (
    <>
      <section className="page-hero on-ink" aria-labelledby="h1">
        <div className="container">
          <Breadcrumbs trail={[{ label: "Services", to: "/services" }, { label: "Coaching & consulting" }]} />
          <Rise><p className="eyebrow">Coaching &amp; consulting</p></Rise>
          <Rise d={1}><h1 id="h1" className="display h-xl" style={{ maxWidth: "16ch" }}>A thinking partner for what you do <em>next.</em></h1></Rise>
          <Rise d={2}><p className="lead">One-to-one business, leadership and career coaching for founders, executives and professionals who want clarity, momentum and accountability.</p></Rise>
          <Rise d={3}><div className="cta-row"><Button to="#enquire" variant="signal">Start the conversation</Button>{site.booking.coaching && <Button href={site.booking.coaching} variant="ghost">Book a call</Button>}</div></Rise>
        </div>
      </section>

      <section className="section" aria-labelledby="prob-h">
        <div className="container split split--top">
          <Reveal>
            <p className="eyebrow">Who it helps</p>
            <h2 id="prob-h" className="display h-lg" style={{ marginTop: "var(--s-4)" }}>Problems worth <em>working on.</em></h2>
          </Reveal>
          <Reveal delay={1}><ul className="ledger">{coachingProblems.map((p) => <li className="ledger-row" key={p} style={{ gridTemplateColumns: "1fr" }}>{p}</li>)}</ul></Reveal>
        </div>
      </section>

      <section className="section on-ink" aria-labelledby="eng-h">
        <div className="container">
          <SectionHead eyebrow="Engagement types" title={<span id="eng-h">Choose the <em>shape.</em></span>} lead="Scope, length and cadence are agreed together after an introductory conversation." />
          <ul className="ledger" style={{ borderColor: "var(--ink-line)" }}>
            {coachingEngagements.map((e) => <Reveal as="li" key={e.title} className="ledger-row"><h3 className="serif">{e.title}</h3><p className="muted">{e.d}</p></Reveal>)}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="how-h">
        <div className="container">
          <SectionHead eyebrow="How it works" title={<span id="how-h">Four simple <em>steps.</em></span>} />
          <ol className="ledger">
            {coachingSteps.map((s) => <Reveal as="li" key={s.n} className="ledger-row"><h3 className="serif"><span className="index" style={{ marginRight: "var(--s-4)" }}>{s.n}</span>{s.t}</h3><p className="muted">{s.d}</p></Reveal>)}
          </ol>
        </div>
      </section>

      <section id="enquire" className="section on-paper-2" aria-labelledby="enq-h">
        <div className="container form-layout">
          <Reveal className="form-aside">
            <p className="eyebrow">Next step</p>
            <h2 id="enq-h" className="display h-lg" style={{ marginTop: "var(--s-4)" }}>Tell Anuj what you're <em>working on.</em></h2>
            <p className="lead" style={{ marginTop: "var(--s-5)" }}>No commitment is assumed. Fees and availability are discussed after the introductory conversation.</p>
            <div style={{ marginTop: "var(--s-6)" }}><DirectContact subject="Coaching enquiry" /></div>
          </Reveal>
          <Reveal delay={1}><EnquiryForm kind="coaching" /></Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
