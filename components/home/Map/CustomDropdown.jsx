// "use client";

// export default function MobileDropDown({ onSelect, selected }) {
//   const [open, setOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredRegions = Object.entries(highlightedRegions).filter(
//     ([, region]) =>
//       region.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSelect = (key) => {
//     const region = highlightedRegions[key];
//     onSelect({
//       id: key,
//       label: region.label,
//     });
//     setOpen(false);
//     setSearchTerm("");
//   };

//   return (
//     // This parent div provides the padding, but is no longer the positioning context
//     <div className="w-full bg-[#262626] px-[16px] py-[14px] mb-3 text-left z-[60] text-white">
//       {/* This new div is the relative container for the dropdown */}
//       <div className="relative w-full">
//         {/* Dropdown Trigger Button */}
//         <button
//           onClick={() => setOpen((o) => !o)}
//           className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
//         >
//           <div className="flex items-center">
//             <Image
//               src="/home/map/mapSearch.svg"
//               alt="Search Icon"
//               width={18}
//               height={18}
//               className="mr-2"
//             />
//             <span>{selected?.label || "Select/search state"}</span>
//           </div>
//           <Image
//             src="/home/map/dropdown.svg"
//             alt="Dropdown Icon"
//             width={20}
//             height={20}
//           />
//         </button>

//         {/* Dropdown List */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               // w-full will now correctly match the button's width inside the new relative container
//               className="absolute w-full mt-1 bg-[#262626] border-gray-600 z-[60] overflow-y-auto max-h-[300px]"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="px-4 py-2 border-b border-gray-700">
//                 <input
//                   type="text"
//                   placeholder="Search state..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none"
//                 />
//               </div>

//               <ul>
//                 {filteredRegions.length > 0 ? (
//                   filteredRegions.map(([key, region]) => (
//                     <li
//                       key={key}
//                       className="px-4 py-2 cursor-pointer hover:bg-white/5"
//                       onClick={() => handleSelect(key)}
//                     >
//                       {region.label}
//                     </li>
//                   ))
//                 ) : (
//                   <li className="px-4 py-2 text-sm text-white/50">
//                     No results found.
//                   </li>
//                 )}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// ///********************************************************* */
// "use client";

// import { useState } from "react";
// import { highlightedRegions } from "./data/mapLocations";
// import { AnimatePresence } from "framer-motion";
// import Image from "next/image";

// export default function MobileDropDown({ onSelect, selected }) {
//   const [open, setOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredRegions = Object.entries(highlightedRegions).filter(
//     ([, region]) =>
//       region.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSelect = (key) => {
//     const region = highlightedRegions[key];
//     onSelect({
//       id: key,
//       label: region.label,
//     });
//     setOpen(false);
//     setSearchTerm("");
//   };

//   return (
//     // This parent div provides the padding, but is no longer the positioning context
//     <div className="w-full bg-[#262626] px-[16px] py-[14px] mb-3 text-left z-[60] text-white">
//       {/* This new div is the relative container for the dropdown */}
//       <div className="relative w-full">
//         {/* Dropdown Trigger Button */}
//         <button
//           onClick={() => setOpen((o) => !o)}
//           className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
//         >
//           <div className="flex items-center">
//             <Image
//               src="/home/map/mapSearch.svg"
//               alt="Search Icon"
//               width={18}
//               height={18}
//               className="mr-2"
//             />
//             <span>{selected?.label || "Select/search state"}</span>
//           </div>
//           <Image
//             src="/home/map/dropdown.svg"
//             alt="Dropdown Icon"
//             width={20}
//             height={20}
//           />
//         </button>

//         {/* Dropdown List */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               className="absolute w-full mt-1 bg-[#262626] border-gray-600 z-[60] overflow-y-auto max-h-[300px]"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="px-4 py-2 border-b border-gray-700">
//                 <input
//                   type="text"
//                   placeholder="Search state..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none"
//                 />
//               </div>

//               <ul>
//                 {filteredRegions.length > 0 ? (
//                   filteredRegions.map(([key, region]) => (
//                     <li
//                       key={key}
//                       className="px-4 py-2 cursor-pointer hover:bg-white/5"
//                       onClick={() => handleSelect(key)}
//                     >
//                       {region.label}
//                     </li>
//                   ))
//                 ) : (
//                   <li className="px-4 py-2 text-sm text-white/50">
//                     No results found.
//                   </li>
//                 )}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";

// export default function CustomDropdown({

//   highlightedRegions,
//   onSelect,
//   selected,
// }) {
//   const [open, setOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredRegions = Object.entries(highlightedRegions || {}).filter(
//     ([, region]) =>
//       region.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSelect = (key) => {
//     const region = highlightedRegions[key];
//     onSelect({
//       id: key,
//       name: region.label,
//     });
//     setOpen(false);
//     setSearchTerm("");
//   };

