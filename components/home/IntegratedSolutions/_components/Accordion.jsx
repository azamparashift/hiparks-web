"use client";
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { motion } from "framer-motion";

const items = [
  {
    title: "Enabling Agile Operations",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
    readMoreLink: "#",
  },
  {
    title: "Value Added Solutions",
    content: "Value-added features and services to boost your operations.",
    readMoreLink: "#",
  },
  {
    title: "Workforce Amenities",
    content: "Best-in-class facilities designed for employee wellbeing.",
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
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        delay: 0.8,
        duration: 0.6,
        ease: "easeIn",
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
