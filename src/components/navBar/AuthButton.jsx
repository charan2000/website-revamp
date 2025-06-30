import React from "react";
import { MessageCircle } from "lucide-react";

const AuthButton = ({ variant = "outline", children, href = "#", onClick }) => {
  const baseStyles =
    "py-2 px-3 rounded-md transition-all duration-300 flex items-center gap-2";

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

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a href={href} className={variants[variant]} onClick={handleClick}>
      {children === "Contact Us" && <MessageCircle size={16} />}
      {children}
    </a>
  );
};

export default AuthButton;
