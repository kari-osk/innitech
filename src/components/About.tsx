import React from "react";
import { aboutData } from "../data";

export const About = () => {
  return (
    <>
      {aboutData.map((about) => (
        <div key={about.id}>
          <h2>{about.title}</h2>
          <p>{about.description}</p>
          <img src={about.image} alt={about.alt} />
          <img src={about.image1} alt={about.alt1} />
        </div>
      ))}
    </>
  );
};
