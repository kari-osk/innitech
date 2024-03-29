import React from "react";
import { heroData } from "../data";
import bg1 from "../assets/bg1.svg";
import {ArrowDown, ArrowDownRight} from "phosphor-react"
import { Link } from "react-scroll"

export const Hero = () => {
  return (
    <div id="hero" className="w-full h-screen flex items-center relative">
      <img src={bg1} alt="geometric forms in light orange colors" className="w-full"  />
      {heroData.map((hero) => (
        <div className="w-[90%] h-screen absolute flex flex-col items-center justify-center ">
          <p className="w-[270px] md:w-[382px] md:text-2xl text-base self-end pr-4 mb-1">
            {hero.description}
          </p>
          <div className="container flex flex-row">
            <img src={hero.image} alt="logo"/>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={1750} delay={100} className="animate-bounce w-fit h-fit place-self-end pointer rounded-full bg-dark hover:bg-orange"><ArrowDown size={32} color="#fff" className=""/></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

