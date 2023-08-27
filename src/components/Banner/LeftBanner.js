import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Front-end Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-1/2 lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5 items-center sm:items-left text-center sm:text-left ">
        <h4 className="text-lg font-normal hidden md:block">
          WELCOME TO MY WORLD
        </h4>

        <h1 className="text-3xl sm:text-6xl w-[300px] sm:w-full font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Alim Alagbe </span>
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#0eb3e6"
          />
        </h2>
        <p className="text-base font-catchyFont leading-6 tracking-wide w-[300px] sm:w-full">
          As a seasoned front-end developer specializing in React, I harness the
          power of animation as a third dimension, seamlessly weaving it into
          the fabric of every interaction. With a purpose-driven approach, I
          create dynamic experiences that transcend mere embellishment, guiding
          users through a journey where motion becomes a meaningful language of
          engagement.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
