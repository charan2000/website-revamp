import React from "react";
import { Link } from "react-router-dom";
import KR_Logo from "../../assets/KR_Logo.png";
import { logoTitle, navItems } from "../../constants";

export const NavLink = ({ href, className, children }) => (
  <Link to={href} className={className}>
    {children}
  </Link>
);

export const NavLogo = () => (
  <div className="flex items-center flex-shrink-0">
    <img className="h-12 w-12 mr-2" src={KR_Logo} alt="Keerthi Realtors Logo" />
    <span className="text-2xl tracking-tight font-sans font-bold text-white">
      {logoTitle}
    </span>
  </div>
);

export const NavItems = ({ className, itemClassName }) => (
  <ul className={`font-sans font-semibold text-lg text-white ${className}`}>
    {navItems.map((item) => (
      <li key={item.label} className={itemClassName}>
        <NavLink
          href={item.href}
          className="font-sans font-semibold text-lg text-white"
        >
          {item.label}
        </NavLink>
      </li>
    ))}
  </ul>
);
