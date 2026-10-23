import { useState } from "react";
import { Breadcrumbs, Reveal, Rise, SectionHead } from "../components/ui";
import { FinalCta, InsightCard, InsightsEmpty } from "../components/sections";
import { insights } from "../content/insights";
import { insightThemes } from "../content/pages";

export default function Insights() {
  const [theme, setTheme] = useState<string>("all");
  const list = theme === "all" ? insights : insights.filter((i) => i.theme === theme);
  return (
    <>
      <section className="page-hero light" aria-labelledby="h1">
        <div className="container">
          <Breadcrumbs trail={[{ label: "Insights" }]} />
          <Rise><p className="eyebrow">Insights &amp; resources</p></Rise>
          <Rise d={1}><h1 id="h1" className="display h-xl" style={{ maxWidth: "15ch" }}>Ideas worth <em>acting on.</em></h1></Rise>
          <Rise d={2}><p className="lead">Articles, videos and tutorials on AI, business growth, leadership, personal branding and digital marketing.</p></Rise>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="themes-h" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 id="themes-h" className="sr-only">Topics</h2>
          <ul className="themes">
            {insightThemes.map((t, i) => (
              <Reveal as="li" key={t.id} delay={i}><h3>{t.label}</h3><p className="muted" style={{ fontSize: "var(--fs-0)" }}>{t.d}</p></Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section on-paper-2" aria-labelledby="latest-h">
        <div className="container">
          <SectionHead eyebrow="Latest" title={<span id="latest-h">From the <em>library.</em></span>} />
          {insights.length > 0 && (
            <div className="filters" role="group" aria-label="Filter by topic">
              <button className="filter" aria-pressed={theme === "all"} onClick={() => setTheme("all")}>All</button>
              {insightThemes.map((t) => <button key={t.id} className="filter" aria-pressed={theme === t.id} onClick={() => setTheme(t.id)}>{t.label}</button>)}
            </div>
          )}
          {insights.length === 0 ? <InsightsEmpty /> : list.length === 0 ? <p className="muted" role="status">Nothing in this topic yet — check back soon.</p> : <div className="insight-grid">{list.map((i) => <InsightCard key={i.id} i={i} />)}</div>}
        </div>
      </section>
      <FinalCta title={<>Want these ideas in <em>your room?</em></>} />
    </>
  );
}
