// import { regionCategoryMap, staticRegionData } from "./mapStaticData";
// async function fetchAllRegions() {
//   const baseURL =
//     "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";

//   const regionPromises = Object.entries(regionCategoryMap).map(
//     async ([regionKey, categoryId]) => {
//       const res = await fetch(`${baseURL}?categories=${categoryId}`);
//       const parks = await res.json();

//       return [
//         regionKey,
//         parks.map((park) => ({
//           id: park.id,
//           label: park.acf?.park_name || park.title?.rendered || "",
//           city: park.acf?.state_name || "",
//           image: park.acf?.park_spotlight_image || "",
//           purpose: park.acf?.land_usage || "",
//           area: park.acf?.land_area || "",
//           potential: park.acf?.development_potential || "",
//           certification: park.acf?.igbc_status || "",
//           coordinates: park.acf?.coordinates_no || "",
//           color: "#22B148",
//         })),
//       ];
//     }
//   );

//   const regions = await Promise.all(regionPromises);
//   return Object.fromEntries(regions);
// }

// export async function buildDynamicHighlightedRegions() {
//   const fetchedRegions = await fetchAllRegions();

//   const merged = {};
//   for (const regionKey in staticRegionData) {
//     merged[regionKey] = {
//       ...staticRegionData[regionKey],
//       locations: fetchedRegions[regionKey] || [],
//     };
//   }
//   return merged;
// }

// import { regionCategoryMap, staticRegionData } from "./mapStaticData";

// async function fetchAllRegions() {
//   const baseURL =
//     "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";

//   const regionPromises = Object.entries(regionCategoryMap).map(
//     async ([regionKey, categoryId]) => {
//       const res = await fetch(`${baseURL}?categories=${categoryId}`);
//       const parks = await res.json();

//       return [
//         regionKey,
//         parks.map((park) => ({
//           id: park.id,
//           label: park.acf?.park_name || park.title?.rendered || "",
//           city: park.acf?.state_name || "",
//           image: park.acf?.park_spotlight_image || "",
//           purpose: park.acf?.land_usage || "",
//           area: park.acf?.land_area || "",
//           potential: park.acf?.development_potential || "",
//           certification: park.acf?.igbc_status || "",
//           coordinates: park.acf?.coordinates_no || "", // Keep for debugging
//           x: parseFloat(park.acf?.svg_x) || 100, // Map svg_x to x
//           y: parseFloat(park.acf?.svg_y) || 100, // Map svg_y to y
//           color: "#22B148",
//         })),
//       ];
//     }
//   );

//   const regions = await Promise.all(regionPromises);
//   console.log("API regions:", JSON.stringify(regions, null, 2));
//   return Object.fromEntries(regions);
// }

// export async function buildDynamicHighlightedRegions() {
//   const fetchedRegions = await fetchAllRegions();

//   const merged = {};
//   for (const regionKey in staticRegionData) {
//     if (!fetchedRegions[regionKey]) {
//       console.warn(`No API data for region: ${regionKey}`);
//     }
//     merged[regionKey] = {
//       ...staticRegionData[regionKey],
//       locations:
//         fetchedRegions[regionKey] ||
//         staticRegionData[regionKey].locations ||
//         [],
//     };
//   }
//   console.log("Merged regions:", JSON.stringify(merged, null, 2));
//   return merged;
// }

// import { regionCategoryMap, staticRegionData } from "./mapStaticData";

// async function fetchAllRegions() {
//   const baseURL =
//     "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";

//   const regionPromises = Object.entries(regionCategoryMap).map(
//     async ([regionKey, categoryId]) => {
//       const res = await fetch(`${baseURL}?categories=${categoryId}`);
//       const parks = await res.json();

//       return [
//         regionKey,
//         parks.map((park) => {
//           const staticLocation = staticRegionData[regionKey]?.locations?.find(
//             (loc) => loc.id === park.id || loc.label === park.acf?.park_name
//           );
//           return {
//             id: park.id,
//             label: park.acf?.park_name || park.title?.rendered || "",
//             city: park.acf?.state_name || "",
//             image: park.acf?.park_spotlight_image || "",
//             purpose: park.acf?.land_usage || "",
//             area: park.acf?.land_area || "",
//             potential: park.acf?.development_potential || "",
//             certification: park.acf?.igbc_status || "",
//             coordinates: park.acf?.coordinates_no || "",
//             x: parseFloat(park.acf?.svg_x) || staticLocation?.x || 100,
//             y: parseFloat(park.acf?.svg_y) || staticLocation?.y || 100,
//             x_zoomed:
//               parseFloat(park.acf?.svg_x_zoomed) ||
//               staticLocation?.x_zoomed ||
//               parseFloat(park.acf?.svg_x) ||
//               100,
//             y_zoomed:
//               parseFloat(park.acf?.svg_y_zoomed) ||
//               staticLocation?.y_zoomed ||
//               parseFloat(park.acf?.svg_y) ||
//               100,
//             color: "#22B148",
//           };
//         }),
//       ];
//     }
//   );

//   const regions = await Promise.all(regionPromises);
//   console.log("API regions:", JSON.stringify(regions, null, 2));
//   return Object.fromEntries(regions);
// }

// export async function buildDynamicHighlightedRegions() {
//   const fetchedRegions = await fetchAllRegions();

