import React from "react";

const CharCard = ({ charImage, charcont, charTitle }) => {
  return (
    <div className="md:w-[350px] relative w-full max-w-full border border-[#CDCDCD] shadow select-none gap-[15px] flex flex-col items-start justify-normal h-[320px] md:h-[450px] bg-white  border-opacity-[0.5] md:p-[40px]">
      <div className="w-full">
        <img
          src={charImage}
          alt={charTitle}
          width={320}
          height={180}
          className="rounded-none object-cover w-full h-[180px]"
        />
      </div>
      <div className="relative flex flex-col  px-[15px] gap-[15px]">
        <p className="md:text-[18px] text-[14px] inter-sb text-[#F47922]  leading-[23px]">
          {charcont}
        </p>
        <h4 className="text-[#111111] bw-sb leading-[23px] text-[18px]">
          {charTitle}
        </h4>
        {/* <span className="border border-[#1d1d1d] w-fit px-1.5 py-1 text-[#1e1e1e] bg-orange-400 text-xs ">
          Read More
        </span> */}
      </div>
      <div className="absolute cursor-pointer bottom-4 right-3">
        <img src="/grayarr.svg" height={20} width={20} alt="Link" />
      </div>
    </div>
  );
};

export default CharCard;
