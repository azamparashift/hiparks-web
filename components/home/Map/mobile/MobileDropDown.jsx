import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
import { highlightedRegions } from "../data/mapLocations";

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

    requestAnimationFrame(() => setOpen(false));
    setSearchTerm(""); // Reset search input after selection
  };

  return (
    // <div className="relative w-full bg-[#262626] px-[16px] py-[14px] mb-3 text-left z-[60] text-white">
    //   <button
    //     onClick={() => setOpen((o) => !o)}
    //     className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
    //   >
    //     <div className="flex items-center">
    //       <Image
    //         src="/home/map/mapSearch.svg"
    //         alt="Search Icon"
    //         width={18}
    //         height={18}
    //         className="mr-2"
    //       />
    //       <span>{selected?.label || "Select/search state"}</span>
    //     </div>
    //     <Image
    //       src="/home/map/dropdown.svg"
    //       alt="Dropdown Icon"
    //       width={20}
    //       height={20}
    //     />
    //   </button>

    //   <AnimatePresence>
    //     {open && (
    //       <motion.div
    //         className="absolute w-full mt-1 bg-[#262626] border border-gray-600 max-w-[] md:max-w-[704px] z-[60] overflow-y-auto"
    //         initial={{ opacity: 0, y: -10 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: -10 }}
    //         transition={{ duration: 0.2 }}
    //       >
    //         <div className="px-4 py-2 border-b border-gray-700">
    //           <input
    //             type="text"
    //             placeholder="Search state..."
    //             value={searchTerm}
    //             onChange={(e) => setSearchTerm(e.target.value)}
    //             className="w-full px-3 py-2 text-sm bg-[#1a1a1a] border  border-gray-600 text-white focus:outline-none "
    //           />
    //         </div>

    //         <ul>
    //           {filteredRegions.length > 0 ? (
    //             filteredRegions.map(([key, region]) => (
    //               <li
    //                 key={key}
    //                 className="px-4 py-2 cursor-pointer hover:bg-white/5"
    //                 onClick={() => handleSelect(key)}
    //               >
    //                 {region.label}
    //               </li>
    //             ))
    //           ) : (
    //             <li className="px-4 py-2 text-sm text-white/50">
    //               No results found.
    //             </li>
    //           )}
    //         </ul>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </div>
    <div className="relative w-full  bg-[#262626] px-[16px] py-[14px] mb-3 text-left z-[60] text-white">
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full px-3 py-2 bg-white/10 inter-sb text-sm leading-[24px] text-white/50 tracking-[0.01em] border border-[#565656] text-left flex items-center justify-between"
      >
        <div className="flex items-center">
          <img
            src="/home/map/mapSearch.svg"
            alt="Search Icon"
            width={18}
            height={18}
            className="mr-2"
          />
          <span>{selected?.label || "Select/search state"}</span>
        </div>
        <img
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
            className="absolute left-0 w-full mt-1 bg-[#262626]  border-gray-600 z-[60] overflow-y-auto max-h-[300px]" // ✅ Fixed width
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
  );
}
