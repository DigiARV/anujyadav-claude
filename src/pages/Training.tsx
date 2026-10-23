import { Breadcrumbs, Button, Reveal, Rise, SectionHead } from "../components/ui";
import { DirectContact, FinalCta } from "../components/sections";
import { EnquiryForm } from "../components/EnquiryForm";
import { trainingBenefits, trainingFormats, trainingTracks } from "../content/pages";

export default function Training() {
  return (
    <>
      <section className="page-hero on-ink" aria-labelledby="h1">
        <div className="container">
          <Breadcrumbs trail={[{ label: "Services", to: "/services" }, { label: "Corporate training" }]} />
          <Rise><p className="eyebrow">Corporate training &amp; workshops</p></Rise>
          <Rise d={1}><h1 id="h1" className="display h-xl" style={{ maxWidth: "16ch" }}>Training that changes how Monday <em>works.</em></h1></Rise>
          <Rise d={2}><p className="lead">Practical programmes in leadership, communication, personal branding, AI adoption and digital growth — customised to your people, your context and your goals.</p></Rise>
          <Rise d={3}><div className="cta-row"><Button to="#enquire" variant="signal">Plan a training programme</Button><Button to="/speaking#invite" variant="ghost">Looking for a keynote?</Button></div></Rise>
        </div>
      </section>

      <section className="section" aria-labelledby="tracks-h">
        <div className="container">
          <SectionHead index="01" eyebrow="Training areas" title={<span id="tracks-h">Seven areas, built to <em>order.</em></span>} lead="Pick a starting point or combine several into one programme." />
          <ul className="ledger">
            {trainingTracks.map((t, i) => (
              <Reveal as="li" key={t.title} className="ledger-row ledger-row--3" delay={i % 3}>
                <h3 className="serif">{t.title}</h3>
                <p className="muted" style={{ fontSize: "var(--fs-0)" }}><span className="tag">Audience</span>{t.for}</p>
                <p className="muted" style={{ fontSize: "var(--fs-0)" }}><span className="tag">Focus</span>{t.what}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section on-ink" aria-labelledby="fmt-h">
        <div className="container">
          <SectionHead index="02" eyebrow="Delivery formats" title={<span id="fmt-h">Designed to fit your <em>calendar.</em></span>} lead="Format, length and group size are shaped with you. Everything below is subject to confirmation." />
          <Reveal>
            <div className="formats fmt-4">
              {trainingFormats.map((f) => <div className="format" key={f.label}><h3>{f.label}</h3><p>{f.note}</p></div>)}
            </div>
          </Reveal>
          <ul className="ledger" style={{ borderColor: "var(--ink-line)", marginTop: "var(--s-8)" }}>
            {trainingBenefits.map((b) => (
              <Reveal as="li" key={b.t} className="ledger-row"><h3 className="serif">{b.t}</h3><p className="muted">{b.d}</p></Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="enquire" className="section on-paper-2" aria-labelledby="enq-h">
        <div className="container form-layout">
          <Reveal className="form-aside">
            <p className="eyebrow"><span className="index">03</span>Training enquiry</p>
            <h2 id="enq-h" className="display h-lg" style={{ marginTop: "var(--s-4)" }}>Tell us what your team <em>needs.</em></h2>
            <p className="lead" style={{ marginTop: "var(--s-5)" }}>Share the audience and the goal, and Anuj will come back on whether and how he can help.</p>
            <div style={{ marginTop: "var(--s-6)" }}><DirectContact subject="Corporate training enquiry" /></div>
          </Reveal>
          <Reveal delay={1}><EnquiryForm kind="training" /></Reveal>
        </div>
      </section>
      <FinalCta title={<>Prefer to start with a <em>keynote?</em></>} lead="A keynote can open a conversation your training then builds on." primary={{ label: "Invite Anuj to speak", to: "/speaking#invite" }} secondary={{ label: "All services", to: "/services" }} />
    </>
  );
}
