import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { site } from "../config/site";

export const Arrow = ({ className = "arrow" }: { className?: string }) => (
  <svg className={className} width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
    <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
export const ArrowUR = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

interface LinkProps {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}
/** Internal route (`to`) or external/mailto/tel (`href`). Renders nothing if neither is set. */
function Anchor({ to, href, children, className, onClick, external }: LinkProps) {
  if (to) return <Link to={to} className={className} onClick={onClick}>{children}</Link>;
  if (!href) return null;
  const ext = external ?? /^https?:/.test(href);
  return (
    <a href={href} className={className} onClick={onClick} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
      {ext && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export function Button({ variant = "solid", small, arrow = true, className = "", children, ...rest }: LinkProps & { variant?: "solid" | "signal" | "ghost"; small?: boolean; arrow?: boolean }) {
  const cls = `btn ${variant === "signal" ? "btn--signal" : variant === "ghost" ? "btn--ghost" : ""} ${small ? "btn--sm" : ""} ${className}`;
  return <Anchor {...rest} className={cls}>{children}{arrow && <Arrow />}</Anchor>;
}

export function TextLink({ children, className = "", ...rest }: LinkProps) {
  return <Anchor {...rest} className={`link ${className}`}>{children}<Arrow /></Anchor>;
}

export { Anchor };

/** Scroll-triggered reveal. Visible by default; hidden only when html.js is set and motion is allowed. */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: { children: ReactNode; delay?: number; as?: "div" | "li" | "section" | "article"; className?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("is-in"); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as "div";
  return <Comp ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${className}`} style={{ "--d": delay } as CSSProperties}>{children}</Comp>;
}

export function Rise({ children, d = 0, as: Tag = "div", className = "" }: { children: ReactNode; d?: number; as?: "div" | "p" | "span"; className?: string }) {
  const Comp = Tag as "div";
  return <Comp className={`rise ${className}`} style={{ "--d": d } as CSSProperties}>{children}</Comp>;
}

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link to="/">Home</Link></li>
        {trail.map((t, i) => (
          <li key={t.label}>{t.to && i < trail.length - 1 ? <Link to={t.to}>{t.label}</Link> : <span aria-current="page">{t.label}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

/** Approved portrait if configured; otherwise a clearly-labelled placeholder. Never fabricates a likeness. */
export function Portrait({ src = site.images.portrait, alt = site.images.portraitAlt, priority = false, className = "", offset = true }: { src?: string | null; alt?: string; priority?: boolean; className?: string; offset?: boolean }) {
  return (
    <div style={{ position: "relative", isolation: "isolate" }}>
      {offset && <div className="portrait-offset" aria-hidden="true" />}
      {src ? (
        <figure className={`portrait unmask ${className}`}>
          <img src={src} alt={alt} width={1200} height={1500} {...(priority ? { fetchPriority: "high" } : { loading: "lazy" })} decoding="async" />
        </figure>
      ) : (
        <div className={`portrait portrait--placeholder unmask ${className}`} role="img" aria-label="Brand illustration of rising steps. An approved photo of Anuj Yadav will replace it.">
          <Ascent />
          <p className="ph-note"><strong>Portrait to come</strong>Add a photo in <code className="k">public/images/</code>, then set <code className="k">images.portrait</code> in <code className="k">site.ts</code>.</p>
        </div>
      )}
    </div>
  );
}

export function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <header className="section-head">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display h-lg" style={{ marginTop: "var(--s-4)" }}>{title}</h2>
      </Reveal>
      {lead && <Reveal delay={1}><p className="lead">{lead}</p></Reveal>}
    </header>
  );
}

/** Brand mark for the headline idea: potential rising into progress. Replaced by the portrait once supplied. */
function Ascent() {
  const steps = [70, 135, 205, 285, 375];
  const w = 64, gap = 14, base = 440, x0 = 20;
  return (
    <svg className="ascent" viewBox="0 0 400 480" aria-hidden="true" focusable="false">
      {steps.map((h, i) => (
        <rect key={i} className={i === steps.length - 1 ? "step step--top" : "step"} x={x0 + i * (w + gap)} y={base - h} width={w} height={h} />
      ))}
      <path className="trace" pathLength={1} d={`M${x0 + w / 2} ${base - steps[0] - 18} ${steps.map((h, i) => `L${x0 + i * (w + gap) + w / 2} ${base - h - 18}`).join(" ")}`} />
      <text className="lbl" x={x0} y={base + 28}>POTENTIAL</text>
      <text className="lbl lbl--hi" x={x0 + 4 * (w + gap) + w} y={base - steps[4] - 36} textAnchor="end">PROGRESS</text>
    </svg>
  );
}
