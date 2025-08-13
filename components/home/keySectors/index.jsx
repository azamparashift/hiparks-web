// import { keySectors } from "./keySectors.mock";
// import SectorCard from "./SectorCard";
// import SectorBackground from "./SectorBackground";
// import Image from "next/image";

// export default function KeySectors() {
//   return (
//     <section className="relative w-full min-h-screen overflow-hidden text-white">
//       <SectorBackground defaultBg="/default-bg.jpg" />

//       <div className="absolute inset-0 z-10 bg-black/50" />

//       {/* <div className="relative z-20 px-12 pt-12 pb-4">
//         <h2 className="text-[48px] font-bold leading-tight">
//           Key Sectors <br />
//           <span className="font-light text-white/80">We work With</span>
//         </h2>
//         <div className="w-[160px] h-[8px] bg-gradient-to-r from-purple-500 to-orange-400 rounded-full mt-4"></div>
//       </div> */}
//       <h1 className="text-[66px] text-white z-10 bw-m leading-[70px]
//         <span className="flex items-center gap-4">
//           Grade A{" "}
//           <div style={{ width: 133, height: 58, position: "relative" }}>
//             <Image
//               src="/frame.png"
//               alt="Frame"
//               fill // use fill instead of width/height here
//               style={{ objectFit: "contain" }}
//             />
//           </div>
//         </span>
//         <span className="block">Industrial and Logistics Parks</span>
//       </h1>

//       <div className="relative z-20 grid grid-cols-3 grid-rows-3 gap-px px-12 pb-12">
//         {keySectors.map((sector) => (
//           <SectorCard key={sector.id} sector={sector} />
//         ))}
//       </div>
//     </section>
//   );
// }

//================================================================================================//
// "use client";
// import { keySectors } from "./keySectors.mock";
// import SectorCard from "./SectorCard";
// import SectorBackground from "./SectorBackground";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useMediaQuery } from "@/app/hooks/useMediaQuery";
// // import { cardVariants, gridStaggerVariants } from "@/animations/motionVariants";

// export default function KeySectors() {
//   const isXL = useMediaQuery("(min-width: 1280px)");
//   const columns = 3;

//   return (
//     <section className="relative w-full h-full 2xl:h-[849px] overflow-hidden text-white">
//       <SectorBackground defaultBg="/home/keysectors/keysectors.png" />
//       <div className="absolute inset-0 z-10 bg-black/10" />

//       {/* This is now the flex container that includes both heading and grid */}
//       <div className="relative z-20 flex flex-col items-end justify-end w-full h-full xl:pt-8 2xl:pt-0">
//         {/* Heading placed ABOVE the grid, but inside the flex */}
//         {/* <div className="xl:pt-20 2xl:pt-0 "> */}
//         <motion.h1
//           // initial={{ opacity: 0, x: -80 }}
//           // animate={{ opacity: 1, x: 0 }}
//           // transition={{
//           //   delay: 0.2,
//           //   duration: 0.6,
//           //   ease: "easeIn",
//           // }}
//           className="text-[35px] md:text-[45px] lg:text-[56px] xl:text-[66px] z-10 bw-m leading-[100%] md:leading-20 justify-start 2xl:-mb-36 fix
//         >
//           <motion.span
//             initial={{ x: "-100px", opacity: 0 }}
//             whileInView={{ x: "0", opacity: 1 }}
//             transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
//             viewport={{once: true, amount: 0.1 }}
//             className="flex items-center gap-[33px]"
//           >
//             Key Sectors{" "}
//             {/* <div style={{ width: 233, height: 58, position: "relative" }}>
//               <Image
//                 src="/framer.png"
//                 alt="Frame"
//                 fill
//                 style={{ objectFit: "contain" }}
//               />
//             </div> */}
//           </motion.span>
//           <motion.span
//             // initial={{ x: "-100px", opacity: 0 }}
//             // whileInView={{ x: "0", opacity: 1 }}
//             // transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//             // viewport={{once: true, amount: 0.1 }}
//             className="block bw-r"
//           >
//             We work With
//           </motion.span>
//         </motion.h1>
//         {/* </div> */}

//         {/* Grid positioned just below heading */}
//         {/* <motion.div
//           // className="grid items-end justify-end [grid-template-columns:repeat(3,360px)] 2xl:[grid-template-rows:repeat(3,223px)] [grid-template-rows:repeat(3,180px)]  gap-0"

