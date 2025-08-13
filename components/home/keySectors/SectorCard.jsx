// "use client";
// import { useKeySectorsStore } from "./useKeySectorsStore";

// export default function SectorCard({ sector }) {
//   const setActiveBg = useKeySectorsStore((s) => s.setActiveBg);

//   const cardClass = sector.gradient
//     ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white"
//     : "bg-black/30 text-white";

//   return (
//     <div
//       onMouseEnter={() => setActiveBg(sector.bg)}
//       className={`w-[360px] h-[223px] flex items-center justify-center text-center font-semibold text-lg cursor-pointer border border-white/20 hover:border-white transition ${cardClass}`}
//     >
//       {sector.title}
//     </div>
//   );
// }

// "use client";
// import { useKeySectorsStore } from "./useKeySectorsStore";

// export default function SectorCard({ sector }) {
//   const setActiveBg = useKeySectorsStore((s) => s.setActiveBg);

//   const cardClass = sector.gradient
//     ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white"
//     : "bg-black/30 text-white";

//   const colSpan = sector.colSpan || 1;
//   const rowSpan = sector.rowSpan || 1;

//   return (
//     <div
//       onMouseEnter={() => setActiveBg(sector.bg)}
//       className={`col-span-${colSpan} row-span-${rowSpan}
//         flex items-center justify-center text-center
//         font-semibold text-lg cursor-pointer border
//         border-white/20 hover:border-white transition ${cardClass}`}
//     >
//       {sector.title}
//     </div>
//   );
// }

// import { useRef, useEffect } from "react";
// import { useKeySectorsStore } from "./useKeySectorsStore";
// import Image from "next/image";

// export default function SectorCard({ sector }) {
//   const setActiveBg = useKeySectorsStore((s) => s.setActiveBg);
//   const ref = useRef(null);

//   useEffect(() => {
//     if (ref.current) {
//       const { width, height } = ref.current.getBoundingClientRect();
//       console.log("Card size:", width, height);
//     }
//   }, []);

//   const baseClass = sector.gradient
//     ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white"
//     : "bg-black/30 text-white";

//   return (
//     <div
//       ref={ref}
//       onMouseEnter={() => setActiveBg(sector.bg)}
//       className={`group w-[360px] h-[223px] cursor-pointer transition border border-white/20 hover:border-white`}
//     >
//       <div
//         className={`w-full h-full flex items-center justify-center text-center font-semibold text-lg ${baseClass} transition-colors duration-300 group-hover:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)]`}
//       >
//         {sector.title}
//       </div>
//       <Image
//         src={"/whiteexternal.svg"}
//         className="z-20"
//         width={38}
//         height={38}
//         alt="arrow"
//       />
//     </div>
//   );
// }

///Final

// import { useRef, useEffect } from "react";
// import { useKeySectorsStore } from "./useKeySectorsStore";
// import Image from "next/image";

// export default function SectorCard({ sector }) {
//   const setActiveBg = useKeySectorsStore((s) => s.setActiveBg);
//   const ref = useRef(null);

//   useEffect(() => {
//     if (ref.current) {
//       const { width, height } = ref.current.getBoundingClientRect();
//       console.log("Card size:", width, height);
//     }
//   }, []);

//   const baseClass = sector.gradient
//     ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white"
//     : "bg-black/30 text-white";

//   return (
//     <div
//       ref={ref}
//       onMouseEnter={() => setActiveBg(sector.bg)}
//       className={`group w-[360px] h-[223px] cursor-pointer transition border border-white/30`}
//     >
//       <div
//         className={`w-full h-full flex flex-col justify-between py-[30px] px-[22px] ${baseClass} transition-colors duration-300 group-hover:bg-[radial-gradient(circle_at_bottom_left,_#D96D6A_0%,_#893DA2_100%)]`}
//       >
//         {/* Title text */}
//         <h3 className="text-[30px] bw-sb leading-[35px] text-left">
//           {sector.title}
//         </h3>

//         {/* Icon aligned to bottom-right */}
//         <div className="flex justify-end">
//           <Image src="/whiteexternal.svg" width={24} height={24} alt="arrow" />
//         </div>
//       </div>
//     </div>
//   );
// }

///***************************************** */

