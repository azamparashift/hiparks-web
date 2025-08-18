// "use client";

// import React, { useState } from "react";
// import { teamData } from "../data/teamData";
// import TeamCardsF from "./TeamCardsF";
// import TeamPopF from "./TeamPopF";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";

// const TeamSecF = () => {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (member) => {
//     setSelectedMember(member);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     // delay clearing member to allow exit animation to complete
//     setTimeout(() => setSelectedMember(null), 300); // match duration
//   };
//   // Define animation variants for the container and items
//   const containerVariants = {
//     hidden: { opacity: 1 }, // Can be initially hidden if you prefer: opacity: 0
//     visible: {
//       opacity: 1,
//       transition: {
//         // This tells the container to stagger the animation of its children
//         staggerChildren: 0.2, // The delay between each child animating
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 }, // Start transparent and slightly down
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5, // Control the speed of each individual card's animation
//       },
//     },
//   };
//   return (
//     <div className="fix py-[70px]">
//       {/* Header */}
//       <div className="md:flex justify-between items-center flex-col md:flex-row mb-[55px] gap-4">
//         <div className="flex flex-col items-start">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }} // Animate to 100% of the wrapper's width
//             transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 0.4 }}
//             viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
//             className="bw-m bcstyles flex gap-[10px] items-center p-[10px] w-[fit-content]"
//           >
//             <Link href="/" className="text-[16px] ">
//               Home
//             </Link>
//             <div>/</div>
//             <Link href="#" className="text-[16px] ">
//               Our Leaders
//             </Link>
//           </motion.div>

//           <div className="flex md:gap-[16px] xl:gap-[35px] items-center justify-start text-[#101828] font-[Barlow] w-full md:w-fit md:h-[96px]">
//             <div className="1440:w-[256px] 1024:w-[172px] w-[103px]">
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "fit-content" }} // Animate to 100% of the wrapper's width
//                 transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
//                 className="md:w-[347px] text-4xl lg:text-[56px] 1440:text-[76px] overflow-hidden whitespace-nowrap font-normal tracking-[-3.04px] leading-[150%]"
//               >
//                 Team of
//               </motion.div>
//             </div>

//             <div className=" lg:w-[307px] md:h-[43p]  lg:h-[58px] w-[150px] overflow-hidden">
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "100%" }}
//                 transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//                 viewport={{ amount: 0.25, once: true }}
//               >
//                 <img
//                   src="/frm2.png"
//                   className="w-full h-[58px] object-cover"
//                   alt=""
//                 />
//               </motion.div>
//             </div>
//           </div>
//           <motion.h2
//             initial={{ width: 0 }}
//             whileInView={{ width: "fit-content" }} // Animate to 100% of the wrapper's width
//             transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
//             viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
//             className="text-[#101828] overflow-hidden whitespace-nowrap w-full bw-m text-4xl 1440:text-[76px] 1024:text-[56px] md:tracking-[-3.04px] md:leading-[110%]"
//           >
//             Industry Veterans
//           </motion.h2>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }} // Animate to 100% of the wrapper's width
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 0.4 }}
//           viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
//           className="flex items-start md:w-fit"
//         >
//           <p className="text-black font-[Barlow] md:text-[22px] font-normal md:leading-[32px] md:max-w-xl sm:mt-2 mt-5">
//             We see things differently, proactively find opportunities with an
//             agile team, and create exceptional value for our customers,
//             partners, and employees.
//           </p>
//         </motion.div>
//       </div>

