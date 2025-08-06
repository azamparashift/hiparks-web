"use client";

// import Image from "next/image";
import React from "react";
import Btn from "../../global/Btn";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div
      className="h-full lg:h-[464px] overflow-hidden w-full relative bg-cover  bg-center"
      style={{ backgroundImage: "url('/newsbg.png')" }}
    >
      <div className="lg:max-w-[1340px] ">
        <div className="flex items-center sm:items-end md:justify-center lg:justify-between ">
          {/* Left Section */}
          <div className="flex flex-1 items-end pl-4 md:pl-[30px] lg:pl-[40px] xl:pl-[69px] py-[45px] md:py-[70px]">
            <div className="flex flex-col gap-[12px] sm:gap-[18px] md:gap-[20px]">
              {/* Title */}
              <div className="flex flex-col gap-0 md:gap-0 lg:gap-[4px]">
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: 0,
                    ease: [1, 0, 0.2, 1],
                  }}
                  viewport={{ once: false, amount: 0.1 }}
                  className=" text-[36px] sm:text-[48px] md:text-[52px] xl:text-[56px] bw-m leading-[120%] text-white"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  Sign Up For Our
                </motion.h1>

                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.25,
                    ease: [1, 0, 0.4, 1],
                  }}
                  viewport={{ once: false, amount: 0.1 }}
                  className="text-[36px] sm:text-[48px] md:text-[52px] xl:text-[56px] bw-r sm:leading-2.5 md:leading-[120%] text-white"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  Newsletter
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [1, 0, 0.3, 1] }}
                viewport={{ once: false, amount: 0.1 }}
                className="text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] text-[#ffffff] inter-r leading-[22px] sm:leading-[28px] lg:leading-[32px] w-[60%] md:w-[80%]"
              >
                Let’s Co-Create The Right Solution For Your Business
              </motion.p>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [1, 0, 0.35, 1] }}
                viewport={{ once: false, amount: 0.1 }}
                className="pt-[8px] sm:pt-[10px]"
              >
                <form>
                  <div className="flex gap-[10px] md:gap-[16px]">
                    <input
                      type="text"
                      className="bg-[#fff] px-[14px] w-[200px] sm:w-[225px] sm:py-[10px] lg:w-[314px] lg:py-[14px] focus:outline-none focus:ring-0 focus:border-none"
                      placeholder="Enter your email"
                    />
                    <Btn text={"Subscribe"} />
                  </div>
                  <p className="text-[#ffffff] pt-[10px] inter-r text-[12px] sm:text-sm">
                    We care about your data in our{" "}
                    <Link className="underline" href={"/privacy-policy"}>
                      privacy policy
                    </Link>
                  </p>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-end justify-center flex-auto md:-ml-36 xl:-mr-24 2xl:ml-44 1920:-mr-[460px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [1, 0, 0.4, 1] }}
              viewport={{ once: false, amount: 0.1 }}
              style={{ width: 324, height: 429 }}
            >
              <Image
                src="/peoplesafety.png"
                alt="Safety Image"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          {/* <div className="relative flex items-end justify-center flex-auto w-full md:-ml-36 xl:-mr-24 2xl:ml-44 1920:-mr-[460px]"> */}
          {/* <div className="relative flex items-end justify-center flex-auto"> */}
          {/* <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.8, ease: [1, 0, 0.4, 1] }}
    viewport={{ once: false, amount: 0.1 }}
    className="relative w-[200px] sm:w-[250px] lg:w-[324px] aspect-[324/429] overflow-hidden"
  >
    <Image
      src="/peoplesafety.png"
      alt="Safety Image"
      className="w-full h-full object-contain"
    />
  </motion.div>
</div> */}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
