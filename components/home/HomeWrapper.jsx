"use client";
import React from "react";
import TabbedContentShowcase from "./TabbedContentShowcase/TabbedContentShowcase";
import BrandShowcase from "./Brands/BrandShowcase";
import TestimonialsSlider from "./ClientTestimonials/TestimonialsSlider";
import KeySectors from "./keySectors";
import IntegratedSolutionsSection from "./IntegratedSolutions/IntegratedSolutionsSection";
import MapWrapper from "./Map/MapWrapper";
import { ReactLenis, useLenis } from "lenis/react";
import HeroBannerClient from "./Hero/HeroBannerClient";
import MobileMapWrapper from "./Map/mobile/MobileMapWrapper";
import ScrollVideoSection from "./ScrollReveal/ScrollRevealSection";
import TestScroll from "./ScrollReveal/Testscroll";
import WhatNew from "./whatNew/page";
// import CardShowcase from "./Hero/CardShowcase";

const HomeWrapper = ({ heroData, testimonials = [] }) => {
  useLenis(() => {}); // optional scroll tracking

  return (
    <ReactLenis root>
      <div className="w-full h-full bg-white">
        <HeroBannerClient heroData={heroData} />
        {/* <MapWraptestf /> */}
        <MapWrapper />
        <IntegratedSolutionsSection />

        <MobileMapWrapper />
        <KeySectors />
        <TestimonialsSlider testimonials={testimonials} />

        {/* <ScrollRevealVideoSection
          videoSrc="/Stats_v2.mp4"
          texts={[
            { title: "Smart Infrastructure", subtitle: "Designed for scale" },
            {
              title: "Pan-India Presence",
              subtitle: "Strategic locations across regions",
            },
            {
              title: "Built for Efficiency",
              subtitle: "Optimized layouts and access",
            },
            { title: "Future Ready", subtitle: "Tech-enabled operations" },
          ]}
        /> */}
        <ScrollVideoSection
          videoSrc="/homescroll.mp4"
          timedTexts={[
            { start: 0.6, end: 1.8, title: "1800", subtitle: "ACRES" },
            { start: 2, end: 3.5, title: "44 MN", subtitle: "SQ FT" },
            { start: 4.2, end: 5.8, title: "37", subtitle: "PARKS" },
            { start: 7.2, end: 8.3, title: "10", subtitle: "MARKETS" },
          ]}
        />
        {/* <TestScroll
          videoSrc="/homescroll.mp4"
          timedTexts={[
            { start: 0.6, end: 1.8, title: "1800", subtitle: "ACRES" },
            { start: 2, end: 3.5, title: "44 MN", subtitle: "SQ FT" },
            { start: 4.2, end: 5.8, title: "37", subtitle: "PARKS" },
            { start: 7.2, end: 8.3, title: "10", subtitle: "MARKETS" },
          ]}
        /> */}
        {/* <TestScroll
          videoSrc="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
          timedTexts={[
            { start: 0, end: 3, title: "44 MN", subtitle: "SQ FT" },
            { start: 8, end: 12, title: "37", subtitle: "PARKS" },
            { start: 14, end: 18, title: "10", subtitle: "MARKETS" },
            { start: 18, end: 26, title: "44 MN", subtitle: "SQ FT" },
            { start: 27, end: 32, title: "37", subtitle: "PARKS" },
            { start: 33, end: 46, title: "10", subtitle: "MARKETS" },
          ]}
        /> */}
        {/* <CardShowcase /> */}
        <BrandShowcase />
        <WhatNew />
        <TabbedContentShowcase />
      </div>
    </ReactLenis>
  );
};

export default HomeWrapper;
