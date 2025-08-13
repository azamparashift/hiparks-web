// "use client";
// // import Image from "next/image";
// import Btn from "@/components/global/Btn";
// import { motion } from "framer-motion";
// import AnimatedBar from "./AnimatedBar";
// import Image from "next/image";
// export default function HeroBannerClient({ heroData }) {
//   return (
//     // <section className="relative w-full overflow-hidden text-white h-svh">
//     <section className="relative w-full text-white h-svh overflow-hidden">
//       <Image
//         src={heroData.backgroundImage}
//         alt="Hero background"
//         fill
//         className="z-0 object-cover"
//         priority
//       />
//       <div className="z-10 flex flex-col items-end justify-end w-full h-full  p-6 md:items-end lg:p-12 md:flex-row bg-gradient-to-r from-black/60 to-transparent">
//         <div className="flex flex-col items-start w-full 2xl:items-start justify-start 2xl:justify-end  leading-[106.4px] ">
//           <h1 className="bw-m whitespace-nowrap z-10 text-[36px] mb-[15px] sm:mb-0 pb-3 md:pb-0 md:text-[42px] lg:text-[52px] xl:text-[76px] 2xl:text-[88.47px] leading-[100%] flex flex-col flex-wrap">
//             <motion.span
//               initial={{ x: "-100px", opacity: 0 }}
//               whileInView={{ x: "0", opacity: 1 }}
//               transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
//               viewport={{ once: true, amount: 0.1 }}
//               className="flex items-center gap-4"
//             >
//               Grade A
//               {/* <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "200px" }}
//                 transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.7 }}
//                 viewport={{once: true, amount: 0.1 }}
//                 className="sm:w-[20px] md:w-[25px] lg:w-[26px] xl:w-[220px] 2xl:w-[249px] h-[5px] bg-white"
//               /> */}
//               <AnimatedBar />
//             </motion.span>

//             <motion.span
//               initial={{ x: "-100px", opacity: 0 }}
//               whileInView={{ x: "0", opacity: 1 }}
//               transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
//               viewport={{ amount: 0, once: true }}
//               className="block bw-r"
//             >
//               Industrial and
//             </motion.span>

//             <motion.span
//               initial={{ x: "-100px", opacity: 0 }}
//               whileInView={{ x: "0", opacity: 1 }}
//               transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.3 }}
//               viewport={{ amount: 0.2, once: true }}
//               className="block"
//             >
//               Logistics Parks
//             </motion.span>
//           </h1>
//         </div>

//         <div className="z-10 flex w-full md:flex items-center 1024:justify-evenly  xl:justify-end xl:flex-1 pr-0 2xl:pr-[95px]">
//           <motion.div
//             initial={{ y: "100px", opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{
//               duration: 1,
//               ease: [0.7, 0, 0.4, 1],
//               delay: 0.3,
//             }}
//             // viewport={{ once: true, amount: 0.1 }}
//             viewport={{ amount: 0, once: true }}
//             className="relative w-[160px] h-[55px] sm:h-[100px] sm:w-[200px] xl:w-[330px] xl:h-[157px] overflow-visible rounded"
//           >
//             {/* Background Image */}
//             <Image
//               src="/leftcon.png"
//               alt="Left Container"
//               fill
//               className="object-cover rounded"
//             />

//             {/* Foreground: Text + Icon + Employee */}
//             <div className="relative z-20 flex items-end justify-between w-full h-full px-1.5 py-2 md:pl-2.5 xl:pl-6">
//               {/* Text */}
//               <div className="flex flex-row items-center h-full text-white md:items-start md:flex-col justify-evenly">
//                 <h3 className="text-[12px] xl:text-[22px] md:flex-col flex-row gap-0.5 flex inter-r leading-[100%]">
//                   Know
//                   <span>Horizon</span>
//                 </h3>
//                 <span className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] ">
//                   <Image
//                     src="/whiteexternal.svg"
//                     width={25}
//                     height={25}
//                     alt="External"
//                   />
//                 </span>
//               </div>

//               {/* Employee Image */}
//               <div className="absolute bottom-0 right-3.5 md:right-3 xl:right-10 w-[46px] h-[46px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[100px] xl:w-[145px] xl:h-[175px]">
//                 <Image
//                   src="/employee.png"
//                   alt="Horizon"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ y: "100px", opacity: 0 }}
//             whileInView={{ y: "0", opacity: 1 }}
//             transition={{
//               duration: 1,
//               ease: [0.7, 0, 0.4, 1],
//               delay: 0.38,
//             }}
//             viewport={{ amount: 0, once: true }}
//             className="relative w-[160px] h-[55px] sm:h-[100px] sm:w-[200px] xl:w-[330px] xl:h-[157px]  text-white"
//           >
//             {/* Background Image */}
//             <Image
//               src="/rightcon.png"
//               alt="Right Container"
//               fill
//               className="object-cover"
//             />

//             {/* Overlay content */}
//             <div className="absolute inset-0 flex flex-col items-start gap-[7px] pl-[12px] justify-center sm:items-start sm:justify-center  sm:gap-4 md:px-4 lg:px-6 md:gap-[25px]">
//               {/* Item 1 */}
//               <div className="flex items-center gap-1.5 sm:gap-4">
//                 <div className=" w-[12px] md:w-[40px]  h-[2px] bg-white"></div>
//                 <span className="text-[8px] whitespace-nowrap xl:text-sm tracking-widest uppercase inter-sb ">
//                   Explore Our Parks
//                 </span>
//               </div>

