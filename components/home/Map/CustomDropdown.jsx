"use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { highlightedRegions } from "./data/mapLocations";
// import Image from "next/image";

// export default function CustomDropdown({ onSelect }) {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(null);

//   const handleSelect = (region) => {
//     onSelect(region.id); // trigger zoom
//     setOpen(false);
//   };

//   return (
//     <div className="relative w-full text-left text-white">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full px-3 py-2 bg-[#1A1A1A] border border-gray-600 text-left"
//       >
//         {selected?.name || "Select/search state"}
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.ul
//             className="absolute z-50 w-full mt-1 bg-[#1A1A1A] border border-gray-600 max-h-[220px] overflow-y-auto"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//           >
//             {regions.map((region) => (
//               <li
//                 key={region.id}
//                 className="px-4 py-2 hover:bg-[#333] cursor-pointer"
//                 onClick={() => handleSelect(region)}
//               >
//                 {region.name}
//               </li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
// CustomDropdown.jsx
// export default function CustomDropdown({ onSelect, selected }) {
//   const [open, setOpen] = useState(false);

//   const handleSelect = (region) => {
//     onSelect(region.id);
//     setOpen(false);
//   };

//   return (
//     <div className="relative w-full text-left text-white">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
//       >
//         {/* Left section (search icon + text) */}
//         <div className="flex items-center">
//           <Image
//             src="/home/map/home/mapSearch.svg" // Replace with correct path to mapSearch.svg
//             alt="Search Icon"
//             width={18} // Set width to 18px
//             height={18} // Set height to 18px
//             className="mr-2"
//           />
//           <span>{selected?.label || "Select/search state"}</span>
//         </div>

//         {/* Right section (dropdown icon) */}
//         <Image
//           src="/home/map/dropdown.svg" // Replace with correct path to dropdown.svg
//           alt="Dropdown Icon"
//           width={20} // Set width to 20px
//           height={20} // Set height to 20px
//         />
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.ul
//             className="absolute z-50 w-full mt-1 bg-white/10 border border-gray-600 max-h-[220px] overflow-y-auto"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//           >
//             {regions.map((region) => (
//               <li
//                 key={region.id}
//                 className="px-4 py-2 cursor-pointer hover:bg-white/5"
//                 onClick={() => handleSelect(region)}
//               >
//                 {region.name}
//               </li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
///*******************************************************************************************
// export default function CustomDropdown({ onSelect, selected }) {
//   const [open, setOpen] = useState(false);

//   // const handleSelect = (key) => {
//   //   onSelect(key); // Send region key like 'maharashtra'
//   //   setOpen(false);
//   // };

//   // const handleSelect = (key) => {
//   //   onSelect(key);
//   //   requestAnimationFrame(() => setOpen(false));
//   // };

//   const handleSelect = (key) => {
//     const region = highlightedRegions[key];
//     onSelect(key); // Still trigger region selection
//     requestAnimationFrame(() => setOpen(false));

//     onSelect({
//       id: key,
//       label: region.label,
//     });
//   };

//   return (
//     <div className="relative w-full bg-[#262626] px-[32px] py-[23px] text-left z-[60] text-white">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
//       >
//         {/* Left section (search icon + text) */}
//         <div className="flex items-center">
//           <Image
//             src="/home/map/mapSearch.svg"
//             alt="Search Icon"
//             width={18}
//             height={18}
//             className="mr-2"
//           />
//           <span>{selected?.label || "Select/search state"}</span>
//         </div>

//         {/* Right section (dropdown icon) */}
//         <Image
//           src="/home/map/dropdown.svg"
//           alt="Dropdown Icon"
//           width={20}
//           height={20}
//         />
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.ul
//             className="absolute z-50 w-full mt-1 bg-[#262626] border border-gray-600 max-w-[336px] max-h-fit z-[60] overflow-y-auto"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//           >
//             {Object.entries(highlightedRegions).map(([key, region]) => (
//               <li
//                 key={key}
//                 className="px-4 py-2 cursor-pointer hover:bg-white/5"
//                 onClick={() => handleSelect(key)}
//               >
//                 {region.label}
//               </li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

///******************************************************************************************* */
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { highlightedRegions } from "./data/mapLocations";

// export default function CustomDropdown({ onSelect, selected }) {
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

