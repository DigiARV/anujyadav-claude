import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { forms, type Field } from "../content/forms";
import { site, mailto } from "../config/site";
import { Anchor } from "./ui";

type Status = "idle" | "submitting" | "success" | "error" | "mailto";
type Values = Record<string, string>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(fields: Field[], v: Values, consent: boolean) {
  const errs: Record<string, string> = {};
  for (const f of fields) {
    const val = (v[f.name] ?? "").trim();
    if (f.required && !val) errs[f.name] = `Please add ${f.label.toLowerCase().replace(/\?$/, "")}.`;
    else if (f.type === "email" && val && !emailRe.test(val)) errs[f.name] = "That email address doesn't look right.";
  }
  if (!consent) errs.consent = "Please confirm consent so we can reply to you.";
  return errs;
}

export function EnquiryForm({ kind, id, defaults = {}, heading }: { kind: keyof typeof forms; id?: string; defaults?: Values; heading?: string }) {
  const def = forms[kind];
  const uid = useId();
  const [values, setValues] = useState<Values>(defaults);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [hp, setHp] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  const hasEndpoint = !!site.forms.endpoint;
  const hasEmail = !!site.contact.email;
  const connected = hasEndpoint || hasEmail;

  useEffect(() => { if (status === "success" || status === "mailto") resultRef.current?.focus(); }, [status]);

  const set = (name: string, val: string) => {
    setValues((p) => ({ ...p, [name]: val }));
    if (errors[name]) setErrors((p) => { const n = { ...p }; delete n[name]; return n; });
  };

  const summary = () =>
    def.fields.map((f) => `${f.label}: ${(values[f.name] ?? "").trim() || "—"}`).join("\n");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (hp) return; // honeypot tripped: silently drop
    const errs = validate(def.fields, values, consent);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    if (!connected) { setStatus("error"); setErrorMsg("not-connected"); return; }

    if (!hasEndpoint) {
      // No backend: open a prefilled email draft. This is NOT reported as "sent".
      window.location.href = mailto(`${def.subject} — ${values.name ?? ""}`.trim(), summary());
      setStatus("mailto");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.forms.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...(site.forms.accessKey ? { access_key: site.forms.accessKey } : {}),
          subject: `${def.subject} — ${site.brand}`,
          form: def.kind,
          ...values,
          consent: "given",
          page: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("network");
    }
  }

  if (status === "success") {
    return (
      <div className="form-shell" id={id}>
        <div className="success" role="status">
          <div className="tick" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="m5 12 5 5 9-10" stroke="currentColor" strokeWidth="2" /></svg></div>
          <h3 ref={resultRef} tabIndex={-1} className="display h-md">{def.successTitle}</h3>
          <p className="muted">{def.successBody}</p>
          <p><button className="link" style={{ background: "none", border: 0, padding: 0 }} onClick={() => { setStatus("idle"); setValues(defaults); setConsent(false); }}>Send another enquiry</button></p>
        </div>
      </div>
    );
  }
  if (status === "mailto") {
    return (
      <div className="form-shell" id={id}>
        <div className="success" role="status">
          <h3 ref={resultRef} tabIndex={-1} className="display h-md">Your email draft is ready.</h3>
          <p className="muted">We've opened a prefilled message in your email app. <strong>Nothing has been sent yet</strong> — please press Send there to deliver it. If nothing opened, email <Anchor href={mailto(def.subject, summary())} className="inline-link">{site.contact.email}</Anchor> directly.</p>
          <p><button className="link" style={{ background: "none", border: 0, padding: 0 }} onClick={() => setStatus("idle")}>Back to the form</button></p>
        </div>
      </div>
    );
  }

  const fieldEl = (f: Field) => {
    const fid = `${uid}-${f.name}`;
    const err = errors[f.name];
    const describedBy = [f.hint ? `${fid}-h` : "", err ? `${fid}-e` : ""].filter(Boolean).join(" ") || undefined;
    const common = {
      id: fid, name: f.name, value: values[f.name] ?? "", required: f.required, "aria-required": f.required || undefined,
      "aria-invalid": err ? true : undefined, "aria-describedby": describedBy, autoComplete: f.autoComplete,
    } as const;
    return (
      <div className={`field ${f.wide || f.type === "textarea" ? "span-2" : ""}`} key={f.name}>
        <label htmlFor={fid}>{f.label}{f.required ? <span aria-hidden="true"> *</span> : <span className="opt"> (optional)</span>}</label>
        {f.type === "select" ? (
          <select {...common} onChange={(e) => set(f.name, e.target.value)}>
            <option value="">Select…</option>
            {f.options!.map((o) => <option key={o}>{o}</option>)}
          </select>
        ) : f.type === "textarea" ? (
          <textarea {...common} onChange={(e) => set(f.name, e.target.value)} placeholder={f.placeholder} rows={5} />
        ) : (
          <input {...common} type={f.type} placeholder={f.placeholder} onChange={(e) => set(f.name, e.target.value)} {...(f.type === "date" ? { min: new Date().toISOString().slice(0, 10) } : {})} />
        )}
        {f.hint && f.hint !== "Optional" && <span className="hint" id={`${fid}-h`}>{f.hint}</span>}
        {err && <span className="err" id={`${fid}-e`}>{err}</span>}
      </div>
    );
  };

  return (
    <div className="form-shell" id={id}>
      {heading && <h3 className="display h-md" style={{ marginBottom: "var(--s-5)" }}>{heading}</h3>}
      {!connected && (
        <div className="form-status is-info" style={{ marginBottom: "var(--s-5)" }}>
          <strong>Form not connected yet</strong>
          <span>Site owner: set <code className="k">VITE_FORM_ENDPOINT</code> or a contact email in <code className="k">src/config/site.ts</code>. Until then, submissions cannot be delivered.</span>
        </div>
      )}
      <form ref={formRef} onSubmit={onSubmit} noValidate aria-label={def.subject}>
        <div className="form-grid">
          {def.fields.map(fieldEl)}
          <div className="hp" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} name="website_url" /></label></div>
          <div className="span-2 field">
            <label className="check">
              <input type="checkbox" name="consent" checked={consent} aria-invalid={errors.consent ? true : undefined} onChange={(e) => { setConsent(e.target.checked); if (errors.consent) setErrors((p) => { const n = { ...p }; delete n.consent; return n; }); }} />
              <span>{def.consent} <span aria-hidden="true">*</span></span>
            </label>
            {errors.consent && <span className="err">{errors.consent}</span>}
          </div>
          {status === "error" && (
            <div className="form-status span-2" role="alert">
              <strong>{errorMsg === "not-connected" ? "This form isn't connected yet." : "We couldn't send your enquiry."}</strong>
              <span>
                {errorMsg === "not-connected"
                  ? "Nothing was sent. Please try again later or use another contact route."
                  : "Nothing has been sent. Please check your connection and try again"}
                {errorMsg !== "not-connected" && hasEmail && <> or email <Anchor href={mailto(def.subject, summary())} className="inline-link">{site.contact.email}</Anchor> directly</>}
                {errorMsg !== "not-connected" && "."}
              </span>
            </div>
          )}
          <div className="span-2 cta-row">
            <button type="submit" className="btn btn--signal" disabled={status === "submitting"} aria-busy={status === "submitting"}>
              {status === "submitting" ? (<><span className="spinner" aria-hidden="true" /> Sending…</>) : def.submitLabel}
            </button>
            <span className="muted" style={{ fontSize: "var(--fs-0)" }}>* Required. {hasEndpoint ? "Sent securely to the site owner." : hasEmail ? "Opens a prefilled email in your mail app." : ""}</span>
          </div>
        </div>
      </form>
    </div>
  );
}
