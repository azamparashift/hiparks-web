'use client';
import { ReactLenis } from 'lenis/react';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });



  const [offsetY, setOffsetY] = useState({
    card1: -80,
    card2: -40,
    card3: 0,
    card4: 45
  });

  useEffect(() => {
    const width = window.innerWidth;

    if (width >= 1920) {
      setOffsetY({ card1: 10, card2: 40, card3: 70, card4: 105 });
    } else if (width >= 1600) {
      setOffsetY({ card1: 10, card2: 40, card3: 70, card4: 105 });
    } else if (width >= 1536) {
      setOffsetY({ card1: 10, card2: 40, card3: 70, card4: 105 });
    } else if (width >= 1440) {
      setOffsetY({ card1: 10, card2: 40, card3: 70, card4: 105 });
    } else if (width >= 1366) {
      setOffsetY({ card1: 10, card2: 40, card3: 70, card4: 105 });
    } else if (width >= 1280) {
      setOffsetY({ card1: 10, card2: 40, card3: 70, card4: 105 });
    } else if (width >= 1024) {
      setOffsetY({ card1: 10, card2: 40, card3: 70, card4: 105 });
    } else if (width <= 767) {
      setOffsetY({ card1: 35, card2: 55, card3: 75, card4: 95 });
    } else {
      setOffsetY({ card1: -80, card2: -40, card3: 0, card4: 45 });
    }
  }, []);

  return (
    <ReactLenis root>
      <main ref={container} className="1280:pt-[50px] 1600:pt-[0px] pb-[150px]" >
        {/* CARD 1 */}
        <Card1 progress={scrollYProgress} offsetY={offsetY.card1} />

        {/* CARD 2 */}
        <Card2 progress={scrollYProgress} offsetY={offsetY.card2} />

        {/* CARD 3 */}
        <Card3 progress={scrollYProgress} offsetY={offsetY.card3} />

        {/* CARD 4 */}
        <Card4 progress={scrollYProgress} offsetY={offsetY.card4} />
      </main>
    </ReactLenis>
  );
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}

// CARD 1
function Card1({ progress, offsetY }) {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const scale = useTransform(progress, [0, 0.4], isMobile ? [1, 0.91] : [1, 0.85]);
  const blur = useTransform(progress, [0.0, 0.1], ['blur(0px)', 'blur(3px)']);



  return (
    <div ref={container} className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center w-full ">
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur }}
        className="1920:w-[70%] 1280:w-[90%] 1366:w-[90%] 1440:w-[90%] 1536:w-[86%] 1600:w-[84%] w-[90%] bg-[#8A52A0] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[437px]">
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
            <div>
              <h2 className='bw-m text-[31px] text-white leading-[34px] mb-[15px]  lg:text-[35px] lg:leading-[42px] xl:text-[46px] xl:leading-[48px] lg:mb-[10px] xl:mb-[30px]'>Built to Global Specifications</h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">Featuring standardised infrastructure, smart facilities, and scalable design, our parks are engineered for agility, productivity, safety, and sustainability. From land acquisition and master planning to construction, leasing, and long-term asset management, our team is here to support you end-to-end.</p>
              <a href='' className="text-[13px] leading-[22px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[13px] lg:leading-[24px] flex items-center">Integrated Business Solutions <img className='w-[23px] md:w-[30px]' src='/btn_whit_arrow.svg' /></a>
            </div>
            <img className='absolute right-0 top-0 w-[70px] lg:w-[0]' src='/brand_journey/cards_arrow.svg' />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover" src="/brand_journey/card1.jpg"></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


// CARD 2
function Card2({ progress, offsetY }) {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const scale = useTransform(progress, [0, 0.5], isMobile ? [1, 0.94] : [1, 0.87]);
  const blur1 = useTransform(progress, [0.3, 0.5], ['blur(0px)', 'blur(3px)']);

  return (
    <div ref={container} className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center">
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur1 }}
        className="1920:w-[71%] 1280:w-[92%] 1366:w-[92%] 1440:w-[92%] 1536:w-[90%] 1600:w-[87%] w-[90%] bg-[#22B148] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[437px]">

          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px]  py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
            <div>
              <h2 className='bw-m text-[31px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] xl:text-[46px] xl:leading-[48px] lg:mb-[10px] xl:mb-[30px]'>Built to Global Specifications</h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">Featuring standardised infrastructure, smart facilities, and scalable design, our parks are engineered for agility, productivity, safety, and sustainability. From land acquisition and master planning to construction, leasing, and long-term asset management, our team is here to support you end-to-end.</p>
              <a href='' className="text-[13px] leading-[22px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[13px] lg:leading-[24px] flex items-center">Integrated Business Solutions <img className='w-[23px] md:w-[30px]' src='/btn_whit_arrow.svg' /></a>
            </div>
            <img className='absolute left-0 bottom-0 w-[70px] lg:w-[0]' src='/brand_journey/cards_dbl_arrow.svg' />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover" src="/brand_journey/card2.jpg"></img>
          </div>

        </div>
      </motion.div >
    </div >
  );
}



