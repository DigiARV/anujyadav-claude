import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site, mailto } from "../config/site";
import { Arrow, Button } from "./ui";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/speaking", label: "Speaking" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

const lightHeroRoutes = ["/insights", "/contact"];

export function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Mobile menu: lock scroll, Esc to close, keep Tab focus inside, restore focus on close.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
      if (e.key !== "Tab") return;
      const f = [btnRef.current, ...(menuRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? [])].filter(Boolean) as HTMLElement[];
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [open]);

  const light = lightHeroRoutes.includes(pathname);
  const cls = ["site-header", light ? "is-light" : "", scrolled ? "is-scrolled" : "", open ? "is-open" : ""].join(" ");

  return (
    <>
      <header className={cls}>
        <div className="container header-inner">
          <Link to="/" className="logo" aria-label={`${site.name} — home`}>
            <b>{site.name}</b>
            <span>The Coach</span>
          </Link>
          <nav className="nav" aria-label="Primary">
            <ul className="nav-list">
              {nav.slice(1).map((n) => (
                <li key={n.to}><NavLink className="nav-link" to={n.to}>{n.label}</NavLink></li>
              ))}
            </ul>
          </nav>
          <Button to="/speaking#invite" small className="header-cta">Invite me to speak</Button>
          <button ref={btnRef} className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
            <span>{open ? "Close" : "Menu"}</span>
            <span className="menu-icon" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </header>
      <div id="mobile-menu" ref={menuRef} className={`mobile-menu ${open ? "is-open" : ""}`} inert={open ? undefined : ""} role="dialog" aria-modal="true" aria-label="Site menu">
        <nav aria-label="Mobile">
          <ul>
            {nav.map((n, i) => (
              <li key={n.to}>
                <NavLink to={n.to} end={n.to === "/"} className="m-link" style={{ ["--i" as string]: i }}>
                  {n.label}<small>0{i + 1}</small>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-foot">
          <Button to="/speaking#invite" variant="signal">Invite Anuj to speak</Button>
          {site.contact.email && <a className="link" href={mailto("Enquiry")}>{site.contact.email}<Arrow /></a>}
        </div>
      </div>
    </>
  );
}
