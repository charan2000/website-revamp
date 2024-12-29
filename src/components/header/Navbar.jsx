import { Menu, X } from "lucide-react";
import { useState } from "react";
import KR_Logo from "../../assets/KR_Logo.png";
import { navItems } from "../../constants";

const NavLink = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

const NavLogo = () => (
  <div className="flex items-center flex-shrink-0">
    <img className="h-10 w-10 mr-2" src={KR_Logo} alt="Keerthi Realtors Logo" />
    <span className="text-xl tracking-tight">Keerthi Realtors</span>
  </div>
);

const DesktopNav = () => (
  <>
    <ul className="hidden lg:flex ml-14 space-x-12 items-center">
      {navItems.map((item) => (
        <li key={item.label}>
          <NavLink href={item.href}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
    <div className="hidden lg:flex justify-center space-x-12 items-center">
      {/* Todo: Add link to go to sign in component */}
      <NavLink href="#" className="py-2 px-3 border rounded-md">
        Sign In
      </NavLink>
      <NavLink
        href="#"
        className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
      >
        Create an Account
      </NavLink>
    </div>
  </>
);

const MobileNav = ({ isOpen }) => (
  isOpen && (
    <div className="fixed right-0 z-20 flex flex-col w-full p-12 bg-neutral-900 justify-center items-center lg:hidden">
      <ul>
        {navItems.map((item) => (
          <li key={item.label} className="py-4">
            <NavLink href={item.href}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
      <div className="flex space-x-6">
        <NavLink href="#" className="py-2 px-3 border rounded-md">
          Sign In
        </NavLink>
        <NavLink
          href="#"
          className="py-2 px-3 bg-gradient-to-r from-orange-300 to-orange-600 rounded-md"
        >
          Create an Account
        </NavLink>
      </div>
    </div>
  )
);

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between item-center">
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