//     requestAnimationFrame(() => setOpen(false));
//     setSearchTerm(""); // Reset search input after selection
//   };

//   return (
//     <div className="relative w-full bg-[#262626] py-[32px] px-[23px] mb-3 text-left z-[60] text-white">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
//       >
//         <div className="flex items-center">
//           <Image
//             src="/home/map/mapSearch.svg"
//             alt="Search Icon"
//             width={18}
//             height={18}
//             className="mr-2"
//           />
//           <span>{selected?.label || "Select/search state"}</span>
//         </div>
//         <Image
//           src="/home/map/dropdown.svg"
//           alt="Dropdown Icon"
//           width={20}
//           height={20}
//         />
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="absolute w-full mt-1 bg-[#262626] border border-gray-600 max-w-[336px] z-[60] overflow-y-auto"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="px-4 py-2 border-b border-gray-700">
//               <input
//                 type="text"
//                 placeholder="Search state..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border  border-gray-600 text-white focus:outline-none "
//               />
//             </div>

//             <ul>
//               {filteredRegions.length > 0 ? (
//                 filteredRegions.map(([key, region]) => (
//                   <li
//                     key={key}
//                     className="px-4 py-2 cursor-pointer hover:bg-white/5"
//                     onClick={() => handleSelect(key)}
//                   >
//                     {region.label}
//                   </li>
//                 ))
//               ) : (
//                 <li className="px-4 py-2 text-sm text-white/50">
//                   No results found.
//                 </li>
//               )}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { highlightedRegions } from "../data/mapLocations";

export default function MobileDropDown({ onSelect, selected }) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRegions = Object.entries(highlightedRegions).filter(
    ([, region]) =>
      region.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (key) => {
    const region = highlightedRegions[key];
    onSelect({
      id: key,
      label: region.label,
    });
    setOpen(false);
    setSearchTerm("");
  };

  return (
    // This parent div provides the padding, but is no longer the positioning context
    <div className="w-full bg-[#262626] px-[16px] py-[14px] mb-3 text-left z-[60] text-white">
      {/* This new div is the relative container for the dropdown */}
      <div className="relative w-full">
        {/* Dropdown Trigger Button */}
        <button
          onClick={() => setOpen((o) => !o)}
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
            <span>{selected?.label || "Select/search state"}</span>
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
          {open && (
            <motion.div
              // w-full will now correctly match the button's width inside the new relative container
              className="absolute w-full mt-1 bg-[#262626] border-gray-600 z-[60] overflow-y-auto max-h-[300px]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-2 border-b border-gray-700">
                <input
                  type="text"
                  placeholder="Search state..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none"
                />
              </div>

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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { highlightedRegions } from "./data/mapLocations";

// export default function CustomDropdown({ onSelect, selected }) {
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

//     requestAnimationFrame(() => setOpen(false));
//     setSearchTerm(""); // Reset search input after selection
//   };

//   return (
//     <div className="relative w-full bg-[#262626] px-[32px] py-[23px] mb-3 text-left z-[60] text-white">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
//       >
//         <div className="flex items-center">
//           <Image
//             src="/home/map/mapSearch.svg"
//             alt="Search Icon"
//             width={18}
//             height={18}
//             className="mr-2"
//           />
//           <span>{selected?.label || "Select/search state"}</span>
//         </div>
//         <Image
//           src="/home/map/dropdown.svg"
//           alt="Dropdown Icon"
//           width={20}
//           height={20}
//         />
//       </button>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="absolute w-full mt-1 bg-[#262626] border border-gray-600 max-w-[336px] z-[60] overflow-y-auto"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="px-4 py-2 border-b border-gray-700">
//               <input
//                 type="text"
//                 placeholder="Search state..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border  border-gray-600 text-white focus:outline-none "
//               />
//             </div>

//             <ul>
//               {filteredRegions.length > 0 ? (
//                 filteredRegions.map(([key, region]) => (
//                   <li
//                     key={key}
//                     className="px-4 py-2 cursor-pointer hover:bg-white/5"
//                     onClick={() => handleSelect(key)}
//                   >
//                     {region.label}
//                   </li>
//                 ))
//               ) : (
//                 <li className="px-4 py-2 text-sm text-white/50">
//                   No results found.
//                 </li>
//               )}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
