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
            title="Lorem ipsum dolor sit amet"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Lorem ipsum dolor sit amet. Sed iusto labore ut voluptatum omnis est reprehenderit soluta. Et ullam ipsa aut doloribus quae ut dignissimos itaque est aspernatur dolorem ea Quis voluptates"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="Lorem ipsum dolor sit amet. Sed iusto labore ut voluptatum omnis est reprehenderit soluta. Et ullam ipsa aut doloribus quae ut dignissimos itaque est aspernatur dolorem ea Quis voluptates"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="Lorem ipsum dolor sit amet. Sed iusto labore ut voluptatum omnis est reprehenderit soluta. Et ullam ipsa aut doloribus quae ut dignissimos itaque est aspernatur dolorem ea Quis voluptates"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
