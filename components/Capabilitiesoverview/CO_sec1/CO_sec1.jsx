"use client";
import React from "react";

import Btn from "@/components/global/Btn";
import CO_CardStackScroll from "./CO_CardStackScroll";
import { motion } from "framer-motion";

const CO_sec1 = () => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[30px] md:pb[55px] 1440:pb-[70px]  1280:pb-[0px]">
        <div className="bw-m bg-[#F7F7F7] border-[1px] border-[#E3E3E3] px-[8px] py-[3px]  md:px-[10px] md:py-[7px] w-[fit-content] mb-[10px]">
          <a href="/" className="text-[13px] md:text-[13px] ">
            Home
          </a>{" "}
          /{" "}
          <a href="#" className="text-[13px] md:text-[13px] ">
            Capabilities Overview
          </a>
        </div>

        <div className="flex items-start flex-col md:flex-row md:items-center">
          <h1 className="sec_hd bw-r md:w-[385px] lg:w-[auto]">
            Flexible, Scalable, <br className="block"></br>
            <span className="bw-m">Tailored Solutions</span>
          </h1>
          <img
            src="/txt_grd_box.svg"
            className="mb-[12px] mr-[30px] ml-[auto] md:mr-[auto] md:ml-[-60px] lg:ml-[10px] mt-[-66px] md:mt-[-32px] md:w-[150px] w-[66px] h-[25px] md:h-[35px] lg:h-[auto] object-cover 1280:w-[auto]  1280:mt-[-55px] 1280:ml-[20px]"
          />
        </div>
        <div className="flex flex-col justify-between mt-[40px] lg:mt-[48px] gap-[20px] lg:flex-row ">
          <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] lg:mt-[10px] mt-[20px]">
            <img className="w-[100%]" src="/Cap_Overview/CO_sec1_img.jpg"></img>
          </div>
          <div className="1280:max-w-[550px] 1366:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
              From factory and warehousing solutions to cold storage and city
              logistics—we’ve got you covered.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
              Horizon specialises in Built-to-Suit and Plug & Play
              infrastructure, offering industry-ready solutions that are built
              for scale and designed for specifics. As a Blackstone logistics
              platform, Horizon benefits from extensive global experience and
              our own expertise in collaborative solutioning with over 100
              customers to develop spaces tailored to your exact operational
              needs. We are here to help you move, build, and supply. Be it
              custom factory integrations or urban warehousing, our
              infrastructure solutions combine deep sector insight with delivery
              certainty—ensuring your operations launch faster and run smarter.
            </p>
          </div>
        </div>
      </div>
      {/* <img className="purple_vctr absolute top-auto bottom-[200px] right-0 " src='/green_vector.svg' />
            <img className="green_vctr absolute top-auto bottom-[-80px] right-0" src='/orange_vector.svg' /> */}

      <CO_CardStackScroll />
    </div>
  );
};

export default CO_sec1;
