import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineering Intern"
            subTitle="HAUT institute of technology (Feb 2023-Apr 2023)"
            result="INTERNATIONAL"
            des="I worked as a front-end developer on the team using react with tailwind CSS. . the project was to create a train ticket for the lagos-ibadan expressway. "
          />
          <ResumeCard
            title="IT Intern"
            subTitle="WEMA bank head office(9th August 2023- 31st August 2023)"
            result="NIGERIA"
            des="I worked with experienced individuals on the innovation team. I was made to conduct a survey about a new feature I introduced on their banking app. After that, designs were made with figma and I was asked to develop the front-end aspect of te design using react with tailwind CSS. "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
