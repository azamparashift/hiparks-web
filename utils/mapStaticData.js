// export const regionCategoryMap = {
//   maharashtra: 4,
//   gujarat: 3,
//   NCR: 2,
//   goa: 5,
//   karnataka: 7,
//   telangana: 6,
//   tamilnadu: 59,
// };

// // This object holds all data that is NOT from the APIexport
// export const staticRegionData = {
//   maharashtra: {
//     label: "Maharashtra",
//     fill: "#2E373A",
//     stroke: "#fff",
//     strokeWidth: 0.8,
//     numberBox: { x: 320, y: 460 }, // Updated
//     zoom: {
//       scale: 5,
//       // x: 560,
//       // y: -400,
//       x: 600,
//       y: -380,
//     }, // Updated
//   },
//   gujarat: {
//     label: "Gujarat",
//     fill: "#2E373A",
//     stroke: "#505050",
//     strokeWidth: 0.2,
//     numberBox: { x: 235, y: 380 }, // Updated
//     zoom: {
//       //   scale: 0,
//       //   x: 1340,
//       //   y: -30,
//       // },
//       scale: 6.5,
//       x: 1340,
//       y: -30,
//     },
//   },
//   NCR: {
//     label: "Delhi",
//     fill: "#2E373A",
//     stroke: "#505050",
//     strokeWidth: 0.2,
//     numberBox: { x: 400, y: 200 }, // Unchanged, as no NCR data in highlightedRegions
//     // zoom: { scale: 5, x: -150, y: 250 }, // Unchanged
//     zoom: { scale: 5.2, x: 520, y: 700 },
//   },
//   telangana: {
//     label: "Telangana",
//     fill: "#2E373A",
//     stroke: "#505050",
//     strokeWidth: 0.2,
//     numberBox: { x: 395, y: 500 }, // From Telangana.numberBox
//     // zoom: {
//     //   scale: 8,
//     //   x: 460,
//     //   y: -860,
//     // }, // From Telangana.zoom
//     zoom: { scale: 8, x: 460, y: -860 },
//   },
//   goa: {
//     label: "Goa",
//     // fill: "#1C1C1C",
//     stroke: "#505050",
//     strokeWidth: 0.2,
//     numberBox: { x: 290, y: 560 }, // Unchanged, not in highlightedRegions
//     zoom: {
//       scale: 18,
//       x: 3000,
//       y: -2900,
//     }, // Unchanged
//     // numberBox: { x: 320, y: 460 }, // Updated
//     // zoom: {
//     //   scale: 5,
//     //   // x: 560,
//     //   // y: -400,
//     //   x: 600,
//     //   y: -380,
//     // },
//   },
//   NCR: {
//     label: "Delhi",
//     fill: "#2E373A",
//     stroke: "#505050",
//     strokeWidth: 0.2,
//     numberBox: { x: 340, y: 238 }, // Unchanged, not in highlightedRegions
//     zoom: {
//       scale: 5,
//       x: -250,
//       y: -500,
//     }, // Unchanged
//   },
//   karnataka: {
//     label: "Karnataka",
//     fill: "#2E373A",
//     stroke: "#505050",
//     strokeWidth: 0.2,
//     numberBox: { x: 320, y: 560 }, // Unchanged, not in highlightedRegions
//     // zoom: {
//     //   scale: 5,
//     //   x: -250,
//     //   y: -500,
//     // }, // Unchanged
//   },
//   tamilnadu: {
//     label: "Tamil Nadu",
//     fill: "#2E373A",
//     stroke: "#505050",
//     strokeWidth: 0.2,
//     numberBox: { x: 385, y: 660 }, // From tamilnadu.numberBox
//     zoom: {
//       scale: 5.2,
//       x: 400,
//       y: -1280,
//     }, // From tamilnadu.zoom
//   },
// };
// // export const regionCategoryMap = {
// //   maharashtra: 4,
// //   gujarat: 3,
// //   NCR: 2,
// //   goa: 5,
// //   karnataka: 7,
// //   telangana: 6,
// //   tamilnadu: 59,
// // };