//   return (
//     <div className="w-full bg-[#262626] px-[16px] py-[14px] mb-3 text-left z-[60] text-white">
//       <div className="relative w-full">
//         {/* Dropdown Trigger Button */}
//         <button
//           onClick={() => setOpen((o) => !o)}
//           className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
//         >
//           <div className="flex items-center">
//             <Image
//               src="/home/map/mapSearch.svg"
//               alt="Search Icon"
//               width={18}
//               height={18}
//               className="mr-2"
//             />
//             <span>{selected?.name || "Select/search state"}</span>
//           </div>
//           <Image
//             src="/home/map/dropdown.svg"
//             alt="Dropdown Icon"
//             width={20}
//             height={20}
//           />
//         </button>

//         {/* Dropdown List */}
//         {/* <AnimatePresence>
//           {open && (
//             <motion.div
//               data-lenis-prevent
//               className="absolute w-full mt-1 bg-[#262626] border-gray-600 z-[60] overflow-y-auto max-h-[300px]"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="px-4 py-2 border-b border-gray-700">
//                 <input
//                   type="text"
//                   placeholder="Search state..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none"
//                 />
//               </div>

//               <ul>
//                 {filteredRegions.length > 0 ? (
//                   filteredRegions.map(([key, region]) => (
//                     <li
//                       key={key}
//                       className="px-4 py-2 cursor-pointer hover:bg-white/5"
//                       onClick={() => handleSelect(key)}
//                     >
//                       {region.label}
//                     </li>
//                   ))
//                 ) : (
//                   <li className="px-4 py-2 text-sm text-white/50">
//                     No results found.
//                   </li>
//                 )}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence> */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               data-lenis-prevent
//               className="absolute w-full mt-1 bg-[#262626] border-gray-600 z-[60]"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               {/* ✅ Fixed search bar (no styling changed) */}
//               <div className="sticky top-0 bg-[#262626] z-10 px-4 py-2 border-b border-gray-700">
//                 <input
//                   type="text"
//                   placeholder="Search state..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none"
//                 />
//               </div>

//               {/* ✅ Scrollable list (preserves your <li> styles) */}
//               <div className="max-h-[260px] overflow-y-auto">
//                 <ul>
//                   {filteredRegions.length > 0 ? (
//                     filteredRegions.map(([key, region]) => (
//                       <li
//                         key={key}
//                         className="px-4 py-2 cursor-pointer hover:bg-white/5"
//                         onClick={() => handleSelect(key)}
//                       >
//                         {region.label}
//                       </li>
//                     ))
//                   ) : (
//                     <li className="px-4 py-2 text-sm text-white/50">
//                       No results found.
//                     </li>
//                   )}
//                 </ul>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CustomDropdown({
  highlightedRegions,
  onSelect,
  selected,
  isDropdownOpen,
  setIsDropdownOpen,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const filteredRegions = Object.entries(highlightedRegions || {}).filter(
    ([, region]) =>
      region.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (key) => {
    const region = highlightedRegions[key];
    onSelect({
      id: key,
      name: region.label,
    });
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    if (isDropdownOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isDropdownOpen]);

  return (
    <div className="w-full bg-[#212324] px-[16px] pt-[32px] pb-3 mb-0 text-left z-[60] text-white">
      <div className="relative w-full">
        {/* Dropdown Trigger Button */}
        <button
          onClick={() => setIsDropdownOpen((o) => !o)}
          className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
        >
          <div className="flex items-center">
            <Image
              src="/home/map/mapSearch.svg"
              alt="Search Icon"
              width={18}
              height={18}
              className="mr-2"
            />
            <span>{selected?.name || "Select/search state"}</span>
          </div>
          <Image
            src="/home/map/dropdown.svg"
            alt="Dropdown Icon"
            width={20}
            height={20}
          />
        </button>

        {/* Dropdown List */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              data-lenis-prevent
              className="absolute w-full mt-1 bg-[#262626] border-gray-600 z-[60]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Fixed search bar */}
              <div className="sticky top-0 bg-[#262626] z-10 px-4 py-2 border-b border-gray-700">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search state..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none"
                />
              </div>

              {/* Scrollable list */}
              <div className="max-h-[260px] overflow-y-auto custom-scrollbar">
                <ul>
                  {filteredRegions.length > 0 ? (
                    filteredRegions.map(([key, region]) => (
                      <li
                        key={key}
                        className="px-4 py-2 cursor-pointer hover:bg-white/5"
                        onClick={() => handleSelect(key)}
                      >
                        {region.label}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-sm text-white/50">
                      No results found.
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
