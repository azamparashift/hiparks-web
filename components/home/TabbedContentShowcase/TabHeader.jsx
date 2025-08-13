"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import clsx from "clsx";
import { arrowHoverVariants } from "@/animations/motionVariants";

const tabs = [
  { name: "Case Studies" },
  { name: "Blog" },
  { name: "News" },
  { name: "Events" },
  { name: "Press Release" },
];

export default function TabHeader({ activeTab, setActiveTab }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [1, 0, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="md:h-[60px] lg:h-[85px] xl:h-[100px] bg-white grid grid-cols-2 md:grid-cols-5 border border-[#CDCDCD] md:rounded-2xl  lg:rounded-[28px] overflow-hidden"
    >
      {tabs.map((tab, i) => {
        const isActive = i === activeTab;

        return (
          <motion.button
            key={i}
            onClick={() => setActiveTab(i)}
            whileHover="hover"
            initial="initial"
            animate="initial"
            variants={{}} // enable nested hover animations
            className={clsx(
              "relative flex items-center justify-between md:px-[12px] lg:px-[20px] xl:px-[23px]  xl:py-[20px] border-r border-[#CDCDCD] transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none",
              isActive && "bg-gradient-to-r from-[#AC38D9] to-[#F47922]"
            )}
          >
            <div className="flex items-center justify-between w-full gap-2">
              <h2
                className={clsx(
                  "whitespace-nowrap md:text-[16px] lg:text-[20px] xl:text-[23px] bw-r ration-300",
                  isActive ? "text-white" : "text-black"
                )}
              >
                {tab.name}
              </h2>

              <span className=" md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px]  xl:h-[40px] relative overflow-hidden block">
                {isActive ? (
                  <img
                    src="/whiteexternal.svg"
                    alt="Active Icon"
                    width={40}
                    height={40}
                    className="w-full h-full"
                  />
                ) : (
                  <motion.div
                    variants={arrowHoverVariants}
                    className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
                  >
                    <img
                      src="/blackarr.png"
                      alt="Inactive Icon"
                      width={40}
                      height={40}
                      className="w-full h-full"
                    />
                  </motion.div>
                )}
              </span>
            </div>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
