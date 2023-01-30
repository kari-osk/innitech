import React from "react";
import { aboutData } from "../data";

export const About = () => {
  return (
    <div data-aos="fade-up">
      {aboutData.map((about) => (
        <div key={about.id}>
            <h2 className="container pb-12 font-semibold ">{about.title}</h2>
            <p className="p-2 mx-auto mb-12 sm:w-[586px] md:text-xl ">{about.description}</p>
          <div className="h-[435px] grid md:grid-row relative">
            <img
              src={about.image}
              alt={about.alt}
              className="w-[309px] md:w-[45%] justify-self-end"
            />
            <img
              src={about.image1}
              alt={about.alt1}
              className="w-[309px] mt-[230px] md:mt-[150px] md:w-[50%] justify-self-start absolute"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
