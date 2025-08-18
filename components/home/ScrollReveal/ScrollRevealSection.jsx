// // "use client";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import { useRef } from "react";
// // import { useInView } from "react-intersection-observer";
// // import Image from "next/image";

// // export default function ScrollRevealSection() {
// //   const ref = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start end", "end start"],
// //   });

// //   // Zoom effect for image
// //   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
// //   const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);

// //   const { ref: textRef, inView } = useInView({ threshold: 0.6 });

// //   return (
// //     <section className="h-[200vh] flex items-center justify-center relative">
// //       <div className="sticky top-0 flex w-full h-screen">
// //         {/* Left Text */}
// //         <div className="flex items-center justify-center w-1/2">
// //           <motion.div
// //             ref={textRef}
// //             initial={{ y: 100, opacity: 0 }}
// //             animate={inView ? { y: 0, opacity: 1 } : {}}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             className="text-4xl font-bold"
// //           >
// //             85% Growth in just 3 Months 🚀
// //           </motion.div>
// //         </div>

// //         {/* Right Image */}
// //         <div
// //           className="relative flex items-center justify-center w-1/2"
// //           ref={ref}
// //         >
// //           <motion.div
// //             style={{ scale }}
// //             className="w-[400px] h-[400px] overflow-hidden rounded-full relative"
// //           >
// //             <Image
// //               src="/text.png"
// //               alt="stats"
// //               layout="fill"
// //               objectFit="cover"
// //               className="rounded-full"
// //             />
// //             {/* Overlay */}
// //             <motion.div
// //               style={{ opacity: overlayOpacity }}
// //               className="absolute inset-0 z-10 bg-white pointer-events-none"
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // "use client";
// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import { useInView } from "react-intersection-observer";

// // export default function ScrollRevealSection() {
// //   const sectionRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"],
// //   });

// //   // Image zoom and overlay fade
// //   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
// //   const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);
// //   const clipPath = useTransform(
// //     scrollYProgress,
// //     [0.3, 0.7],
// //     ["circle(0% at 50% 50%)", "circle(75% at 50% 50%)"]
// //   );

// //   const { ref: textRef, inView } = useInView({ threshold: 0.6 });

// //   return (
// //     <section ref={sectionRef} className="h-[200vh] relative">
// //       <div className="sticky top-0 flex items-center justify-center h-screen px-10">
// //         {/* Left Text Block */}
// //         <div className="w-1/2">
// //           <motion.div
// //             ref={textRef}
// //             initial={{ y: 50, opacity: 0 }}
// //             animate={inView ? { y: 0, opacity: 1 } : {}}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             className="text-4xl font-semibold leading-tight"
// //           >
// //             <p>85% Growth</p>
// //             <p>In Just 3 Months 🚀</p>
// //           </motion.div>
// //         </div>

// //         {/* Right Image with Animation */}
// //         <div className="flex items-center justify-center w-1/2">
// //           <motion.div
// //             style={{ scale, clipPath }}
// //             className="relative w-[400px] h-[400px] overflow-hidden rounded-full"
// //           >
// //             <Image
// //               src="/test.png" // ✅ Replace with your image path in /public
// //               alt="Stats"
// //               fill
// //               className="object-cover"
// //               priority
// //             />
// //             {/* White Overlay */}
// //             <motion.div
// //               style={{ opacity: overlayOpacity }}
// //               className="absolute inset-0 z-10 bg-white pointer-events-none"
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // "use client";
// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import { useInView } from "react-intersection-observer";

// // export default function ScrollRevealSection({ image, title, subtitle }) {
// //   const sectionRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"],
// //   });

// //   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
// //   const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0.4, 0]);
// //   const clipPath = useTransform(
// //     scrollYProgress,
// //     [0.3, 0.7],
// //     ["circle(0% at 50% 50%)", "circle(75% at 50% 50%)"]
// //   );
// //   const grayscale = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
// //   const grayscaleFilter = useTransform(grayscale, (g) => `grayscale(${g})`);

// //   const { ref: textRef, inView } = useInView({ threshold: 0.6 });

// //   return (
// //     <section ref={sectionRef} className="h-[200vh] relative">
// //       <div className="sticky top-0 flex items-center justify-center h-screen px-10">
// //         {/* Left Text */}
// //         <div className="w-1/2">
// //           <motion.div
// //             ref={textRef}
// //             initial={{ y: 50, opacity: 0 }}
// //             animate={inView ? { y: 0, opacity: 1 } : {}}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             className="text-4xl font-semibold leading-tight"
// //           >
// //             <p>{title}</p>
// //             <p>{subtitle}</p>
// //           </motion.div>
// //         </div>

// //         {/* Right Image */}
// //         <div className="flex items-center justify-center w-1/2">
// //           <motion.div
// //             style={{
// //               scale,
// //               clipPath,
// //               WebkitClipPath: clipPath,
// //               filter: grayscaleFilter,
// //             }}
// //             className="relative w-[450px] h-[450px] overflow-hidden rounded-full mask-blur"
// //           >
// //             <Image
// //               src={image}
// //               alt="Stat"
// //               fill
// //               className="object-cover"
// //               priority
// //             />
// //             <motion.div
// //               style={{ opacity: overlayOpacity }}
// //               className="absolute inset-0 z-10 bg-white pointer-events-none"
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // "use client";
// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import { useInView } from "react-intersection-observer";

// // export default function ScrollRevealSection({ image, title, subtitle }) {
// //   const sectionRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"],
// //   });

// //   // Scroll animations
// //   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
// //   const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
// //   const grayscale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
// //   const grayscaleFilter = useTransform(grayscale, (g) => `grayscale(${g})`);
// //   const { ref: textRef, inView } = useInView({ threshold: 0.6 });

// //   return (
// //     <section ref={sectionRef} className="h-[200vh] relative">
// //       <div className="sticky top-0 flex items-center justify-center h-screen px-10">
// //         {/* Left Text Block */}
// //         <div className="w-1/2">
// //           <motion.div
// //             ref={textRef}
// //             initial={{ y: 50, opacity: 0 }}
// //             animate={inView ? { y: 0, opacity: 1 } : {}}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             className="text-5xl font-extrabold leading-tight"
// //           >
// //             <p>{title}</p>
// //             <p className="mt-2 text-2xl font-normal">{subtitle}</p>
// //           </motion.div>
// //         </div>

// //         {/* Right Image Block */}
// //         <div className="flex items-center justify-center w-1/2">
// //           <motion.div
// //             style={{ scale }}
// //             className="relative w-[600px] h-[400px] rounded-xl overflow-hidden"
// //           >
// //             {/* Image */}
// //             <Image
// //               src={image}
// //               alt="Stat Visual"
// //               fill
// //               className="object-cover transition duration-500 ease-in-out"
// //               priority
// //             />

// //             {/* Overlay for faded-white + grayscale effect */}
// //             <motion.div
// //               style={{
// //                 opacity: overlayOpacity,
// //                 filter: grayscaleFilter,
// //               }}
// //               className="absolute inset-0 z-10 pointer-events-none fade-overlay"
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// //******************************************************************************************** */
// // "use client";
// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import { useInView } from "react-intersection-observer";

