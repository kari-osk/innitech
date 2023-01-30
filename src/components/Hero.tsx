import React from "react";
import { heroData } from "../data";

export const Hero = () => {
  return (
    <div className="container w-screen ">
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

/* <h1 className="place-self-center text-7xl md:text-8xl lg:text-9xl font-bold  leading-none">
      [code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        __design]
      </h1> */
