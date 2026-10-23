import { Button } from "../components/ui";

export default function NotFound() {
  return (
    <section className="nf on-ink" aria-labelledby="h1">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1 id="h1" className="display h-xl" style={{ marginTop: "var(--s-4)", maxWidth: "12ch" }}>This page took a <em>detour.</em></h1>
        <p className="lead" style={{ marginTop: "var(--s-5)" }}>The page you're looking for doesn't exist or has moved.</p>
        <div className="cta-row" style={{ marginTop: "var(--s-6)" }}>
          <Button to="/" variant="signal">Back to home</Button>
          <Button to="/contact" variant="ghost">Contact Anuj</Button>
        </div>
      </div>
    </section>
  );
}
