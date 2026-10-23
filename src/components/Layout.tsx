import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Seo } from "../lib/seo";
import { Button } from "./ui";

/** Restores scroll on navigation and honours #hash anchors. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ behavior: "instant" as ScrollBehavior });
        el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

/**
 * Phone-only persistent invitation. Appears after the first screen, steps aside whenever
 * the enquiry form or the footer is on screen (so it never covers what it points to).
 */
function StickyInvite() {
  const { pathname } = useLocation();
  const [past, setPast] = useState(false);
  const [covered, setCovered] = useState(false);
  useEffect(() => {
    const on = () => setPast(window.scrollY > 180);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    setCovered(false);
    const seen = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
      setCovered(seen.size > 0);
    });
    const t = setTimeout(() => document.querySelectorAll("#invite, .site-footer").forEach((el) => io.observe(el)), 50);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [pathname]);
  const on = past && !covered;
  return (
    <div className={`sticky-invite ${on ? "is-on" : ""}`} {...(on ? {} : { inert: "" })}>
      <Button to="/speaking#invite" variant="signal">Invite Anuj to speak</Button>
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <>
      <Seo />
      <ScrollManager />
      <Header />
      <div key={`rl-${pathname}`} className="route-line" aria-hidden="true" />
      <main id="main" key={pathname} className="page-enter">{children}</main>
      <Footer />
      <StickyInvite />
    </>
  );
}
