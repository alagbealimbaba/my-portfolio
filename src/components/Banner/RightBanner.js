import React from "react";
import bannerImg from "../../assets/images/Banner/bannerImg.jpg";

const RightBanner = () => {
  return (
    <div className="w-1/2  lgl:w-1/2  flex justify-center items-center relative">
      <img
        className="w-full md:w-[363px] h-auto lgl:w-[363px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