//   const merged = {};
//   for (const regionKey in staticRegionData) {
//     if (!fetchedRegions[regionKey]) {
//       console.warn(`No API data for region: ${regionKey}`);
//     }
//     merged[regionKey] = {
//       ...staticRegionData[regionKey],
//       locations:
//         fetchedRegions[regionKey] ||
//         staticRegionData[regionKey].locations ||
//         [],
//     };
//   }
//   console.log("Merged regions:", JSON.stringify(merged, null, 2));
//   return merged;
// }
//************************************************************************** */
// import { regionCategoryMap, staticRegionData } from "./mapStaticData";

// async function fetchAllRegions() {
//   const baseURL =
//     "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";

//   const regionPromises = Object.entries(regionCategoryMap).map(
//     async ([regionKey, categoryId]) => {
//       const res = await fetch(`${baseURL}?categories=${categoryId}`);
//       const parks = await res.json();

//       return [
//         regionKey,
//         parks.map((park) => {
//           const staticLocation = staticRegionData[regionKey]?.locations?.find(
//             (loc) => loc.id === park.id || loc.label === park.acf?.park_name
//           );
//           return {
//             id: park.id,
//             label: park.acf?.park_name || park.title?.rendered || "",
//             city: park.acf?.state_name || "",
//             image: park.acf?.park_spotlight_image || "",
//             purpose: park.acf?.land_usage || "",
//             area: park.acf?.land_area || "",
//             potential: park.acf?.development_potential || "",
//             certification: park.acf?.igbc_status || "",
//             coordinates: park.acf?.coordinates_no || "",
//             x: parseFloat(park.acf?.svg_x) || staticLocation?.x || 100,
//             y: parseFloat(park.acf?.svg_y) || staticLocation?.y || 100,
//             x_zoomed:
//               parseFloat(park.acf?.svg_x_zoomed) ||
//               staticLocation?.x_zoomed ||
//               parseFloat(park.acf?.svg_x) ||
//               100,
//             y_zoomed:
//               parseFloat(park.acf?.svg_y_zoomed) ||
//               staticLocation?.y_zoomed ||
//               parseFloat(park.acf?.svg_y) ||
//               100,
//             color: "#22B148",
//           };
//         }),
//       ];
//     }
//   );

//   const regions = await Promise.all(regionPromises);
//   console.log("API regions:", JSON.stringify(regions, null, 2));
//   return Object.fromEntries(regions);
// }

// export async function buildDynamicHighlightedRegions() {
//   const fetchedRegions = await fetchAllRegions();

//   const merged = {};
//   for (const regionKey in staticRegionData) {
//     if (!fetchedRegions[regionKey]) {
//       console.warn(`No API data for region: ${regionKey}`);
//     }
//     merged[regionKey] = {
//       ...staticRegionData[regionKey],
//       numberBoxMobile:
//         staticRegionData[regionKey].numberBoxMobile ||
//         staticRegionData[regionKey].numberBox,
//       locations:
//         fetchedRegions[regionKey] ||
//         staticRegionData[regionKey].locations ||
//         [],
//     };
//   }
//   console.log("Merged regions:", JSON.stringify(merged, null, 2));
//   return merged;
// }
//************************************************************ */

import { regionCategoryMap, staticRegionData } from "./mapStaticData";

async function fetchAllRegions() {
  const baseURL =
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";

  const regionPromises = Object.entries(regionCategoryMap).map(
    async ([regionKey, categoryId]) => {
      const res = await fetch(`${baseURL}?categories=${categoryId}`);
      const parks = await res.json();

      return [
        regionKey,
        parks.map((park) => {
          const staticLocation = staticRegionData[regionKey]?.locations?.find(
            (loc) => loc.id === park.id || loc.label === park.acf?.park_name
          );
          return {
            id: park.id,
            label: park.acf?.park_name || park.title?.rendered || "",
            city: park.acf?.state_name || "",
            image: park.acf?.park_spotlight_image || "",
            purpose: park.acf?.land_usage || "",
            area: park.acf?.land_area || "",
            potential: park.acf?.development_potential || "",
            certification: park.acf?.igbc_status || "",
            coordinates: park.acf?.coordinates_no || "",
            x: parseFloat(park.acf?.svg_x) || staticLocation?.x || 100,
            y: parseFloat(park.acf?.svg_y) || staticLocation?.y || 100,
            x_zoomed:
              parseFloat(park.acf?.svg_x_zoomed) ||
              staticLocation?.x_zoomed ||
              parseFloat(park.acf?.svg_x) ||
              100,
            y_zoomed:
              parseFloat(park.acf?.svg_y_zoomed) ||
              staticLocation?.y_zoomed ||
              parseFloat(park.acf?.svg_y) ||
              100,
            color: park.acf?.pin_color || "#FF0000", // Use pin_color from API, fallback to red
          };
        }),
      ];
    }
  );

  const regions = await Promise.all(regionPromises);
  console.log("API regions:", JSON.stringify(regions, null, 2));
  return Object.fromEntries(regions);
}

export async function buildDynamicHighlightedRegions() {
  const fetchedRegions = await fetchAllRegions();

  const merged = {};
  for (const regionKey in staticRegionData) {
    if (!fetchedRegions[regionKey]) {
      console.warn(`No API data for region: ${regionKey}`);
    }
    merged[regionKey] = {
      ...staticRegionData[regionKey],
      numberBoxMobile:
        staticRegionData[regionKey].numberBoxMobile ||
        staticRegionData[regionKey].numberBox,
      locations:
        fetchedRegions[regionKey] ||
        staticRegionData[regionKey].locations ||
        [],
    };
  }
  console.log("Merged regions:", JSON.stringify(merged, null, 2));
  return merged;
}
