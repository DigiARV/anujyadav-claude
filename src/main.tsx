import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";

const el = document.getElementById("root")!;
const tree = (
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Prerendered production HTML is hydrated; the dev server renders from scratch.
if (el.hasChildNodes()) hydrateRoot(el, tree);
else createRoot(el).render(tree);
