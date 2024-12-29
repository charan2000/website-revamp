import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Services, Projects, Locations, Testimonials } from "./pages";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/header/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-5">
        <HeroSection />
      </div>
      {/* <Routes>
        <Route path="/services" element={<ServicesContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
}


// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       {/* Modern background patterns */}
//       <div className="fixed inset-0 -z-10 overflow-hidden">
//         <div className="absolute -top-1/2 -right-1/2 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30" />
//         <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 rounded-full bg-indigo-50 blur-3xl opacity-30" />
//       </div>

//       <Navbar />
//       <div className="max-w-7xl mx-auto px-6 pt-5">
//         <HeroSection />
//       </div>
//     </div>
//   );
// }
