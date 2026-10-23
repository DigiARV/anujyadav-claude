import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Seo } from "../lib/seo";

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

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <>
      <Seo />
      <ScrollManager />
      <Header />
      <main id="main" key={pathname} className="page-enter">{children}</main>
      <Footer />
    </>
  );
}
