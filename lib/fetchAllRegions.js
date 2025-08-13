// async function fetchRegionData() {
//   const baseURL =
//     "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?categories=";

import { regionCategoryMap } from "./regionCategoryMap";

//   const regionEntries = await Promise.all(
//     Object.entries(regionCategoryMap).map(async ([regionKey, categoryId]) => {
//       const res = await fetch(`${baseURL}${categoryId}`);
//       const parks = await res.json();

//       return [
//         regionKey,
//         {
//           label: regionKey,
//           fill: "#2E373A",
//           stroke: "#000",
//           strokeWidth: 0.6,
//           numberBox: {
//             label: String(parks.length).padStart(2, "0"),
//             x: 320,
//             y: 460,
//           },
//           numberBoxMobile: {
//             label: String(parks.length).padStart(2, "0"),
//             x: 320,
//             y: 460,
//           },
//           locations: parks.map((park, idx) => ({
//             id: park.id,
//             x: 0, // placeholder for your map pin coords
//             y: 0, // placeholder for your map pin coords
//             label: park.title?.rendered || "",
//             city: "", // if in ACF, use park.acf.city or similar
//             image: park.acf?.park_spotlight_image || park.acf?.photo?.[0] || "",
//             purpose: park.acf?.land_usage || "",
//             area: park.acf?.land_area || "",
//             potential: park.acf?.development_potential || "",
//             certification: park.acf?.construction_status || "",
//             color: "#22B148", // could be random or based on type
//           })),
//         },
//       ];
//     })
//   );

//   return Object.fromEntries(regionEntries);
// }
async function fetchAllRegions() {
  const baseURL =
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks";

  const regionPromises = Object.entries(regionCategoryMap).map(
    async ([regionKey, categoryId]) => {
      try {
        // Add timeout to fetch
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        console.log(
          `Fetching parks for region: ${regionKey} (category: ${categoryId})`
        );
        const res = await fetch(`${baseURL}?categories=${categoryId}`, {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const parks = await res.json();
        console.log(`Parks for ${regionKey}:`, parks);

        return [
          regionKey,
          parks.map((park) => {
            const location = {
              id: park.id,
              label: park.acf?.park_name || park.title?.rendered || "Unknown",
              city: park.acf?.state_name || "",
              image: park.acf?.park_spotlight_image || "",
              purpose: park.acf?.land_usage || "",
              area: park.acf?.land_area || "",
              potential: park.acf?.development_potential || "",
              certification: park.acf?.igbc_status || "",
              coordinates: park.acf?.coordinates_no || "",
              color: "#22B148",
            };
            console.log(`Parsed location for ${regionKey}:`, location);
            return location;
          }),
        ];
      } catch (err) {
        console.error(`Error fetching parks for ${regionKey}:`, err);
        return [regionKey, []]; // Return empty locations on error
      }
    }
  );

  const regions = await Promise.all(regionPromises);
  console.log("All regions fetched:", Object.fromEntries(regions));
  return Object.fromEntries(regions);
}