// // export default function ScrollRevealSection({ image, title, subtitle }) {
// //   const sectionRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"],
// //   });

// //   // Animations
// //   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
// //   const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
// //   const grayscale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
// //   const filter = useTransform(grayscale, (g) => `grayscale(${g})`);

// //   const { ref: textRef, inView } = useInView({ threshold: 0.6 });

// //   return (
// //     <section ref={sectionRef} className="h-[200vh] relative">
// //       <div className="sticky top-0 flex items-center justify-center h-screen px-10">
// //         {/* Left Text */}
// //         <div className="w-[10%]">
// //           <motion.div
// //             ref={textRef}
// //             initial={{ y: 50, opacity: 0 }}
// //             animate={inView ? { y: 0, opacity: 1 } : {}}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             className="text-5xl font-extrabold leading-tight"
// //           >
// //             <p>{title}</p>
// //             <p className="mt-2 text-2xl font-normal">{subtitle}</p>
// //           </motion.div>
// //         </div>

// //         {/* Right Image */}
// //         <div className="flex items-center justify-center w-[90%]">
// //           <motion.div
// //             style={{ scale }}
// //             className="relative w-[800px] h-[400px] rounded-none overflow-hidden"
// //           >
// //             {/* Image with grayscale */}
// //             <motion.div style={{ filter }} className="absolute inset-0 z-0">
// //               <Image
// //                 src={image}
// //                 alt="Stat Visual"
// //                 fill
// //                 className="object-cover"
// //                 priority
// //               />
// //             </motion.div>

// //             {/* Radial White Overlay */}
// //             <motion.div
// //               style={{ opacity: overlayOpacity }}
// //               className="absolute inset-0 z-10 pointer-events-none"
// //             >
// //               <div
// //                 className="w-full h-full"
// //                 style={{
// //                   background: `radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 80%, rgba(255,255,255,0) 100%)`,
// //                   width: "100%",
// //                   height: "100%",
// //                 }}
// //               />
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// //******************************************************************************************** */

// // "use client";
// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import { useInView } from "react-intersection-observer";

// // export default function ScrollRevealSection({
// //   image,
// //   title,
// //   subtitle,
// //   rightLabel,
// //   rightSub,
// // }) {
// //   const sectionRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"],
// //   });

// //   // Scroll animations
// //   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
// //   const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
// //   const grayscale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
// //   const filter = useTransform(grayscale, (g) => `grayscale(${g})`);

// //   const { ref: textRef, inView } = useInView({ threshold: 0.6 });

// //   return (
// // <section ref={sectionRef} className="h-[200vh] relative">
// //   <div className="sticky top-0 flex items-center w-full h-screen px-10 bg-white">
// //     {/* Left Text Block */}
// //     {/* <div className="z-10 w-1/2">
// //       <motion.div
// //         ref={textRef}
// //         initial={{ y: 50, opacity: 0 }}
// //         animate={inView ? { y: 0, opacity: 1 } : {}}
// //         transition={{ duration: 0.6, ease: "easeOut" }}
// //         className="text-5xl font-extrabold leading-tight text-black"
// //       >
// //         <p>{title}</p>
// //         <p className="mt-2 text-2xl font-normal text-gray-700">
// //           {subtitle}
// //         </p>
// //       </motion.div>
// //     </div> */}

// //     {/* Right Side Image with Overlay and Overlaid Text */}
// //     <motion.div
// //       style={{ scale }}
// //       className="relative flex items-center justify-center w-full h-full"
// //     >
// //       {/* Background Image */}
// //       <Image
// //         src={image}
// //         alt="Scroll Image"
// //         fill
// //         className="object-cover"
// //         priority
// //       />

// //       {/* White + Grayscale Overlay */}
// //       <motion.div
// //         style={{ opacity: overlayOpacity, filter }}
// //         className="absolute inset-0 bg-white pointer-events-none"
// //       />

// //       {/* Right-side Overlay Text */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={inView ? { opacity: 1, y: 0 } : {}}
// //         transition={{ duration: 0.6, delay: 0.3 }}
// //         className="absolute left-0 z-20 text-right top-1/4"
// //       >
// //         <p className="text-[75px] font-bold text-black">{rightLabel}</p>
// //         <p className="mt-2 text-[65px] bg-amber-500 text-black">
// //           {rightSub}
// //         </p>
// //       </motion.div>
// //     </motion.div>
// //   </div>
// // </section>
// //     <section ref={sectionRef} className="h-[200vh] relative">
// //       <div className="sticky top-0 flex items-center w-full h-screen px-10 bg-white">
// //         {/* Left Side: Text */}
// //         <motion.div
// //           ref={textRef}
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={inView ? { opacity: 1, y: 0 } : {}}
// //           transition={{ duration: 0.6, delay: 0.3 }}
// //           className="z-20 w-[10%] px-10 text-left"
// //         >
// //           <p className="text-[75px] font-bold text-black">{rightLabel}</p>
// //           <p className="mt-2 text-[65px] text-black">{rightSub}</p>
// //         </motion.div>

// //         {/* Right Side: Image with Overlay */}
// //         <motion.div style={{ scale }} className="relative w-[90%] h-full">
// //           {/* Background Image */}
// //           <Image
// //             src={image}
// //             alt="Scroll Image"
// //             fill
// //             className="z-0 object-cover"
// //             priority
// //           />

// //           {/* White + Grayscale Overlay */}
// //           <motion.div
// //             style={{ opacity: overlayOpacity, filter }}
// //             className="absolute inset-0 z-10 bg-white pointer-events-none"
// //           />
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// // "use client";
// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import { useInView } from "react-intersection-observer";

// // export default function ScrollRevealSection({ image, title, subtitle }) {
// //   const sectionRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"],
// //   });

// //   // Animations based on scroll
// //   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
// //   const grayscaleAmount = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
// //   const grayscaleFilter = useTransform(
// //     grayscaleAmount,
// //     (g) => `grayscale(${g})`
// //   );

// //   const { ref: textRef, inView } = useInView({ threshold: 0.6 });

// //   return (
// //     <section ref={sectionRef} className="h-[200vh] relative">
// //       <div className="sticky top-0 flex items-center justify-center h-screen px-10">
// //         {/* Left Text Block */}
// //         <div className="z-20 w-1/2">
// //           <motion.div
// //             ref={textRef}
// //             initial={{ y: 50, opacity: 0 }}
// //             animate={inView ? { y: 0, opacity: 1 } : {}}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             className="text-5xl font-extrabold leading-tight"
// //           >
// //             <p>{title}</p>
// //             <p className="mt-2 text-2xl font-normal">{subtitle}</p>
// //           </motion.div>
// //         </div>

// //         {/* Right Image Block */}
// //         <div className="relative flex items-center justify-center w-1/2">
// //           <motion.div
// //             style={{ scale }}
// //             className="relative w-[800px] h-[400px] rounded-2xl overflow-hidden"
// //           >
// //             {/* Image with grayscale animated */}
// //             <motion.div
// //               style={{ filter: grayscaleFilter }}
// //               className="absolute inset-0 z-0"
// //             >
// //               <Image
// //                 src={image}
// //                 alt="Visual"
// //                 fill
// //                 className="object-cover"
// //                 priority
// //               />
// //               <div className="absolute inset-0 z-10 pointer-events-none">
// //                 <div className="w-full h-full rounded-full bg-white opacity-[0.6] blur-md" />
// //               </div>
// //             </motion.div>

