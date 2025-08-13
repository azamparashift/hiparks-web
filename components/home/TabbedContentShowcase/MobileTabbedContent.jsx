"use client";
import React, { useEffect, useRef, useState } from "react";
import { DropdownFilter } from "./tabbed-mobile/DropdownFilter";
import { CardSlider } from "./tabbed-mobile/CardSlider";
import { NavControls } from "./tabbed-mobile/NavControls";
import { HeaderSection } from "./tabbed-mobile/HeaderSection";
import { tabData } from "./shared/tabData";

// const MobileTabbedContent = () => {
//   const [tabs, setTabs] = useState([]);
//   const [activeTab, setActiveTab] = useState("");
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     const init = async () => {
//       const fetchedTabs = await fetchTabs();
//       setTabs(fetchedTabs);
//       setActiveTab(fetchedTabs[0]?.slug);
//     };
//     init();
//   }, []);

//   useEffect(() => {
//     if (!activeTab) return;
//     fetchCardsByTab(activeTab).then(setCards);
//   }, [activeTab]);

//   return (
//     <div className="block py-6 sm:hidden">
//       <HeaderSection
//         title="Explore Horizon"
//         description="Real-world success stories and updates"
//       />
//       <DropdownFilter
//         options={tabs.map((t) => ({ value: t.slug, label: t.label }))}
//         selected={activeTab}
//         onChange={setActiveTab}
//       />
//       <CardSlider cards={cards} />
//       <NavControls
//         onPrev={() => {}}
//         onNext={() => {}}
//         onViewAll={() => console.log("Navigate to full list")}
//       />
//     </div>
//   );
// };

// export default MobileTabbedContent;

// const MobileTabbedContent = () => {
//   const [activeSlug, setActiveSlug] = useState(tabData[0].slug);
//   const activeTab = tabData.find((t) => t.slug === activeSlug);

//   const handlePrev = () => {
//     // custom scroll logic or swiper integration
//   };

//   const handleNext = () => {
//     // custom scroll logic or swiper integration
//   };

//   const handleViewAll = () => {
//     console.log("View all clicked");
//   };

//   return (
//     <div className="block py-6 sm:hidden">
//       <HeaderSection
//         title={activeTab.title}
//         description={activeTab.description}
//       />
//       <DropdownFilter
//         options={tabData.map((t) => ({ value: t.slug, label: t.label }))}
//         selected={activeSlug}
//         onChange={setActiveSlug}
//       />
//       <CardSlider cards={activeTab.cards} />
//       <NavControls
//         onPrev={handlePrev}
//         onNext={handleNext}
//         onViewAll={handleViewAll}
//       />
//     </div>
//   );
// };

// export default MobileTabbedContent;

// MobileTabbedContent.jsx

// const MobileTabbedContent = () => {
//   const [activeSlug, setActiveSlug] = useState(tabData[0].slug);
//   const activeTab = tabData.find((t) => t.slug === activeSlug);

//   const handleViewAll = () => {
//     console.log("View all clicked");
//   };

//   return (
//     <div className="block sm:hidden">
//       <HeaderSection
//         title={activeTab.title}
//         description={activeTab.description}
//       />
//       <DropdownFilter
//         options={tabData.map((t) => ({ value: t.slug, label: t.label }))}
//         selected={activeSlug}
//         onChange={setActiveSlug}
//       />
//       {/* swiperRef prop is no longer needed */}
//       <CardSlider cards={activeTab.cards} />
//       {/* onPrev/onNext props are no longer needed */}
//       {/* <NavControls onViewAll={handleViewAll} /> */}
//     </div>
//   );
// };

// export default MobileTabbedContent;
///******************************************** */

// const MobileTabbedContent = ({ tabData = [] }) => {
//   const [activeSlug, setActiveSlug] = useState(tabData?.[0]?.slug || "");

//   const activeTab = tabData.find((t) => t.slug === activeSlug);

//   if (!activeTab) return null; // Or fallback UI

//   const handleViewAll = () => {
//     console.log("View all clicked");
//   };

//   return (
//     <div className="block md:hidden">
//       <HeaderSection
//         title={activeTab.title}
//         description={activeTab.description}
//       />
//       <DropdownFilter
//         options={tabData.map((t) => ({ value: t.slug, label: t.label }))}
//         selected={activeSlug}
//         onChange={setActiveSlug}
//       />
//       <CardSlider cards={activeTab.cards} />
//     </div>
//   );
// };

// export default MobileTabbedContent;

const MobileTabbedContent = ({ tabData = [] }) => {
  const defaultSlug = tabData[0]?.slug || "";
  const [activeSlug, setActiveSlug] = useState(defaultSlug);

  const activeTab = tabData.find((t) => t.slug === activeSlug);

  if (!activeTab) return null;

  const handleViewAll = () => {
    console.log("View all clicked for:", activeTab.slug);
  };

  return (
    <div className="block sm:hidden">
      <HeaderSection
        title={activeTab.title}
        description={activeTab.description}
      />
      <DropdownFilter
        options={tabData.map((t) => ({ value: t.slug, label: t.label }))}
        selected={activeSlug}
        onChange={setActiveSlug}
      />
      <CardSlider
        cards={activeTab.cards}
        onViewAll={handleViewAll}
        type={activeTab.slug}
      />
    </div>
  );
};

export default MobileTabbedContent;
