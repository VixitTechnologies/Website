import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import WebDevelopment from "./pages/WebDevelopment";
import CustomSoftware from "./pages/CustomSoftware";
import DataBI from "./pages/DataBI";
import Automation from "./pages/Automation";
import CloudIntegrations from "./pages/CloudIntegrations";
import SupportMaintenance from "./pages/SupportMaintenance";
import WhatWeBuild from "./pages/WhatWeBuild";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetAQuote from "./pages/GetAQuote";
import ScrollToTop from "./components/ScrollToTop";
import HelpChatbot from "./components/HelpChatbot";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.key]);

  return (
    <div key={location.key} className="page-transition">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/custom-software" element={<CustomSoftware />} />
        <Route path="/services/data-bi" element={<DataBI />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route
          path="/services/cloud-integrations"
          element={<CloudIntegrations />}
        />
        <Route
          path="/services/support-maintenance"
          element={<SupportMaintenance />}
        />
        <Route path="/work" element={<WhatWeBuild />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-a-quote" element={<GetAQuote />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
      <HelpChatbot />
    </BrowserRouter>
  );
}

export default App;