// CARD 3
function Card3({ progress, offsetY }) {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const scale = useTransform(progress, [0, 0.5], isMobile ? [1, 0.97] : [1, 0.89]);
  const blur2 = useTransform(progress, [0.5, 1], ['blur(0px)', 'blur(3px)']);

  return (
    <div ref={container} className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center">
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur2 }}
        className="1920:w-[75%] 1280:w-[95%] 1366:w-[95%] 1440:w-[95%] 1536:w-[93%] 1600:w-[89%] w-[90%]  bg-[#F47922] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[437px]">
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
            <div>
              <h2 className='bw-m text-[31px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] xl:text-[46px] xl:leading-[48px] lg:mb-[10px] xl:mb-[30px]'>More Then Infrastructure.</h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">At Horizon, we are shaping environments that work efficiently, safely, and thoughtfully for the people who use them. Our parks are designed to be human-centric: blending operational performance with smart layouts, safety-first features, and comfort-focused amenities that make a difference every day.</p>
              <a href='' className="text-[13px] leading-[22px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[13px] lg:leading-[24px] flex items-center">Integrated Business Solutions <img className='w-[23px] md:w-[30px]' src='/btn_whit_arrow.svg' /></a>
            </div>
            <img className='absolute right-0 top-0 w-[70px] lg:w-[0]' src='/brand_journey/cards_arrow.svg' />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover" src="/brand_journey/card3.jpg"></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


// CARD 4
function Card4({ progress, offsetY }) {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const scale = useTransform(progress, [0, 0.5], isMobile ? [1, 1] : [1, 0.92]);
  // const blur3 = useTransform(progress, [0.9, 1.5], ['blur(0px)', 'blur(4px)']);

  return (
    <div ref={container} className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center">
      <motion.div
        style={{ scale, translateY: offsetY }}
        className="1920:w-[76%] 1280:w-[98%] 1366:w-[98%] 1440:w-[98%] 1536:w-[94%] 1600:w-[91%] w-[90%] bg-[#000] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[550px] h-[437px]">
          <div className="w-[100%] md:w-[50%] lg:px-[70px] lg:py-[0px]  py-[30px] px-[20px] 1280:h-[auto] h-[100%] relative flex items-center">
            <div>
              <h2 className='bw-m text-[31px] text-white leading-[34px] mb-[15px] lg:text-[35px] lg:leading-[42px] xl:text-[46px] xl:leading-[48px] lg:mb-[10px] xl:mb-[30px]'>Backed by Blackstone.</h2>
              <p className="bw-l text-white text-[16px] leading-[25px] lg:text-[16px] lg:leading-[25px] xl:text-[20px] xl:leading-[30px]">As a Blackstone Logistics Platform, and with access to its global scale, capital, and best practices, Horizon is redefining industrial infrastructure in India. Our strong local partnerships, combined with Blackstone’s global insights, give us a competitive edge; accelerating growth, raising the bar on quality, and ensuring long-term value for our customers.</p>
              <a href='' className="text-[13px] leading-[22px] gap-[15px] mt-[25px] inter-sb text-white uppercase tracking-[0.1em] lg:text-[13px] lg:leading-[24px] flex items-center">Integrated Business Solutions <img className='w-[23px] md:w-[30px]' src='/btn_whit_arrow.svg' /></a>
            </div>
            <img className='absolute left-0 bottom-0 w-[70px] lg:w-[0]' src='/brand_journey/cards_dbl_arrow.svg' />
          </div>
          <div className="w-[100%] md:w-[50%] hidden md:block">
            <img className="w-full 1920:h-[600px] 1280:h-[550px] h-[600px] object-cover" src="/brand_journey/card4.jpg"></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}




