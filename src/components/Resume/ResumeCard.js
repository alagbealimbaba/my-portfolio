import React from "react";

const ResumeCard = ({ title, subTitle, result, des, link }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>

      <div className="w-[240px] h-auto sm:w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-4 sm:px-10 flex flex-col justify-center gap-4 sm:gap-10 shadow-shadowOne">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl  sm:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-[14px] sm:text-lg  mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="w-16 h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center  text-[10px] sm:text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        {link ? (
          <a href={link} className="text-sm sm:text-xl hover:underline">
            {des}
          </a>
        ) : (
          <p className="text-[12px] sm:text-xl">{des}</p>
        )}
      </div>
    </div>
  );
};

export default ResumeCard;
