// "use client";
// import React, { useState } from "react";
// import TabHeader from "./TabHeader";
// import TabContent from "./_components/TabContent";

// const TabbedContentShowcase = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="relative min-h-[100vh] w-full py-[80px]  overflow-hidden">
//       <div className="hidden sm:block">
//         <div className="fix">
//           <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
//           <TabContent activeTab={activeTab} />
//         </div>
//         <div
//           className="absolute bottom-0 left-0 -translate-x-1/2 w-[420px] h-[290px]
//         bg-[#7F56D9] opacity-50 blur-[80px] pointer-events-none -z-10 rounded-full"
//         />
//       </div>
//       <div className="block sm:hidden">
//         <TabContent activeTab={activeTab} />
//       </div>
//     </div>
//   );
// };

// export default TabbedContentShowcase;

// "use client";
// import React, { useState } from "react";
// import TabHeader from "./TabHeader";
// import TabContent from "./_components/TabContent";
// import MobileTabbedContent from "./MobileTabbedContent";

// const TabbedContentShowcase = ({ tabData }) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const { posts, events, news, pressRelease } = tabData;

//   return (
//     <div className="relative h-auto w-full py-[48px] lg:py-[80px] overflow-hidden">
//       {/* 🖥️ Desktop View */}
//       <div className="absolute w-[438.795px] h-[454.148px] bg-[#7F56D9] bottom-6 left-0 opacity-15 blur-[92px]"></div>
//       {/* <div className="absolute w-[200.795px] h-[150.148px] bg-[#7F56D9] bottom-2 left-0 opacity-15 blur-[92px]"></div> */}

//       <div className="absolute w-[278.128px] h-[442.8px] bg-[#22B148] bottom-0.5 left-5 opacity-10 blur-[92px] 1920:text-9xl "></div>
//       <div className="relative hidden min-h-full md:block">
//         <div className="fix">
//           <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
//           <TabContent
//             activeTab={activeTab}
//             posts={posts}
//             events={events}
//             news={news}
//             pressRelease={pressRelease}
//           />
//         </div>

//         <div
//           className="absolute bottom-0 left-0 -translate-x-1/2 w-[420px] h-[290px]
//           bg-[#7F56D9] opacity-50 blur-[80px] pointer-events-none -z-10 rounded-full"
//         />
//       </div>

//       {/* 📱 Mobile View */}
//       <div className="block md:hidden">
//         <MobileTabbedContent
//           posts={posts}
//           events={events}
//           news={news}
//           pressRelease={pressRelease}
//         />
//       </div>
//     </div>
//   );
// };

// export default TabbedContentShowcase;
///**************************************************************** */

// "use client";
// import React, { useState, useEffect } from "react";
// import TabHeader from "./TabHeader";
// import TabContent from "./_components/TabContent";
// import { fetchTabContent } from "@/lib/fetchSingleTab";
// import MobileTabbedContent from "./MobileTabbedContent";

// const TabbedContentShowcase = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [tabData, setTabData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch whenever tab changes
//   useEffect(() => {
//     setLoading(true);
//     fetchTabContent(activeTab)
//       .then((data) => {
//         setTabData(data);
//       })
//       .finally(() => setLoading(false));
//   }, [activeTab]);

//   return (
//     <div className="relative h-full w-full py-[48px] lg:py-[80px] overflow-hidden fix">
//       {/* Desktop View */}
//       <div className="relative hidden min-h-[805px] md:block">
//         <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />

//         {loading ? (
//           <p className="p-6">Loading...</p>
//         ) : (
//           <TabContent activeTab={activeTab} content={tabData} />
//         )}
//       </div>

//       {/* Mobile View */}
//       <div className="block md:hidden">
//         {!loading && <MobileTabbedContent tabData={tabData} />}
//       </div>
//     </div>
//   );
// };

// export default TabbedContentShowcase;
///**************************************************************** */
"use client";
import React, { useState, useEffect } from "react";
import TabHeader from "./TabHeader";
import TabContent from "./_components/TabContent";
import { fetchTabContent } from "@/lib/fetchSingleTab";
import { fetchAllTabsContent } from "@/lib/fetchAllTabsContent"; // you'll add this
import MobileTabbedContent from "./MobileTabbedContent";
import { tabTexts } from "@/utils/tabTexts";

const TabbedContentShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState([]);
  const [allTabData, setAllTabData] = useState([]);
  const [loading, setLoading] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      if (isMobile) {
        const data = await fetchAllTabsContent(); // fetch all for mobile
        setAllTabData(data);
      } else {
        const data = await fetchTabContent(activeTab);
        setTabData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [activeTab]);

  return (
    <div className="relative h-full w-full py-[48px] lg:py-[80px] overflow-hidden fix">
      {/* Desktop View */}
      <div className="relative hidden min-h-[805px] md:block">
        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {loading ? (
          <p className="p-6 mt-7 text-3xl">Loading...</p>
        ) : (
          <TabContent activeTab={activeTab} content={tabData} />
        )}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        {!loading && <MobileTabbedContent tabData={allTabData} />}
      </div>
    </div>
  );
};

export default TabbedContentShowcase;
