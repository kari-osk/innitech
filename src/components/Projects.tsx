import React from "react";
import { projectsData } from "../data";

export const Projects = () => {
  return (
    <div className="bg-dark pb-12 text-light">
      <div className="container ">
      <h3 className="text-5xl leading-none font-semibold">
          projects
        </h3>
        {projectsData.map((project) => (
          <div key={project.id} className="pt-2" >
            <section className="max-w-[586px]" data-aos="fade-right">
              <h2>{project.title}</h2>
              <p className="pt-6 leading-7 mx-auto mb-12 sm:w-[586px] md:text-xl ">{project.description}</p>
            </section>
            <section className="h-[200px] flex flex-col md:flex-row gap-4">
              <img src={project.image} alt={project.alt} data-aos="fade-right" />
              <img src={project.image1} alt={project.alt1} data-aos="fade-right" data-aos-duration="1000"/>
              <img src={project.image2} alt={project.alt2} data-aos="fade-right" data-aos-duration="2000"/>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};
