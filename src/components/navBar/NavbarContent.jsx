import React from "react";
import KR_Logo from "../../assets/KR_Logo.png";
import { logoTitle, navItems } from "../../constants";

export const NavLink = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export const NavLogo = () => (
  <div className="flex items-center flex-shrink-0">
    <img className="h-12 w-12 mr-2" src={KR_Logo} alt="Keerthi Realtors Logo" />
    <span className="text-xl tracking-tight">{logoTitle}</span>
  </div>
);

export const NavItems = ({ className, itemClassName }) => (
  <ul className={className}>
    {navItems.map((item) => (
      <li key={item.label} className={itemClassName}>
        <NavLink href={item.href}>{item.label}</NavLink>
      </li>
    ))}
  </ul>
);
