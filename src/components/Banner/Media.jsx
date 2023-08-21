import React from 'react'
import {  FaLinkedinIn, FaReact, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiChakraui } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between ">
        <div>
  <h2 className="text-base uppercase font-titleFont mb-4">
    Message me on
  </h2>
  <div className="flex gap-4">
    <a
      href="https://wa.me/+2347069935849"  // Replace with your WhatsApp link
      className="bannerIcon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
    <a
      href="https://www.instagram.com/aitzcaptain/"  // Replace with your Instagram link
      className="bannerIcon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>
    <a
      href="www.linkedin.com/in/alagbe-alim-5b5a9824b"  // Replace with your LinkedIn link
      className="bannerIcon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </a>
  </div>
</div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiChakraui/>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media