import React from "react";
import { heroData } from "../data";
import bg from "../assets/bg.svg";
import bg1 from "../assets/bg.svg";

export const Hero = () => {
  return (
    <div id="hero" className="w-full h-screen flex items-center relative">
      <img src={bg1} alt="geometric forms in orange colors" className="w-full"  />
      {heroData.map((hero) => (
        <div className="w-full absolute flex flex-col h-screen items-center justify-center ">
          <p className="w-[270px] md:w-[382px] md:text-2xl text-base self-end pr-4 mb-4">
            {hero.description}
          </p>
          <img src={hero.image} alt="logo"/>
        </div>
      ))}
    </div>
  );
};

