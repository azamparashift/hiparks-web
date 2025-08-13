"use client";
import React from "react";

import Btn from "@/components/global/Btn";
import CardStackScroll from "./CardStackScroll";
import ScrollStackItem from "./ScrollStackItem";

const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
    color: "#5196fd",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.",
    src: "tree.jpg",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
    color: "#8f89ff",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.",
    src: "water.jpg",
    link: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
    color: "#13006c",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "house.jpg",
    link: "https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60",
    color: "#ed649e",
  },
  {
    title: "Mark Rammers",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
    src: "cactus.jpg",
    link: "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop",
    color: "#fd521a",
  },
];

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
            className="mb-[12px] mt-[-32px] w-[100px] 1280:w-[auto]  1280:mt-[-55px] 1280:ml-[20px]"
          />
        </div>
        <div className="flex flex-col justify-between mt-[40px] lg:mt-[80px] lg:flex-row ">
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
