// import Image from "next/image";
// import React from "react";

// const FeatureImage = () => {
//   return (
//     <div className="relative z-30 w-[908px] h-[749px]">
//       {" "}
//       {/* or set a fixed height if needed */}
//       <Image
//         src="/integrated.png"
//         alt="Integrated Solutions"
//         fill
//         className="object-contain" // cover if you want it to stretch
//         priority
//       />
//     </div>
//   );
// };

// export default FeatureImage;

// import Image from "next/image";
// import React from "react";

// const FeatureImage = () => {
//   return (
//     <div className="relative w-full h-auto  max-w-[908px]">
//       {/* // <div className="relative w-full h-full  max-w-[908px]"> */}
//       {/* <Image
//         src="/integrate.png"
//         alt="Integrated Solutions"
//         height="auto"
//         width={908}
//         className="relative object-contain" // or 'object-cover' if you want full fill
//         priority
//       /> */}
//       <img src="/integrate.png" alt="Integrated Solutions" />
//     </div>
//   );
// };

// export default FeatureImage;
// "use client";

// import { motion } from "framer-motion";

// export default function ImageSection() {
//   return (
//     <div className="relative w-full h-auto max-w-[908px]">
//       <motion.img
//         src="/integrate.png"
//         alt="Integrated Solutions"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 1.2,
//           delay: 0.8,
//           ease: [0.42, 0, 0.58, 1], // smooth easing
//         }}
//         className="w-full h-auto object-contain"
//       />
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function ImageSection() {
  return (
    <motion.img
      src="/integrate.png"
      alt="Integrated Solutions"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        delay: 0.2,
        ease: [0.42, 0, 0.58, 1],
      }}
      className="w-full h-auto object-contain"
    />
  );
}
