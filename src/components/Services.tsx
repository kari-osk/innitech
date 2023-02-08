import React from "react";
import { servicesData } from "../data";

export const Services = () => {
  return (
      <div id="services" className="bg-dark sm:mt-[1rem] md:mt-[6rem] lg:mt-[9rem] pt-16 pb-12">
        <h3 className="container text-5xl leading-none font-semibold text-light">services</h3>
        {servicesData.map((service) => (
          <div key={service.id} className="container text-light" data-aos="fade-up">
            <h2 className=" pb-4">{service.title}</h2>
            <section className="grid md:grid-cols-2 ease-in-out">
              <h3 >{service.subtitle}</h3>
              <p>{service.description}</p>
            </section>
            <div className="h-[1px] w-full mb-6 mt-6 bg-light" />
          </div>
        ))}
      </div>
  );
};
