import React, { useState } from "react";
import { X, List } from "phosphor-react";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="w-full shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-white">INNI TECH</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-dark rounded-md outline-none focus:border-dark focus:border"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <X size={24} /> : <List size={24} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbarOpen ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="hover:font-bold">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="hover:font-bold">
                <a href="javascript:void(0)">About</a>
              </li>
              <li className="hover:font-bold">
                <a href="javascript:void(0)">Services</a>
              </li>
              <li className="hover:font-bold">
                <a href="javascript:void(0)">work</a>
              </li>

              <li className="mt-3 space-y-2">
                <a href="javascript:void(0)" className="text-orange font-bold">
                  Book a meeting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
