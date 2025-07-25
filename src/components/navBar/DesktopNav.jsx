import { contactConfig } from "../../constants";
import { NavItems } from "./NavbarContent";
import AuthButton from "./AuthButton";

const DesktopNav = () => {
  const handleWhatsAppClick = () => {
    window.open(contactConfig.whatsappUrl, "_blank");
  };

  return (
    <>
      <NavItems className="hidden lg:flex ml-14 space-x-12 items-center font-sans font-semibold text-slate-100 [&>a]:hover:text-emerald-400 [&>a]:transition-colors [&>a]:duration-200" />
      <div className="hidden lg:flex justify-center space-x-12 items-center">
        <AuthButton variant="outline">Sign In</AuthButton>
        <AuthButton variant="gradient" onClick={handleWhatsAppClick}>
          Contact Us
        </AuthButton>
      </div>
    </>
  );
};

export default DesktopNav;