// //             {/* Circular feathered overlay */}
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// ///*********************************************** */
// // "use client";
// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import { useInView } from "react-intersection-observer";

// // export default function ScrollRevealSection({ image, title, subtitle }) {
// //   const sectionRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "center center"],
// //   });

// //   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

// //   // ✅ This gives you a full filter string: "grayscale(1)" → "grayscale(0)"
// //   const filter = useTransform(
// //     scrollYProgress,
// //     [0, 1],
// //     ["grayscale(1)", "grayscale(0)"]
// //   );

// //   const { ref: textRef, inView } = useInView({ threshold: 0.6 });

// //   return (
// //     <section ref={sectionRef} className="h-[200vh] relative">
// //       <div className="sticky top-0 flex items-center justify-center h-screen px-10">
// //         {/* Left Text */}
// //         <div className="w-[10%]">
// //           <motion.div
// //             ref={textRef}
// //             initial={{ y: 50, opacity: 0 }}
// //             animate={inView ? { y: 0, opacity: 1 } : {}}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             className="text-5xl font-extrabold leading-tight"
// //           >
// //             <p>{title}</p>
// //             <p className="mt-2 text-2xl font-normal">{subtitle}</p>
// //           </motion.div>
// //         </div>

// //         {/* Right Image */}
// //         <div className="flex items-center justify-center w-[90%]">
// //           <motion.div
// //             style={{
// //               scale,
// //               filter, // ✅ no .to() needed here
// //             }}
// //             className="relative w-[800px] h-[400px] overflow-hidden"
// //           >
// //             <Image
// //               src={image}
// //               alt="Scroll Image"
// //               fill
// //               className="object-cover"
// //               priority
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// ////**************************************** */

// // "use client";
// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import { useInView } from "react-intersection-observer";

// // export default function ScrollRevealSection({ image, title, subtitle }) {
// //   const sectionRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "center center"],
// //   });

// //   // Grayscale to color
// //   const filter = useTransform(
// //     scrollYProgress,
// //     [0, 1],
// //     ["grayscale(1)", "grayscale(0)"]
// //   );

// //   // Reveal animation scale for white overlay (from center out)
// //   const maskScale = useTransform(scrollYProgress, [0.2, 0.5], [0, 4]);

// //   const { ref: textRef, inView } = useInView({ threshold: 0.6 });

// //   return (
// //     <section ref={sectionRef} className="h-[200vh] relative">
// //       <div className="sticky top-0 flex items-center justify-center h-screen px-10">
// //         {/* Left Text */}
// //         <div className="w-1/2">
// //           <motion.div
// //             ref={textRef}
// //             initial={{ y: 50, opacity: 0 }}
// //             animate={inView ? { y: 0, opacity: 1 } : {}}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             className="text-5xl font-extrabold leading-tight"
// //           >
// //             <p>{title}</p>
// //             <p className="mt-2 text-2xl font-normal">{subtitle}</p>
// //           </motion.div>
// //         </div>

// //         {/* Right Image Block */}
// //         <div className="flex items-center justify-center w-1/2">
// //           <motion.div
// //             style={{ filter }}
// //             className="relative w-[600px] h-[400px] overflow-hidden rounded-xl"
// //           >
// //             {/* Image */}
// //             <Image
// //               src={image}
// //               alt="Scroll Image"
// //               fill
// //               className="object-cover"
// //               priority
// //             />

// //             {/* Reveal Circle Animation */}
// //             <motion.div
// //               style={{
// //                 scale: maskScale,
// //               }}
// //               className="absolute inset-0 z-10 w-32 h-32 mx-auto my-auto origin-center bg-white rounded-full pointer-events-none mix-blend-lighten"
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // "use client";
// // import { useRef, useEffect, useState } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";

// // export default function ScrollRevealVideoSection({ videoSrc, texts = [] }) {
// //   const sectionRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start end", "end start"], // 0 at top, 1 at bottom
// //   });

// //   // Scroll-controlled video time
// //   useEffect(() => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     const handleLoaded = () => {
// //       const update = () => {
// //         const progress = scrollYProgress.get();
// //         const duration = video.duration || 5;
// //         video.currentTime = progress * duration;

// //         // Show one text block per segment
// //         const index = Math.floor(progress * texts.length);
// //         setActiveIndex(Math.min(index, texts.length - 1));
// //       };

// //       const unsubscribe = scrollYProgress.on("change", update);
// //       return () => unsubscribe();
// //     };

// //     video.addEventListener("loadedmetadata", handleLoaded);
// //     return () => video.removeEventListener("loadedmetadata", handleLoaded);
// //   }, [scrollYProgress, texts.length]);

// //   return (
// //     <section ref={sectionRef} className="relative h-[100vh] w-full ">
// //       {/* Sticky content: full-screen height */}
// //       <div className="sticky top-0 flex w-full h-screen">
// //         {/* Left Text Block */}
// //         <div className="w-[20%] h-full flex items-center justify-center px-10">
// //           <motion.div
// //             key={activeIndex}
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             transition={{ duration: 0.5 }}
// //             className="text-white"
// //           >
// //             <h1 className="text-4xl font-bold">{texts[activeIndex]?.title}</h1>
// //             <p className="mt-4 text-lg">{texts[activeIndex]?.subtitle}</p>
// //           </motion.div>
// //         </div>

// //         {/* Right Video Block */}
// //         <div className="w-[80%] h-full relative overflow-hidden">
// //           <video
// //             ref={videoRef}
// //             src={videoSrc}
// //             muted
// //             playsInline
// //             preload="auto"
// //             className="object-cover w-full h-full"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // "use client";
// // import { useEffect, useRef } from "react";
// // import { useLenis } from "lenis/react";

// // export default function ScrollVideoSection({ videoSrc }) {
// //   const containerRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const scrollDuration = 2000;
// //   const lenis = useLenis();

// //   useEffect(() => {
// //     const container = containerRef.current;
// //     const video = videoRef.current;

// //     const update = () => {
// //       if (!container || !video || !video.duration) return;

// //       const scrollY = window.scrollY;
// //       const containerTop = container.offsetTop;
// //       const relativeScroll = scrollY - containerTop;

// //       const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
// //       const progress = clampedScroll / scrollDuration;
// //       video.currentTime = progress * video.duration;
// //     };

// //     lenis?.on("scroll", update); // sync with Lenis scroll

// //     return () => {
// //       lenis?.off("scroll", update);
// //     };
// //   }, [lenis]);

// //   return (
// //  <div ref={containerRef} style={{ height: `${scrollDuration}px` }}>
// //   <div className="sticky top-0 z-10 flex items-center justify-end w-full h-screen px-4">
// //     <video
// //       ref={videoRef}
// //       src={videoSrc}
// //       className="w-[90%] h-auto object-cover "
// //       muted
// //       playsInline
// //       preload="auto"
// //     />
// //   </div>
// // </div>

// //   );
// // }

