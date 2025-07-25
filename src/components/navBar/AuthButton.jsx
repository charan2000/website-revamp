import React from "react";
import { MessageCircle } from "lucide-react";

const AuthButton = ({ variant = "outline", children, href = "#", onClick }) => {
  const baseStyles =
    "py-2 px-3 rounded-md transition-all duration-300 flex items-center gap-2";

  const variants = {
    outline: `${baseStyles} border border-slate-600/50 text-slate-200
      hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] 
      hover:border-emerald-500 
      hover:text-emerald-400
      backdrop-blur-sm bg-slate-800/30`,

    gradient: `${baseStyles} bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold
      hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] 
      hover:from-emerald-400 
      hover:to-blue-400
      hover:scale-105 transform`,
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
