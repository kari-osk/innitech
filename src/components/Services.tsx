import React from "react";
import { servicesData } from "../data";

export const Services = () => {
  return (
    <div className="container pt-6 pb-12 bg-dark">
      {servicesData.map((service) => (
        <div key={service.id} className="w-full text-light ">
          <h2>{service.title}</h2>
          <section>
            <h3>{service.subtitle}</h3>
            <p>{service.description}</p>
          </section>
          <div className="h-[1px] w-full mb-6 mt-6 bg-light" />
        </div>
      ))}
    </div>
  );
};
