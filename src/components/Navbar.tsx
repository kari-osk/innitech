import React, { useState } from "react";
import { X, List } from "phosphor-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 mx-auto px-4">
      <h1>Inner Tech</h1>
      <ul className="hidden md:flex">
        <li className="p-4">About</li>
        <li className="p-4">Services</li>
        <li className="p-4">Work</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <X size={24} /> : <List size={24} />}
      </div>
      <div
        className={
          !nav
            ? "bg-light fixed left-0 top-0 w-[70%] h-screen border-r ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-200"
        }
      >
        <h1 className="px-4 pt-8">Inner Tech</h1>
        <ul className="pt-24 ">
          <li className="p-4">About</li>
          <li className="p-4">Services</li>
          <li className="p-4">Work</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};