//           className="
//     grid
//     gap-0
//     grid-cols-2
//     md:grid-cols-2
//     lg:grid-cols-4
//     auto-rows-[180px]
//     2xl:auto-rows-[223px]
//   "
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           // style={{
//           //   display: "grid",
//           //   gridTemplateColumns: "repeat(3, 360px)",
//           //   gridTemplateRows: "repeat(3, 223px)",
//           //   gap: "0px",
//           // }}
//         >
//           {keySectors.map((sector, index) => {
//             let gridStyle = {};
//             let position = "";

//             if (index === 0) {
//               gridStyle = { gridColumn: "2", gridRow: "1" };
//               position = "top-middle";
//             } else if (index === 1) {
//               gridStyle = { gridColumn: "3", gridRow: "1" };
//               position = "top-right";
//             } else if (index === 2) {
//               gridStyle = { gridColumn: "1", gridRow: "2" };
//               position = "middle-left";
//             } else if (index === 3) {
//               gridStyle = { gridColumn: "2", gridRow: "2" };
//               position = "middle-middle";
//             } else if (index === 4) {
//               gridStyle = { gridColumn: "3", gridRow: "2" };
//               position = "middle-right";
//             } else if (index === 5) {
//               gridStyle = { gridColumn: "1", gridRow: "3" };
//               position = "bottom-left";
//             } else if (index === 6) {
//               gridStyle = { gridColumn: "2", gridRow: "3" };
//               position = "bottom-middle";
//             } else if (index === 7) {
//               gridStyle = { gridColumn: "3", gridRow: "3" };
//               position = "bottom-right";
//             }

