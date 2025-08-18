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
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1600) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1536) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1440) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1366) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
    } else if (width >= 1280) {
      setOffsetY({ card1: 0, card2: 35, card3: 70, card4: 105 });
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
      <main ref={container} className="1280:pt-[50px] 1600:pt-[0px] pb-[150px] fix" >
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
  const scale = useTransform(progress, [0, 0.4], isMobile ? [1, 0.91] : [1, 0.89]);
  const blur = useTransform(progress, [0.0, 0.1], ['blur(0px)', 'blur(1.2px)']);



  return (
    <div ref={container} className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center w-full ">
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[97%] bg-[#8A52A0] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[600px] md:h-[450px] h-[600px]">
          <div className="w-[100%] md:w-[60%] lg:w-[50%]  1280:px-[70px] lg:px-[30px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
            <div>
              <h2 className='bw-m text-[31px] text-white leading-[34px] mb-[15px]  lg:text-[30px] lg:leading-[37px] 1280:text-[40px] 1280:leading-[50px] 1366:text-[46px] 1366:leading-[56px] lg:mb-[10px] xl:mb-[20px]'>Factory and <br></br> Inplant Solutions </h2>
              <p className="bw-l text-white text-[14px] leading-[23px] lg:text-[15px] lg:leading-[25px] 1280:text-[16px] 1280:leading-[26px] 1366:text-[17px] 1366:leading-[28px] mb-[10px]">Need help setting up your manufacturing unit or internal infrastructure? Skip the capital investment. </p>
              <p className="bw-l text-white text-[14px] leading-[23px] lg:text-[15px] lg:leading-[25px] 1280:text-[16px] 1280:leading-[26px] 1366:text-[17px] 1366:leading-[28px]">We help you build your dream factories and offer end-to-end solutions for internal infrastructure - so that you can focus on your product and market development. More than 40% of our customers are from the manufacturing sector and about 50% of the spaces delivered by Horizon our custom-built with fully fitted facilities including racking, HVAC, offices, material handling equipment, and customised fitouts. Set up your operations faster, and with fewer financial burdens.</p>
              <a href='' className="text-[13px] leading-[22px] gap-[15px] xl:mt-[40px] lg:mt-[20px] mt-[25px] text-white uppercase tracking-[0.1em] lg:text-[17px] lg:leading-[26px] flex items-center bw-sb">Factory and inplant solutions <img className='w-[23px] md:w-[30px]' src='/btn_whit_arrow.svg' /></a>
            </div>
            <img className='absolute right-0 top-0 w-[70px] lg:w-[110px] 1280:w-[auto]' src='/brand_journey/cards_arrow.svg' />
          </div>
          <div className="w-[100%] md:w-[40%] lg:w-[50%] hidden md:block">
            <img className="w-full 1920:h-[600px] 1280:h-[600px] h-[600px] object-cover" src="/Cap_Overview/factory_inplant.jpg"></img>
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
  const scale = useTransform(progress, [0, 0.5], isMobile ? [1, 0.94] : [1, 0.92]);
  const blur1 = useTransform(progress, [0.3, 0.5], ['blur(0px)', 'blur(1.2px)']);

  return (
    <div ref={container} className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center">
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur1 }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[98%] bg-[#22B148] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[600px] md:h-[450px] h-[600px]">

          <div className="w-[100%] md:w-[60%] lg:w-[50%] 1280:px-[70px] lg:px-[30px] lg:py-[0px]  py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
            <div>
              <h2 className='bw-m text-[31px] text-white leading-[34px] mb-[15px] lg:text-[30px] lg:leading-[37px] 1280:text-[40px] 1280:leading-[50px] 1366:text-[46px] 1366:leading-[56px] lg:mb-[10px] xl:mb-[30px]'>Cold Chain Facilities</h2>

              <p className="bw-l text-white text-[14px] leading-[23px] lg:text-[15px] lg:leading-[25px] 1280:text-[16px] 1280:leading-[26px] 1366:text-[17px] 1366:leading-[28px]">From fresh produce to pharma, cold storage demands precision. Horizon brings proven in-house capabilities to develop specialised facilities as well as retrofit spaces for cold chain warehousing. We work with your team to design right-fit solutions that meet your specific requirements for temperature control, compliance, and operational flow.</p>
              <a href='' className="text-[13px] leading-[22px] gap-[15px] xl:mt-[40px] lg:mt-[20px] mt-[25px] text-white uppercase tracking-[0.1em] lg:text-[17px] lg:leading-[26px] flex items-center bw-sb">IG International <img className='w-[23px] md:w-[30px]' src='/btn_whit_arrow.svg' /></a>
            </div>
            <img className='absolute left-0 bottom-0 w-[70px] lg:w-[110px] 1280:w-[auto]' src='/brand_journey/cards_dbl_arrow.svg' />
          </div>
          <div className="w-[100%] md:w-[40%] lg:w-[50%] hidden md:block">
            <img className="w-full 1920:h-[600px] 1280:h-[600px] h-[600px] object-cover" src="/Cap_Overview/cold_chain.jpg"></img>
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
  const scale = useTransform(progress, [0, 0.5], isMobile ? [1, 0.97] : [1, 0.95]);
  const blur2 = useTransform(progress, [0.5, 1], ['blur(0px)', 'blur(1.2px)']);

  return (
    <div ref={container} className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center">
      <motion.div
        style={{ scale, translateY: offsetY, filter: blur2 }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[99%]  bg-[#F47922] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[600px] md:h-[450px] h-[600px]">
          <div className="w-[100%] md:w-[60%] lg:w-[50%]  1280:px-[70px] lg:px-[30px] lg:py-[0px] py-[30px] px-[20px]  1280:h-[auto] h-[100%]  relative flex items-center">
            <div>
              <h2 className='bw-m text-[31px] text-white leading-[34px] mb-[15px] lg:text-[30px] lg:leading-[37px] 1280:text-[40px] 1280:leading-[50px] 1366:text-[46px] 1366:leading-[56px] lg:mb-[10px] xl:mb-[30px]'>Warehousing and Supply Chain Solutions</h2>

              <p className="bw-l text-white text-[14px] leading-[23px] lg:text-[15px] lg:leading-[25px] 1280:text-[16px] 1280:leading-[26px] 1366:text-[17px] 1366:leading-[28px]">From ready-to-move-in warehouses to fully customised build-to-suit (BTS) fulfilment centres, we provide the flexibility to start operations today and expand tomorrow. With phase-wise construction options, you get scalable warehousing on your terms.</p>
              <a href='' className="text-[13px] leading-[22px] gap-[15px] xl:mt-[40px] lg:mt-[20px] mt-[25px] text-white uppercase tracking-[0.1em] lg:text-[17px] lg:leading-[26px] flex items-center bw-sb">Industrial and logistics parks <img className='w-[23px] md:w-[30px]' src='/btn_whit_arrow.svg' /></a>
            </div>
            <img className='absolute right-0 top-0 w-[70px] lg:w-[110px] 1280:w-[auto]' src='/brand_journey/cards_arrow.svg' />
          </div>
          <div className="w-[100%] md:w-[40%] lg:w-[50%] hidden md:block">
            <img className="w-full 1920:h-[600px] 1280:h-[600px] h-[600px] object-cover" src="/Cap_Overview/warehouse_supplychain.jpg"></img>
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
  const scale = useTransform(progress, [0, 0.5], isMobile ? [1, 1] : [1, 0.98]);
  // const blur3 = useTransform(progress, [0.9, 1.5], ['blur(0px)', 'blur(4px)']);

  return (
    <div ref={container} className="h-[auto] lg:h-[auto] sticky top-0 flex items-center justify-center">
      <motion.div
        style={{ scale, translateY: offsetY }}
        className="1920:w-[100%] 1280:w-[100%] 1366:w-[100%] 1440:w-[100%] 1536:w-[100%] 1600:w-[100%] w-[100%] bg-[#000] p-0 flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full flex flex-col md:flex-row py-[0px] px-[0px] 1920:h-[600px] 1280:h-[600px] md:h-[450px] h-[600px]">
          <div className="w-[100%] md:w-[60%] lg:w-[50%] 1280:px-[70px] lg:px-[30px] lg:py-[0px]  py-[30px] px-[20px] 1280:h-[auto] h-[100%] relative flex items-center">
            <div>
              <h2 className='bw-m text-[31px] text-white leading-[34px] mb-[15px] lg:text-[30px] lg:leading-[37px] 1280:text-[40px] 1280:leading-[50px] 1366:text-[46px] 1366:leading-[56px] lg:mb-[10px] xl:mb-[30px]'>In-City and Last <br></br> Mile Warehouses</h2>

              <p className="bw-l text-white text-[14px] leading-[23px] lg:text-[15px] lg:leading-[25px] 1280:text-[16px] 1280:leading-[26px] 1366:text-[17px] 1366:leading-[28px]">Urban logistics just got an upgrade. Our in-city and last-mile warehouses bring Grade A infrastructure closer to consumption hubs—ideal for brands looking for compliant infrastructure to boost delivery speed, reduce transit time, and serve    customers faster.</p>
              <a href='' className="text-[13px] leading-[22px] gap-[15px] xl:mt-[40px] lg:mt-[20px] mt-[25px] text-white uppercase tracking-[0.1em] lg:text-[17px] lg:leading-[26px] flex items-center bw-sb">In - city parks <img className='w-[23px] md:w-[30px]' src='/btn_whit_arrow.svg' /></a>
            </div>
            <img className='absolute left-0 bottom-0 w-[70px] lg:w-[110px] 1280:w-[auto]' src='/brand_journey/cards_dbl_arrow.svg' />
          </div>
          <div className="w-[100%] md:w-[40%] lg:w-[50%] hidden md:block">
            <img className="w-full 1920:h-[600px] 1280:h-[600px] h-[600px] object-cover" src="/Cap_Overview/Incity.jpg"></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}




