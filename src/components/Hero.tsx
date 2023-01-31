import React from "react";
import { heroData } from "../data";

export const Hero = () => {
  return (
    <div id="hero" className="w-full ">
      {heroData.map((hero) => (
        <div className="flex flex-col h-screen items-center justify-center">
          <p className="w-[270px] md:w-[382px] md:text-2xl text-base self-end pr-4 mb-4">
            {hero.description}
          </p>
          <img src={hero.image} alt="logo"  className=""/>
        </div>
      ))}
    </div>
  );
};