//               {/* Item 2 */}
//               <div className="flex items-center gap-1.5 sm:gap-4">
//                 <div className="w-[12px] md:w-[40px] h-[2px] bg-white"></div>
//                 <span className="text-[8px]  whitespace-nowrap xl:text-sm tracking-widest uppercase inter-sb">
//                   Plan a Site Visit
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//         {/* <h1 className="mb-4 text-5xl font-bold">{heroData.title}</h1>
//         <p className="mb-6 text-xl">{heroData.subtitle}</p> */}
//         {/* <div className="flex gap-4">
//           {heroData.buttons.map((btn, i) => (
//             <Btn
//               key={i}
//               text={btn.label}
//               href={btn.link}
//               className="bg-gradient-to-r from-purple-500 to-orange-400"
//             />
//           ))}
//         </div> */}
//       </div>
//     </section>
//   );
// }

"use client";
import Btn from "@/components/global/Btn";
import { motion } from "framer-motion";
import AnimatedBar from "./AnimatedBar";
import Image from "next/image";

export default function HeroBannerClient() {
  return (
    <section className="relative w-full text-white h-svh overflow-hidden">
      {/* Background Image */}
      {/* <Image
        src={heroData.backgroundImage}
        alt="Hero background"
        fill
        className="z-0 object-cover"
      priority
      /> */}
      {/* <Image
        src={"/hero.png"}
        alt="Hero background"
        fill
        className="z-0 object-cover"
        priority
      /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/home/home.webm" type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

      {/* Overlay with content */}
      <div className="z-10 flex flex-col items-end justify-end pb-[16%] sm:pb-0 md:pt-0 pt-[125%] w-full h-full p-6 md:flex-row md:items-end lg:p-12 bg-gradient-to-r from-black/60 to-transparent">
        {/* Left Heading Section */}
        <div className="flex flex-col items-start w-full 2xl:items-start justify-start 2xl:justify-end leading-[106.4px]">
          {/* <h1 className="bw-m whitespace-nowrap z-10 text-[36px] mb-[15px] sm:mb-0 pb-3 md:pb-0 md:text-[42px] lg:text-[52px] xl:text-[76px] 2xl:text-[88.47px] leading-[100%] flex flex-col flex-wrap">
            <motion.span
              initial={{ x: "-100px", opacity: 0 }}
              whileInView={{ x: "0", opacity: 1 }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex items-center gap-4"
            >
              Grade A
              <AnimatedBar />
            </motion.span>

            <motion.span
              initial={{ x: "-100px", opacity: 0 }}
              whileInView={{ x: "0", opacity: 1 }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.2 }}
              viewport={{ amount: 0, once: true }}
              className="block bw-r"
            >
              Industrial and
            </motion.span>

            <motion.span
              initial={{ x: "-100px", opacity: 0 }}
              whileInView={{ x: "0", opacity: 1 }}
              transition={{ duration: 1, ease: [0.7, 0, 0.4, 1], delay: 0.3 }}
              viewport={{ amount: 0.2, once: true }}
              className="block"
            >
              Logistics Parks
            </motion.span>
          </h1> */}
        </div>

        {/* Right Cards Section */}
        <div className="z-10 flex w-full md:flex items-center 1024:justify-evenly xl:justify-end xl:flex-1 pr-0 2xl:pr-[95px]">
          {/* Left Card */}
          <div className="relative w-[160px] h-[55px] sm:h-[100px] sm:w-[200px] xl:w-[330px] xl:h-[157px] overflow-visible">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.7, 0, 0.4, 1],
                delay: 0.3,
              }}
              viewport={{ amount: 0, once: true }}
              className="relative w-full h-full rounded"
            >
              {/* Background Image */}
              <Image
                src="/leftcon.png"
                alt="Left Container"
                fill
                className="object-cover rounded"
              />

              {/* Foreground Content */}
              <div className="relative z-20 flex items-end justify-between w-full h-full px-1.5 py-2 md:pl-2.5 xl:pl-6">
                <div className="flex flex-row items-center h-full text-white md:items-start md:flex-col justify-evenly">
                  <h3 className="text-[12px] xl:text-[22px] md:flex-col flex-row gap-0.5 flex inter-r leading-[100%]">
                    Know
                    <span>Horizon</span>
                  </h3>
                  <span className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] ">
                    <Image
                      src="/whiteexternal.svg"
                      width={25}
                      height={25}
                      alt="External"
                    />
                  </span>
                </div>

                {/* Employee Image */}
                <div className="absolute bottom-0 right-3.5 md:right-3 xl:right-10 w-[46px] h-[46px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[100px] xl:w-[145px] xl:h-[175px]">
                  <Image
                    src="/employee.png"
                    alt="Horizon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Card */}
          <div className="relative w-[160px] h-[55px] sm:h-[100px] sm:w-[200px] xl:w-[330px] xl:h-[157px] overflow-visible">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.7, 0, 0.4, 1],
                delay: 0.38,
              }}
              viewport={{ amount: 0, once: true }}
              className="relative w-full h-full"
            >
              {/* Background Image */}
              <Image
                src="/rightcon.png"
                alt="Right Container"
                fill
                className="object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-start gap-[7px] pl-[12px] justify-center sm:items-start sm:justify-center sm:gap-4 md:px-4 lg:px-6 md:gap-[25px]">
                <div className="flex items-center gap-1.5 sm:gap-4">
                  <div className="w-[12px] md:w-[40px] h-[2px] bg-white"></div>
                  <span className="text-[8px] whitespace-nowrap xl:text-sm tracking-widest uppercase inter-sb">
                    Explore Our Parks
                  </span>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-4">
                  <div className="w-[12px] md:w-[40px] h-[2px] bg-white"></div>
                  <span className="text-[8px] whitespace-nowrap xl:text-sm tracking-widest uppercase inter-sb">
                    Plan a Site Visit
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
