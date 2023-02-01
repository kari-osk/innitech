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
    <div id="contact" className=" bg-gray pt-12 pb-12" >
      {contactData.map((contact) => (
        <div key={contact.id} className="container">
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
        <a href=""  target="_blank">
          <EnvelopeSimple />
        </a>
        <a href="http://linkedin.com/" target="_blank">
          <LinkedinLogo />
        </a>
        <a href="https://github.com/" target="_blank">
          <GithubLogo />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <InstagramLogo />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <YoutubeLogo />
        </a>
      </div>
      <h6 className="text-sm text-center pt-10 uppercase">Inni Tech</h6>
    </div>
  );
};
