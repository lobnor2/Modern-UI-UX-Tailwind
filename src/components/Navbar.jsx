import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="w-full flex py-6 justify-between items-center border border-white my-1">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      {/* dont show list on mobile view */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* ul only for mobile view */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={menu} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
