import { contactConfig } from "../../constants";
import AuthButton from "./AuthButton";
import { NavItems } from "./NavbarContent";

const MobileNav = ({ isOpen, bgClass }) => {
  const handleWhatsAppClick = () => {
    window.open(contactConfig.whatsappUrl, "_blank");
  };

  return (
    isOpen && (
      <div
        className={`fixed right-0 z-20 flex flex-col w-full p-10 ${
          bgClass ? bgClass : "bg-neutral-900"
        } justify-center items-center lg:hidden`}
      >
        <NavItems
          className="text-lg pb-8 font-sans font-semibold"
          itemClassName="py-4"
        />
        <div className="flex space-x-6">
          <AuthButton variant="outline">Sign In</AuthButton>
          <AuthButton variant="gradient" onClick={handleWhatsAppClick}>
            Contact Us
          </AuthButton>
        </div>
      </div>
    )
  );
};

export default MobileNav;
