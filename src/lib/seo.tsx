import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "../config/routes.json";
import { site } from "../config/site";

export const routeMeta = (path: string) =>
  routes.find((r) => r.path === path) ?? {
    path,
    title: "Page not found — Anuj Yadav",
    description: "This page could not be found.",
    priority: 0,
  };

/**
 * Keeps <title> and <meta description> in sync on client-side navigation.
 * (The static HTML for each route is generated at build time by scripts/prerender.mjs.)
 */
export function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = routeMeta(pathname.replace(/(.)\/$/, "$1"));
    document.title = m.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", m.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", site.url + (m.path === "/" ? "/" : m.path));
  }, [pathname]);
  return null;
}
