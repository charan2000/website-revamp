import { NavLogo, NavItems } from "./NavbarContent";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = ({ bgClass = "" }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Enhanced scroll effect tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggles the mobile navigation drawer open/close
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  // Enhanced background logic with scroll-based opacity and blur
  const getNavbarBackground = () => {
    if (bgClass === "darkblue") {
      // For landing page - enhanced scroll effects
      const scrollProgress = Math.min(scrollY / 100, 1);
      const opacity = 0.1 + (scrollProgress * 0.8); // From 0.1 to 0.9
      const blurIntensity = Math.min(scrollY / 50, 1); // Gradually increase blur
      
      return scrollY > 10 
        ? `backdrop-blur-xl bg-slate-900/${Math.round(opacity * 100)} border-slate-700/60 shadow-lg shadow-slate-900/20`
        : "backdrop-blur-sm bg-slate-900/10 border-transparent";
    }
    
    // Default behavior for other pages
    return bgClass || (scrollY > 0 
      ? "backdrop-blur-lg bg-neutral-600/15 border-neutral-700/60" 
      : "bg-transparent border-transparent");
  };

  const background = getNavbarBackground();

  return (
    <nav
      className={`sticky top-0 z-50 py-3 border-b transition-all duration-300 ${background}`}
    >
      {/* Main content container for navbar */}
      <div className="container px-2.5 pt-2.5 pb-2.5 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <NavLogo />
          <DesktopNav />
          <div className="lg:hidden md:flex flex-col justify-end">
            <button 
              onClick={toggleNavbar}
              className="p-2 rounded-lg text-slate-100 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 hover:text-emerald-400 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <MobileNav isOpen={mobileDrawerOpen} bgClass={bgClass} />
      </div>
    </nav>
  );
};

export default Navbar;