// "use client";
// import { useRef, useEffect, useState } from "react";
// import { useKeySectorsStore } from "./useKeySectorsStore";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function SectorCard({ sector, position }) {
//   const setActiveBg = useKeySectorsStore((s) => s.setActiveBg);
//   const ref = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   const baseClass = sector.gradient
//     ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white"
//     : "bg-black/30 text-white";

//   // Apply borders only on top and left, except for edge cases
//   let borderClasses = "border-t border-l border-white/30";
//   if (position.includes("right")) borderClasses += " border-r";
//   if (position.includes("bottom")) borderClasses += " border-b";

//   return (
//     <div
//       ref={ref}
//       onMouseEnter={() => {
//         setActiveBg(sector.bg);
//         setHovered(true);
//       }}
//       onMouseLeave={() => setHovered(false)}
//       className={`w-[360px] 2xl:h-[223px] h-[180px] cursor-pointer transition ${borderClasses}`}
//     >
//       <div
//         className={`w-full h-full flex flex-col pt-[30px] px-[22px] justify-between ${baseClass} transition-colors duration-300 ${
//           hovered
//             ? "bg-[radial-gradient(143.41%_138.14%_at_33.19%_174.66%,_#F47922_0%,_#8B37A4_100%)]"
//             : ""
//         }`}
//       >
//         <h3 className="2xl:text-[30px] text-[24px] bw-sb leading-[35px] px-[18px] text-left">
//           {sector.title}
//         </h3>

//         <div className="flex items-end pb-[15px] justify-end h-auto overflow-hidden">
//           <AnimatePresence>
//             {hovered && (
//               <motion.div
//                 initial={{ y: 10, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: 10, opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 250, damping: 20 }}
//               >
//                 <Image
//                   src="/whiteexternal.svg"
//                   width={38}
//                   height={38}
//                   alt="arrow"
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

///*********************************************** */

// "use client";
// import { useState, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { useMediaQuery } from "@/app/hooks/useMediaQuery";
// import { useKeySectorsStore } from "./useKeySectorsStore";

// export default function SectorCard({ sector }) {
//   const setActiveBg = useKeySectorsStore((s) => s.setActiveBg);
//   const ref = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   const isDesktop = useMediaQuery("(min-width: 1024px)");

//   const baseClass = sector.gradient
//     ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white"
//     : "bg-black/30 text-white";

//   return (
//     <div
//       ref={ref}
//       onMouseEnter={() => {
//         if (isDesktop) {
//           setActiveBg(sector.bg);
//           setHovered(true);
//         }
//       }}
//       onMouseLeave={() => {
//         if (isDesktop) setHovered(false);
//       }}
//       className={`w-full h-full cursor-pointer transition border border-white/20`}
//     >
//       <div
//         className={`
//           w-full h-full flex flex-col justify-start
//           pt-[30px] px-[22px] pb-[15px]
//           ${baseClass}
//           transition-colors duration-300
//           ${
//             hovered && isDesktop
//               ? "bg-[radial-gradient(143.41%_138.14%_at_33.19%_174.66%,_#F47922_0%,_#8B37A4_100%)]"
//               : ""
//           }
//         `}
//       >
//         <h3 className="2xl:text-[30px] text-[24px] bw-sb leading-[35px] px-[18px] text-left">
//           {sector.title}
//         </h3>

//         <div className="flex justify-between items-end px-[18px]">
//           {/* Bottom left text */}
//           <span className="text-sm text-white/70">{sector.description}</span>

//           {/* Arrow */}
//           {isDesktop ? (
//             <AnimatePresence>
//               {hovered && (
//                 <motion.div
//                   initial={{ y: 10, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: 10, opacity: 0 }}
//                   transition={{ type: "spring", stiffness: 250, damping: 20 }}
//                 >
//                   <Image
//                     src="/whiteexternal.svg"
//                     width={38}
//                     height={38}
//                     alt="arrow"
//                   />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           ) : (
//             <Image
//               src="/whiteexternal.svg"
//               width={28}
//               height={28}
//               alt="static arrow"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

