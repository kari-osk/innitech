import React from "react";
import { contactData } from "../data";
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";
import Typewriter from "typewriter-effect";

export const Contact = () => {
  return (
    <div id="contact" className="container bg-gray pt-12 pb-12" >
      {contactData.map((contact) => (
        <div key={contact.id}>
          <h2>{contact.title}</h2>
          <h3 className="text-orange font-semibold text-4xl">
            <Typewriter
              options={{
                strings: ["Let's talk", "Connect with us"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      ))}
      <div className="w-full md:max-w-[520px] mx-auto flex flex-row justify-between  pt-9 text-2xl ">
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
