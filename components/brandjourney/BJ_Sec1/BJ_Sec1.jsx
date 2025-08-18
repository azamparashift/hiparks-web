"use client";
import React from "react";

import Btn from "@/components/global/Btn";
import CardStackScroll from "./CardStackScroll";


const BJ_Sec1 = () => {
  return (
    <div>
      <div className="relative w-full  overflow-hidden fix pt-[45px] md:pt[80px] lg:pt[100px]  pb-[30px] md:pb[55px] 1440:pb-[70px]  1280:pb-[0px]">
        <div className="flex items-center flex-col md:flex-row md:items-center">
          <h1 className="sec_hd bw-r">
            <span className="bw-m">Building for What's Next.</span>
            <br></br> Backed by What Works.
          </h1>
          <img
            src="/txt_grd_box.svg"
            className="mb-[12px] mt-[-28px] w-[100px] 1280:w-[auto]  1280:mt-[-55px] 1280:ml-[20px]"
          />
        </div>
        <div className="flex flex-col justify-between mt-[20px] lg:mt-[80px] lg:flex-row ">
          <div className="max-w-[565px] mb-[15px] lg:mb-[0px]">
            <p className="text-[22px] leading-[30px] lg:text-[26px] lg:leading-[37px] xl:text-[30px] xl:leading-[40px] bw-r">
              We are India’s fastest growing developers of Grade A industrial
              and logistics parks, creating high-performance ecosystems that
              power the country’s growth.{" "}
            </p>
          </div>
          <div className="max-w-[645px]">
            <p className="p_bld mb-[16px] bw-m ">
              As a Blackstone logistics platform, we leverage the group’s vast
              experience in global real estate management and best practices,
              with our deep local expertise to deliver world class and premium
              industrial and warehousing solutions.
            </p>

            <p className="p_bld bw-m ">
              Launched in 2022 with a portfolio of 6 MSFT, Horizon Industrial
              Parks has since then grown into one of India’s leading industrial
              and logistics platforms. Today, we offer one of the largest Grade
              A portfolios in India — 40 parks across 9 key markets, covering
              more than 2,000 acres with 50 million sq. ft. of development
              potential.
            </p>
            <Btn text="NETWORK OVERVIEW" className="mt-[24px]" />
          </div>
        </div>
      </div>
      {/* <img className="purple_vctr absolute top-auto bottom-[200px] right-0 " src='/green_vector.svg' />
            <img className="green_vctr absolute top-auto bottom-[-80px] right-0" src='/orange_vector.svg' /> */}

      <CardStackScroll />
    </div>
  );
};

export default BJ_Sec1;
