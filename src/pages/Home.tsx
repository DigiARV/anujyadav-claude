import { Link } from "react-router-dom";
import { Button, Portrait, Reveal, Rise, SectionHead, TextLink, ArrowUR } from "../components/ui";
import { FinalCta, InsightsPreview, ProgrammeList, ServiceIndex, Slot } from "../components/sections";
import { pathways, services } from "../content/services";
import { topics } from "../content/speaking";
import { trainingTracks, coachingProblems } from "../content/pages";
import { site } from "../config/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero on-ink" aria-labelledby="hero-h">
        <div className="container hero-grid">
          <div>
            <Rise><p className="eyebrow">Business growth · Leadership · AI &amp; digital education</p></Rise>
            <Rise d={1}>
              <h1 id="hero-h" className="display h-hero">Helping people and businesses turn potential into <em>progress.</em></h1>
            </Rise>
            <Rise d={2}>
              <p className="lead">Anuj Yadav is a coach, trainer and entrepreneur. He works with professionals, founders, teams and organisations on leadership, communication, practical strategy and the sensible use of AI.</p>
            </Rise>
            <Rise d={3}>
              <div className="cta-row">
                <Button to="/speaking#invite" variant="signal">Invite Anuj to speak</Button>
                <Button to="/services" variant="ghost">Explore how we can work together</Button>
              </div>
            </Rise>
            <Rise d={4}>
              <p className="hero-meta"><span><b>Speaking</b></span><span><b>Training</b></span><span><b>Coaching</b></span><span><b>AI education</b></span></p>
            </Rise>
          </div>
          <div className="hero-art">
            <Portrait priority />
            <span className="hero-art-note">Coach · Trainer · Entrepreneur</span>
          </div>
        </div>
      </section>

      {/* POSITIONING + PATHWAYS */}
      <section className="section" aria-labelledby="position-h">
        <div className="container">
          <div className="statement-grid">
            <Reveal><p className="eyebrow"><span className="index">01</span>The thread</p></Reveal>
            <div className="stack-lg">
              <Reveal><h2 id="position-h" className="statement">Leadership, marketing and AI look like different subjects. They share one question: <em className="em">how does progress actually happen?</em></h2></Reveal>
              <Reveal delay={1}>
                <div className="prose"><p>That question runs through everything Anuj teaches and builds — from a keynote to a one-to-one session. The aim is simple: clearer thinking, better communication, and practical next steps people can take this week.</p></div>
                <p style={{ marginTop: "var(--s-5)" }}><TextLink to="/about">Read Anuj's story</TextLink></p>
              </Reveal>
            </div>
          </div>

          <div style={{ marginTop: "var(--s-9)" }}>
            <Reveal><p className="eyebrow" style={{ marginBottom: "var(--s-5)" }}>Where would you like to begin?</p></Reveal>
            <ul className="pathways">
              {pathways.map((p, i) => (
                <Reveal as="li" key={p.id} delay={i}>
                  <Link to={p.to} className="pathway">
                    <h3>{p.label}</h3>
                    <p className="muted">{p.line}</p>
                    <span className="go"><span>Explore</span><ArrowUR /></span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SELECTED SERVICES */}
      <section className="section on-paper-2" aria-labelledby="services-h">
        <div className="container">
          <SectionHead index="02" eyebrow="Selected services" title={<span id="services-h">Four ways to work <em>with Anuj.</em></span>} lead="Start with the one closest to your need. Each begins with a short conversation, not a sales pitch." />
          <ServiceIndex items={services.slice(0, 4)} />
          <p style={{ marginTop: "var(--s-6)" }}><TextLink to="/services">See all services</TextLink></p>
        </div>
      </section>

      {/* KEYNOTE FEATURE */}
      <section className="section on-ink" aria-labelledby="keynote-h">
        <div className="container split split--wide-left">
          <Reveal>
            <p className="eyebrow"><span className="index">03</span>Keynote speaking</p>
            <h2 id="keynote-h" className="display h-xl" style={{ marginTop: "var(--s-5)" }}>A talk your audience can <em>act on.</em></h2>
            <p className="lead" style={{ marginTop: "var(--s-6)" }}>For conferences, corporate events, leadership offsites and business summits — shaped around your theme, your people and the point the day needs to land.</p>
            <div className="cta-row" style={{ marginTop: "var(--s-7)" }}>
              <Button to="/speaking#invite" variant="signal">Invite Anuj to speak</Button>
              <TextLink to="/speaking">Explore the speaking page</TextLink>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="tag" style={{ color: "var(--paper-soft)" }}>Proposed talk areas</p>
            <ul className="topic-list">
              {topics.slice(0, 5).map((t, i) => (
                <li key={t.id}><span className="index">{String(i + 1).padStart(2, "0")}</span><span className="t">{t.title}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* TRAINING + COACHING */}
      <section className="section" aria-labelledby="train-h">
        <div className="container split split--top">
          <Reveal>
            <p className="eyebrow"><span className="index">04</span>Corporate training</p>
            <h2 id="train-h" className="display h-lg" style={{ marginTop: "var(--s-5)" }}>Skills that show up in <em>Monday's work.</em></h2>
            <p className="prose" style={{ marginTop: "var(--s-5)" }}>Interactive workshops and programmes, customised to your organisation.</p>
            <ul className="ledger" style={{ marginTop: "var(--s-6)" }}>
              {trainingTracks.slice(0, 5).map((t) => (
                <li className="ledger-row" key={t.title} style={{ gridTemplateColumns: "1fr" }}><h3>{t.title}</h3></li>
              ))}
            </ul>
            <p style={{ marginTop: "var(--s-6)" }}><TextLink to="/training">Corporate training &amp; workshops</TextLink></p>
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow"><span className="index">05</span>Coaching &amp; consulting</p>
            <h2 className="display h-lg" style={{ marginTop: "var(--s-5)" }}>A thinking partner for the <em>next decision.</em></h2>
            <p className="prose" style={{ marginTop: "var(--s-5)" }}>One-to-one coaching and advisory for founders, leaders and professionals.</p>
            <ul className="ledger" style={{ marginTop: "var(--s-6)" }}>
              {coachingProblems.slice(0, 4).map((p) => (
                <li className="ledger-row" key={p} style={{ gridTemplateColumns: "1fr" }}><p>{p}</p></li>
              ))}
            </ul>
            <p style={{ marginTop: "var(--s-6)" }}><TextLink to="/coaching">Coaching &amp; consulting</TextLink></p>
          </Reveal>
        </div>
      </section>

      {/* AI EDUCATION */}
      <section className="section on-paper-2" aria-labelledby="edu-h">
        <div className="container">
          <SectionHead index="06" eyebrow="AI & digital education" title={<span id="edu-h">Learn the tools. Then <em>use</em> them.</span>} lead="Practical, plain-language education on AI, digital marketing and personal branding. Programmes are being shaped now — join the waitlist to hear first." />
          <ProgrammeList />
          <div className="cta-row" style={{ marginTop: "var(--s-6)" }}>
            <Button to="/education#waitlist" variant="ghost">Join the waitlist</Button>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section" aria-labelledby="ins-h">
        <div className="container">
          <SectionHead index="07" eyebrow="Insights" title={<span id="ins-h">Ideas worth <em>sharing.</em></span>} lead="Articles, videos and tutorials on AI, growth, leadership and personal branding." />
          <InsightsPreview />
          <p style={{ marginTop: "var(--s-6)" }}><TextLink to="/insights">Visit the insights hub</TextLink></p>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="section on-ink" aria-labelledby="cred-h">
        <div className="container split split--top">
          <Reveal>
            <p className="eyebrow"><span className="index">08</span>Background</p>
            <h2 id="cred-h" className="display h-lg" style={{ marginTop: "var(--s-5)" }}>One theme, several <em>ventures.</em></h2>
            <p className="prose" style={{ marginTop: "var(--s-5)" }}>Anuj's coaching, training and speaking sit alongside the businesses he builds. Each applies the same idea — helping people and businesses grow — in a different field.</p>
          </Reveal>
          <Reveal delay={1}>
            <ul className="ventures" style={{ marginTop: 0 }}>
              {site.ventures.map((v) => (
                <li className="venture" key={v.name}>
                  <b>{v.url ? <a href={v.url} target="_blank" rel="noopener noreferrer" className="inline-link">{v.name}</a> : v.name}</b>
                  <span className="muted">{v.role}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "var(--s-6)", display: "grid", gap: "var(--s-4)" }}>
              <Slot dark title="Add verified credentials">Experience, institutions, notable audiences and testimonials — added only once confirmed. See LAUNCH-CHECKLIST.md.</Slot>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
