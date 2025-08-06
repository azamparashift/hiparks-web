// import RegionCard from "./RegionCard";

import RegionCard from "./RegionCard";

// export default function RegionSlider({ parks = [], regionName }) {
//   return (
//     <div className="mt-6">
//       <div className="flex gap-4 px-2 pb-4 overflow-x-auto">
//         {parks.map((park) => (
//           <RegionCard key={park.id} park={park} />
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"; // Import Lucide icons
import "swiper/css"; // Import Swiper styles

export const RegionSlider = ({ parks = [], regionName }) => {
  const swiperRef = useRef(null); // Ref for accessing the Swiper instance

  return (
    <div className="mt-8">
      {/* Region title */}
      <h3 className="mb-4 text-2xl text-white bw-sb">{regionName} Parks</h3>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          spaceBetween={16} // Space between slides
          slidesPerView={1.2} // Number of slides to show at once
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance in a ref
          modules={[Navigation]} // Enable Navigation module
          navigation={{
            prevEl: ".swiper-button-prev", // Custom prev button
            nextEl: ".swiper-button-next", // Custom next button
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide on smaller screens
            },
            768: {
              slidesPerView: 2.6, // 2 slides on tablets
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
            },
          }}
        >
          {parks.map((park, idx) => (
            <SwiperSlide
              key={idx}
              // Conditionally add a style to the last slide
              style={idx === parks.length - 1 ? { paddingRight: "18px" } : {}}
            >
              <RegionCard park={park} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        {/* <div className="absolute bottom-0 z-10 p-3 transform -translate-y-1/2 rounded-full cursor-pointer swiper-button-prev top-1/2 bg-black/50">
          <ChevronLeft size={24} color="white" />
        </div>
        <div className="absolute right-0 z-10 p-3 transform -translate-y-1/2 rounded-full cursor-pointer swiper-button-next top-1/2 bg-black/50">
          <ChevronRight size={24} color="white" />
        </div> */}
        <div className="flex items-center justify-end pt-8 pr-4 gap-2.5">
          <button className="swiper-button-prev flex items-center justify-center ">
            <ArrowLeft size={24} color="white" />
          </button>
          <button className="swiper-button-next flex items-center justify-center">
            <ArrowRight size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};
