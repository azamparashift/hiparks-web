// 'use client'
// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import { Pagination } from 'swiper/modules'

// import TestimonialCard from './TestimonialCard'
// import { testimonialsData } from './data'

// const TestimonialsSlider = () => {
//   return (
//     <section className="px-4 py-20 bg-white">
//       <div className="mb-10 text-center">
//         <h2 className="text-[66px] bw-r
//           <span className=" bw-m">Clients</span> Speak
//         </h2>
//       </div>
//       {/* <Swiper
//         modules={[Pagination]}
//         slidesPerView={1}
//         spaceBetween={30}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 }
//         }}
//       > */}
//       <Swiper
//   modules={[Pagination]}
//   slidesPerView="auto"
//   centeredSlides
//   spaceBetween={30}
//   pagination={{ clickable: true }}
//   className="testimonial-swiper"
// >

//         {testimonialsData.map((testimonial, index) => (
//         //   <SwiperSlide key={index}>
//         //     <TestimonialCard {...testimonial} />
//         //   </SwiperSlide>
//         <SwiperSlide className="testimonial-slide w-[930px] h-[460px] transition-transform duration-500">
//   <TestimonialCard {...testimonial} />
// </SwiperSlide>

//         ))}
//       </Swiper>
//     </section>
//   )
// }

// export default TestimonialsSlider

// 'use client'
// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import { Pagination } from 'swiper/modules'

// import TestimonialCard from './TestimonialCard'
// import { testimonialsData } from './data'

// const TestimonialsSlider = () => {
//   return (
// <section className="px-4 py-20 bg-white">
//   <div className="mb-10 text-center">
//     <h2 className="text-[66px] bw-r
//       <span className="bw-m">Clients</span> Speak
//     </h2>
//   </div>

//   <Swiper
//     modules={[Pagination]}
//     slidesPerView="auto"
//     centeredSlides
//     spaceBetween={30}
//     pagination={{
//       clickable: true,
//       el: '.custom-pagination',
//       bulletClass: 'swiper-pagination-bullet',
//       bulletActiveClass: 'swiper-pagination-bullet-active',
//       renderBullet: (index, className) => `<span class="${className}"></span>`
//     }}
//     className="testimonial-swiper"
//   >
//     {testimonialsData.map((testimonial, index) => (
//       <SwiperSlide key={index} className="testimonial-slide w-[930px] h-[460px]">
//         <TestimonialCard {...testimonial} />
//       </SwiperSlide>
//     ))}
//   </Swiper>

//   <div className="flex justify-center mt-8 space-x-3 custom-pagination" />
// </section>

//   )
// }

// export default TestimonialsSlider

// 'use client'

// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination } from 'swiper/modules'

// import 'swiper/css'
// import 'swiper/css/pagination'

// import TestimonialCard from './TestimonialCard'
// import { testimonialsData } from './data'

// const TestimonialsSlider = () => {
//   return (
//     <section className="px-4 py-20 overflow-x-hidden bg-white">
//       <div className="mb-10 text-center">
//         <h2 className="text-[66px] bw-r
//           <span className="bw-m">Clients</span> Speak
//         </h2>
//       </div>

// {/* <Swiper
//   modules={[Pagination]}
//   slidesPerView="auto"
//   centeredSlides
//   spaceBetween={30}
//   pagination={{
//     clickable: true,
//     el: '.custom-pagination',
//     bulletClass: 'custom-bullet',
//     bulletActiveClass: 'custom-bullet-active',
//     renderBullet: (index, className) => `
//       <span class="${className} relative">
//         <span class="badge">154</span>
//       </span>
//     `
//   }}
//   className="testimonial-swiper"
// > */}
// <Swiper
//   modules={[Pagination]}
//   slidesPerView="auto"
//   centeredSlides
//   spaceBetween={60}
//   pagination={{
//     clickable: true,
//     el: '.custom-pagination',
//     bulletClass: 'custom-bullet',
//     bulletActiveClass: 'custom-bullet-active',
//     renderBullet: (index, className) => `
//       <span class="${className} relative">
//         <span class="badge">154</span>
//       </span>
//     `
//   }}
//   className="testimonial-swiper"
// >

