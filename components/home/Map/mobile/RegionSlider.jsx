// import RegionCard from "./RegionCard";

// import RegionCard from "./RegionCard";
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"; // Import Lucide icons
// import "swiper/css"; // Import Swiper styles

// export const RegionSlider = ({ parks = [], regionName }) => {
//   const swiperRef = useRef(null); // Ref for accessing the Swiper instance

//   return (
//     <div className="mt-8">
//       {/* Region title */}
//       <h3 className="mb-4 text-2xl text-white bw-sb">{regionName} Parks</h3>

//       {/* Swiper Container */}
//       <div className="relative">
//         <Swiper
//           spaceBetween={16} // Space between slides
//           slidesPerView={1} // Number of slides to show at once
//           onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance in a ref
//           modules={[Navigation]} // Enable Navigation module
//           navigation={{
//             prevEl: ".swiper-button-prev", // Custom prev button
//             nextEl: ".swiper-button-next", // Custom next button
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1, // 1 slide on smaller screens
//             },
//             768: {
//               slidesPerView: 2, // 2 slides on tablets
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3, // 3 slides on larger screens
//             },
//           }}
//         >
//           {parks.map((park, idx) => (
//             <SwiperSlide
//               key={idx}
//               // Conditionally add a style to the last slide
//               style={idx === parks.length - 1 ? { paddingRight: "0px" } : {}}
//             >
//               <RegionCard park={park} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="flex items-center justify-end pt-8  gap-2.5">
//           <button className="swiper-button-prev flex items-center justify-center ">
//             <ArrowLeft size={24} color="white" />
//           </button>
//           <button className="swiper-button-next flex items-center justify-center">
//             <ArrowRight size={24} color="white" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
import RegionCard from "./RegionCard";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

export const RegionSlider = ({ parks = [], regionName }) => {
  const swiperRef = useRef(null);

  // ✅ Reset slider to start when parks change
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [parks]);

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-2xl text-white bw-sb">{regionName} Parks</h3>

      <div className="relative">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {parks.map((park, idx) => (
            <SwiperSlide
              key={idx}
              style={idx === parks.length - 1 ? { paddingRight: "0px" } : {}}
            >
              <RegionCard park={park} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Arrow buttons with automatic Swiper behavior */}
        <div className="flex items-center justify-end pt-8 gap-2.5">
          <button className="swiper-button-prev flex items-center justify-center transition-opacity duration-300 opacity-100 disabled:opacity-30 disabled:cursor-not-allowed">
            <ArrowLeft size={24} color="white" />
          </button>
          <button className="swiper-button-next flex items-center justify-center transition-opacity duration-300 opacity-100 disabled:opacity-30 disabled:cursor-not-allowed">
            <ArrowRight size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};
