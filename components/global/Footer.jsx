

import Socials from "./Socials";
import Newsletter from "../home/Newsletter/Newsletter";

// Link Data
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Network", href: "/network" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Business Solutions", href: "/business-solutions" },
  { label: "Insights", href: "/insights" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Investor Relations", href: "/investor-relations" },
  { label: "Know Us", href: "/know-us" },
  { label: "Contact Us", href: "/contact" },
];

const networkLinks = [
  { label: "Delhi", href: "/network/delhi" },
  { label: "Haryana", href: "/network/haryana" },
  { label: "Goa", href: "/network/goa" },
  { label: "Maharashtra", href: "/network/maharashtra" },
  { label: "Gujarat", href: "/network/gujarat" },
  { label: "Tamil Nadu", href: "/network/tamil-nadu" },
  { label: "Telangana", href: "/network/telangana" },
  { label: "Karnataka", href: "/network/karnataka" },
];

const sectorLinks = [
  { label: "Auto & Auto components", href: "/sectors/auto" },
  { label: "FMCG & Retail", href: "/sectors/fmcg" },
  { label: "Engineering & Aerospace", href: "/sectors/engineering" },
  { label: "Packaging", href: "/sectors/packaging" },
  { label: "Logistics & Supply Chain", href: "/sectors/logistics" },
  { label: "Ecommerce", href: "/sectors/ecommerce" },
  { label: "Energy", href: "/sectors/energy" },
  { label: "Chemicals", href: "/sectors/chemicals" },
];

export default function Footer() {
  return (
    <div>
      <Newsletter />
      <Socials />
      <div className="flex flex-col lg:flex-row md:gap-[45px] lg:gap-[170px] w-full md:py-[40px] py-8 px-4 md:pr-[45px] md:pl-[45px] lg:pl-[50px] lg:pr-[50px] lg:py-[40px] xl:pr-[80px] xl:py-[80px]">
        {/* Left Column */}
        <div className="md:w-[30%] pb-8 md:pb-0 w-full flex flex-col md:gap-[30px] lg:gap-[60px]">
          <div>
            <img
              src="/horizonlogo.png"
              width={191}
              height={45}
              alt="Horizon Logo"
            />
          </div>
          <div className="flex flex-col gap-[12px] md:gap-[30px]">
            <div className="pt-8 sm:pt-0">
              <h1 className="text-[22px] bw-sb text-black">Contact</h1>
            </div>
            <div className="text-black flex flex-col gap-[12px]">
              <p className="inter-r leading-[24px] text-[#4D4D4D] text-[15px] sm:text-[16px]">
                Horizon Industrial Parks Pvt Ltd
                <br />
                Floor 15, Tower 1, One World Center
                <br />
                Lower Parel, Mumbai 400 013
              </p>
              <div className="flex flex-col gap-[8px] sm:gap-[16px] inter-r text-[15px] md:text-[16px]">
                <span>contactus@HiParks.com</span>
                <span>+91 88799 70705</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full">
          <div className="flex flex-col gap-8 md:flex-row justify-between 2xl:justify-normal 2xl:gap-[330px]">
            {/* Quick Links */}
            <div className="flex flex-col gap-[12px] md:gap-[30px]">
              <h1 className="text-[22px] bw-sb text-black">Quick Links</h1>
              <ul className="flex justify-between inter-r text-[15px] md:text-[16px] text-[#4D4D4D]">
                {/* Desktop */}
                <div className="hidden md:flex md:flex-col md:gap-[16px]">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </div>
                {/* Mobile */}
                <div className="flex w-full md:hidden">
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {quickLinks.slice(0, 5).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {quickLinks.slice(5).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                </div>
              </ul>
            </div>

            {/* Network */}
            <div className="flex flex-col gap-[12px] md:gap-[30px]">
              <h1 className="text-[22px] bw-sb text-black">Network</h1>
              <ul className="flex justify-between inter-r text-[15px] md:text-[16px] text-[#4D4D4D]">
                {/* Desktop */}
                <div className="hidden md:flex md:flex-col md:gap-[16px]">
                  {networkLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </div>
                {/* Mobile */}
                <div className="flex w-full md:hidden">
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {networkLinks.slice(0, 4).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {networkLinks.slice(4).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                </div>
              </ul>
            </div>

            {/* Sectors */}
            <div className="flex flex-col gap-[12px] md:gap-[30px]">
              <h1 className="text-[22px] bw-sb text-black">Sectors</h1>
              <ul className="flex justify-between inter-r text-[15px] md:text-[16px] text-[#4D4D4D]">
                {/* Desktop */}
                <div className="hidden md:flex md:flex-col md:gap-[16px]">
                  {sectorLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </div>
                {/* Mobile */}
                <div className="flex w-full md:hidden">
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {sectorLinks.slice(4).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                  <span className="flex flex-col gap-[8px] w-1/2">
                    {sectorLinks.slice(0, 4).map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex items-center justify-center border-t border-[#CDCDCD]">
        <span className="inter-r text-[10px] sm:text-[14px] text-[#4D4D4C] py-[10px]">
          2025 Horizon Industrial Parks. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