// // "use client";
// // import { useEffect, useRef, useState } from "react";
// // import { useLenis } from "lenis/react";

// // export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
// //   const containerRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const scrollDuration = 2000;
// //   const lenis = useLenis();
// //   const [currentTime, setCurrentTime] = useState(0);

// //   useEffect(() => {
// //     const container = containerRef.current;
// //     const video = videoRef.current;

// //     const update = () => {
// //       if (!container || !video || !video.duration) return;

// //       const scrollY = window.scrollY;
// //       const containerTop = container.offsetTop;
// //       const relativeScroll = scrollY - containerTop;

// //       const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
// //       const progress = clampedScroll / scrollDuration;
// //       const time = progress * video.duration;
// //       video.currentTime = time;
// //       setCurrentTime(time);
// //     };

// //     lenis?.on("scroll", update);
// //     return () => {
// //       lenis?.off("scroll", update);
// //     };
// //   }, [lenis]);

// //   // Find current text to display based on time
// //   const activeText = timedTexts.find(
// //     (t) => currentTime >= t.start && currentTime <= t.end
// //   );

// //   return (
// //     <div ref={containerRef} style={{ height: `${scrollDuration}px` }}>
// //       <div className="sticky top-0 z-10 flex items-center justify-between w-full h-screen px-8">
// //         {/* Left Text Area */}
// // <div className="w-[40%] h-full flex items-center justify-start">
// //           <div className="text-black transition-opacity duration-500 ease-in-out">
// //             {activeText && (
// //               <div className="max-w-sm">
// //                 <h2 className="text-2xl sm:text-8xl bw-b">{activeText.title}</h2>
// //                 <p className="mt-2 text-base sm:text-lg">{activeText.subtitle}</p>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Right Video */}
// //         <div className="w-[60%] h-auto flex justify-end">
// //           <video
// //             ref={videoRef}
// //             src={videoSrc}
// //             className="w-[90%] h-auto object-cover rounded-xl"
// //             muted
// //             playsInline
// //             preload="auto"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // "use client";
// // import { useEffect, useRef, useState } from "react";

// // export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
// //   const containerRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const scrollDuration = 2000;

// //   const [videoDuration, setVideoDuration] = useState(0);
// //   const [currentTime, setCurrentTime] = useState(0);
// //   const animationFrameRef = useRef(null);

// //   // Ensure video metadata is loaded
// //   useEffect(() => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     const handleLoadedMetadata = () => {
// //       setVideoDuration(video.duration);
// //     };

// //     video.addEventListener("loadedmetadata", handleLoadedMetadata);
// //     return () =>
// //       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
// //   }, []);

// //   // Sync scroll to video using requestAnimationFrame
// //   useEffect(() => {
// //     const container = containerRef.current;
// //     const video = videoRef.current;
// //     if (!container || !video || !videoDuration) return;

// //     const update = () => {
// //       const scrollY = window.scrollY;
// //       const containerTop = container.offsetTop;
// //       const relativeScroll = scrollY - containerTop;

// //       const clampedScroll = Math.max(
// //         0,
// //         Math.min(scrollDuration, relativeScroll)
// //       );
// //       const progress = clampedScroll / scrollDuration;
// //       const time = progress * videoDuration;

// //       if (Math.abs(video.currentTime - time) > 0.05) {
// //         video.currentTime = time;
// //         setCurrentTime(time);
// //       }

// //       animationFrameRef.current = requestAnimationFrame(update);
// //     };

// //     animationFrameRef.current = requestAnimationFrame(update);

// //     return () => {
// //       if (animationFrameRef.current) {
// //         cancelAnimationFrame(animationFrameRef.current);
// //       }
// //     };
// //   }, [videoDuration]);

// //   const activeText = timedTexts.find(
// //     (t) => currentTime >= t.start && currentTime <= t.end
// //   );

// //   return (
// //     <div ref={containerRef} style={{ height: `${scrollDuration}px` }}>
// //       <div className="sticky top-0 z-10 flex items-center justify-between w-full h-screen px-8">
// //         {/* Left Text */}
// //         <div className="w-[40%] h-full flex items-center justify-start">
// //           <div className="text-black transition-opacity duration-500 ease-in-out">
// //             {activeText && (
// //               <div className="max-w-sm">
// //                 <h2 className="text-2xl sm:text-8xl bw-b">
// //                   {activeText.title}
// //                 </h2>
// //                 <p className="mt-2 text-base sm:text-lg">
// //                   {activeText.subtitle}
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Right Video */}
// //         <div className="w-[60%] h-auto flex justify-end">
// //           <video
// //             ref={videoRef}
// //             src={videoSrc}
// //             className="w-[90%] h-auto object-cover rounded-xl"
// //             muted
// //             playsInline
// //             preload="auto"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const scrollDuration = 2000;

//   const [videoDuration, setVideoDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);

//   // Ensure video metadata is loaded
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       setVideoDuration(video.duration);
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () => {
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//     };
//   }, []);

//   // Use useCallback to memoize the update function
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) return;

//     const scrollY = window.scrollY;
//     const containerTop = container.offsetTop;
//     const relativeScroll = scrollY - containerTop;

//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const time = progress * videoDuration;

//     // Use a small threshold to avoid constant updates and potential jitter
//     // but without the large 0.05 value. A direct assignment is often best
//     // but this is a good balance.
//     if (Math.abs(video.currentTime - time) > 0.01) {
//       video.currentTime = time;
//       setCurrentTime(time);
//     }
//   }, [videoDuration]);

//   // Sync scroll to video using a passive scroll event and requestAnimationFrame
//   useEffect(() => {
//     const handleScroll = () => {
//       // Use requestAnimationFrame to ensure the video update happens on the next repaint,
//       // which is ideal for animations and visual updates.
//       window.requestAnimationFrame(updateVideoTime);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [updateVideoTime]);

//   const activeText = timedTexts.find(
//     (t) => currentTime >= t.start && currentTime <= t.end
//   );

//   return (
//     <div
//       ref={containerRef}
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="sticky top-0 z-10 flex items-center justify-between w-full h-screen px-8">
//         {/* Left Text */}
//         <div className="w-[40%] h-full flex items-center justify-start">
//           <div className="text-black transition-opacity duration-500 ease-in-out">
//             {activeText && (
//               <div className="max-w-sm">
//                 <h2 className="text-2xl sm:text-8xl bw-b">
//                   {activeText.title}
//                 </h2>
//                 <p className="mt-2 text-base sm:text-lg">
//                   {activeText.subtitle}
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Video */}
//         <div className="w-[60%] h-auto flex justify-end">
//           <video
//             ref={videoRef}
//             src={videoSrc}
//             className="w-[90%] h-auto object-cover rounded-xl"
//             muted
//             playsInline
//             preload="auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

//*************************************** */

// "use client";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const scrollDuration = 2000; // Total scroll height for video control
//   const [videoDuration, setVideoDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const rafRef = useRef(null);
//   const lastScrollY = useRef(0);

//   // Load video metadata
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       setVideoDuration(video.duration);
//       video.currentTime = 0; // Ensure video starts at 0
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () =>
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//   }, []);

