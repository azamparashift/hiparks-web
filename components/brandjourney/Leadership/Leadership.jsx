import React from "react";
import Btn from "@/components/global/Btn";

const Leadership = () => {

  return (
    <div>
      <div className="relative w-full  overflow-hidden fix 1280:pt-[100px] 1280:pb-[55px] pt-[45px] pb-[45px]">
        <div className="flex justify-between items-center">
          <h1 className="sec_hd bw-r"><span className="bw-m">Leadership</span> Team</h1>
          <Btn text='View All' />
        </div>
        <div className="flex justify-between md:mt-[49px] mt-[24px]">
          <div className="w-full">
            <img src='/brand_journey/leadership_bg.jpg' className="w-[100%] " />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Leadership;
