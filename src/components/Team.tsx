import React from "react";
import { teamData } from "../data";

export const Team = () => {
  return (
    <div id="team" className="bg-dark pb-12  text-light" >
      <div className="container" data-aos="fade-up">
      {teamData.map((team) => (
        <div key={team.id} className="sm:w-[500px]">
          <h2>{team.title}</h2>
          <p className="pt-6">{team.description}</p>
        </div>
      ))}
      <div className="flex flex-row pt-6">
        <h3 className="text-5xl leading-none font-semibold">
          meet the team
        </h3>
        <button>----</button>
      </div>
      </div>
    </div>
  );
};