// // export const staticRegionData = {
// //   maharashtra: {
// //     label: "Maharashtra",
// //     fill: "#2E373A",
// //     stroke: "#fff",
// //     strokeWidth: 0.8,
// //     numberBox: { x: 320, y: 460 }, // Static label as fallback
// //     zoom: { scale: 5, x: 600, y: -380 },
// //   },
// //   gujarat: {
// //     label: "Gujarat",
// //     fill: "#2E373A",
// //     stroke: "#505050",
// //     strokeWidth: 0.2,
// //     numberBox: { x: 235, y: 380 },
// //     zoom: { scale: 6.5, x: 1340, y: -30 },
// //   },
// //   // westbengal: {
// //   //   label: "West Bengal",
// //   //   fill: "#2E373A",
// //   //   stroke: "#505050",
// //   //   strokeWidth: 0.2,
// //   //   numberBox: { x: 340, y: 238, label: "02" },
// //   //   zoom: { scale: 5.2, x: 520, y: 700 },
// //   // },
// //   telangana: {
// //     label: "Telangana",
// //     fill: "#2E373A",
// //     stroke: "#505050",
// //     strokeWidth: 0.2,
// //     numberBox: { x: 395, y: 500 },
// //     zoom: { scale: 8, x: 460, y: -860 },
// //   },
// //   andrapradesh: {
// //     label: "Andra Pradesh",
// //     fill: "#2E373A",
// //     stroke: "#505050",
// //     strokeWidth: 0.2,
// //     numberBox: { x: 400, y: 570 },
// //     zoom: { scale: 4, x: 200, y: -500 },
// //   },
// //   tamilnadu: {
// //     label: "Tamil Nadu",
// //     fill: "#2E373A",
// //     stroke: "#505050",
// //     strokeWidth: 0.2,
// //     numberBox: { x: 385, y: 660 },
// //     zoom: { scale: 5.2, x: 400, y: -1280 },
// //   },
// //   goa: {
// //     label: "Goa",
// //     fill: "#2E373A",
// //     stroke: "#505050",
// //     strokeWidth: 0.2,
// //     numberBox: { x: 290, y: 560 },
// //     zoom: { scale: 4, x: 600, y: -450 },
// //   },
// //   NCR: {
// //     label: "Delhi",
// //     fill: "#2E373A",
// //     stroke: "#505050",
// //     strokeWidth: 0.2,
// //     numberBox: { x: 400, y: 200 },
// //   },
// //   karnataka: {
// //     label: "Karnataka",
// //     fill: "#2E373A",
// //     stroke: "#505050",
// //     strokeWidth: 0.2,
// //     numberBox: { x: 320, y: 560 },
// //   },
// // };

export const regionCategoryMap = {
  maharashtra: 4,
  gujarat: 3,
  NCR: 2,
  goa: 5,
  karnataka: 7,
  telangana: 6,
  tamilnadu: 59,
};

export const staticRegionData = {
  maharashtra: {
    label: "Maharashtra",
    fill: "#2E373A",
    stroke: "#fff",
    strokeWidth: 0.8,
    numberBox: { x: 320, y: 460 },
    zoom: { scale: 5, x: 600, y: -380 },
    numberBoxMobile: {
      label: "12",
      x: 320,
      y: 460,
    },
  },
  gujarat: {
    label: "Gujarat",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 235, y: 380 },
    numberBoxMobile: {
      label: "12",
      x: 246,
      y: 370,
    },
    zoom: { scale: 6.5, x: 1340, y: -30 },
  },
  NCR: {
    label: "Delhi",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 340, y: 238 },
    numberBoxMobile: {
      label: "12",
      x: 340,
      y: 246,
    },
    zoom: { scale: 5.2, x: 520, y: 700 },
  },
  telangana: {
    label: "Telangana",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 395, y: 500 },
    numberBoxMobile: {
      x: 395,
      y: 490,
    },
    zoom: { scale: 8, x: 460, y: -860 },
  },
  goa: {
    label: "Goa",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 270, y: 570 },
    numberBoxMobile: {
      x: 285,
      y: 550,
    },
    // zoom: { scale: 4.5, x: 480, y: -820 },
    zoom: { scale: 8, x: 1100, y: -1350 },
  },
  karnataka: {
    label: "Karnataka",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 320, y: 560 },
    numberBoxMobile: {
      x: 325,
      y: 560,
    },
    zoom: { scale: 5, x: 610, y: -810 },
  },
  tamilnadu: {
    label: "Tamil Nadu",
    fill: "#2E373A",
    stroke: "#505050",
    strokeWidth: 0.2,
    numberBox: { x: 385, y: 660 },
    numberBoxMobile: {
      label: "12",
      x: 385,
      y: 630,
    },
    zoom: { scale: 5.2, x: 400, y: -1280 },
  },
};
