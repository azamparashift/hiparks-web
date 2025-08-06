// import Image from "next/image";
// import React from "react";
// import Header from "./_components/Header";
// import Accordion from "./_components/Accordion";
// import FeatureImage from "./_components/FeatureImage";

// const IntegratedSolutionsSection = () => {
//   return (
//     <div className="relative z-0 w-full  min-h-[818px]">
//       <div className="absolute top-0 -left-14 w-[300px] h-[300px] bg-gradient-to-br from-[#F47920] via-[#f5dce3] to-transparent rounded-full blur-2xl z-0" />
//       j{/* Bottom-right gradient */}
//       <div className="absolute bottom-[8px] right-[-50px] w-[400px] h-[400px] bg-gradient-to-tr from-[#e9f4fd] via-[#f5dce3] to-transparent rounded-full blur-2xl z-0" />
//       <section className="relative flex flex-col pt-20 overflow-hidden fix md:flex-row ">
//         {/* Top-left gradient */}
//         {/* <div className="fix"> */}
//         <div className="relative z-10 flex flex-col justify-start flex-1 h-fit">
//           <Header />
//           <Accordion />
//         </div>
//         <div className="flex items-center justify-center flex-1">
//           <FeatureImage />
//         </div>
//         {/* </div> */}
//       </section>
//     </div>
//   );
// };

// export default IntegratedSolutionsSection;

import React from "react";
import Header from "./_components/Header";
import Accordion from "./_components/Accordion";
import FeatureImage from "./_components/FeatureImage";

const IntegratedSolutionsSection = () => {
  return (
    <div className="relative z-0 w-full h-full lg:min-h-[650px] overflow-hidden">
      <div className="absolute top-0 -left-14 w-[300px] hidden lg:flex h-[300px] bg-gradient-to-br from-[#F47920] via-[#f5dce3] to-transparent rounded-full blur-2xl z-0" />
      {/* Bottom-right gradient */}
      <div className="absolute bottom-[8px] hidden lg:flex right-[-50px] w-[400px] h-[400px] bg-gradient-to-tr from-[#e9f4fd] via-[#f5dce3] to-transparent rounded-full blur-2xl z-0" />
      <section className="relative flex flex-col h-full pt-8 md:items-end pl-[6%] pr-[5%] 2xl:pl-[15%] md:flex-row ">
        {/* Top-left gradient */}
        {/* <div className="fix"> */}
        <div className="relative z-10 flex flex-col pb-8 justify-start md:w-full lg:min-w-[500px] flex-1 md:h-auto h-fit">
          <Header />
          <Accordion />
        </div>

        <div className="relative top-0 bottom-0 right-0 z-0 hidden w-full h-full pointer-events-none md:items-end md:justify-end lg:flex">
          <FeatureImage />
        </div>

        {/* </div> */}
      </section>
    </div>
  );
};

export default IntegratedSolutionsSection;