import { useKeySectorsStore } from "./useKeySectorsStore";
import Image from "next/image";
export default function SectorCard({ sector, gridStyle, index, variants }) {
  const setActiveBg = useKeySectorsStore((s) => s.setActiveBg);
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const baseClass = sector.gradient
    ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white"
    : "bg-black/30 text-white";
  return (
    // <motion.div
    //   ref={ref}
    //   onMouseEnter={() => {
    //     if (isDesktop) {
    //       setActiveBg(sector.bg);
    //       setHovered(true);
    //     }
    //   }}
    //   onMouseLeave={() => {
    //     if (isDesktop) setHovered(false);
    //   }}
    //   key={index}
    //   initial={{ y: "100px", opacity: 0 }}
    //   whileInView={{ y: "0px", opacity: 1 }}
    //   transition={{
    //     duration: 1,
    //     ease: "easeOut",
    //     delay: index * 0.156,
    //   }}
    //   viewport={{ once: true, amount: 0.2 }}
    //   className={`w-full h-full cursor-pointer transition border border-white/20`}
    // >
    //   <div
    //     className={`
    //       w-full h-full flex flex-col justify-between
    //       pt-[30px] px-[22px]  xl:px-[12px] 2xl:px-[22px] pb-[15px]
    //       ${baseClass}
    //       transition-colors duration-300
    //       ${
    //         hovered && isDesktop
    //           ? "bg-gradient-to-r from-[#AC38D9] to-[#F47922]"
    //           : ""
    //       }
    //     `}
    //   >
    //     <motion.h3
    //       key={sector.id}
    //       style={gridStyle}
    //       initial={{ y: "20px", opacity: 0 }}
    //       whileInView={{ y: "0px", opacity: 1 }}
    //       transition={{
    //         duration: 1,
    //         ease: "easeOut",
    //         // delay: index * 0.1,
    //       }}
    //       viewport={{ once: true, amount: 0.2 }}
    //       className="2xl:text-[30px] lg:text-[24px] bw-sb lg:leading-[30px] leading-[25px] lg:px-[18px] text-left px-[0px] text-[21px]"
    //     >
    //       {sector.title}
    //     </motion.h3>
    //     <div className="flex justify-between items-end lg:px-[18px] px-[0px]">
    //       {/* Bottom left text */}
    //       <span className="text-sm text-white/70">{sector.description}</span>
    //       {/* Arrow */}
    //       {isDesktop ? (
    //         <AnimatePresence>
    //           {hovered && (
    //             <motion.div
    //               initial={{ y: 10, opacity: 0 }}
    //               animate={{ y: 0, opacity: 1 }}
    //               exit={{ y: 10, opacity: 0 }}
    //               transition={{ type: "spring", stiffness: 250, damping: 20 }}
    //             >
    //               <Image
    //                 src="/whiteexternal.svg"
    //                 width={38}
    //                 height={38}
    //                 alt="arrow"
    //               />
    //             </motion.div>
    //           )}
    //         </AnimatePresence>
    //       ) : (
    //         <Image
    //           src="/whiteexternal.svg"
    //           width={28}
    //           height={28}
    //           alt="static arrow"
    //         />
    //       )}
    //     </div>
    //   </div>
    // </motion.div>

    <motion.div
      ref={ref}
      onMouseEnter={() => {
        if (isDesktop) {
          setActiveBg(sector.bg);
          setHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (isDesktop) setHovered(false);
      }}
      // variants={variants}
      // initial={{ y: 100, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{
      //   duration: 0.8,
      //   ease: "easeOut",
      //   delay: index * 0.15,
      // }}
      // viewport={{ once: true, amount: 0.2 }}
      className="w-full h-full cursor-pointer transition border border-white/20"
    >
      <div
        className={`
      w-full h-full flex flex-col justify-between
      pt-[30px] px-[22px] xl:px-[12px] 2xl:px-[22px] pb-[15px]
      ${baseClass}
      transition-colors duration-300
      ${
        hovered && isDesktop
          ? "bg-gradient-to-r from-[#AC38D9] to-[#F47922]"
          : ""
      }
    `}
      >
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.15 + 0.2, // ✅ Slight delay after the card animates
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="2xl:text-[30px] lg:text-[24px] bw-sb lg:leading-[30px] leading-[25px] lg:px-[18px] text-left px-[0px] text-[21px]"
        >
          {sector.title}
        </motion.h3>

        <div className="flex justify-between items-end lg:px-[18px] px-[0px]">
          <span className="text-sm text-white/70">{sector.description}</span>

          {isDesktop ? (
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                >
                  <Image
                    src="/whiteexternal.svg"
                    width={38}
                    height={38}
                    alt="arrow"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <Image
              src="/whiteexternal.svg"
              width={28}
              height={28}
              alt="static arrow"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
