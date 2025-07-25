import { contactConfig } from "../../constants";
import AuthButton from "./AuthButton";
import { NavItems } from "./NavbarContent";

const MobileNav = ({ isOpen, bgClass }) => {
  const handleWhatsAppClick = () => {
    window.open(contactConfig.whatsappUrl, "_blank");
  };

  // Enhanced mobile menu background with better visibility
  const getMobileBackground = () => {
    if (bgClass === "darkblue") {
      return "backdrop-blur-2xl bg-slate-900/95 border-l border-slate-700/50 shadow-2xl";
    }
    return bgClass || "backdrop-blur-xl bg-neutral-900/95";
  };

  return (
    isOpen && (
      <div
        className={`fixed right-0 top-0 z-40 flex flex-col w-full h-screen p-10 ${getMobileBackground()} justify-center items-center lg:hidden transition-all duration-300 ease-in-out`}
      >
        {/* Enhanced backdrop for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-slate-800/40"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <NavItems
            className="text-lg pb-8 font-sans font-semibold text-slate-100"
            itemClassName="py-4 hover:text-emerald-400 transition-colors duration-200"
          />
          <div className="flex space-x-6">
            <AuthButton variant="outline">Sign In</AuthButton>
            <AuthButton variant="gradient" onClick={handleWhatsAppClick}>
              Contact Us
            </AuthButton>
          </div>
        </div>
      </div>
    )
  );
};

export default MobileNav;
