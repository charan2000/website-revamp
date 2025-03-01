import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import KR_Logo from "../assets/KR_Logo.png";
import { navItems } from "../constants";

const NavLink = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

const NavLogo = () => (
  <div className="flex items-center flex-shrink-0">
    <img className="h-12 w-12 mr-2" src={KR_Logo} alt="Keerthi Realtors Logo" />
    <span className="text-xl tracking-tight">Keerthi Realtors</span>
  </div>
);

const AuthButton = ({ variant = "outline", children, href = "#" }) => {
  const baseStyles = "py-2 px-3 rounded-md transition-all duration-300";

  const variants = {
    outline: `${baseStyles} border 
      hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] 
      hover:border-orange-500 
      hover:text-orange-400`,

    gradient: `${baseStyles} bg-gradient-to-r from-orange-500 to-orange-800 
      hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] 
      hover:from-orange-400 
      hover:to-orange-700`,
  };

  return (
    <NavLink href={href} className={variants[variant]}>
      {children}
    </NavLink>
  );
};

const NavItems = ({ className, itemClassName }) => (
  <ul className={className}>
    {navItems.map((item) => (
      <li key={item.label} className={itemClassName}>
        <NavLink href={item.href}>{item.label}</NavLink>
      </li>
    ))}
  </ul>
);

const DesktopNav = () => (
  <>
    <NavItems className="hidden lg:flex ml-14 space-x-12 items-center font-medium" />
    <div className="hidden lg:flex justify-center space-x-12 items-center">
      <AuthButton variant="outline">Sign In</AuthButton>
      <AuthButton variant="gradient">Create an Account</AuthButton>
    </div>
  </>
);

const MobileNav = ({ isOpen }) =>
  isOpen && (
    <div className="fixed right-0 z-20 flex flex-col w-full p-10 bg-neutral-900 justify-center items-center lg:hidden">
      <NavItems className="text-lg pb-8 font-medium" itemClassName="py-4" />
      <div className="flex space-x-6">
        <AuthButton variant="outline">Sign In</AuthButton>
        <AuthButton variant="gradient">Create an Account</AuthButton>
      </div>
    </div>
  );

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <nav
      className={`sticky top-0 z-50 py-3 border-b transition-all duration-300
      ${
        isScrolled
          ? "backdrop-blur-lg bg-neutral-600/75 border-neutral-700/80"
          : "bg-transparent border-transparent"
      }`}
    >
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
