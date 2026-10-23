import { Breadcrumbs, Button, Reveal, Rise, SectionHead } from "../components/ui";
import { FinalCta, ProgrammeList } from "../components/sections";
import { EnquiryForm } from "../components/EnquiryForm";
import { services } from "../content/services";

export default function Education() {
  const edu = services.find((s) => s.id === "ai-digital-education")!;
  return (
    <>
      <section className="page-hero on-ink" aria-labelledby="h1">
        <div className="container">
          <Breadcrumbs trail={[{ label: "Services", to: "/services" }, { label: "AI & digital education" }]} />
          <Rise><p className="eyebrow">AI &amp; digital education</p></Rise>
          <Rise d={1}><h1 id="h1" className="display h-xl" style={{ maxWidth: "15ch" }}>Practical AI and marketing, in plain <em>language.</em></h1></Rise>
          <Rise d={2}><p className="lead">Workshops, live cohorts and future programmes for people who want to use AI and digital marketing in real work — not just read about them.</p></Rise>
          <Rise d={3}><div className="cta-row"><Button to="#waitlist" variant="signal">Join the waitlist</Button><Button to="/training" variant="ghost">Bring it to your team</Button></div></Rise>
        </div>
      </section>

      <section className="section" aria-labelledby="learn-h">
        <div className="container split split--top">
          <Reveal>
            <p className="eyebrow"><span className="index">01</span>What you'll learn</p>
            <h2 id="learn-h" className="display h-lg" style={{ marginTop: "var(--s-4)" }}>Tools, workflows and <em>judgement.</em></h2>
            <p className="prose" style={{ marginTop: "var(--s-5)" }}>{edu.summary}</p>
          </Reveal>
          <Reveal delay={1}><ul className="ledger">{edu.offerings.map((o) => <li className="ledger-row" key={o} style={{ gridTemplateColumns: "1fr" }}>{o}</li>)}</ul></Reveal>
        </div>
      </section>

      <section className="section on-paper-2" aria-labelledby="prog-h">
        <div className="container">
          <SectionHead index="02" eyebrow="Programmes" title={<span id="prog-h">On the <em>roadmap.</em></span>} lead="Nothing here is enrolling yet. Dates, formats and pricing will be shared with the waitlist first." />
          <ProgrammeList />
        </div>
      </section>

      <section id="waitlist" className="section on-ink" aria-labelledby="wl-h">
        <div className="container form-layout">
          <Reveal className="form-aside">
            <p className="eyebrow"><span className="index">03</span>Waitlist</p>
            <h2 id="wl-h" className="display h-lg" style={{ marginTop: "var(--s-4)" }}>Be first to <em>know.</em></h2>
            <p className="lead" style={{ marginTop: "var(--s-5)" }}>Tell us which programme interests you most. You'll only hear about workshops and cohorts.</p>
          </Reveal>
          <Reveal delay={1}><EnquiryForm kind="education" /></Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