//       <div className="flex justify-center w-full">
//         <motion.div
//           className="
//       grid
//       grid-cols-1
//       sm:grid-cols-2
//       md:grid-cols-3
//       xl:grid-cols-4
//       gap-x-[55px]
//       2xl:gap-x-[70px]
//       gap-y-[84px]
//       lg:[&>*:nth-last-child(2)]:col-start-2
//     "
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           {teamData.map((member) => (
//             // --- Wrap the card in a motion component ---
//             <motion.div key={member.id} variants={itemVariants}>
//               <TeamCardsF
//                 // Note: key is now on the motion.div wrapper
//                 name={member.name}
//                 role={member.role}
//                 image={member.image}
//                 onClick={() => openModal(member)}
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//       {/* Modal */}
//       <AnimatePresence mode="wait">
//         {isModalOpen && selectedMember && (
//           <TeamPopF
//             key={selectedMember.name}
//             isOpen={isModalOpen}
//             onClose={closeModal}
//             member={selectedMember}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default TeamSecF;

"use client";

import React, { useState } from "react";
import { teamData } from "../data/teamData";
import TeamCardsF from "./TeamCardsF";
import TeamPopF from "./TeamPopF";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const TeamSecF = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // delay clearing member to allow exit animation to complete
    setTimeout(() => setSelectedMember(null), 300); // match duration
  };
  // Define animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 1 }, // Can be initially hidden if you prefer: opacity: 0
    visible: {
      opacity: 1,
      transition: {
        // This tells the container to stagger the animation of its children
        staggerChildren: 0.2, // The delay between each child animating
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start transparent and slightly down
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Control the speed of each individual card's animation
      },
    },
  };
  return (
    <div className="fix py-[70px]">
      {/* Header */}
      <div className="flex justify-between items-center flex-col lg:flex-row mb-[55px] gap-5">
        <div className="flex flex-col lg:w-auto w-full items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Animate to 100% of the wrapper's width
            transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 0.4 }}
            viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
            className="bw-m bcstyles flex gap-[10px] items-center p-[10px] w-[fit-content]"
          >
            <Link href="/" className="text-[16px] ">
              Home
            </Link>
            <div>/</div>
            <Link href="#" className="text-[16px] ">
              Our Leaders
            </Link>
          </motion.div>

          <div className="flex md:gap-[35px] gap-[20px] xl:mt-0 mt-5 items-center justify-start text-[#101828] font-[Barlow] w-full md:w-fit lg:h-[96px]">
            <div className="1440:w-[256px] 1024:w-[172px] w-[103px]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "fit-content" }} // Animate to 100% of the wrapper's width
                transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
                className="md:w-[347px] text-4xl lg:text-[56px] 1440:text-[76px] overflow-hidden whitespace-nowrap font-normal tracking-[-3.04px] leading-[150%]"
              >
                Team of
              </motion.div>
            </div>

            <div className="xl:w-[307px] xl:h-[58px] md:w-[200px] md:h-[48px] w-[150px] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
                viewport={{ amount: 0.25, once: true }}
              >
                <img
                  src="/frm2.png"
                  className="w-full xl:h-[58px] md:h-[48px] h-[40px] object-cover"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
          <motion.h2
            initial={{ width: 0 }}
            whileInView={{ width: "fit-content" }} // Animate to 100% of the wrapper's width
            transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
            viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
            className="text-[#101828] overflow-hidden whitespace-nowrap w-full bw-m text-4xl 1440:text-[76px] 1024:text-[56px] md:tracking-[-2px] md:leading-[110%]"
          >
            Industry Veterans
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Animate to 100% of the wrapper's width
          transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1], delay: 0.4 }}
          viewport={{ amount: 0.25, once: true }} // amount: 0.25 is often a good starting point
          className="flex items-end md:w-fit min-h-full"
        >
          <p className="text-black bw-r md:text-[22px] leading-[150%] lg:max-w-xl sm:mt-2 mt-5">
            We see things differently, proactively find opportunities with an
            agile team, and create exceptional value for our customers,
            partners, and employees.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      {/* <div className="flex flex-wrap w-full justify-center gap-x-[55px] 2xl:gap-x-[70px] gap-y-[84px]">
        {teamData.map((member) => (
          <TeamCardsF
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            onClick={() => openModal(member)}
          />
        ))}
      </div> */}
      {/* <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[55px] 2xl:gap-x-[70px] gap-y-[84px]">
          {teamData.map((member) => (
            <TeamCardsF
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              onClick={() => openModal(member)}
            />
          ))}
        </div>
      </div> */}
      <div className="hidden xl:flex justify-center w-full">
        <motion.div
          className="
      grid 
      grid-cols-1 
      sm:grid-cols-2
      md:grid-cols-3
      xl:grid-cols-4 
      gap-x-[55px] 
      md:gap-x-[35px] 
      lg:gap-x-[55px] 
      2xl:gap-x-[70px] 
      gap-y-[45px]
      md:gap-y-[55px]
      xl:[&>*:nth-last-child(2)]:col-start-2
    "
          // --- Framer Motion Props for the Container ---
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamData.map((member) => (
            // --- Wrap the card in a motion component ---
            <motion.div key={member.id} variants={itemVariants}>
              <TeamCardsF
                // Note: key is now on the motion.div wrapper
                name={member.name}
                role={member.role}
                image={member.image}
                onClick={() => openModal(member)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className=" flex xl:hidden justify-center w-full">
        <motion.div
          className="
      grid 
      grid-cols-1 
      sm:grid-cols-2
      md:grid-cols-3
      xl:grid-cols-4 
      gap-x-[55px] 
      md:gap-x-[35px] 
      lg:gap-x-[55px] 
      2xl:gap-x-[70px] 
      gap-y-[45px]
      md:gap-y-[55px]
      lg:[&>*:last-child]:col-start-2
      md:[&>*:last-child]:col-start-2
      sm:[&>*:last-child]:col-start-1
    "
          // --- Framer Motion Props for the Container ---
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamData.map((member) => (
            // --- Wrap the card in a motion component ---
            <motion.div key={member.id} variants={itemVariants}>
              <TeamCardsF
                name={member.name}
                role={member.role}
                image={member.image}
                onClick={() => openModal(member)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Modal */}
      <AnimatePresence mode="wait">
        {isModalOpen && selectedMember && (
          <TeamPopF
            key={selectedMember.name}
            isOpen={isModalOpen}
            onClose={closeModal}
            member={selectedMember}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamSecF;
