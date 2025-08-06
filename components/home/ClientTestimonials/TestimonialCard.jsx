// import { motion } from "framer-motion";
// // import Image from "next/image";

// const TestimonialCard = ({
//   name,
//   role,
//   company,
//   quote,
//   logo,
//   video,
//   thumbnail,
//   isActive,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.6, delay: 0.2, ease: [0.7, 0, 0.4, 1] }}
//       viewport={{ once: false, amount: 0.1 }}
//       className="bg-inherit relative w-[300px]  sm:w-[420px] md:w-full md:mx-0 xl:w-[930px] h-[460px] sm:h-[420px] md:h-[650px] lg:h-[460px] xl:h-[460px] flex flex-col lg:flex-row border border-[#CDCDCD] shadow rounded-none overflow-hidden disable-animation"
//     >
//       {/* Left Side: Image */}
//       <div className="relative w-full h-full md:min-w-[48.5%]">
//         <img
//           src={thumbnail}
//           alt="Client video thumbnail"
//           className="object-cover object-top md:object-center w-full h-full"
//         />
//         <a
//           href={video}
//           target="_blank"
//           className="absolute bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] lg:px-[30px] lg:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2"
//         >
//           Watch Video
//           <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
//             <img src="/play.svg" alt="Watch" width={25} height={25} />
//           </span>
//         </a>
//       </div>

//       {/* Right Side: Content */}
//       <div className="flex w-full flex-col relative justify-center hf px-[12px] py-[16px] bg-white sm:px-[15px] sm:py-[20px] md:min-w-[51.5%] xl:pl-[50px] xl:pr-[24px] gap-4 sm:gap-[10px] md:gap-[12px] lg:gap-[20px] xl:gap-[45px]">
//         <div>
//           <img
//             src={logo}
//             alt="Company Logo"
//             className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] object-contain"
//           />
//         </div>

//         <div>
//           <img
//             src="/quote.svg"
//             width={42}
//             height={42}
//             alt="quote"
//             className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
//           />
//           <p className="inter-b text-[16px] sm:text-[18px] md:text-[20px] leading-[18px] sm:leading-[20px] md:leading-[30px] text-[#000]">
//             {quote}
//           </p>
//         </div>
//         <div className="max-w-lg leading-3.5 sm:leading-[25px] lg:leading-[30px]">
//           <strong className="inter-sb text-black sm:text-[14px] md:text-[18px]">
//             {name}
//           </strong>
//           <br />
//           <span className="inter-r text-[10px] sm:text-[14px] md:text-[16px] text-[#475467] leading-[14px] md:leading-[16px]">
//             {role}, {company}
//           </span>
//         </div>
//         <div className="absolute top-0 right-0 z-20">
//           <svg
//             width="50"
//             height="50"
//             viewBox="0 0 50 50"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] xl:w-[50px] xl:h-[50px]"
//           >
//             <path
//               d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
//               fill={isActive ? "#3AB04A" : "#DEDDCE"} // 👈 Dynamically set color
//             />
//           </svg>
//         </div>
//       </div>

//       {/* ✅ Flip Icon on Top Right */}
//     </motion.div>
//   );
// };

// export default TestimonialCard;

import { motion } from "framer-motion";
// import Image from "next/image";

const TestimonialCard = ({
  name,
  role,
  company,
  quote,
  logo,
  video,
  thumbnail,
  isActive,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.7, 0, 0.4, 1] }}
      viewport={{ once: false, amount: 0.1 }}
      className="bg-inherit relative w-[300px]  sm:w-[420px] md:w-full 1024:w-[720px] md:mx-0 xl:w-[930px] h-[460px] sm:h-[420px] md:h-[650px] lg:h-[460px] xl:h-[460px] flex flex-col lg:flex-row border border-[#CDCDCD] shadow rounded-none overflow-hidden disable-animation"
    >
      {/* Left Side: Image */}
      <div className="relative w-full h-full md:min-w-[48.5%]">
        <img
          src={thumbnail}
          alt="Client video thumbnail"
          className="object-cover object-top md:object-center w-full h-full"
        />
        <a
          href={video}
          target="_blank"
          className="absolute bottom-2 right-2 md:bottom-4 md:right-4 py-2 px-4 md:px-[15px] md:py-[15px] lg:px-[30px] lg:py-[15px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] inter-sb text-white bg-black/75 rounded-none flex items-center gap-2"
        >
          Watch Video
          <span className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center">
            <img src="/play.svg" alt="Watch" width={25} height={25} />
          </span>
        </a>
      </div>

      {/* Right Side: Content */}
      <div className="flex w-full flex-col relative justify-center  px-[12px] py-[16px] bg-white sm:px-[15px] sm:py-[20px] md:min-w-[51.5%] xl:pl-[50px] xl:pr-[24px] gap-4 sm:gap-[10px] md:gap-[12px] lg:gap-[20px] xl:gap-[45px]">
        <div>
          <img
            src={logo}
            alt="Company Logo"
            className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] object-contain"
          />
        </div>

        <div>
          <img
            src="/quote.svg"
            width={42}
            height={42}
            alt="quote"
            className="h-[30px] w-[30px] md:h-[42px] md:w-[42px]"
          />
          <p className="inter-b text-[16px] sm:text-[18px] md:text-[20px] leading-[18px] sm:leading-[20px] md:leading-[30px] text-[#000]">
            {quote}
          </p>
        </div>
        <div className="max-w-lg leading-3.5 sm:leading-[25px] lg:leading-[30px]">
          <strong className="inter-sb text-black sm:text-[14px] md:text-[18px]">
            {name}
          </strong>
          <br />
          <span className="inter-r text-[10px] sm:text-[14px] md:text-[16px] text-[#475467] leading-[14px] md:leading-[16px]">
            {role}, {company}
          </span>
        </div>
        <div className="absolute top-0 right-0 z-20">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] xl:w-[50px] xl:h-[50px]"
          >
            <path
              d="M50 0H0L17.0103 16.4103H33.5052V32.8205L50 50V0Z"
              fill={isActive ? "#3AB04A" : "#DEDDCE"} // 👈 Dynamically set color
            />
          </svg>
        </div>
      </div>

      {/* ✅ Flip Icon on Top Right */}
    </motion.div>
  );
};

export default TestimonialCard;