//   // Memoized function to update video time based on scroll
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     const scrollY = window.scrollY;
//     // Skip update if scroll position hasn't changed significantly
//     if (Math.abs(scrollY - lastScrollY.current) < 1) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }
//     lastScrollY.current = scrollY;

//     const containerTop = container.getBoundingClientRect().top + window.scrollY;
//     const relativeScroll = scrollY - containerTop;
//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const targetTime = progress * videoDuration;

//     // Update only if time difference is significant to reduce seeking overhead
//     if (Math.abs(video.currentTime - targetTime) > 0.03) {
//       video.currentTime = targetTime;
//       setCurrentTime(targetTime);
//     }

//     rafRef.current = requestAnimationFrame(updateVideoTime);
//   }, [videoDuration]);

//   // Set up scroll listener with continuous animation frame
//   useEffect(() => {
//     if (!videoDuration) return;

//     // Start the animation loop
//     rafRef.current = requestAnimationFrame(updateVideoTime);

//     return () => {
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, [updateVideoTime, videoDuration]);

//   // Find active text based on current video time
//   const activeText = timedTexts.find(
//     (t) => currentTime >= t.start && currentTime <= t.end
//   );

//   return (
//     <div
//       ref={containerRef}
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="sticky top-0 z-10 flex items-center justify-between w-full h-screen px-8">
//         {/* Left Text */}
//         <div className="w-[40%] h-full flex items-center justify-start">
//           <div className="text-black transition-opacity duration-500 ease-in-out">
//             {activeText && (
//               <div className="max-w-sm">
//                 <h2 className="text-2xl font-bold sm:text-8xl">
//                   {activeText.title}
//                 </h2>
//                 <p className="mt-2 text-base sm:text-lg">
//                   {activeText.subtitle}
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Video */}
//         <div className="w-[60%] h-auto flex justify-end">
//           <video
//             ref={videoRef}
//             src={videoSrc}
//             className="w-[90%] h-auto object-cover rounded-xl"
//             muted
//             playsInline
//             preload="auto"
//             // Optional: Ensure video doesn't play on its own
//             onPlay={(e) => e.target.pause()}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
//****** */

// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const scrollDuration = 2000; // Total scroll height for video control
//   const [videoDuration, setVideoDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const rafRef = useRef(null);
//   const lastScrollY = useRef(0);

//   // Load video metadata
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       setVideoDuration(video.duration);
//       video.currentTime = 0; // Ensure video starts at 0
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () =>
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//   }, []);

//   // Memoized function to update video time based on scroll
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     const scrollY = window.scrollY;
//     // Skip update if scroll position hasn't changed significantly
//     if (Math.abs(scrollY - lastScrollY.current) < 1) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }
//     lastScrollY.current = scrollY;

//     const containerTop = container.getBoundingClientRect().top + window.scrollY;
//     const relativeScroll = scrollY - containerTop;
//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const targetTime = progress * videoDuration;

//     // Update only if time difference is significant to reduce seeking overhead
//     if (Math.abs(video.currentTime - targetTime) > 0.03) {
//       video.currentTime = targetTime;
//       setCurrentTime(targetTime);
//     }

//     rafRef.current = requestAnimationFrame(updateVideoTime);
//   }, [videoDuration]);

//   // Set up scroll listener with continuous animation frame
//   useEffect(() => {
//     if (!videoDuration) return;

//     // Start the animation loop
//     rafRef.current = requestAnimationFrame(updateVideoTime);

//     return () => {
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, [updateVideoTime, videoDuration]);

//   // Find active text based on current video time
//   const activeText = timedTexts.find(
//     (t) => currentTime >= t.start && currentTime <= t.end
//   );

//   return (
//     <div
//       ref={containerRef}
//       className="flex justify-end"
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="relative sticky top-0 z-10 flex w-full h-screen mr-0">
//         {/* Background Video - Positioned absolutely to fill the container */}
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="absolute inset-0 right-0 left-auto object-contain w-[80%] h-full"
//           muted
//           playsInline
//           preload="auto"
//           onPlay={(e) => e.target.pause()}
//         />

//         {/* Text Container - Positioned absolutely with higher z-index */}
//         <div className="absolute top-0 left-0 z-20 flex items-center h-full px-8 text-black">
//           {/* <div className="max-w-sm transition-opacity duration-500 ease-in-out">
//             {activeText && (
//               <div>
//                 <h2 className="text-2xl font-bold sm:text-8xl">
//                   {activeText.title}
//                 </h2>
//                 <p className="mt-2 text-base sm:text-lg">
//                   {activeText.subtitle}
//                 </p>
//               </div>
//             )}
//           </div> */}
//           <div className="absolute top-0 left-0 z-20 flex items-center h-full px-8 text-black">
//             <div className="max-w-sm transition-opacity duration-500 ease-in-out">
//               {activeText && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 100 }} // Start off-screen, below
//                   animate={{
//                     opacity: 1,
//                     y: 0, // Bring to center
//                     transition: { duration: 1, ease: "easeInOut" },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: -100, // Move out to top
//                     transition: { duration: 1, ease: "easeInOut" },
//                   }}
//                 >
//                   <h2 className="text-2xl font-bold sm:text-8xl">
//                     {activeText.title}
//                   </h2>
//                   <p className="mt-2 text-base sm:text-lg">
//                     {activeText.subtitle}
//                   </p>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const scrollDuration = 2000; // Total scroll height for video control
//   const [videoDuration, setVideoDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const rafRef = useRef(null);
//   const lastScrollY = useRef(0);

//   // Load video metadata
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       setVideoDuration(video.duration);
//       video.currentTime = 0; // Ensure video starts at 0
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () =>
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//   }, []);

//   // Memoized function to update video time based on scroll
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     const scrollY = window.scrollY;
//     // Skip update if scroll position hasn't changed significantly
//     if (Math.abs(scrollY - lastScrollY.current) < 1) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }
//     lastScrollY.current = scrollY;

//     const containerTop = container.getBoundingClientRect().top + window.scrollY;
//     const relativeScroll = scrollY - containerTop;
//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const targetTime = progress * videoDuration;

//     // Update only if time difference is significant to reduce seeking overhead
//     if (Math.abs(video.currentTime - targetTime) > 0.03) {
//       video.currentTime = targetTime;
//       setCurrentTime(targetTime);
//     }

//     rafRef.current = requestAnimationFrame(updateVideoTime);
//   }, [videoDuration]);

//   // Set up scroll listener with continuous animation frame
//   useEffect(() => {
//     if (!videoDuration) return;

//     // Start the animation loop
//     rafRef.current = requestAnimationFrame(updateVideoTime);

//     return () => {
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, [updateVideoTime, videoDuration]);

//   // Find active text based on current video time
//   const activeText = timedTexts.find(
//     (t) => currentTime >= t.start && currentTime <= t.end
//   );

//   // Define animation variants for a smooth roll effect
//   const textVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="flex justify-end"
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="sticky top-0 z-10 flex w-full h-screen mr-0 ">
//         {/* Background Video - Positioned absolutely to fill the container */}
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="absolute inset-0 right-0 left-auto object-contain w-[80%] h-full"
//           muted
//           playsInline
//           preload="auto"
//           onPlay={(e) => e.target.pause()}
//         />