//             return (
//               <motion.div
//                 key={sector.id}
//                 style={gridStyle}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeOut",
//                   delay: index * 0.1,
//                 }}
//                 viewport={{ once: true, amount: 0.2 }}
//               >
//                 <SectorCard sector={sector} position={position} />
//               </motion.div>
//             );
//           })}
//         </motion.div> */}
//         <motion.div
//           className="
//         grid
//         gap-0
//         grid-cols-2
//         md:grid-cols-3
//         lg:grid-cols-4
//         auto-rows-[180px]
//         2xl:auto-rows-[223px]
//       "
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           {keySectors.map((sector, index) => {
//             let gridStyle = {};
//             let position = "";

//             if (isXL) {
//               // Apply only for xl and up
//               if (index === 0) {
//                 gridStyle = { gridColumn: "2", gridRow: "1" };
//                 position = "top-middle";
//               } else if (index === 1) {
//                 gridStyle = { gridColumn: "3", gridRow: "1" };
//                 position = "top-right";
//               } else if (index === 2) {
//                 gridStyle = { gridColumn: "1", gridRow: "2" };
//                 position = "middle-left";
//               } else if (index === 3) {
//                 gridStyle = { gridColumn: "2", gridRow: "2" };
//                 position = "middle-middle";
//               } else if (index === 4) {
//                 gridStyle = { gridColumn: "3", gridRow: "2" };
//                 position = "middle-right";
//               } else if (index === 5) {
//                 gridStyle = { gridColumn: "1", gridRow: "3" };
//                 position = "bottom-left";
//               } else if (index === 6) {
//                 gridStyle = { gridColumn: "2", gridRow: "3" };
//                 position = "bottom-middle";
//               } else if (index === 7) {
//                 gridStyle = { gridColumn: "3", gridRow: "3" };
//                 position = "bottom-right";
//               }
//             }

//             return (
//               <motion.div
//                 key={sector.id}
//                 style={gridStyle}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeOut",
//                   delay: index * 0.1,
//                 }}
//                 viewport={{ once: true, amount: 0.2 }}
//               >
//                 <SectorCard sector={sector} position={position} />
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>

// <section className="relative w-full h-[849px] overflow-hidden text-white">
//   <SectorBackground defaultBg="/keysectors/keysectors.png" />
//   <div className="absolute inset-0 z-10 bg-black/10" />

//   <div className="relative z-20 flex flex-col h-full pt-12">
//     <motion.h1
//       initial={{ opacity: 0, x: -80 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
//       className="text-[66px] z-10 bw-m leading-20
//     >
//       <motion.span
//         initial={{ x: "-100px", opacity: 0 }}
//         whileInView={{ x: "0", opacity: 1 }}
//         transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
//         viewport={{once: true, amount: 0.1 }}
//         className="flex items-center gap-[33px]"
//       >
//         Key Sectors{" "}
//         <div style={{ width: 233, height: 58, position: "relative" }}>
//           <Image
//             src="/framer.png"
//             alt="Frame"
//             fill
//             style={{ objectFit: "contain" }}
//           />
//         </div>
//       </motion.span>
//       <motion.span
//         initial={{ x: "-100px", opacity: 0 }}
//         whileInView={{ x: "0", opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//         viewport={{once: true, amount: 0.1 }}
//         className="block bw-r"
//       >
//         We work With
//       </motion.span>
//     </motion.h1>

//     {/* Grid Container with controlled height */}
//     <div className="flex items-end justify-end flex-1 mt-4 overflow-hidden">
//       <div
//         className="grid"
//         style={{
//           gridTemplateColumns: "repeat(3, 360px)",
//           gridTemplateRows: "repeat(3, 223px)", // 223 * 3 = 669
//         }}
//       >
//         {keySectors.map((sector, index) => {
//           let gridStyle = {};
//           if (index === 0) gridStyle = { gridColumn: "2", gridRow: "1" };
//           else if (index === 1)
//             gridStyle = { gridColumn: "3", gridRow: "1" };
//           else if (index === 2)
//             gridStyle = { gridColumn: "1", gridRow: "2" };
//           else if (index === 3)
//             gridStyle = { gridColumn: "2", gridRow: "2" };
//           else if (index === 4)
//             gridStyle = { gridColumn: "3", gridRow: "2" };
//           else if (index === 5)
//             gridStyle = { gridColumn: "1", gridRow: "3" };
//           else if (index === 6)
//             gridStyle = { gridColumn: "2", gridRow: "3" };
//           else if (index === 7)
//             gridStyle = { gridColumn: "3", gridRow: "3" };

//           return (
//             <div key={sector.id} style={gridStyle}>
//               <SectorCard sector={sector} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// </section>
//   );
// }

//==============================================================================================//

// "use client";
// import { keySectors } from "./keySectors.mock";
// import SectorCard from "./SectorCard";
// import SectorBackground from "./SectorBackground";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { cardVariants, gridStaggerVariants } from "@/animations/motionVariants";

// export default function KeySectors() {
//   const columns = 3;

//   return (
//     <section className="relative w-full min-h-[100vh] 2xl:min-h-[849px] flex flex-col overflow-hidden text-white">
//       <SectorBackground defaultBg="/keysectors/keysectors.png" />
//       <div className="absolute inset-0 z-10 bg-black/10" />

//       {/* Header Section */}
//       <div className="relative z-20 px-10 pt-10">
//         <motion.h1
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             delay: 0.2,
//             duration: 0.6,
//             ease: "easeIn",
//           }}
//           className="text-[66px] z-10 bw-m leading-20
//         >
//           <motion.span
//             initial={{ x: "-100px", opacity: 0 }}
//             whileInView={{ x: "0", opacity: 1 }}
//             transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
//             viewport={{once: true, amount: 0.1 }}
//             className="flex items-center gap-[33px]"
//           >
//             Key Sectors{" "}
//             <div style={{ width: 233, height: 58, position: "relative" }}>
//               <Image
//                 src="/framer.png"
//                 alt="Frame"
//                 fill // use fill instead of width/height here
//                 style={{ objectFit: "contain" }}
//               />
//             </div>
//           </motion.span>
//           <motion.span
//             initial={{ x: "-100px", opacity: 0 }}
//             whileInView={{ x: "0", opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//             viewport={{once: true, amount: 0.1 }}
//             className="block bw-r"
//           >
//             We work With
//           </motion.span>
//         </motion.h1>
//       </div>

//       {/* Grid Section */}
//       <div className="relative z-20 flex items-end justify-end h-full ">
//         <motion.div
//           className="grid"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 360px)",
//             gridTemplateRows: "repeat(3, 223px)",
//             gap: "1px",
//           }}
//         >
//           {keySectors.map((sector, index) => {
//             let gridStyle = {};
//             if (index === 0) gridStyle = { gridColumn: "2", gridRow: "1" };
//             else if (index === 1) gridStyle = { gridColumn: "3", gridRow: "1" };
//             else if (index === 2) gridStyle = { gridColumn: "1", gridRow: "2" };
//             else if (index === 3) gridStyle = { gridColumn: "2", gridRow: "2" };
//             else if (index === 4) gridStyle = { gridColumn: "3", gridRow: "2" };
//             else if (index === 5) gridStyle = { gridColumn: "1", gridRow: "3" };
//             else if (index === 6) gridStyle = { gridColumn: "2", gridRow: "3" };
//             else if (index === 7) gridStyle = { gridColumn: "3", gridRow: "3" };

//             return (
//               <motion.div
//                 key={sector.id}
//                 style={gridStyle}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeOut",
//                   delay: index * 0.1,
//                 }}
//                 viewport={{ once: true, amount: 0.2 }}
//               >
//                 <SectorCard sector={sector} />
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>

//     // <section className="relative w-full h-[849px] overflow-hidden text-white">
//     //   <SectorBackground defaultBg="/keysectors/keysectors.png" />
//     //   <div className="absolute inset-0 z-10 bg-black/10" />

//     //   <div className="relative z-20 flex flex-col h-full pt-12">
//     //     <motion.h1
//     //       initial={{ opacity: 0, x: -80 }}
//     //       animate={{ opacity: 1, x: 0 }}
//     //       transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
//     //       className="text-[66px] z-10 bw-m leading-20
//     //     >
//     //       <motion.span
//     //         initial={{ x: "-100px", opacity: 0 }}
//     //         whileInView={{ x: "0", opacity: 1 }}
//     //         transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
//     //         viewport={{once: true, amount: 0.1 }}
//     //         className="flex items-center gap-[33px]"
//     //       >
//     //         Key Sectors{" "}
//     //         <div style={{ width: 233, height: 58, position: "relative" }}>
//     //           <Image
//     //             src="/framer.png"
//     //             alt="Frame"
//     //             fill
//     //             style={{ objectFit: "contain" }}
//     //           />
//     //         </div>
//     //       </motion.span>
//     //       <motion.span
//     //         initial={{ x: "-100px", opacity: 0 }}
//     //         whileInView={{ x: "0", opacity: 1 }}
//     //         transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//     //         viewport={{once: true, amount: 0.1 }}
//     //         className="block bw-r"
//     //       >
//     //         We work With
//     //       </motion.span>
//     //     </motion.h1>

//     //     {/* Grid Container with controlled height */}
//     //     <div className="flex items-end justify-end flex-1 mt-4 overflow-hidden">
//     //       <div
//     //         className="grid"
//     //         style={{
//     //           gridTemplateColumns: "repeat(3, 360px)",
//     //           gridTemplateRows: "repeat(3, 223px)", // 223 * 3 = 669
//     //         }}
//     //       >
//     //         {keySectors.map((sector, index) => {
//     //           let gridStyle = {};
//     //           if (index === 0) gridStyle = { gridColumn: "2", gridRow: "1" };
//     //           else if (index === 1)
//     //             gridStyle = { gridColumn: "3", gridRow: "1" };
//     //           else if (index === 2)
//     //             gridStyle = { gridColumn: "1", gridRow: "2" };
//     //           else if (index === 3)
//     //             gridStyle = { gridColumn: "2", gridRow: "2" };
//     //           else if (index === 4)
//     //             gridStyle = { gridColumn: "3", gridRow: "2" };
//     //           else if (index === 5)
//     //             gridStyle = { gridColumn: "1", gridRow: "3" };
//     //           else if (index === 6)
//     //             gridStyle = { gridColumn: "2", gridRow: "3" };
//     //           else if (index === 7)
//     //             gridStyle = { gridColumn: "3", gridRow: "3" };

//     //           return (
//     //             <div key={sector.id} style={gridStyle}>
//     //               <SectorCard sector={sector} />
//     //             </div>
//     //           );
//     //         })}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>
//   );
// }

"use client";
import { keySectors } from "./keySectors.mock";
import SectorCard from "./SectorCard";
import SectorBackground from "./SectorBackground";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { useEffect, useState } from "react";
// import { cardVariants, gridStaggerVariants } from "@/animations/motionVariants";
export default function KeySectors() {
  const isXL = useMediaQuery("(min-width: 768px)");
  const [targetWidth, setTargetWidth] = useState(130);

  // const containerVariants = {
  //   hidden: { opacity: 0, y: 80 }, // start slightly smaller
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, ease: "easeOut" },
  //   },
  // };

  // const cardVariants = {
  //   hidden: { y: 100, opacity: 0 },
  //   show: {
  //     y: 0,
  //     opacity: 1,
  //     transition: { duration: 0.8, ease: "easeOut" },
  //   },
  // };

  // const containerVariants = {
  //   hidden: {},
  //   show: {
  //     transition: {
  //       staggerChildren: 0.15,
  //     },
  //   },
  // };

  // const cardVariants = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: { duration: 0.6, ease: "easeOut" },
  //   },
  // };
  // const containerVariants = {
  //   hidden: { opacity: 0, y: 50 }, // start slightly down
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: "easeOut",
  //     },
  //   },
  // };
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.7, 0, 0.4, 1],
        staggerChildren: 0.15, // stagger for each child
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: [0.7, 0, 0.4, 1] },
    },
  };
  // Each card animation
  // const cardVariants = {
  //   hidden: { opacity: 0, y: 30 }, // starts lower
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  useEffect(() => {
    const handleResize = () => {
      setTargetWidth(window.innerWidth < 640 ? 84 : 130);
    };
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const columns = 3;
  return (
    // <section className="relative w-full h-full 2xl:h-[849px] overflow-hidden text-white lg:pt-[50px] md:pt-[50px] pt-[50px]">
    <section className="relative w-full h-full 2xl:min-h-auto overflow-hidden text-white lg:pt-[50px] 1536:pt-[80px] 1600:pt-[90px] md:pt-[50px] pt-[50px]">
      <SectorBackground defaultBg="/home/keysectors/keysectors.png" />
      <div className="absolute inset-0 z-10 bg-black/10" />
      {/* This is now the flex container that includes both heading and grid */}
      <div className="relative z-20 flex flex-col items-end justify-end w-full h-full ">
        {/* Heading placed ABOVE the grid, but inside the flex */}
        {/* <div className="xl:pt-20 2xl:pt-0 "> */}
        <motion.h1
          // initial={{ opacity: 0, x: -80 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{
          //   delay: 0.2,
          //   duration: 0.6,
          //   ease: "easeIn",
          // }}
          className="text-[35px] md:text-[45px] lg:text-[56px] xl:text-[66px] z-10 bw-m lg:leading-[65px] xl:leading-[69px] pb-[28px] sm:pb-0 md:leading-[58px] leading-[45px] justify-start 2xl:-mb-36 fix 2xl:pb-[30px] "
        >
          <motion.span
            initial={{ x: "-100px", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex items-center gap-3  md:gap-[27px] 1280:gap-[20px] whitespace-nowrap tracking-[-0.04em]"
          >
            Key Sectors{" "}
            <motion.div className="relative inline-block overflow-hidden  align-middle w-full max-w-[249px] h-auto">
              <motion.div
                className="lg:flex hidden justify-start h-[58px] overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: "257px" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.5 }}
              >
                <img
                  src="/frm2.png"
                  alt="Truck"
                  className="object-cover h-full"
                />
              </motion.div>
              <motion.div
                className="lg:hidden flex justify-start sm:justify-start h-[35px] sm:h-[40px] overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: "102px" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.5 }}
              >
                <img
                  src="/frm2.png"
                  alt="Truck"
                  className="object-cover h-full"
                />
              </motion.div>
            </motion.div>
          </motion.span>
          <motion.span
            initial={{ x: "-100px", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="block bw-r tracking-[-0.04em]"
          >
            We work With
          </motion.span>
        </motion.h1>
        {/* </div> */}
        {/* Grid positioned just below heading */}
        {/* <motion.div
          // className="grid items-end justify-end [grid-template-columns:repeat(3,360px)] 2xl:[grid-template-rows:repeat(3,223px)] [grid-template-rows:repeat(3,180px)]  gap-0"
          className="
    grid
    gap-0
    grid-cols-2
    md:grid-cols-2
    lg:grid-cols-4
    auto-rows-[180px]
    2xl:auto-rows-[223px]
  "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(3, 360px)",
          //   gridTemplateRows: "repeat(3, 223px)",
          //   gap: "0px",
          // }}
        >
          {keySectors.map((sector, index) => {
            let gridStyle = {};
            let position = "";
            if (index === 0) {
              gridStyle = { gridColumn: "2", gridRow: "1" };
              position = "top-middle";
            } else if (index === 1) {
              gridStyle = { gridColumn: "3", gridRow: "1" };
              position = "top-right";
            } else if (index === 2) {
              gridStyle = { gridColumn: "1", gridRow: "2" };
              position = "middle-left";
            } else if (index === 3) {
              gridStyle = { gridColumn: "2", gridRow: "2" };
              position = "middle-middle";
            } else if (index === 4) {
              gridStyle = { gridColumn: "3", gridRow: "2" };
              position = "middle-right";
            } else if (index === 5) {
              gridStyle = { gridColumn: "1", gridRow: "3" };
              position = "bottom-left";
            } else if (index === 6) {
              gridStyle = { gridColumn: "2", gridRow: "3" };
              position = "bottom-middle";
            } else if (index === 7) {
              gridStyle = { gridColumn: "3", gridRow: "3" };
              position = "bottom-right";
            }
            return (
              <motion.div
                key={sector.id}
                style={gridStyle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <SectorCard sector={sector} position={position} />
              </motion.div>
            );
          })}
        </motion.div> */}
        {/* <motion.div
          className="
        grid
        gap-0
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-3
        md:pl-[40px]
        lg:pl-[55px]
        auto-rows-[175px]
        2xl:auto-rows-[223px]
        1280:-mt-16
        1366:-mt-12
        1536:-mt-0
        1600:pt-10
        1920:pt-12
      "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {keySectors.map((sector, index) => {
            let gridStyle = {};
            let position = "";
            if (isXL) {
              // Apply only for xl and up
              if (index === 0) {
                gridStyle = { gridColumn: "2", gridRow: "1" };
                position = "top-middle";
              } else if (index === 1) {
                gridStyle = { gridColumn: "3", gridRow: "1" };
                position = "top-right";
              } else if (index === 2) {
                gridStyle = { gridColumn: "1", gridRow: "2" };
                position = "middle-left";
              } else if (index === 3) {
                gridStyle = { gridColumn: "2", gridRow: "2" };
                position = "middle-middle";
              } else if (index === 4) {
                gridStyle = { gridColumn: "3", gridRow: "2" };
                position = "middle-right";
              } else if (index === 5) {
                gridStyle = { gridColumn: "1", gridRow: "3" };
                position = "bottom-left";
              } else if (index === 6) {
                gridStyle = { gridColumn: "2", gridRow: "3" };
                position = "bottom-middle";
              } else if (index === 7) {
                gridStyle = { gridColumn: "3", gridRow: "3" };
                position = "bottom-right";
              }
            }
            return (
              // <motion.div
              //   key={sector.id}
              //   style={gridStyle}
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // transition={{
              //   duration: 0.6,
              //   ease: "easeOut",
              //   delay: index * 0.1,
              // }}
              // viewport={{ once: true, amount: 0.2 }}
              // >
              <motion.div
                // className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                style={gridStyle}
                viewport={{ once: true, amount: 0.2 }}
              >
                <SectorCard
                  variants={cardVariants}
                  sector={sector}
                  position={position}
                  index={index}
                  gridStyle={gridStyle}
                />
              </motion.div>
            );
          })}
        </motion.div> */}
        <motion.div
          className="
            grid
            gap-0
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-3
            md:pl-[40px]
            lg:pl-[55px]
            auto-rows-[175px]
            2xl:auto-rows-[223px]
            1280:-mt-16
            1366:-mt-12
            1536:-mt-0
            1600:pt-10
            1920:pt-12
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {keySectors.map((sector, index) => {
            let gridStyle = {};
            let position = "";

            if (isXL) {
              if (index === 0) {
                gridStyle = { gridColumn: "2", gridRow: "1" };
                position = "top-middle";
              } else if (index === 1) {
                gridStyle = { gridColumn: "3", gridRow: "1" };
                position = "top-right";
              } else if (index === 2) {
                gridStyle = { gridColumn: "1", gridRow: "2" };
                position = "middle-left";
              } else if (index === 3) {
                gridStyle = { gridColumn: "2", gridRow: "2" };
                position = "middle-middle";
              } else if (index === 4) {
                gridStyle = { gridColumn: "3", gridRow: "2" };
                position = "middle-right";
              } else if (index === 5) {
                gridStyle = { gridColumn: "1", gridRow: "3" };
                position = "bottom-left";
              } else if (index === 6) {
                gridStyle = { gridColumn: "2", gridRow: "3" };
                position = "bottom-middle";
              } else if (index === 7) {
                gridStyle = { gridColumn: "3", gridRow: "3" };
                position = "bottom-right";
              }
            }

            return (
              <motion.div
                key={sector.id}
                style={gridStyle}
                variants={cardVariants} // ✅ Use card animation
              >
                <SectorCard sector={sector} position={position} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
