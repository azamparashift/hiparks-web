"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Btn from "@/components/global/Btn";
import Blob from "./Blob";
import PlayIcon from "./PlayIcon";

const WhoAreWe = () => {
  return (
    <div className=" relative w-full min-h-full py-[8%]  sm:py-[140px]">
      <div className="fix">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Animate to 100% of the wrapper's width
          transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 0.4 }}
          viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
          className="bw-m bcstyles flex gap-[10px] items-center p-[10px] w-[fit-content]"
        >
          <Link href="/" className="text-[16px] ">
            Home
          </Link>
          <div>/</div>
          <Link href="#" className="text-[16px] ">
            Who Are We
          </Link>
        </motion.div>
        <div className="flex items-center gap-2.5 ">
          <h1 className="bw-r text-[36px] 768:text-[56px] whitespace-nowrap 1024:text-[68px] 1280:text-[72px] 1366:text-[76px] leading-[76px]">
            <b className="bw-m">Who</b> Are We?
          </h1>
          <div className="xl:w-[307px] xl:h-[58px] md:w-[200px] md:h-[48px] w-[150px] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
              viewport={{ amount: 0.25, once: true }}
            >
              <img
                src="/frm2.png"
                className="w-full xl:h-[58px] md:h-[48px] h-[40px] object-cover"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[28px] 768:gap-[32px] pt-[28px] 768:pt-[45px]">
          <div className="flex 768:items-center  w-full 768:w-[40%] lg:w-[50%] 1280:w-auto">
            <img src={"/know-us/k1.png"} />
          </div>
          <div className="flex flex-col md:w-[60%] lg:flex-1 ">
            <div className="flex flex-col gap-[10px] 1024:gap-[12px] 1280:gap-[30px]">
              <p className="bw-r text-[14px] 1024:text-[16px] 1280:text-[20px] leading-[20px] 1024:leading-[25px] 1280:leading-[30px]">
                We are India’s fastest growing developers of Grade A industrial
                and logistics parks, creating high-performance ecosystems that
                power the country’s growth.{" "}
              </p>
              <p className="bw-r text-[14px] 1024:text-[16px] 1280:text-[20px] leading-[20px] 1024:leading-[25px] 1280:leading-[30px]">
                As a Blackstone logistics platform, we leverage the group’s vast
                experience in global real estate management and best practices,
                with our deep local expertise to deliver world class and premium
                industrial and warehousing solutions.
              </p>
            </div>
            <div className="flex items-end pt-[5%] h-full">
              <Btn text={"PARK OVERVIEW"} />
            </div>
          </div>
        </div>

        <div className="absolute right-0  bottom-0">
          <div className="flex">
            <div className="w-[20px] h-[20px] sm:w-[65px] sm:h-[65px] xl:w-[295.8px] xl:h-[469.8px] bg-[#22B148] opacity-25 blur-[69px]" />
            <div className="w-[20px] h-[20px] sm:w-[65px] sm:h-[65px] xl:w-[219px] xl:h-[226.8px] bg-[#F47920] opacity-25 blur-[69px]" />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col h-full w-full sm:pt-[10%] items-center justify-between gap-1  pt-8 fix  md:flex-row">
        <div className="flex flex-col 768:w-[50%] lg:w-[50%] w-full gap-[18px] 1280:gap-[34px]">
          <div>
            <h2 className="bw-m text-[28px] 1024:text-[38px] 1280:text-[52px] 1366:text-[56px] leading-[36px] 1024:leading-[45px] 1280:leading-[66px] tracking-[-0.04em]">
              Enabling India’s growth
            </h2>
            <h1 className="bw-r capitalize text-[28px] 1024:text-[38px] 1280:text-[48px] 1366:text-[56px] leading-[36px] 1024:leading-[45px] 1280:leading-[66px] tracking-[-0.04em]">
              one warehouse, one factory, one corridor at a time
            </h1>
          </div>
          <div>
            <div className="flex flex-col gap-[14px] w-full sm:w-[90%] 1024:w-[86%] pb-[18px] 1280:pb-[34px]">
              <p className="bw-r  text-[14px] 1024:text-[16px] 1280:text-[20px] leading-[20px] 1024:leading-[25px] 1280:leading-[30px]">
                As a developer of next-generation industrial and logistics parks
                across India, we provide infrastructure that powers production
                and enables efficient storage and movement of goods.
              </p>
              <p className="bw-r  text-[14px] 1024:text-[16px] 1280:text-[20px] leading-[20px] 1024:leading-[25px] 1280:leading-[30px]">
                Our mission is to strengthen India's manufacturing and supply
                chain capabilities through strategically located, future-ready
                industrial and logistics ecosystems.
              </p>
              <p className="bw-r  text-[14px] 1024:text-[16px] 1280:text-[20px] leading-[20px] 1024:leading-[25px] 1280:leading-[30px]">
                Our integrated solutions span strategic land acquisition, design
                and construction, leasing, operations, and asset
                management—ensuring speed, quality, and agility at every step.
              </p>
            </div>
            <div>
              <Btn text={"INTEGRATED SOLUTIONS"} />
            </div>
          </div>
        </div>
        {/* <div className="relative top-0 bottom-0 right-0 z-0 hidden w-full h-full pointer-events-none md:items-end md:justify-end lg:flex">
          <img src="/know-us/k2.svg" alt="" />
        </div> */}
        {/* Video Thumbnail with Modal Trigger */}
        <div className=" flex z-0  768:w-[50%] lg:w-[50%] h-full pointer-events-auto md:items-end 768:mt-0 1024:mt-[4%] 1280:mt-[8%] md:justify-start lg:flex">
          <div
            className="relative w-full 1280:w-[670px] aspect-video cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <img
              src="/your-thumbnail.jpg" // Replace with actual thumbnail
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-3xl font-bold">
              16:9
            </div>
            <div className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-[2.5px] text-black px-4 py-2 text-sm font-medium flex items-center gap-2 rounded">
              Watch Video{" "}
              <span>
                <PlayIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
