import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Services, Projects, Locations, Testimonials } from "./pages";
import { ServicesContainer } from "../src/components/ServiceSection";
import HeroSection from "./components/heroSection/HeroSection";
import About from "./components/About";
import Services from "./pages/ServicesPage";
import Projects from "./pages/ProjectsPage";
import ContactUs from "./pages/ContactUsPage";
import ProjectsListPage from "./pages/ProjectsListPage";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-emerald-900 to-blue-900"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&#34;60&#34; height=&#34;60&#34; viewBox=&#34;0 0 60 60&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;%3E%3Cg fill=&#34;none&#34; fill-rule=&#34;evenodd&#34;%3E%3Cg fill=&#34;%23ffffff&#34; fill-opacity=&#34;0.05&#34;%3E%3Cpath d=&#34;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&#34;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
        Ready to{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          Build Your Wealth?
        </span>
      </h2>
      <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
        Connect with our experts today to discuss your real estate investment goals and discover how Keerthi Realtors can help you achieve them.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
          href="/contact"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
        >
          <span className="relative z-10">Get Started Today</span>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>

        <div className="flex items-center space-x-4 text-slate-300">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-sm">Trusted by 500+ investors</span>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={landingPage} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={landingPage} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects/:slug" element={<Projects />} />
        <Route path="/projects" element={<ProjectsListPage />} />
        {/* The new Contact Us page */}
        {/* ... other routes */}
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
    <CTASection />
  </>
);
