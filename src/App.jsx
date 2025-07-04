import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Services, Projects, Locations, Testimonials } from "./pages";
import { ServicesContainer } from "../src/components/ServiceSection";
import HeroSection from "./components/heroSection/HeroSection";
import About from "./components/About";
import Services from "./pages/Services";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={landingPage} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={landingPage} />
        <Route path="/services" element={<Services />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}

const landingPage = (
  <>
    <HeroSection />
    <About />
    <ServicesContainer />
  </>
);
