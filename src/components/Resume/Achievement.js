import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 ">
          <ResumeCard
            title="Certified Software Engineer"
            subTitle="Issued April 2023."
            result="VIRTUAL"
            des="https://drive.google.com/file/d/1E3_7zoQ3T1x6pQr6dYTnyvoFkLHMEw_m/view"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
