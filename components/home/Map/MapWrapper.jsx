///***************************************************************************************** */

"use client";
import { useEffect, useState } from "react";
import { highlightedRegions } from "./data/mapLocations";
import ZoomableSVGMap from "./ZoomableSVGMap";
import InfoSlider from "./InfoSlider";
import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";
import TestZoomBackup from "./TestZoomBackup";
import CustomDropdown from "./CustomDropdown";

export default function NewMapF() {
  const PLACEHOLDER_EXIT_DURATION = 500;
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [showInfoSlider, setShowInfoSlider] = useState(false);
  const [hoveredRegionId, setHoveredRegionId] = useState(null);
  const [selectedRegionObject, setSelectedRegionObject] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null); // hover state
  const [lastHoveredLocation, setLastHoveredLocation] = useState(null);
  const [defaultLocation, setDefaultLocation] = useState(null); // base/default card
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasParentMounted, setHasParentMounted] = useState(false);

  const [activeRegion, setActiveRegion] = useState(null);

  const displayLocation =
    hoveredLocation || lastHoveredLocation || defaultLocation;

  const activeRegionId = hoveredRegionId || selectedRegionId;

  useEffect(() => {
    if (displayLocation) {
      setShowInfoSlider(false); // hide slider first
      const timeout = setTimeout(() => {
        setShowInfoSlider(true); // show after exit animation
      }, PLACEHOLDER_EXIT_DURATION);

      return () => clearTimeout(timeout);
    } else {
      setShowInfoSlider(false);
    }
  }, [displayLocation]);

  const handleZoomChange = (zoomLevel, number) => {
    setIsZoomed(zoomLevel > 1); // Adjust threshold as needed
  };

  const handleRegionSelect = (id) => {
    if (!id || typeof id !== "string") return; // Prevent crash

    setSelectedRegionId(id);
    setActiveRegion(id);

    const label =
      highlightedRegions[id]?.label || id.charAt(0).toUpperCase() + id.slice(1);

    setSelectedRegionObject({ id, name: label });

    setHoveredRegionId(null);

    const firstValidLocation = highlightedRegions[id]?.locations?.find(
      (loc) => loc.image
    );

    setDefaultLocation(firstValidLocation || null);
    setHoveredLocation(null);
  };

  const handleReset = () => {
    setActiveRegion(null);
    setSelectedRegionId(null);
    setHoveredRegionId(null);
    setSelectedRegionObject(null);
    setDefaultLocation(null);
    setHoveredLocation(null);
    setLastHoveredLocation(null);
    setShowInfoSlider(false);
  };

  return (
    <section className="h-full hidden lg:block sm:h-[650px] xl:h-[720px] w-full bg-[#0E0E0E]  z-0 overflow-hidden  text-white">
      <div className="flex flex-col justify-center h-full fixmap fix lg:flex-row ">
        {/* LEFT PANEL */}
        <div className="flex flex-col justify-between lg:w-[460px] py-[60px]">
          {/* Move heading here */}
          <div className="z-50 whitespace-nowrap overflow-hidden ">
            <motion.h2
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="text-[56px] bg-gradient-to-r whitespace-nowrap overflow-hidden  from-[#AC38D9] to-[#F47922] bg-clip-text text-transparent w-fit bw-m"
            >
              Explore Park <span className="bw-r">Finder</span>
            </motion.h2>
          </div>

          <div className="">
            <div className="rounded-none h-[285px] z-50 flex flex-col">
              <CustomDropdown
                selected={selectedRegionObject}
                // onSelect={handleRegionSelect}
                onSelect={(region) => {
                  handleRegionSelect(region.id); // Use the ID for logic
                  setSelectedRegionObject(region); // Save full object for label display
                }}
              />

              <div className="relative h-[185px] w-full max-w-[900px] px-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  {!displayLocation && (
                    <motion.div
                      key="red-container"
                      initial={{ y: "-100%" }}
                      animate={{ y: 0 }}
                      exit={{
                        y: "-100%",
                        transition: { duration: 1, ease: "easeInOut" },
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full bg-[#1A1A1A] h-[185px] z-[10] overflow-hidden"
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[12px] text-sm text-gray-400">
                        <div className="bg-[#2E373A] px-[16px] py-[15px] rounded-[10px]">
                          <img
                            src={"/home/map/cursor.png"}
                            width={36}
                            height={36}
                            alt="cursor"
                          />
                        </div>
                        <span className="inter-m text-[18px] leading-[20px]">
                          Click on location pins
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {displayLocation && (
                    <motion.div
                      key="info-parent"
                      // initial={!hasParentMounted ? { y: "100%" } : 0}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{
                        y: "100%",
                        transition: { duration: 1, ease: "easeInOut" },
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full h-full z-[40] overflow-hidden"
                      onAnimationComplete={() => setHasParentMounted(true)}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${
                            displayLocation.id || displayLocation.label
                          }-${displayLocation.city}`}
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "-100%" }}
                          transition={{
                            duration: 0.5,
                            delay: hasParentMounted ? 0.1 : 0, // Delay only after first mount
                            ease: "easeInOut",
                          }}
                          className="absolute top-0 left-0 w-full h-full px-3 bg-[#1D1D1D] shadow-lg flex items-center justify-center gap-4 z-[50]"
                        >
                          {displayLocation.image && (
                            <img
                              src={displayLocation.image}
                              alt={displayLocation.label}
                              className="w-[147px] h-[137px] object-cover"
                            />
                          )}
                          <div className="flex flex-col justify-between w-full max-w-[450px] gap-2 text-sm">
                            <div>
                              <h3 className="text-lg bw-r text-[#F47920]">
                                {displayLocation.label}
                                {displayLocation.city && (
                                  <span className="text-[14px] text-[#F47920]">
                                    , {displayLocation.city}
                                  </span>
                                )}
                              </h3>
                              {displayLocation.purpose && (
                                <p className="text-[14px] bw-r text-gray-400">
                                  {displayLocation.purpose}
                                </p>
                              )}
                            </div>
                            <div className="w-full text-white/80 bg-[#313131] px-[7px] rounded-[4px] py-[11px]">
                              {displayLocation.area && (
                                <div className="flex justify-between">
                                  <p className="bw-r bw-m text-[13px]">
                                    Total Area:
                                  </p>
                                  <p className="bw-m text-[15px]">
                                    {displayLocation.area}
                                  </p>
                                </div>
                              )}
                              {displayLocation.potential && (
                                <div className="flex justify-between">
                                  <p className="bw-r bw-m text-[13px]">
                                    Potential:
                                  </p>
                                  <p className="bw-m text-[15px]">
                                    {displayLocation.potential}
                                  </p>
                                </div>
                              )}
                              {displayLocation.certification && (
                                <div className="flex justify-between">
                                  <p className="bw-r bw-m text-[13px]">
                                    Certification:
                                  </p>
                                  <p className="bw-m text-[15px]">
                                    {displayLocation.certification}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex gap-[14px]  mt-[9px]">
              <div className="relative min-w-[140px] z-50 h-[122px]">
                <img
                  fill
                  src="/home/map/Numbers.svg"
                  alt="Park Numbers"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-[10px]">
                  <div className="text-[66px] font-bold bw-r text-white leading-none">
                    {activeRegionId
                      ? highlightedRegions[activeRegionId]?.locations.length
                      : ""}
                  </div>
                  <div className="text-[14px] inter-m text-white/80 mt-[4px]">
                    Parks
                  </div>
                </div>
              </div>

              <div className="w-full h-[122px] z-50 bg-[#1A1A1A] flex items-end pb-[16px] pr-[15px] justify-end">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm inter-sb text-white/80 hover:text-white"
                >
                  {activeRegionId
                    ? `${highlightedRegions[activeRegionId]?.label} Overview`
                    : "Parks Overview"}
                  <img
                    src="/home/map/external.png"
                    alt="External link"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-full ">
          <ZoomableSVGMap
            activeRegion={activeRegion}
            onRegionSelect={handleRegionSelect}
            // onPinHover={setSelectedLocation}
            onRegionHover={setHoveredRegionId}
            // onPinHover={setHoveredLocation}
            onPinHover={(loc) => {
              setHoveredLocation(loc);
              if (loc) setLastHoveredLocation(loc);
            }}
            // onPinClick={setLockedLocation}
            onReset={handleReset}
          />
        </div>
      </div>
    </section>
  );
}
