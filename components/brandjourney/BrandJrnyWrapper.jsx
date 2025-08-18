import React from "react";
import Btn from "../global/Btn";
import Socials from "../global/Socials";
import Newsletter from "../home/Newsletter/Newsletter";
import TabbedContentShowcase from "../home/TabbedContentShowcase/TabbedContentShowcase";
import BrandShowcase from "../home/Brands/BrandShowcase";
import TestimonialsSlider from "../home/ClientTestimonials/TestimonialsSlider";
import HeroBanner from "../home/Hero/HeroBanner";
import KeySectors from "../home/keySectors";
import IntegratedSolutionsSection from "../home/IntegratedSolutions/IntegratedSolutionsSection";
import MapWrapper from "../home/Map/MapWrapper";
import BJ_Sec1 from "./BJ_Sec1/BJ_Sec1";
import Mission_value from "./Mission_value/Mission_value";
import Mission_value_Copy from "./Mission_value/Mission_value_Copy";
import Leadership from "./Leadership/Leadership";
import Awards from "./Awards/Awards";

const BrandJrnyWrapper = () => {
  return (
    <div className="w-full h-full bg-[##FFFFFF] ">
      <BJ_Sec1 />
      <Mission_value />
      <Leadership />
      <Awards />
      {/* <div style={{ width: '100%', height: '600px' }}>
        <iframe
          src="https://phpstack-819107-5760335.cloudwaysapps.com/"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default BrandJrnyWrapper;
