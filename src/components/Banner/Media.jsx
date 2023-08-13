import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiChakraui } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between ">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Message me on
          </h2>
          <div className="flex gap-4 ">
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
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