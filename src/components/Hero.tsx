import React from "react";
import { heroData } from "../data";
import bg from "../assets/bg.svg";

export const Hero = () => {
  return (
    <div id="hero" className="w-full h-screen flex items-center relative">
      <img src={bg} alt="geometric forms in orange colors" className="w-full z-00"  />
      {heroData.map((hero) => (
        <div className="w-full absolute flex flex-col h-screen items-center justify-center z-50">
          <p className="w-[270px] md:w-[382px] md:text-2xl text-base self-end pr-4 mb-4">
            {hero.description}
          </p>
          <img src={hero.image} alt="logo"/>
        </div>
      ))}
    </div>
  );
};

