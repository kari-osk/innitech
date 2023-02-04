import React, { useState } from "react";
import { contactData } from "../data";
import {
  EnvelopeSimple,
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
  X,
} from "phosphor-react";
import Typewriter from "typewriter-effect";
import { FormContact } from "./FormContact";
import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.60)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ccc",
  },
};

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClick =() => {
    alert("Our team will be in touch soon.")
    setShowModal(false);
  }

  return (
    <div id="contact" className=" bg-gray pt-12 pb-12 z-0">
      {contactData.map((contact) => (
        <div key={contact.id} className="container">
          {/* <h2>{contact.title}</h2> */}
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
      <div className="relative w-full md:max-w-[520px] mx-auto flex flex-row justify-between pt-9 text-2xl ">
        <button onClick={openModal}>
          <EnvelopeSimple />
        </button>
        {showModal ? (
          <ReactModal
            isOpen={showModal}
            style={customStyles}
            onRequestClose={closeModal}
          >
            <div className="w-full flex justify-between">
              <h1 className="uppercase">Inni Tech</h1>
              <button
                onClick={closeModal}
                className=" place-items-end"
              >
                <X size={20} className="rounded hover:bg-dark hover:text-gray" />
              </button>
            </div>
            <FormContact onClick={handleClick}/>

          </ReactModal>
        ) : null}
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
