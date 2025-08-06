// import React from "react";
// import { PlusIcon, Minus, ArrowUpRight } from "lucide-react";
// import Link from "next/link";

// const AccordionItem = ({
//   index,
//   isOpen,
//   title,
//   content,
//   readMoreLink,
//   onToggle,
// }) => {
//   return (
//     <div className="">
//       <button
//         className="flex items-center pt-[20px] pb-[20px] justify-between w-full text-left bg-[#ffffff]"
//         onClick={() => onToggle(index)}
//       >
//         <h3 className="text-[30px] bw-m">{title}</h3>
//         <span className="ml-2 text-xl">
//           {isOpen ? <Minus size={30} /> : <PlusIcon size={30} />}
//         </span>
//       </button>

//       {isOpen && (
//         <div className="flex flex-col bg-[#ffffff] pb-[20px]">
//           <p className="text-[18px] inter-m leading-[28px] text-[#000]">
//             {content}
//           </p>
//           <div className="flex items-end">
//             <Link
//               href={readMoreLink}
//               className=" mt-2  text-[16px] leading-[24px] inter-sb text-[#7F56D9]"
//             >
//               Read more
//             </Link>
//             <ArrowUpRight color="#7F56D9" width={22} height={22} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AccordionItem;

import React from "react";
import { PlusIcon, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({
  index,
  isOpen,
  title,
  content,
  readMoreLink,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex items-center text-[20px] py-[12px] md:py-[15px] 2xl:py-[20px] justify-between w-full text-left bg-[#ffffff]"
        onClick={() => onToggle(index)}
      >
        <h3 className=" md:text-[28px] xl:text-[30px] cursor-pointer bw-m">
          {title}
        </h3>
        {/* <span className="ml-2 text-[18px] sm:text-xl cursor-pointer">
          {isOpen ? <Minus size={30} /> : <PlusIcon size={30} />}
        </span> */}
        <span className="ml-2 text-[18px] sm:text-xl cursor-pointer">
          {isOpen ? (
            <Minus className="w-5 h-5 sm:w-7 sm:h-7" />
          ) : (
            <PlusIcon className="w-5 h-5 sm:w-7 sm:h-7" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [1, 0, 0.3, 0.7] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col bg-[#ffffff] pb-[20px]">
              <p className="text-[16px] sm:text-[18px] inter-m leading-[23px] sm:leading-[28px] text-[#000]">
                {content}
              </p>
              <div className="flex gap-[4px] mt-2 sm:gap-[8px] items-center">
                <Link
                  href={readMoreLink}
                  className=" text-[14px] sm:text-[16px] leading-[24px] inter-sb text-[#7F56D9]"
                >
                  Read more
                </Link>
                <ArrowUpRight className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-[#7F56D9]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
