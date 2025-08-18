"use client";
import React from "react";
import Btn from "@/components/global/Btn";

const Finan_info_Sec1 = () => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[30px] md:pb[55px] 1280:pb[70px]">
        <div className="bw-m bg-[#F7F7F7] border-[1px] border-[#E3E3E3] px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content]">
          <a href="#" className="text-[13px] md:text-[13px] ">
            Home
          </a>{" "}
          /{" "}
          <a href="#" className="text-[13px] md:text-[13px] ">
            Financial Information
          </a>
        </div>

        <div className="flex flex-col justify-between mt-[15px] lg:mt-[15px] md:flex-row 1280:items-center items-start">
          <div className="max-w-[565px] mb-[15px] lg:mb-[0px] relative">
            <h1 className="1280:text-[76px] 1280:leading-[86px] 1280:tracking-[-3.04px] md:text-[42px] md:leading-[50px] md:tracking-[-2.04px] text-[35px] leading-[40px] tracking-[-1px]  bw-r">
              Financial<br></br>
              <span className="bw-m">Information</span>
            </h1>
            <img
              src="/Invester/invt_ttl_img.svg"
              className="absolute md:w-[130px] md:right-[-110px] md:top-[17px] 1280:w-[195px] 1280:right-[-155px] 1280:top-[36px] 1440:w-[260px] 1440:right-[-225px] 1440:top-[28px] w-[100px] right-[-83px] top-[13px] "
            />
          </div>
          <div className="max-w-[556px] md:w-[350px] lg:w-[500px] 1280:w-[600px]">
            {/* <p className="1280:text-[24px] 1280:leading-[34px] lg:text-[22px] lg:leading-[32px] md:text-[20px] md:leading-[28px] bw-r ">
              Lorem Ipsum text here we see things differently, proactively find
              opportunities with an agile team, and create exceptional value for
              our customers, partners, and employees.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finan_info_Sec1;
