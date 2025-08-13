"use client";
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { motion } from "framer-motion";

const items = [
  {
    title: "Enabling Agile Operations",
    content:
      "From land acquisition to world class construction and ongoing park operations, we synchronise every step, so you stay ahead.",
    readMoreLink: "#",
  },
  {
    title: "Value Added Solutions",
    content:
      "Need renewable energy integration, plug-and-play business solutions, or peak season expansion support? Our customisable, tech-enabled solutions are designed to remove friction and add flexibility to your business.",
    readMoreLink: "#",
  },
  {
    title: "Workforce Amenities",
    content:
      "From blue-collar housing and skill centres to EV charging, medical services, sports arenas, and hot meals—we create people-first parks that care for your workforce as much as you do.",
    readMoreLink: "#",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        delay: 0.3,

        duration: 1.2,
        ease: [0.7, 0, 0.4, 1],
      }}
      // className="divide-y pt-[50px] min-w-[100%] sm:min-w-auto pb-3 md:max-w-[400px] divide-gray-200 xl:h-[500px] 2xl:h-[550px]"
      className="divide-y pt-[20px] lg:pt-[25px]  2xl:pt-[50px] 3xl:pt-[80px] min-w-[100%] sm:min-w-auto pb-3 md:max-w-[400px] divide-gray-200 xl:h-full xl:pb-[60px] 2xl:h-[550px]"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          isOpen={openIndex === index}
          title={item.title}
          content={item.content}
          readMoreLink={item.readMoreLink}
          onToggle={handleToggle}
        />
      ))}
    </motion.div>
  );
};

export default Accordion;
