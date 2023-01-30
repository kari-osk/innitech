import React from "react";
import { servicesData } from "../data";

export const Services = () => {
  return (
      <div className="bg-dark sm:mt-[1rem] md:mt-[5rem] lg:mt-[9rem] pt-6 pb-12">
        {servicesData.map((service) => (
          <div key={service.id} className=" container text-light" data-aos="fade-up">
            <h2 className="font-bold">{service.title}</h2>
            <section className=" grid md:grid-cols-2 ease-in-out">
              <h3 >{service.subtitle}</h3>
              <p>{service.description}</p>
            </section>
            <div className="h-[1px] w-full mb-6 mt-6 bg-light" />
          </div>
        ))}
      </div>
  );
};
