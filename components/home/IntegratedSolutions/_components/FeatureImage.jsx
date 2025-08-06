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

import Image from "next/image";
import React from "react";

const FeatureImage = () => {
  return (
    <div className="relative w-full h-auto  max-w-[908px]">
      {/* // <div className="relative w-full h-full  max-w-[908px]"> */}
      {/* <Image
        src="/integrate.png"
        alt="Integrated Solutions"
        height="auto"
        width={908}
        className="relative object-contain" // or 'object-cover' if you want full fill
        priority
      /> */}
      <img src="/integrate.png" alt="Integrated Solutions" />
    </div>
  );
};

export default FeatureImage;
