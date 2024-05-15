import Navbar from "./components/header/Navbar";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-5">
        <HeroSection />
      </div>
    </div>
  );
}
