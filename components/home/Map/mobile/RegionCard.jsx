import { ArrowUpRight } from "lucide-react";

export default function RegionCard({ park }) {
  return (
    <div className="min-w-[300px] min-h-[375px] bg-[#1A1A1A] rounded-none  shadow-lg">
      <img
        src={park.image}
        alt={park.label}
        className="w-full h-[180px] object-cover rounded-none "
      />
      <div className="p-3">
        {/* <h4 className="text-lg font-semibold text-[#F47920]">
          {park.label}, {park.city}
        </h4> */}
        <h3 className="text-[25px] bw-r text-[#F47920]">
          {park.label},
          {park.city && (
            <span className="text-[18px] text-[#F47920]"> {park.city}</span>
          )}
        </h3>
        <p className="mb-1 text-[15px] text-gray-400">{park.purpose}</p>
        {/* <div className="mt-2 space-y-1 text-sm text-white/80">
          <p>Area: {park.area}</p>
          <p>Potential: {park.potential}</p>
          <p>Certification: {park.certification}</p>
        </div> */}
        <div className="w-full text-white/80 bg-[#313131] leading-[26px] mt-2.5 px-[7px] text-sm rounded-[4px] py-[8px]">
          <div className="flex justify-between">
            <p className="bw-r bw-m text-[13px]">Total Area:</p>
            <p className="bw-m text-[15px]">{park.area}</p>
          </div>

          <div className="flex justify-between">
            <p className="bw-r bw-m text-[13px]">Potential:</p>
            <p className="bw-m text-[15px]">{park.potential}</p>
          </div>

          <div className="flex justify-between">
            <p className="bw-r bw-m text-[13px]">Certification:</p>
            <p className="bw-m text-[14px]">{park.certification}</p>
          </div>
        </div>

        <h3 className="text-[16px] pt-3 bw-r text-[#F47920] flex items-center">
          View Park <ArrowUpRight size={20} color="#F47920" />
        </h3>
      </div>
    </div>
  );
}
