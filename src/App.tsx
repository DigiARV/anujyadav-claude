import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Speaking from "./pages/Speaking";
import Training from "./pages/Training";
import Coaching from "./pages/Coaching";
import Education from "./pages/Education";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/training" element={<Training />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/education" element={<Education />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
