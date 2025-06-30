import { NavLogo, NavItems } from "./NavbarContent";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to add a scroll event listener and update isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggles the mobile navigation drawer open/close
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    // Navigation bar container with sticky positioning and dynamic styling
    <nav
      className={`sticky top-0 z-50 py-3 border-b transition-all duration-300
      ${
        isScrolled
          ? "backdrop-blur-lg bg-neutral-600/75 border-neutral-700/80"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Main content container for navbar */}
      <div className="container px-2.5 pt-2.5 pb-2.5 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <NavLogo />
          <DesktopNav />
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <MobileNav isOpen={mobileDrawerOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
