import React, { useState } from "react";
import { X, List } from "phosphor-react";

import {Link } from "react-scroll"


export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };


  return (
    <nav className="w-full shadow relative">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link  to="hero" spy={true} smooth={true} offset={50} duration={500}>
              <h2 className="text-2xl font-bold text-white">INNI TECH</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-dark rounded-md outline-none focus:bg-dark focus:text-light"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <X size={24} /> : <List size={24} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={` flex-1 justify-self-center  md:block md:pb-0 ${
              navbarOpen ? "block" : "hidden"
            }`}
          >
            <ul className="sm:absolute  md:relative items-center font-bold justify-center sm:mt-6 md:mt-0 space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="hover:underline hover:decoration-4">
              <Link  to="hero" spy={true} smooth={true} offset={-100} duration={1750} delay={200}>home</Link>
              </li>
              <li className="hover:underline hover:decoration-4">
              <Link  to="about" spy={true} smooth={true} offset={-100} duration={1750} delay={200}>about</Link>
              </li>
              <li className="hover:underline hover:decoration-4">
              <Link  to="services" spy={true} smooth={true} offset={10} duration={1750} delay={200}>services</Link>
              </li>
              <li className="hover:underline hover:decoration-4">
              <Link  to="team" spy={true} smooth={true} offset={-100} duration={1750} delay={200}>projects</Link>
              </li>
              <li className="hover:underline hover:decoration-4">
              <Link  to="contact" spy={true} smooth={true} offset={-100} duration={1750} delay={200}>contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
