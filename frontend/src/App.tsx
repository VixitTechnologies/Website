import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WebDevelopment from "./pages/WebDevelopment";
import CustomSoftware from "./pages/CustomSoftware";
import DataBI from "./pages/DataBI";
import Automation from "./pages/Automation";
import CloudIntegrations from "./pages/CloudIntegrations";
import SupportMaintenance from "./pages/SupportMaintenance";
import OurWork from "./pages/OurWork";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

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
        <Route path="/work" element={<OurWork />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
