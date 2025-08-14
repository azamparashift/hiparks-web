// import { formatCaseStudies } from "@/utils/formatters/formatCaseStudies";
// import { formatEvents } from "@/utils/formatters/formatEvents";
// import { formatNews } from "@/utils/formatters/formatNews";
// import { formatPosts } from "@/utils/formatters/formatPosts";
// import { formatPressRelease } from "@/utils/formatters/formatPressRelease";
// import { tabTexts } from "@/utils/tabTexts";

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

// const tabMap = {
//   0: { endpoint: "/client_stories", formatter: formatCaseStudies },
//   1: { endpoint: "/posts", formatter: formatPosts },
//   2: { endpoint: "/news", formatter: formatNews },
//   3: { endpoint: "/events", formatter: formatEvents },
//   4: { endpoint: "/press_release", formatter: formatPressRelease },
// };

// export async function fetchAllTabsContent() {
//   const results = await Promise.all(
//     Object.entries(tabMap).map(async ([index, { endpoint, formatter }]) => {
//       try {
//         const res = await fetch(`${BASE_URL}${endpoint}`, {
//           cache: "no-store",
//         });
//         const json = await res.json();

//         const cards = formatter(json).slice(0, 5);

//         const tabText = tabTexts[index];

//         return {
//           slug: tabText.name.toLowerCase().replace(/\s/g, "-"),
//           label: tabText.name,
//           title: tabText.title,
//           description: tabText.description,
//           cards,
//         };
//       } catch (error) {
//         console.error("Failed to fetch tab", index, error);
//         return null;
//       }
//     })
//   );

//   return results.filter(Boolean); // remove nulls
// }

import { formatCaseStudies } from "@/utils/formatters/formatCaseStudies";
import { formatEvents } from "@/utils/formatters/formatEvents";
import { formatNews } from "@/utils/formatters/formatNews";
import { formatPosts } from "@/utils/formatters/formatPosts";
import { formatPressRelease } from "@/utils/formatters/formatPressRelease";
import { tabTexts } from "@/utils/tabTexts";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

const tabMap = {
  0: { endpoint: "/client_stories", formatter: formatCaseStudies },
  1: { endpoint: "/posts", formatter: formatPosts },
  2: { endpoint: "/news", formatter: formatNews },
  3: { endpoint: "/events", formatter: formatEvents },
  4: { endpoint: "/press_release", formatter: formatPressRelease },
};

export async function fetchAllTabsContent() {
  const results = await Promise.all(
    Object.entries(tabMap).map(async ([index, { endpoint, formatter }]) => {
      try {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
          cache: "no-store",
        });
        const json = await res.json();

        // Remove the slice(0, 5) to fetch all cards for mobile
        const cards = formatter(json);

        const tabText = tabTexts[index];

        return {
          slug: tabText.name.toLowerCase().replace(/\s/g, "-"),
          label: tabText.name,
          title: tabText.title,
          description: tabText.description,
          cards,
        };
      } catch (error) {
        console.error("Failed to fetch tab", index, error);
        return null;
      }
    })
  );

  return results.filter(Boolean); // remove nulls
}
