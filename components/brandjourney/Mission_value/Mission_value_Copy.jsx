'use client';
import { ReactLenis } from 'lenis/react';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

export default function Mission_value() {

    const container_new = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container_new,
        offset: ['start start', 'end end'],
    });

    return (
        <ReactLenis root>
            <main ref={container_new} className="bg-[#161515] w-full " style={{ height: '400vh' }}>
                {/* Purpose Card */}
                <Purpose progress={scrollYProgress} />
            </main>
        </ReactLenis>
    );
}


// Purpose
function Purpose({ progress }) {
    const container1 = useRef(null);
    const { scrollYProgress } = useScroll({ target: container1, offset: ['start end', 'start start'] });


    // First box
    const frst_img_width = useTransform(progress, [0, 0.4], ['50%', '0%']);

    // Purpose box
    const prps_dv_height = useTransform(progress, [0, 0.4], ['426px', '218px']);
    const prps_dv_bg = useTransform(progress, [0, 0.4], ['#22B148', '#fff']);
    const prps_dv_hd = useTransform(progress, [0, 0.4], ['#fff', '#000']);
    const prps_dv_p = useTransform(progress, [0, 0.4], ['1', '0']);
    const prps_dv_vctr = useTransform(progress, [0, 0.4], ['1', '0']);

    // Mission box
    const msn_dv_height = useTransform(progress, [0, 0.4], ['218px', '426px']);
    const msn_dv_bg = useTransform(progress, [0, 0.4], ['#FFFFFF', '#F47922']);
    const msn_dv_hd = useTransform(progress, [0, 0.4], ['#000', '#fff']);
    const msn_dv_p = useTransform(progress, [0, 0.4], ['0', '1']);
    const msn_dv_vctr = useTransform(progress, [0, 0.4], ['0', '1']);

    const scnd_box_height = useTransform(progress, [0.5, 0.9], ['588px', '560px']);

    // Third box
    const third_img_height = useTransform(progress, [0.5, 0.9], ['588px', '560px']);
    const third_img_width = useTransform(progress, [0, 0.4], ['0%', '50%']);

    const Mission_bx_Y = useTransform(progress, [0.5, 0.9], ['0', '-100%']);
    const third_img_Y = useTransform(progress, [0.5, 0.9], ['0', '-100%']);


    // Fourth box
    const fourth_box = useTransform(progress, [0.5, 0.9], ['0%', '-102%']);
    const fourth_box_opacity = useTransform(progress, [0.5, 0.9], ['0', '1']);






    return (
        <div ref={container1} className="h-screen sticky top-0 w-full py-[90px]">
            <motion.div >
                <div className="relative fix">
                    <div className="overflow-hidden">

                        <div className="relative flex gap-[20px] overflow-hidden">

                            {/*------------ First box ------------*/}
                            <motion.div style={{ width: frst_img_width }} transition={{ duration: 0.8, ease: 'easeOut', }} className="relative">
                                <img src='/brand_journey/purpose_img.jpg' className="w-full h-full object-cover" />
                            </motion.div>

                            {/*------------ Second box ------------*/}
                            <motion.div style={{ y: Mission_bx_Y, height: scnd_box_height }} transition={{ duration: 0.8, ease: 'easeOut', }} className="w-[50%]">
                                <div className="relative flex flex-col gap-[20px]">

                                    {/*------------ Purpose box ------------*/}
                                    <motion.div style={{ height: prps_dv_height, background: prps_dv_bg }} transition={{ duration: 0.8, ease: 'easeOut', }} className="relative w-full overflow-hidden py-[50px] px-[30px]">
                                        <motion.h3 style={{ color: prps_dv_hd }} transition={{ duration: 0.8, ease: 'easeOut', }} className="bw-m text-[76px] leading-[90px] mb-[10px]"><span className="bw-l">Our</span> Purpose </motion.h3>
                                        <motion.p style={{ opacity: prps_dv_p }} transition={{ duration: 0.8, ease: 'easeOut', }} className="text-[32px] bw-m text-white leading-[38px] w-[530px]">Enable our customers succeed by proactively delivering agile solutions for accelerated growth.</motion.p>
                                        <motion.img style={{ opacity: prps_dv_vctr }} transition={{ duration: 0.8, ease: 'easeOut', }} src='/brand_journey/purpose_arrow.svg' className="absolute right-[30px] top-[78px]" />
                                    </motion.div>

                                    {/*------------ Mission box ------------*/}
                                    <motion.div style={{ height: msn_dv_height, background: msn_dv_bg }} transition={{ duration: 0.8, ease: 'easeOut', }} className="w-full overflow-hidden pt-[50px] pb-[50px] px-[30px] relative">
                                        <motion.h3 style={{ color: msn_dv_hd }} transition={{ duration: 0.8, ease: 'easeOut', }} className="bw-m text-[76px] leading-[90px] mb-[10px]"><span className="bw-l">Our</span> Mission </motion.h3>
                                        <motion.p style={{ opacity: msn_dv_p }} transition={{ duration: 0.8, ease: 'easeOut', }} className="text-white text-[32px] bw-m leading-[38px] w-[530px]">Make Horizon the dominant and preferred industrial and warehousing partner, sustainably delivering benchmark quality and superior returns.</motion.p>
                                        <motion.img style={{ opacity: msn_dv_vctr }} transition={{ duration: 0.8, ease: 'easeOut', }} src='/brand_journey/purpose_arrow.svg' className="absolute right-[30px] top-[78px]" />
                                    </motion.div>

                                </div>
                            </motion.div>

                            {/*------------ Third box ------------*/}
                            <motion.div style={{ width: third_img_width, y: third_img_Y, height: third_img_height }} transition={{ duration: 0.8, ease: 'easeOut', }} className="relative">
                                <img src='/brand_journey/mission_img.jpg' className="w-full h-full object-cover" />
                            </motion.div>

                        </div>

                        {/*------------ fourth box ------------*/}
                        <motion.div style={{ y: fourth_box, opacity: fourth_box_opacity }} transition={{ duration: 0.8, ease: 'easeOut', }} className="w-[100%]">
                            <div className="relative flex gap-[20px] pl-[20px] mt-[20px]">

                                {/*------------ Value box ------------*/}
                                <div className="relative overflow-hidden py-[50px] px-[30px] w-[50%] bg-[#8B37A4]">
                                    <h3 style={{ color: prps_dv_hd }} transition={{ duration: 0.8, ease: 'easeOut', }} className="text-white bw-m text-[76px] leading-[90px] mb-[10px]"><span className="bw-l">Our</span> Values </h3>

                                    <div className='mt-[30px] flex flex-col gap-[45px]'>

                                        {/* Agility  */}
                                        <div className='flex gap-[80px] pl-[25px]'>
                                            <img src='/brand_journey/agility_icon.svg' />
                                            <div className=''>
                                                <h4 className='text-white text-[30px] bw-m'>Agility</h4>
                                                <p className='text-white text-[20px] bw-l leading-[28px]'>Be proactive and alert to the needs of our stakeholders</p>
                                            </div>
                                        </div>

                                        {/* Collaboration */}
                                        <div className='flex gap-[80px] pl-[25px]'>
                                            <img src='/brand_journey/collabration_icon.svg' />
                                            <div className=''>
                                                <h4 className='text-white text-[30px] bw-m'>Collaboration</h4>
                                                <p className='text-white text-[20px] bw-l leading-[28px]'>Practise mutual respect and teamwork to maximise value of partnerships</p>
                                            </div>
                                        </div>

                                        {/* EXCELLENCE */}
                                        <div className='flex gap-[80px] pl-[25px]'>
                                            <img src='/brand_journey/excellence_icon.svg' />
                                            <div className=''>
                                                <h4 className='text-white text-[30px] bw-m'>EXCELLENCE</h4>
                                                <p className='text-white text-[20px] bw-l leading-[28px]'>Create systems to continuously establish and surpass benchmarks</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="relative w-[50%]">
                                    <img src='/brand_journey/value_img.jpg' className="w-full h-full object-cover" />
                                </div>

                            </div>
                        </motion.div>

                    </div>

                </div>
            </motion.div>
        </div>
    );
}









