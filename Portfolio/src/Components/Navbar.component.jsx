// 


// ----------------------------------------------------------------------------------------------------------


import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/about-me", label: "About Me" },
  { to: "/resume", label: "Resume" },
  { to: "/portfolio", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const activeState = navItems.find((item) => item.to === currentPath)?.label || "Introduction";

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-0 py-4 md:pb-6 md:pt-0 bg-[#1e1e1f] border-b border-[#383838] md:border-none">
      {/* Active Page Title */}
      <div className="text-center md:text-left md:pl-10 md:mt-3">
        <span className="text-3xl font-bold text-yellow-300">❝</span>
        <span className="text-2xl md:text-4xl font-bold text-yellow-300 border-b-4 border-gray-300 px-4">
          {activeState}
        </span>
        <span className="text-3xl font-bold text-yellow-300">❞</span>
      </div>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center md:w-[50%] md:justify-around border border-[#383838] rounded-2xl md:rounded-none md:rounded-tr-2xl md:rounded-bl-2xl bg-[#282829] px-3 md:px-6 py-2">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `px-1.5 py-2 flex items-center text-sm ${
                isActive ? "text-amber-400" : "text-gray-300"
              } ${! isActive ? "hover:text-white" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
