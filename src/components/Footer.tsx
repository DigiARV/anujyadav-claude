import { Link } from "react-router-dom";
import { site, socialLinks, mailto, whatsappLink } from "../config/site";
import { Button } from "./ui";

export function Footer() {
  const wa = whatsappLink();
  return (
    <footer className="site-footer on-ink">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand stack">
            <p className="display">{site.brand}</p>
            <p className="muted" style={{ maxWidth: "34ch" }}>{site.tagline}</p>
            <Button to="/speaking#invite" variant="signal" small>Invite Anuj to speak</Button>
          </div>
          <div className="footer-col">
            <h2>Explore</h2>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>Work with Anuj</h2>
            <ul>
              <li><Link to="/speaking">Keynote speaking</Link></li>
              <li><Link to="/training">Corporate training</Link></li>
              <li><Link to="/coaching">Coaching &amp; consulting</Link></li>
              <li><Link to="/education">AI &amp; digital education</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>Connect</h2>
            <ul>
              {site.contact.email && <li><a href={mailto("Enquiry")}>{site.contact.email}</a></li>}
              {wa && <li><a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>}
              {socialLinks.map(([n, u]) => <li key={n}><a href={u} target="_blank" rel="noopener noreferrer">{n}<span className="sr-only"> (opens in a new tab)</span></a></li>)}
              {!site.contact.email && !wa && socialLinks.length === 0 && <li><Link to="/contact">Contact form</Link></li>}
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Related ventures: {site.ventures.map((v) => v.name).join(" · ")}</span>
        </div>
      </div>
    </footer>
  );
}
