import { Breadcrumbs, Button, Portrait, Reveal, Rise, SectionHead } from "../components/ui";
import { FinalCta, Slot } from "../components/sections";
import { aboutBlocks, aboutPrinciples } from "../content/pages";
import { site } from "../config/site";

export default function About() {
  return (
    <>
      <section className="page-hero on-ink" aria-labelledby="h1">
        <div className="container speaker-hero-grid">
          <div>
            <Breadcrumbs trail={[{ label: "About" }]} />
            <Rise><p className="eyebrow">About Anuj Yadav</p></Rise>
            <Rise d={1}><h1 id="h1" className="display h-xl" style={{ maxWidth: "14ch" }}>Growth is a craft. <em>He teaches it.</em></h1></Rise>
            <Rise d={2}><p className="lead">Coach, trainer, entrepreneur and educator — working across business growth, leadership, personal development, digital marketing, AI and personal branding.</p></Rise>
            <Rise d={3}><div className="cta-row"><Button to="/speaking#invite" variant="signal">Invite Anuj to speak</Button><Button to="/contact" variant="ghost">Get in touch</Button></div></Rise>
          </div>
          <div className="hero-art" style={{ maxWidth: "26rem" }}><Portrait priority /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="story-h">
        <div className="container">
          <h2 id="story-h" className="sr-only">The story</h2>
          {aboutBlocks.map((b, i) => (
            <Reveal key={b.t}>
              <div className="about-row" style={{ paddingBlock: "var(--s-6)", borderTop: "1px solid var(--paper-line)", display: "grid", gap: "var(--s-4) var(--s-6)" }}>
                <p className="eyebrow"><span className="index">0{i + 1}</span>{b.t}</p>
                <p className="statement" style={{ fontSize: "var(--fs-3)", maxWidth: "36ch" }}>{b.d}</p>
              </div>
            </Reveal>
          ))}
          <div style={{ marginTop: "var(--s-6)" }}>
            <Slot title="Add Anuj's verified background">Education, roles, institutions, notable clients or audiences, and years of experience — included only once confirmed by Anuj. See LAUNCH-CHECKLIST.md.</Slot>
          </div>
        </div>
      </section>

      <section className="section on-ink" aria-labelledby="principles-h">
        <div className="container">
          <SectionHead index="02" eyebrow="Working principles" title={<span id="principles-h">How the work <em>is done.</em></span>} />
          <ul className="ledger" style={{ borderColor: "var(--ink-line)" }}>
            {aboutPrinciples.map((p, i) => (
              <Reveal as="li" key={p.t} className="ledger-row" delay={i}>
                <h3 className="serif">{p.t}</h3>
                <p className="muted">{p.d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="ventures-h">
        <div className="container split split--top">
          <Reveal>
            <p className="eyebrow"><span className="index">03</span>Related ventures</p>
            <h2 id="ventures-h" className="display h-lg" style={{ marginTop: "var(--s-4)" }}>Built alongside the <em>coaching.</em></h2>
            <p className="prose" style={{ marginTop: "var(--s-5)" }}>Anuj's entrepreneurial work keeps his teaching grounded in real business. These ventures sit alongside his work as a coach and speaker.</p>
          </Reveal>
          <Reveal delay={1}>
            <ul className="ledger">
              {site.ventures.map((v) => (
                <li className="ledger-row" key={v.name}>
                  <h3 className="serif">{v.url ? <a className="inline-link" href={v.url} target="_blank" rel="noopener noreferrer">{v.name}</a> : v.name}</h3>
                  <p className="muted">{v.role}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <FinalCta title={<>Let's talk about what you're <em>building.</em></>} primary={{ label: "Get in touch", to: "/contact" }} secondary={{ label: "Invite Anuj to speak", to: "/speaking#invite" }} />
    </>
  );
}
