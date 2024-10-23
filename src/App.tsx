import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages"
import About from "./pages/about"
import Contact from "./pages/contact"
import RootLayout from "./pages/layouts/RootLayout"
import Career from "./pages/career"
import PrivacyPolicy from "./pages/privacy-policy"
import TermsOfUse from "./pages/terms-of-use"
import AdReach from "./pages/adReach"
import UtilityNet from "./pages/utility-net"
import CellGrid from "./pages/cell-grid"
import SecureSite from "./pages/secure-site"
import NavOptix from "./pages/nav-optix"
import AgriZone from "./pages/agri-zone"
import TourMap from "./pages/tour-map"
import HealthLoc from "./pages/health-loc"
import RealSight from "./pages/real-sight"
import InsurSight from "./pages/insur-sight"
import EduZone from "./pages/edu-zone"
import CiviSync from "./pages/civi-sync"
import ShopSpot from "./pages/shop-spot"
import GrowthLead from "./pages/career-details/growth-lead"
import CyberSecurityAnalyst from "./pages/career-details/cybersecurity-analyst"
import DataScientist from "./pages/career-details/data-scientist"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />

            {/* solutions */}
            <Route path="/ad-reach" element={<AdReach />} />
            <Route path="/utility-net" element={<UtilityNet />} />
            <Route path="/cell-grid" element={<CellGrid />} />
            <Route path="/secure-site" element={<SecureSite />} />
            <Route path="/shop-spot" element={<ShopSpot />} />
            <Route path="/nav-optix" element={<NavOptix />} />
            <Route path="/agri-zone" element={<AgriZone />} />
            <Route path="/tour-map" element={<TourMap />} />
            <Route path="/health-loc" element={<HealthLoc />} />
            <Route path="/real-sight" element={<RealSight />} />
            <Route path="/insur-sight" element={<InsurSight />} />
            <Route path="/edu-zone" element={<EduZone />} />
            <Route path="/civi-sync" element={<CiviSync />} />

            {/* Career Details page  */}
            <Route path="careers">
              <Route path="growth-lead" element={<GrowthLead />} />
              <Route path="cybersecurity-analyst" element={<CyberSecurityAnalyst />} />
              <Route path="data-scientist" element={<DataScientist />} />
            </Route>
          </Route>

          {/* Notfound route redirect to homescreen */}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