//   {testimonialsData.map((testimonial, index) => (
//     // <SwiperSlide key={index} className="testimonial-slide w-[930px] h-[460px]">
//     //   <TestimonialCard {...testimonial} />
//     // </SwiperSlide>
// <SwiperSlide
//   key={index}
//   className="flex justify-center transition-transform duration-500 testimonial-slide"
// >
//   <div className="max-w-[930px] w-full scale-95 swiper-slide-inner">
//     <TestimonialCard {...testimonial} />
//   </div>
// </SwiperSlide>

//   ))}
// </Swiper>

// {/* 🔽 This must exist for custom el to work */}
// <div className="flex justify-center mt-8 space-x-3 custom-pagination" />

//     </section>
//   )
// }

// export default TestimonialsSlider

///***************************************************** */

// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import { motion } from "framer-motion";

// import "swiper/css";
// import "swiper/css/pagination";

// import TestimonialCard from "./TestimonialCard";
// import { testimonialsData } from "./data";

// const TestimonialsSlider = () => {

//   return (
//     <section className="py-12 bg-white sm:py-[50px] 1280:py-20 relative">
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 left-0 flex gap-[25px]">
//           <div className="w-[20px] h-[20px] sm:w-[65px] sm:h-[65px] xl:w-[295.8px] xl:h-[469.8px] bg-[#22B148] opacity-25 blur-[69px]" />
//           <div className="w-[20px] h-[20px] sm:w-[65px] sm:h-[65px] xl:w-[219px] xl:h-[226.8px] bg-[#7F56D9] opacity-25 blur-[69px]" />
//         </div>
//       </div>

//       <div className="mb-6 text-center sm:mb-10">
//         <motion.h2
//           initial={{ y: "40px", opacity: 0 }}
//           whileInView={{ y: "0", opacity: 1 }}
//           transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
//           viewport={{ once: true, amount: 0.1 }}
//           className="text-[36px] sm:text-[46px] md:text-[48px] lg:text-[52px] xl:text-[66px] bw-r tracking-[-0.04em]"
//         >
//           <motion.span
//             initial={{ y: "40px", opacity: 0 }}
//             whileInView={{ y: "0", opacity: 1 }}
//             transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
//             viewport={{ once: true, amount: 0.1 }}
//             className="bw-m"
//           >
//             Client
//           </motion.span>{" "}
//           Speak{" "}
//         </motion.h2>
//       </div>

//       <div className="relative h-full px-0 mx-auto overflow-visible max-w-auto">
//         <Swiper
//           modules={[Pagination]}
//           slidesPerView={1.15} // Use 1 for mobile
//           centeredSlides
//           spaceBetween={30}
//           initialSlide={1}
//           loop={true}
//           pagination={{
//             clickable: true,
//             el: ".custom-pagination",
//             bulletClass: "custom-bullet",
//             bulletActiveClass: "custom-bullet-active",
//           }}
//           className="testimonial-swiper"
//           breakpoints={{
//             // When the screen width is >= 640px (Mobile)
//             360: {
//               slidesPerView: 1.2,
//               spaceBetween: 8,
//               // spaceBetween: 0,
//             },
//             375: {
//               slidesPerView: 1.26, // 1 slide per view on mobile
//               spaceBetween: 25,
//             },
//             // When the screen width is >= 640px (Mobile)
//             412: {
//               slidesPerView: 1.36, // 1 slide per view on mobile
//               spaceBetween: 15,
//             },
//             // When the screen width is >= 640px (Mobile)
//             414: {
//               slidesPerView: 1.2, // 1 slide per view on mobile
//             },
//             425: {
//               slidesPerView: 1.42, // 1 slide per view on mobile
//             },
//             480: {
//               slidesPerView: 1.8, // 1 slide per view on mobile
//             },
//             640: {
//               slidesPerView: 1.65, // 1 slide per view on mobile
//             },
//             // When the screen width is >= 768px (Tablet)
//             768: {
//               slidesPerView: 1.8, // 2 slides per view on tablets
//             },

