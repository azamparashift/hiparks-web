"use client";
import Slider from "@/components/global/Slider";
import React from "react";
import { motion } from "framer-motion";

const BrandShowcase = () => {
  return (
    <div className="w-full md:min-h-[200px] xl:min-h-[271px] bg-[#F5F5F5] py-[48px] flex flex-col items-center justify-center gap-[26px] xl:gap-[48px]">
      <motion.h1
        // initial={{ y: "40px", opacity: 0 }}
        // whileInView={{ y: "0", opacity: 1 }}
        // transition={{ duration: 0.45, ease: [0.7, 0, 0.4, 1], delay: 0.4 }}
        // viewport={{once: true, amount: 0.1 }}
        initial={{ y: "40px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.65, ease: [1, 0, 0.3, 1], delay: 0.2 }}
        viewport={{ once: false, amount: 0.1 }}
        className="bw-r text-[36px] sm:text-[46px] md:text-[48px] lg:text-[52px] xl:text-[56px] leading-[100%]"
      >
        Brands{" "}
        <motion.span
          // initial={{ y: "40px", opacity: 0 }}
          // whileInView={{ y: "0", opacity: 1 }}
          // transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1], delay: 0.6 }}
          // viewport={{once: true, amount: 0.1 }}
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.65, ease: [1, 0, 0.3, 1], delay: 0.2 }}
          viewport={{ once: false, amount: 0.1 }}
          className="bw-m"
        >
          We Serve
        </motion.span>
      </motion.h1>

      <Slider />
    </div>
  );
};

export default BrandShowcase;
