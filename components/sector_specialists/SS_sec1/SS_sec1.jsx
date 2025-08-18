"use client";
import React from "react";

import Btn from "@/components/global/Btn";

const SS_sec1 = () => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[45px] md:pb[55px] 1440:pb-[70px]  1280:pb-[70px]">
        <div className="bw-m bg-[#F7F7F7] border-[1px] border-[#E3E3E3] px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] mb-[10px]">
          <a href="/" className="text-[13px] md:text-[13px] ">
            Home
          </a>{" "}
          /{" "}
          <a href="#" className="text-[13px] md:text-[13px] ">
            Sector Specialists
          </a>
        </div>

        <div className="flex items-start flex-col md:flex-row md:items-center">
          <h1 className="sec_hd bw-r md:w-[385px] lg:w-[auto]">
            Built for the Way <br className="block"></br>
            <span className="bw-m">Your Industry Works</span>
          </h1>
          <img
            src="/txt_grd_box.svg"
            className="mb-[12px] mr-[30px] ml-[auto] md:mr-[auto] md:ml-[-78px] lg:ml-[-50px] mt-[-66px] md:mt-[-32px] md:w-[150px] w-[80px] h-[25px] md:h-[35px] lg:h-[auto] object-cover 1280:w-[auto]  1280:mt-[-55px] 1280:ml-[-80px]"
          />
        </div>
        <div className="flex flex-col justify-between mt-[40px] md:mt-[10px] lg:mt-[48px] gap-[20px] lg:flex-row ">
          <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[20px]">
            <img
              className="w-[100%]"
              src="/sector_specialist/SS_sec1_img.jpg"
            ></img>
          </div>
          <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
              From precision-driven engineering firms to fast-moving consumer
              brands, Horizon Industrial Parks understands that no two
              industries operate the same way—and neither should their
              infrastructure. Over the years, we’ve partnered with leading
              players across sectors to design, deliver, and elevate spaces that
              help them grow faster, move smarter, and operate safer.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
              Whether you're building something complex, storing something
              delicate, or moving products on-demand, our team brings in the
              cross-sector experience to create logistics infrastructure that
              aligns with your goals and operations.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              Today, bespoke manufacturing solutions account for nearly 40% of
              all solutions we’ve delivered, while over 50% are tailored
              Build-to-Suit (BTS) developments. These numbers reflect more than
              the volume or expertise—they also our belief in delivering
              responsive, sector-specific design that works for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS_sec1;