//             1024: {
//               slidesPerView: 1.86,
//               spaceBetween: 280, // <- Add this if missing
//             },

//             1280: {
//               slidesPerView: 1.6, // 3 slides per view on desktop
//             },
//             1366: {
//               slidesPerView: 1.45, // 3 slides per view on desktop
//             },
//             // When the screen width is >= 1440px (Large Desktop)
//             1440: {
//               slidesPerView: 1.6, // 4 slides per view on larger desktops
//             },
//             1920: {
//               slidesPerView: 1.8, // 4 slides per view on larger desktops
//             },
//           }}
//         >
//           {testimonialsData.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               {({ isActive }) => (
//                 <div className="testimonial-slide h-full w-full sm:w-[400px] md:w-[420px] xl:w-[930px] xl:h-[460px] flex items-center justify-center">
//                   <div className="mx-1  swiper-slide-inner">
//                     <TestimonialCard {...testimonial} isActive={isActive} />
//                   </div>
//                 </div>
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Custom Pagination */}
//       <div className="flex justify-center mt-[28px] md:mt-[63px] space-x-3 custom-pagination" />
//     </section>
//   );
// };

// export default TestimonialsSlider;

///******************************** */
// components/home/ClientTestimonials/TestimonialsSlider.jsx

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSlider = ({ testimonials = [] }) => {
  return (
    <section
      className="py-12 bg-white sm:py-[50px] 1280:py-20 relative"
      aria-labelledby="client-speak-title"
    >
      {/* Background gradient blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 flex gap-[25px]">
          <div className="w-[20px] h-[20px] sm:w-[65px] sm:h-[65px] xl:w-[295.8px] xl:h-[469.8px] bg-[#22B148] opacity-25 blur-[69px]" />
          <div className="w-[20px] h-[20px] sm:w-[65px] sm:h-[65px] xl:w-[219px] xl:h-[226.8px] bg-[#7F56D9] opacity-25 blur-[69px]" />
        </div>
      </div>

      {/* Animated Heading */}
      <div className="mb-6 text-center sm:mb-10">
        <motion.h2
          id="client-speak-title"
          initial={{ y: "40px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-[36px] sm:text-[46px] md:text-[48px] lg:text-[52px] xl:text-[66px] bw-r tracking-[-0.04em]"
        >
          <motion.span
            initial={{ y: "40px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.6, ease: [1, 0, 0.34, 1], delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bw-m"
          >
            Client
          </motion.span>{" "}
          Speak
        </motion.h2>
      </div>

      {/* Swiper */}
      <div className="relative h-full px-0 mx-auto overflow-visible max-w-auto">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.15}
          centeredSlides
          spaceBetween={30}
          initialSlide={1}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          breakpoints={{
            360: { slidesPerView: 1.2, spaceBetween: 8 },
            375: { slidesPerView: 1.26, spaceBetween: 25 },
            412: { slidesPerView: 1.36, spaceBetween: 15 },
            414: { slidesPerView: 1.2 },
            425: { slidesPerView: 1.42 },
            480: { slidesPerView: 1.8 },
            640: { slidesPerView: 1.65 },
            768: { slidesPerView: 1.8 },
            1024: { slidesPerView: 1.86, spaceBetween: 280 },
            1280: { slidesPerView: 1.5 },
            1366: { slidesPerView: 1.45 },
            1440: { slidesPerView: 1.6 },
            1920: { slidesPerView: 1.8 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.id || i}>
              {({ isActive }) => (
                <div className="testimonial-slide h-full w-full sm:w-[400px] md:w-[420px] xl:w-[930px] xl:h-[460px] flex items-center justify-center">
                  <div className="mx-1 swiper-slide-inner">
                    <TestimonialCard {...t} isActive={isActive} />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination */}
      <div className="flex justify-center mt-[25px]  md:mt-[63px] space-x-3 custom-pagination" />
    </section>
  );
};

export default TestimonialsSlider;
