import React from "react";
import { taglineData } from "../data";

export const Tagline = () => {
  return (
    <div className="container p-12">
      {taglineData.map((tagline) => (
        <div key={tagline.id}>
          <h2 className="text-3xl font-semibold leading-tight">{tagline.title}</h2>
          <button className="h-12 w-[218px] mt-6 bg-dark rounded-3xl text-light">{tagline.button}</button>
        </div>
      ))}
    </div>
  );
};
