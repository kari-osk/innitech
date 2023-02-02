import React from "react";
import { projectsData } from "../data";

export const Projects = () => {
  return (
    <div className="h-fit bg-dark pb-12 text-light">
      <div className="container ">
      <h3 className="text-5xl leading-none font-semibold">
          projects
        </h3>
        {projectsData.map((project) => (
          <div key={project.id} className="pt-2" >
            <section className="md:max-w-[586px]" data-aos="fade-right">
              <h2>{project.title}</h2>
              <p className="pt-6 leading-7 mx-auto mb-12 sm:w-[586px] md:text-xl ">{project.description}</p>
            </section>
            <section className="w-full h-fit flex flex-col justify-center md:flex-row gap-4">
              <img className="max-h-[200px]" src={project.image} alt={project.alt} data-aos="fade-right" />
              <img className="max-h-[200px]" src={project.image1} alt={project.alt1} data-aos="fade-right" data-aos-duration="1000"/>
              <img className="max-h-[200px]" src={project.image2} alt={project.alt2} data-aos="fade-right" data-aos-duration="2000"/>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};
