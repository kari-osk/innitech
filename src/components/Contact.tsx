import React from "react";
import { contactData } from "../data";
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";




export const Contact = () => {
  return (
    <div className="container bg-gray pt-12 pb-12">
      {contactData.map((contact) => (
        <div key={contact.id}>
          <h2>{contact.title}</h2>
          <h3 className="text-orange font-semibold text-4xl">{contact.subtitle}</h3>
        </div>
      ))}
      <div className="w-full flex flex-row justify-between pt-9 text-2xl ">
        <button className="">
          <EnvelopeSimple />
        </button>
        <button>
          <LinkedinLogo />
        </button>
        <button>
          <GithubLogo />
        </button>
        <button>
          <InstagramLogo />
        </button>
        <button>
          <YoutubeLogo />
        </button>
      </div>
      <h6 className="text-center pt-10 ">Inni Tech</h6>
    </div>
  );
};