//         {/* Text Container - Positioned absolutely with higher z-index */}
//         <div className="absolute top-0 left-0 z-20 flex items-center h-full px-8 text-black">
//           <div className="max-w-sm">
//             <AnimatePresence mode="wait">
//               {activeText && (
//                 <motion.div
//                   key={activeText.title}
//                   variants={textVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                 >
//                   <h2 className="text-2xl font-bold sm:text-8xl">
//                     {activeText.title}
//                   </h2>
//                   <p className="mt-2 text-base sm:text-lg">
//                     {activeText.subtitle}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   // Set a longer scroll duration to match the video length
//   // 300px per second of video duration is a good starting point for smooth playback
//   const baseScrollSpeed = 300;
//   const [scrollDuration, setScrollDuration] = useState(2000);

//   const [videoDuration, setVideoDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const rafRef = useRef(null);
//   const lastScrollY = useRef(0);
//   const lastKnownVideoTime = useRef(0);

//   // Load video metadata and set scroll duration
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       const duration = video.duration;
//       setVideoDuration(duration);
//       // Calculate scroll duration based on video length
//       setScrollDuration(Math.round(duration * baseScrollSpeed));
//       video.currentTime = 0; // Ensure video starts at 0
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () =>
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//   }, []);

//   // Memoized function to update video time based on scroll
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     const scrollY = window.scrollY;
//     // Skip update if scroll position hasn't changed significantly
//     if (Math.abs(scrollY - lastScrollY.current) < 1) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }
//     lastScrollY.current = scrollY;

//     const containerTop = container.getBoundingClientRect().top + window.scrollY;
//     const relativeScroll = scrollY - containerTop;
//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const targetTime = progress * videoDuration;

//     // New: Snap video time to simulate a specific frame rate
//     const desiredFps = 30; // You can adjust this value (e.g., 24, 60)
//     const frameTimeStep = 1 / desiredFps;
//     const snappedTime = Math.round(targetTime / frameTimeStep) * frameTimeStep;

//     // Update only if time difference is significant to reduce seeking overhead
//     if (Math.abs(video.currentTime - snappedTime) > 0.03) {
//       video.currentTime = snappedTime;
//       setCurrentTime(snappedTime);
//     }

//     rafRef.current = requestAnimationFrame(updateVideoTime);
//   }, [videoDuration, scrollDuration]);

//   // Set up scroll listener with continuous animation frame
//   useEffect(() => {
//     if (!videoDuration) return;

//     rafRef.current = requestAnimationFrame(updateVideoTime);

//     return () => {
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, [updateVideoTime, videoDuration]);

//   // Find active text based on current video time
//   const activeText = timedTexts.find(
//     (t) => currentTime >= t.start && currentTime <= t.end
//   );

//   // Define animation variants for a smooth roll effect
//   const textVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="flex justify-end"
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="sticky top-0 z-10 flex w-full h-screen mr-0 ">
//         {/* Background Video - Positioned absolutely to fill the container */}
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="absolute inset-0 right-0 left-auto object-contain w-[80%] h-full"
//           muted
//           playsInline
//           preload="auto"
//           onPlay={(e) => e.target.pause()}
//         />

//         {/* Text Container - Positioned absolutely with higher z-index */}
//         <div className="absolute top-0 left-0 z-20 flex items-center h-full px-8 text-black">
//           <div className="max-w-sm">
//             <AnimatePresence mode="wait">
//               {activeText && (
//                 <motion.div
//                   key={activeText.title}
//                   variants={textVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                 >
//                   <h2 className="text-2xl font-bold sm:text-8xl">
//                     {activeText.title}
//                   </h2>
//                   <p className="mt-2 text-base sm:text-lg">
//                     {activeText.subtitle}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   // Set a longer scroll duration to match the video length
//   const baseScrollSpeed = 300;
//   const [scrollDuration, setScrollDuration] = useState(2000);

//   const [videoDuration, setVideoDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const rafRef = useRef(null);
//   const lastScrollY = useRef(0);
//   const lastKnownVideoTime = useRef(0);

//   // Load video metadata and set scroll duration
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       const duration = video.duration;
//       setVideoDuration(duration);
//       // Calculate scroll duration based on video length
//       setScrollDuration(Math.round(duration * baseScrollSpeed));
//       video.currentTime = 0; // Ensure video starts at 0
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () =>
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//   }, []);

//   // Memoized function to update video time based on scroll
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     const scrollY = window.scrollY;
//     // Skip update if scroll position hasn't changed significantly
//     if (Math.abs(scrollY - lastScrollY.current) < 1) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }
//     lastScrollY.current = scrollY;

//     const containerTop = container.getBoundingClientRect().top + window.scrollY;
//     const relativeScroll = scrollY - containerTop;
//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const targetTime = progress * videoDuration;

//     // Smooth out the time change to prevent jittering on fast scrolls
//     const dampenedTime =
//       lastKnownVideoTime.current +
//       (targetTime - lastKnownVideoTime.current) * 0.1;

//     // Snap the time to a specific frame rate for a consistent look
//     const desiredFps = 30; // You can adjust this value (e.g., 24, 60)
//     const frameTimeStep = 1 / desiredFps;
//     const snappedTime =
//       Math.round(dampenedTime / frameTimeStep) * frameTimeStep;

//     // Update video and state only if the time has changed significantly
//     if (Math.abs(video.currentTime - snappedTime) > 0.03) {
//       video.currentTime = snappedTime;
//       setCurrentTime(snappedTime);
//     }

//     lastKnownVideoTime.current = snappedTime;
//     rafRef.current = requestAnimationFrame(updateVideoTime);
//   }, [videoDuration, scrollDuration]);

//   // Set up scroll listener with continuous animation frame
//   useEffect(() => {
//     if (!videoDuration) return;

//     rafRef.current = requestAnimationFrame(updateVideoTime);

//     return () => {
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, [updateVideoTime, videoDuration]);

//   // Find active text based on current video time
//   const activeText = timedTexts.find(
//     (t) => currentTime >= t.start && currentTime <= t.end
//   );

//   // Define animation variants for a smooth roll effect
//   // const textVariants = {
//   //   initial: { y: 200 },
//   //   animate: { y: 0, transition: { duration: 0.5 } },
//   //   exit: { y: -50, transition: { duration: 0.3 } },
//   // };
//   const textVariants = {
//     initial: { y: 200 },
//     animate: { y: 0, transition: { duration: 1 } },
//     exit: { y: -50, transition: { duration: 1.2 } },
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="flex justify-end"
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="sticky top-0 z-10 flex w-full h-screen mr-0 ">
//         {/* Background Video - Positioned absolutely to fill the container */}
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="absolute inset-0 right-0 left-auto object-contain w-[86%] h-full"
//           muted
//           playsInline
//           preload="auto"
//           onPlay={(e) => e.target.pause()}
//         />

