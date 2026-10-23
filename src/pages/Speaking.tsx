import { Breadcrumbs, Button, Portrait, Reveal, Rise, SectionHead, TextLink } from "../components/ui";
import { DirectContact, Slot } from "../components/sections";
import { EnquiryForm } from "../components/EnquiryForm";
import { audiences, formats, speakerBio, topics } from "../content/speaking";
import { site } from "../config/site";

export default function Speaking() {
  return (
    <>
      {/* SPEAKER HERO */}
      <section className="page-hero on-ink" aria-labelledby="h1">
        <div className="container speaker-hero-grid">
          <div>
            <Breadcrumbs trail={[{ label: "Speaking" }]} />
            <Rise><p className="eyebrow">Keynote speaker</p></Rise>
            <Rise d={1}><h1 id="h1" className="display h-hero" style={{ maxWidth: "11ch" }}>A talk your room can <em>act on.</em></h1></Rise>
            <Rise d={2}><p className="lead">Anuj Yadav speaks on leadership, growth, AI and the future of work — blending a clear idea with practical takeaways, shaped around your audience and the outcome your event needs.</p></Rise>
            <Rise d={3}>
              <div className="cta-row">
                <Button to="#invite" variant="signal">Invite Anuj to speak</Button>
                <Button to="#topics" variant="ghost">Explore topics</Button>
              </div>
            </Rise>
          </div>
          <div className="hero-art" style={{ maxWidth: "26rem" }}>
            <Portrait src={site.images.speaking ?? site.images.portrait} priority />
          </div>
        </div>
        <div className="container">
          <div className="stat-strip">
            <div><b>Five formats</b>Keynote, fireside chat, panel, workshop, corporate session</div>
            <div><b>In person or virtual</b>Subject to confirmation for your dates</div>
            <div><b>Two-minute enquiry</b>Share your date, audience and theme to start the conversation</div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section" aria-labelledby="intro-h">
        <div className="container statement-grid">
          <Reveal><p className="eyebrow"><span className="index">01</span>The speaker</p></Reveal>
          <div className="stack-lg">
            <Reveal><h2 id="intro-h" className="statement">Ideas are easy to applaud. <em className="em">Useful ones change what people do next.</em></h2></Reveal>
            <Reveal delay={1}>
              <div className="prose"><p>{speakerBio.short}</p><p>Every session is built backwards from your goal — what should the audience understand, feel and do differently when they leave?</p></div>
              <div className="cta-row" style={{ marginTop: "var(--s-5)" }}>
                <TextLink to="/about">Read the full story</TextLink>
                {site.mediaKit && <TextLink href={site.mediaKit} external>Download speaker profile</TextLink>}
              </div>
            </Reveal>
            <Reveal delay={2}><Slot title="Add your verified speaker bio">{speakerBio.placeholderNote}</Slot></Reveal>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section id="topics" className="section on-paper-2" aria-labelledby="topics-h">
        <div className="container">
          <SectionHead index="02" eyebrow="Speaking topics" title={<span id="topics-h">Proposed talks, <em>tailored</em> to you.</span>} lead="These are starting points. Each is adapted to your audience, industry and event objective — or shaped into something custom." />
          <div>
            {topics.map((t, i) => (
              <Reveal key={t.id} className="topic">
                <span className="index">{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{t.title}</h3><p className="muted" style={{ marginTop: "var(--s-3)", maxWidth: "44ch" }}>{t.premise}</p></div>
                <div><span className="tag">Audience takeaways</span><ul>{t.takeaways.map((x) => <li key={x}>{x}</li>)}</ul></div>
                <div><span className="tag">Suited to</span><p className="muted" style={{ fontSize: "var(--fs-0)" }}>{t.suitedFor}</p></div>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: "var(--s-6)" }}><TextLink to="#invite">Request a topic for your event</TextLink></p>
        </div>
      </section>

      {/* AUDIENCES + FORMATS */}
      <section className="section on-ink" aria-labelledby="formats-h">
        <div className="container">
          <div className="split split--top">
            <Reveal>
              <p className="eyebrow"><span className="index">03</span>Who it's designed for</p>
              <h2 id="formats-h" className="display h-lg" style={{ marginTop: "var(--s-4)" }}>Rooms where people need to <em>move.</em></h2>
            </Reveal>
            <Reveal delay={1}><ul className="ledger" style={{ borderColor: "var(--ink-line)" }}>{audiences.map((a) => <li className="ledger-row" key={a} style={{ gridTemplateColumns: "1fr", padding: "var(--s-4) 0" }}>{a}</li>)}</ul></Reveal>
          </div>
          <div style={{ marginTop: "var(--s-9)" }}>
            <Reveal><p className="tag" style={{ color: "var(--paper-soft)" }}>Available formats · subject to confirmation</p></Reveal>
            <Reveal delay={1}>
              <div className="formats">
                {formats.map((f) => <div className="format" key={f.id}><h3>{f.label}</h3><p>{f.note}</p></div>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MEDIA / PROOF */}
      <section className="section" aria-labelledby="media-h">
        <div className="container">
          <SectionHead index="04" eyebrow="See and hear" title={<span id="media-h">Speaker reel &amp; <em>event proof.</em></span>} lead="Event footage, photographs and verified testimonials appear here once available." />
          {site.speakerReelEmbed ? (
            <iframe className="reel" src={site.speakerReelEmbed} title="Anuj Yadav speaker reel" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
          ) : site.showPlaceholders ? (
            <div className="placeholder light-ph" role="group" aria-label="Speaker reel placeholder">
              <div><strong>Speaker reel — coming soon</strong><p>Set <code>speakerReelEmbed</code> in <code>src/config/site.ts</code> to a YouTube or Vimeo embed URL.</p></div>
            </div>
          ) : null}
          <div className="grid-12" style={{ marginTop: "var(--s-6)" }}>
            <div style={{ gridColumn: "1 / -1" }}><Slot title="Event photographs & verified testimonials">Add real photos and written permission-backed testimonials only. Nothing is shown until supplied.</Slot></div>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="invite" className="section on-ink" aria-labelledby="invite-h" style={{ scrollMarginTop: "var(--header-h)" }}>
        <div className="container form-layout">
          <Reveal className="form-aside">
            <p className="eyebrow"><span className="index">05</span>Speaking enquiry</p>
            <h2 id="invite-h" className="display h-lg" style={{ marginTop: "var(--s-4)" }}>Invite Anuj to <em>speak.</em></h2>
            <p className="lead" style={{ marginTop: "var(--s-5)" }}>Tell us about your event. Date and email are the essentials — everything else helps shape the right session.</p>
            <ul className="checklist" style={{ marginTop: "var(--s-6)" }}>
              <li>Event name and approximate date</li>
              <li>Who is in the room, and roughly how many</li>
              <li>The outcome you want from the session</li>
            </ul>
            <div style={{ marginTop: "var(--s-6)" }}><DirectContact subject="Speaking enquiry" /></div>
            {site.booking.speaking && <p style={{ marginTop: "var(--s-4)" }}><TextLink href={site.booking.speaking}>Book a speaking call</TextLink></p>}
          </Reveal>
          <Reveal delay={1}><EnquiryForm kind="speaking" /></Reveal>
        </div>
      </section>
    </>
  );
}
