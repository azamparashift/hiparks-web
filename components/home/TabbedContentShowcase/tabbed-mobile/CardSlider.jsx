// import { motion } from "framer-motion";
// import CharCard from "./CharCard";

// export const CardSlider = ({ cards }) => (
//   <motion.div className="flex gap-4 px-4 pb-2 mt-4 overflow-x-auto">
//     {cards.map((card, idx) => (
//       <div key={idx} className="min-w-[250px]">
//         <CharCard {...card} />
//       </div>
//     ))}
//   </motion.div>
// );

// CardSlider.jsx
// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import CharCard from "./CharCard";

// export const CardSlider = ({ cards, swiperRef }) => {
//   return (
//     <div className="pb-2 pl-4 mt-4">
//       <Swiper
//         spaceBetween={16}
//         slidesPerView={1.2}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         modules={[Navigation]}
//       >
//         {cards.map((card, idx) => (
//           <SwiperSlide key={idx}>
//             <CharCard
//               charImage={card.image}
//               charcont={card.category}
//               charTitle={card.title}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// CardSlider.js
// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Btn from "@/components/global/Btn"; // Assuming this is correct
// import CharCard from "./CharCard";

// // Pass the onViewAll handler as a prop
// export const CardSlider = ({ cards, onViewAll }) => {
//   return (
//     <div className="pb-2 pl-4 mt-4">
//       {/* This div is the container for Swiper and its controls */}
//       <div className="relative">
//         <Swiper
//           spaceBetween={16}
//           slidesPerView={1.2}
//           modules={[Navigation]}
//           cssMode={true}
//           navigation={{
//             prevEl: ".swiper-button-prev",
//             nextEl: ".swiper-button-next",
//           }}
//         >
//           {cards.map((card, idx) => (
//             <SwiperSlide key={idx}>
//               <CharCard
//                 charImage={card.image}
//                 charcont={card.category}
//                 charTitle={card.title}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Controls moved inside the same container */}
//         {/* <div className="flex justify-end pt-8 pr-4 gap-2.5">
//           <button className="swiper-button-prev ">
//             <ArrowLeft className="text-gray-800" />
//           </button>
//           <button className="swiper-button-next ">
//             <ArrowRight className="text-gray-800" />
//           </button>
//         </div> */}
//         {/* <div className="px-4 mt-4">
//           <Btn text={"View All"} onClick={onViewAll} />
//         </div> */}
//         <div className="flex items-center justify-between px-4 mt-4">
//           <div className="flex gap-3">
//             {/* Add the specific Swiper class names */}
//             <button className="swiper-button-prev">
//               <ArrowLeft className="text-gray-800" />
//             </button>
//             <button className="swiper-button-next">
//               <ArrowRight className="text-gray-800" />
//             </button>
//           </div>
//           <Btn text={"View All"} onClick={onViewAll} />
//         </div>
//       </div>
//     </div>
//   );
// };

// CardSlider.js
// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Btn from "@/components/global/Btn";
// import CharCard from "./CharCard";

// export const CardSlider = ({ cards, onViewAll, type }) => {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   return (
//     <div className="pb-2 pl-4 mt-4">
//       <div className="relative">
//         <Swiper
//           spaceBetween={16}
//           slidesPerView={1.2}
//           modules={[Navigation]}
//           navigation={{
//             prevEl: ".swiper-button-prev",
//             nextEl: ".swiper-button-next",
//           }}
//           cssMode={true}
//           onSlideChange={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           onInit={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//         >
//           {cards.map((card, idx) => (
//             <SwiperSlide
//               key={idx}
//               style={idx === cards.length - 1 ? { paddingRight: "16px" } : {}}
//             >
//               <CharCard
//                 charImage={card.image}
//                 charcont={card.category}
//                 charTitle={card.title}
//                 description={card.description}
//                 type={type}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div className="flex items-center justify-between  mt-4">
//           <div className="flex gap-3">
//             <button
//               className={`swiper-button-prev transition-opacity duration-300 ${
//                 isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
//               }`}
//             >
//               {/* <ArrowLeft /> */}
//             </button>
//             <button
//               className={`swiper-button-next transition-opacity duration-300 ${
//                 isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
//               }`}
//             >
//               {/* <ArrowRight /> */}
//             </button>
//           </div>
//           <Btn text="View All" onClick={onViewAll} />
//         </div>
//       </div>
//     </div>
//   );
// };

// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Btn from "@/components/global/Btn";
// import CharCard from "./CharCard";

