// "use client";
// import { useKeySectorsStore } from "./useKeySectorsStore";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function SectorBackground({ defaultBg }) {
//   const active = useKeySectorsStore((s) => s.activeBg);
//   const [bg, setBg] = useState(defaultBg);

//   useEffect(() => {
//     if (active) setBg(active);
//   }, [active]);

//   return (
//     <Image
//       src={bg}
//       fill
//       alt="Background"
//       className="absolute inset-0 z-0 object-cover transition duration-500"
//     />
//   );
// }

// "use client";
// import { useKeySectorsStore } from "./useKeySectorsStore";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function SectorBackground({ defaultBg }) {
//   const active = useKeySectorsStore((s) => s.activeBg);
//   const [bg, setBg] = useState(defaultBg);

//   // useEffect(() => {
//   //   if (active && active !== bg) {
//   //     setBg(active);
//   //   }
//   // }, [active, bg]);

//   useEffect(() => {
//     if (active && active !== bg) {
//       const img = new window.Image(); // ✅ use native browser Image
//       img.src = active;

//       img.onload = () => {
//         setBg(active); // only update after image has loaded
//       };
//     }
//   }, [active, bg]);

//   return (
//     <div className="absolute inset-0 z-0">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={bg}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.4, ease: [0.5,0.2,0.3,0.7] }}
//           className="absolute inset-0 w-full h-full"
//         >
//           {/* <Image
//             src={bg}
//             alt="Background"
//             fill
//             className="object-cover"
//             priority
//           /> */}
//           <Image
//             src={bg}
//             alt="Background"
//             fill
//             className="object-cover"
//             priority
//             placeholder="empty" // prevent default blur flash
//             unoptimized // optional: disables Next.js optimization if needed
//           />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// "use client";
// import { useKeySectorsStore } from "./useKeySectorsStore";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function SectorBackground({ defaultBg }) {
//   const active = useKeySectorsStore((s) => s.activeBg);
//   const [currentBg, setCurrentBg] = useState(defaultBg);
//   const [nextBg, setNextBg] = useState(null);
//   const [isNextLoaded, setIsNextLoaded] = useState(false);

//   useEffect(() => {
//     if (active && active !== currentBg) {
//       const img = new window.Image();
//       img.src = active;
//       img.onload = () => {
//         setNextBg(active);
//         setIsNextLoaded(true);
//       };
//     }
//   }, [active, currentBg]);

//   // When next is loaded, swap current after fade
//   useEffect(() => {
//     if (isNextLoaded && nextBg) {
//       const timeout = setTimeout(() => {
//         setCurrentBg(nextBg);
//         setNextBg(null);
//         setIsNextLoaded(false);
//       }, 400); // match transition duration

//       return () => clearTimeout(timeout);
//     }
//   }, [isNextLoaded, nextBg]);

//   return (
//     <div className="absolute inset-0 z-0">
//       {/* Current background image */}
//       <Image
//         src={currentBg}
//         alt="Background"
//         fill
//         className="object-cover transition-opacity ease-in-out duration-400"
//         priority
//         placeholder="empty"
//       />

//       {/* Crossfade image on top */}
//       {nextBg && (
//         <motion.div
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.4, ease: [1, 0, 0.3, 0.7] }}
//         >
//           <Image
//             src={nextBg}
//             alt="Next background"
//             fill
//             className="object-cover"
//             priority
//             placeholder="empty"
//           />
//         </motion.div>
//       )}
//     </div>
//   );
// }


"use client";
import { useKeySectorsStore } from "./useKeySectorsStore";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SectorBackground({ defaultBg }) {
  const active = useKeySectorsStore((s) => s.activeBg);
  const [currentBg, setCurrentBg] = useState(defaultBg);
  const [nextBg, setNextBg] = useState(null);
  const [isNextLoaded, setIsNextLoaded] = useState(false);

  useEffect(() => {
    if (active && active !== currentBg) {
      const img = new Image(); // ✅ Regular Image constructor
      img.src = active;
      img.onload = () => {
        setNextBg(active);
        setIsNextLoaded(true);
      };
    }
  }, [active, currentBg]);

  useEffect(() => {
    if (isNextLoaded && nextBg) {
      const timeout = setTimeout(() => {
        setCurrentBg(nextBg);
        setNextBg(null);
        setIsNextLoaded(false);
      }, 400); // Match transition duration

      return () => clearTimeout(timeout);
    }
  }, [isNextLoaded, nextBg]);

  return (
    <div className="absolute inset-0 z-0">
      {/* Current background */}
      <img
        src={currentBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out duration-400"
      />

      {/* Crossfade image on top */}
      {nextBg && (
        <motion.div
  className="absolute inset-0 w-full h-full"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4, ease: [1, 0, 0.3, 0.7] }}
>
  <img
    src={nextBg}
    alt="Next background"
    className="w-full h-full object-cover"
  />
   </motion.div>

      )}
    </div>
  );
}