//         {/* Text Container - Positioned absolutely with higher z-index */}
//         <div className="absolute top-0 left-0 z-20 flex items-center h-full px-8 text-black">
//           <div className="max-w-sm ">
//             <AnimatePresence mode="wait">
//               {activeText && (
//                 <motion.div
//                   key={activeText.title}
//                   variants={textVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                 >
//                   <h2 className="text-2xl font-bold whitespace-nowrap 1280:text-[150px] 1366:text-[200px] bw-sb">
//                     {activeText.title}
//                   </h2>
//                   <p className=" text-base 1280:text-[100px] 1366:text-[116px] bw-r">
//                     {activeText.subtitle}
//                   </p>
//                   <motion.div
//                     className="lg:flex hidden justify-start h-[58px] overflow-hidden"
//                     // initial={{ width: 0 }}
//                     // whileInView={{ width: "257px" }}
//                     // viewport={{ once: true, amount: 0.6 }}
//                     // transition={{
//                     //   duration: 1,
//                     //   ease: [0.7, 0, 0.4, 1],
//                     //   delay: 0.5,
//                     // }}
//                   >
//                     <img
//                       src="/frm2.png"
//                       alt="Truck"
//                       className="object-cover h-full"
//                     />
//                   </motion.div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [scrollDuration, setScrollDuration] = useState(2000);
  const [videoDuration, setVideoDuration] = useState(0);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastKnownVideoTime = useRef(0);

  // Load video metadata and set scroll duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      const duration = video.duration;
      setVideoDuration(duration);
      setScrollDuration(Math.round(duration * 300)); // Using a base scroll speed
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () =>
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, []);

  const updateVideoTime = useCallback(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || !videoDuration) {
      rafRef.current = requestAnimationFrame(updateVideoTime);
      return;
    }

    const scrollY = window.scrollY;
    if (Math.abs(scrollY - lastScrollY.current) < 1) {
      rafRef.current = requestAnimationFrame(updateVideoTime);
      return;
    }
    lastScrollY.current = scrollY;

    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const relativeScroll = scrollY - containerTop;
    const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
    const progress = clampedScroll / scrollDuration;
    const targetTime = progress * videoDuration;

    const dampenedTime =
      lastKnownVideoTime.current +
      (targetTime - lastKnownVideoTime.current) * 0.1;

    const desiredFps = 30;
    const frameTimeStep = 1 / desiredFps;
    const snappedTime =
      Math.round(dampenedTime / frameTimeStep) * frameTimeStep;

    if (Math.abs(video.currentTime - snappedTime) > 0.03) {
      video.currentTime = snappedTime;
    }

    lastKnownVideoTime.current = snappedTime;
    rafRef.current = requestAnimationFrame(updateVideoTime);
  }, [videoDuration, scrollDuration]);

  // Set up scroll listener with continuous animation frame
  useEffect(() => {
    if (!videoDuration) return;
    rafRef.current = requestAnimationFrame(updateVideoTime);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateVideoTime, videoDuration]);

  // Use Framer Motion's useScroll for text animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="flex justify-end"
      style={{ height: `${scrollDuration + window.innerHeight}px` }}
    >
      <div className="sticky top-0 z-10 flex w-full h-screen mr-0 ">
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 right-0 left-auto object-contain w-[86%] h-full"
          muted
          playsInline
          preload="auto"
          onPlay={(e) => e.target.pause()}
        />

        <div className="absolute top-0 left-0 z-20 flex items-center h-full px-8 text-black">
          <div className="max-w-sm">
            {timedTexts.map((text, index) => {
              // Calculate the scroll progress range for this specific text item
              const startRange = (text.start / videoDuration) * 1.25;
              const endRange = (text.end / videoDuration) * 1.25;

              // Create transforms for opacity and y position
              const opacity = useTransform(
                scrollProgress,
                [startRange, startRange + 0.05, endRange - 0.05, endRange],
                [0, 1, 1, 0]
              );

              const y = useTransform(
                scrollProgress,
                [startRange, startRange + 0.05, endRange - 0.05, endRange],
                [100, 0, 0, -50]
              );

              return (
                <motion.div
                  key={index}
                  style={{ opacity, y }}
                  className="absolute"
                >
                  <h2 className="text-2xl font-bold whitespace-nowrap 1280:text-[150px] 1366:text-[200px] bw-sb">
                    {text.title}
                  </h2>
                  <p className=" text-base 1280:text-[100px] 1366:text-[116px] bw-r">
                    {text.subtitle}
                  </p>
                  <motion.div className="lg:flex hidden justify-start h-[58px] overflow-hidden">
                    <img
                      src="/frm2.png"
                      alt="Truck"
                      className="object-cover h-full"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);

//   const [scrollDuration, setScrollDuration] = useState(2000);
//   const [videoDuration, setVideoDuration] = useState(0);
//   const rafRef = useRef(null);
//   const lastScrollY = useRef(0);
//   const lastKnownVideoTime = useRef(0);

//   // Load video metadata
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       const duration = video.duration;
//       setVideoDuration(duration);
//       setScrollDuration(Math.round(duration * 300)); // scroll speed stays same
//       video.currentTime = 0;
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () =>
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//   }, []);

//   // Smooth scroll → video time update
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     const scrollY = window.scrollY;
//     if (Math.abs(scrollY - lastScrollY.current) < 1) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }
//     lastScrollY.current = scrollY;

//     const containerTop = container.getBoundingClientRect().top + window.scrollY;
//     const relativeScroll = scrollY - containerTop;
//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const targetTime = progress * videoDuration;

//     // Dampen + snap to ~30fps
//     const dampenedTime =
//       lastKnownVideoTime.current +
//       (targetTime - lastKnownVideoTime.current) * 0.1;

//     const desiredFps = 30;
//     const frameTimeStep = 1 / desiredFps;
//     const snappedTime =
//       Math.round(dampenedTime / frameTimeStep) * frameTimeStep;

//     if (Math.abs(video.currentTime - snappedTime) > 0.03) {
//       video.currentTime = snappedTime;
//     }

//     lastKnownVideoTime.current = snappedTime;
//     rafRef.current = requestAnimationFrame(updateVideoTime);
//   }, [videoDuration, scrollDuration]);

//   useEffect(() => {
//     if (!videoDuration) return;
//     rafRef.current = requestAnimationFrame(updateVideoTime);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [updateVideoTime, videoDuration]);

//   // Framer Motion text animations
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <div
//       ref={containerRef}
//       className="flex justify-center"
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="sticky top-0 z-10 flex w-full h-screen mr-0">
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="absolute inset-0 right-0 left-auto object-contain w-[86%] h-full"
//           muted
//           playsInline
//           preload="auto"
//           onPlay={(e) => e.target.pause()}
//         />

//         {/* TEXT OVERLAY (unchanged styling) */}
//         <div className="absolute top-0 left-0 z-20 flex justify-center items-center h-full px-8 text-black">
//           <div className="max-w-sm">
//             {timedTexts.map((text, index) => {
//               const startRange = (text.start / videoDuration) * 1.25;
//               const endRange = (text.end / videoDuration) * 1.25;

//               const opacity = useTransform(
//                 scrollProgress,
//                 [startRange, startRange + 0.05, endRange - 0.05, endRange],
//                 [0, 1, 1, 0]
//               );

//               const y = useTransform(
//                 scrollProgress,
//                 [startRange, startRange + 0.05, endRange - 0.05, endRange],
//                 [100, 0, 0, -50]
//               );

//               return (
//                 <motion.div
//                   key={index}
//                   style={{ opacity, y }}
//                   className="absolute"
//                 >
//                   <h2 className="text-2xl font-bold whitespace-nowrap 1280:text-[150px] 1366:text-[200px] bw-sb">
//                     {text.title}
//                   </h2>
//                   <p className="text-base 1280:text-[100px] 1366:text-[116px] bw-r">
//                     {text.subtitle}
//                   </p>
//                   <motion.div className="lg:flex hidden justify-start h-[58px] overflow-hidden">
//                     <img
//                       src="/frm2.png"
//                       alt="Truck"
//                       className="object-cover h-full"
//                     />
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [scrollDuration, setScrollDuration] = useState(2000);
//   const [videoDuration, setVideoDuration] = useState(0);
//   const rafRef = useRef(null);
//   const lastScrollY = useRef(0);
//   const lastKnownVideoTime = useRef(0);

//   // load video duration
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       const duration = video.duration;
//       setVideoDuration(duration);
//       setScrollDuration(Math.round(duration * 300));
//       video.currentTime = 0;
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () =>
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//   }, []);

//   // scroll → video time mapping
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     const scrollY = window.scrollY;
//     if (Math.abs(scrollY - lastScrollY.current) < 1) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     lastScrollY.current = scrollY;
//     const containerTop = container.getBoundingClientRect().top + window.scrollY;
//     const relativeScroll = scrollY - containerTop;
//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const targetTime = progress * videoDuration;

//     // smooth + snap
//     const dampenedTime =
//       lastKnownVideoTime.current +
//       (targetTime - lastKnownVideoTime.current) * 0.1;
//     const frameTimeStep = 1 / 30;
//     const snappedTime =
//       Math.round(dampenedTime / frameTimeStep) * frameTimeStep;

//     if (Math.abs(video.currentTime - snappedTime) > 0.03) {
//       video.currentTime = snappedTime;
//     }
//     lastKnownVideoTime.current = snappedTime;

//     rafRef.current = requestAnimationFrame(updateVideoTime);
//   }, [videoDuration, scrollDuration]);

//   useEffect(() => {
//     if (!videoDuration) return;
//     rafRef.current = requestAnimationFrame(updateVideoTime);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [updateVideoTime, videoDuration]);

//   // scroll progress for texts
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });
//   const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section
//       ref={containerRef}
//       className="text-white w-full bg-slate-950"
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="grid grid-cols-2">
//         {/* LEFT sticky number/text */}
//         <div className="sticky top-0 h-screen flex items-center justify-center">
//           <div className="relative w-full h-full flex items-center justify-center">
//             {timedTexts.map((text, i) => {
//               const startRange = (text.start / videoDuration) * 1.25;
//               const endRange = (text.end / videoDuration) * 1.25;
//               const opacity = useTransform(
//                 scrollProgress,
//                 [startRange, startRange + 0.05, endRange - 0.05, endRange],
//                 [0, 1, 1, 0]
//               );
//               const y = useTransform(
//                 scrollProgress,
//                 [startRange, startRange + 0.05, endRange - 0.05, endRange],
//                 [100, 0, 0, -50]
//               );

//               return (
//                 <motion.div
//                   key={i}
//                   style={{ opacity, y }}
//                   className="absolute text-center"
//                 >
//                   <h2 className="text-7xl font-bold mb-4">{text.title}</h2>
//                   <p className="text-2xl">{text.subtitle}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* RIGHT sticky video */}
//         <div className="sticky top-0 h-screen flex items-center justify-center">
//           <video
//             ref={videoRef}
//             src={videoSrc}
//             className="w-[86%] h-full object-contain"
//             muted
//             playsInline
//             preload="auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState, useCallback } from "react";

// export default function ScrollVideoSection({ videoSrc, timedTexts = [] }) {
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const [scrollDuration, setScrollDuration] = useState(2000);
//   const [videoDuration, setVideoDuration] = useState(0);
//   const rafRef = useRef(null);
//   const lastScrollY = useRef(0);
//   const lastKnownVideoTime = useRef(0);

//   // load video duration
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleLoadedMetadata = () => {
//       const duration = video.duration;
//       setVideoDuration(duration);
//       setScrollDuration(Math.round(duration * 300));
//       video.currentTime = 0;
//     };

//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () =>
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//   }, []);

//   // scroll → video time mapping
//   const updateVideoTime = useCallback(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video || !videoDuration) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     const scrollY = window.scrollY;
//     if (Math.abs(scrollY - lastScrollY.current) < 1) {
//       rafRef.current = requestAnimationFrame(updateVideoTime);
//       return;
//     }

//     lastScrollY.current = scrollY;
//     const containerTop = container.getBoundingClientRect().top + window.scrollY;
//     const relativeScroll = scrollY - containerTop;
//     const clampedScroll = Math.max(0, Math.min(scrollDuration, relativeScroll));
//     const progress = clampedScroll / scrollDuration;
//     const targetTime = progress * videoDuration;

//     // smooth + snap
//     const dampenedTime =
//       lastKnownVideoTime.current +
//       (targetTime - lastKnownVideoTime.current) * 0.1;
//     const frameTimeStep = 1 / 30;
//     const snappedTime =
//       Math.round(dampenedTime / frameTimeStep) * frameTimeStep;

//     if (Math.abs(video.currentTime - snappedTime) > 0.03) {
//       video.currentTime = snappedTime;
//     }
//     lastKnownVideoTime.current = snappedTime;

//     rafRef.current = requestAnimationFrame(updateVideoTime);
//   }, [videoDuration, scrollDuration]);

//   useEffect(() => {
//     if (!videoDuration) return;
//     rafRef.current = requestAnimationFrame(updateVideoTime);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [updateVideoTime, videoDuration]);

//   // scroll progress for texts
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });
//   const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section
//       ref={containerRef}
//       className="text-white w-full bg-slate-950"
//       style={{ height: `${scrollDuration + window.innerHeight}px` }}
//     >
//       <div className="grid grid-cols-2">
//         {/* LEFT sticky number/text */}
//         <div className="sticky top-0 h-screen flex items-center justify-center">
//           <div className="relative w-full h-full flex items-center justify-center">
//             {timedTexts.map((text, i) => {
//               const startRange = (text.start / videoDuration) * 1.25;
//               const endRange = (text.end / videoDuration) * 1.25;
//               const opacity = useTransform(
//                 scrollProgress,
//                 [startRange, startRange + 0.05, endRange - 0.05, endRange],
//                 [0, 1, 1, 0]
//               );
//               const y = useTransform(
//                 scrollProgress,
//                 [startRange, startRange + 0.05, endRange - 0.05, endRange],
//                 [100, 0, 0, -50]
//               );

//               return (
//                 <motion.div
//                   key={i}
//                   style={{ opacity, y }}
//                   className="absolute text-center"
//                 >
//                   <h2 className="text-7xl font-bold mb-4">{text.title}</h2>
//                   <p className="text-2xl">{text.subtitle}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* RIGHT sticky video */}
//         <div className="sticky top-0 h-screen flex items-center justify-center">
//           <video
//             ref={videoRef}
//             src={videoSrc}
//             className="w-[86%] h-full object-contain"
//             muted
//             playsInline
//             preload="auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