// export const CardSlider = ({ cards, onViewAll, type }) => {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   return (
//     <div className="pb-2  mt-4">
//       <div className="relative">
//         <Swiper
//           spaceBetween={16}
//           slidesPerView={1}
//           modules={[Navigation]}
//           navigation={{
//             prevEl: ".swiper-button-prev",
//             nextEl: ".swiper-button-next",
//           }}
//           cssMode={true}
//           onSlideChange={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           onInit={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {cards.map((card, idx) => (
//             <SwiperSlide
//               key={idx}
//               style={idx === cards.length - 1 ? { paddingRight: "0px" } : {}}
//             >
//               <CharCard
//                 charImage={card.image}
//                 charcont={card.category}
//                 charTitle={card.title}
//                 description={card.description}
//                 type={type}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div className="flex items-center justify-between mt-4">
//           <div className="flex gap-3">
//             <button
//               className={`swiper-button-prev flex items-center justify-center transition-opacity duration-300 ${
//                 isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
//               }`}
//               disabled={isBeginning}
//             ></button>
//             <button
//               className={`swiper-button-next flex items-center justify-center transition-opacity duration-300 ${
//                 isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
//               }`}
//               disabled={isEnd}
//             ></button>
//           </div>
//           <Btn text="View All" onClick={onViewAll} />
//         </div>
//       </div>
//     </div>
//   );
// };

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Btn from "@/components/global/Btn";
// import CharCard from "./CharCard";

// export const CardSlider = ({ cards, onViewAll, type }) => {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   const swiperRef = useRef(null); // ref to access Swiper instance

//   // Reset Swiper when `type` (or `cards`) changes
//   useEffect(() => {
//     if (swiperRef.current) {
//       swiperRef.current.slideTo(0); // go to first slide
//       setTimeout(() => {
//         // ensure Swiper updates navigation state
//         setIsBeginning(swiperRef.current.isBeginning);
//         setIsEnd(swiperRef.current.isEnd);
//       }, 50);
//     }
//   }, [cards]);

//   return (
//     <div className="pb-2 mt-4">
//       <div className="relative">
//         <Swiper
//           spaceBetween={16}
//           slidesPerView={1}
//           modules={[Navigation]}
//           navigation={{
//             prevEl: ".swiper-button-prev",
//             nextEl: ".swiper-button-next",
//           }}
//           cssMode={true}
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           onSlideChange={(swiper) => {
//             setIsBeginning(swiper.isBeginning);
//             setIsEnd(swiper.isEnd);
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {cards.map((card, idx) => (
//             <SwiperSlide
//               key={idx}
//               style={idx === cards.length - 1 ? { paddingRight: "0px" } : {}}
//             >
//               <CharCard
//                 charImage={card.image}
//                 charcont={card.category}
//                 charTitle={card.title}
//                 description={card.description}
//                 type={type}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div className="flex items-center justify-between mt-4">
//           <div className="flex gap-3">
//             <button
//               className={`swiper-button-prev flex items-center justify-center transition-opacity duration-300 ${
//                 isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
//               }`}
//               disabled={isBeginning}
//             >
//               {/* <ArrowLeft size={20} /> */}
//             </button>
//             <button
//               className={`swiper-button-next flex items-center justify-center transition-opacity duration-300 ${
//                 isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
//               }`}
//               disabled={isEnd}
//             >
//               {/* <ArrowRight size={20} /> */}
//             </button>
//           </div>
//           <Btn text="View All" onClick={onViewAll} />
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Btn from "@/components/global/Btn";
import CharCard from "./CharCard";

export const CardSlider = ({ cards, onViewAll, type }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null); // ref to access Swiper instance

  // Reset Swiper and navigation states when `cards` or `type` changes
  useEffect(() => {
    if (swiperRef.current) {
      // Reset to first slide
      swiperRef.current.slideTo(0);
      // Update navigation states
      setTimeout(() => {
        setIsBeginning(swiperRef.current.isBeginning);
        setIsEnd(swiperRef.current.isEnd);
      }, 100); // Increased timeout to ensure Swiper updates
    }
  }, [cards, type]);

  return (
    <div className="pb-2 mt-4">
      <div className="relative">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          cssMode={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {cards.map((card, idx) => (
            <SwiperSlide
              key={idx}
              style={idx === cards.length - 1 ? { paddingRight: "0px" } : {}}
            >
              <CharCard
                charImage={card.image}
                charcont={card.category}
                charTitle={card.title}
                description={card.description}
                type={type}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3">
            <button
              className={`swiper-button-prev flex items-center justify-center transition-opacity duration-300 ${
                isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
              disabled={isBeginning}
            >
              {/* <ArrowLeft size={20} /> */}
            </button>
            <button
              className={`swiper-button-next flex items-center justify-center transition-opacity duration-300 ${
                isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
              disabled={isEnd}
            >
              {/* <ArrowRight size={20} /> */}
            </button>
          </div>
          <Btn text="View All" onClick={onViewAll} />
        </div>
      </div>
    </div>
  );
};
