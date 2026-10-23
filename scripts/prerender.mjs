/**
 * Post-build prerender: turns the Vite client build into one static HTML file per route,
 * with real content, unique <title>/meta/canonical/Open Graph tags and accurate JSON-LD.
 * Also writes sitemap.xml, robots.txt and a 404.html.
 * The client bundle then hydrates the prerendered markup.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const routes = JSON.parse(fs.readFileSync(path.join(root, "src/config/routes.json"), "utf8"));
const { render, site, socialLinks } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const abs = (p) => site.url + (p === "/" ? "/" : p);
const crumbLabel = { about: "About", services: "Services", speaking: "Speaking", training: "Corporate Training", coaching: "Coaching & Consulting", education: "AI & Digital Education", insights: "Insights", contact: "Contact" };

if (site.url.includes("example.com")) console.warn("\n⚠  VITE_SITE_URL is not set — canonical URLs and sitemap use https://example.com. Set it before deploying.\n");

function jsonLd(route) {
  const graph = [];
  if (route.path === "/") {
    graph.push({
      "@type": "Person",
      "@id": site.url + "/#person",
      name: site.name,
      url: site.url + "/",
      description: "Coach, trainer, entrepreneur, motivational speaker and educator working across business growth, leadership, personal development, digital marketing, AI and personal branding.",
      knowsAbout: ["Business growth", "Leadership", "Communication", "Personal branding", "Digital marketing", "Artificial intelligence"],
      ...(socialLinks.length ? { sameAs: socialLinks.map(([, u]) => u) } : {}),
      ...(site.images.portrait ? { image: site.url + site.images.portrait } : {}),
    });
    graph.push({ "@type": "WebSite", "@id": site.url + "/#website", url: site.url + "/", name: site.brand, publisher: { "@id": site.url + "/#person" } });
  } else {
    const seg = route.path.slice(1);
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url + "/" },
        { "@type": "ListItem", position: 2, name: crumbLabel[seg] ?? route.title, item: abs(route.path) },
      ],
    });
    if (seg === "about") graph.push({ "@type": "AboutPage", url: abs(route.path), name: route.title, about: { "@id": site.url + "/#person" } });
    if (seg === "contact") graph.push({ "@type": "ContactPage", url: abs(route.path), name: route.title });
  }
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")}</script>`;
}

function page(route, { noindex = false } = {}) {
  const url = abs(route.path);
  const body = render(route.path);
  const og = site.images.og ? site.url + site.images.og : "";
  const tags = [
    noindex ? '<meta name="robots" content="noindex" />' : "",
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.brand)}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    noindex ? "" : `<meta property="og:url" content="${url}" />`,
    og ? `<meta property="og:image" content="${og}" />` : "",
    `<meta name="twitter:card" content="${og ? "summary_large_image" : "summary"}" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    og ? `<meta name="twitter:image" content="${og}" />` : "",
    noindex ? "" : jsonLd(route),
  ].filter(Boolean).join("\n    ");

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(route.description)}$2`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, noindex ? "" : `<link rel="canonical" href="${url}" />`)
    .replace("<!--SEO-->", tags)
    .replace("<!--APP-->", body);
  return html;
}

for (const r of routes) {
  const html = page(r);
  const out = r.path === "/" ? path.join(dist, "index.html") : path.join(dist, r.path.slice(1), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}
// 404 — rendered by the router's catch-all, never indexed.
fs.writeFileSync(path.join(dist, "404.html"), page({ path: "/__not-found", title: "Page not found — Anuj Yadav", description: "This page could not be found." }, { noindex: true }));

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${abs(r.path)}</loc><lastmod>${today}</lastmod><priority>${r.priority.toFixed(1)}</priority></url>`)
    .join("\n")}\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`✓ Prerendered ${routes.length} routes + 404, sitemap.xml, robots.txt (site: ${site.url})`);
