// // lib/fetchSingleTab.js
// import { formatEvents } from "@/utils/formatters/formatEvents";
// import { formatNews } from "@/utils/formatters/formatNews";
// import { formatPosts } from "@/utils/formatters/formatPosts";
// import { formatPressRelease } from "@/utils/formatters/formatPressRelease";

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

// export async function fetchTabContent(tabIndex) {
//   let endpoint = "";
//   let formatter = (d) => d;

//   switch (tabIndex) {
//     case 0: // Case Studies
//     case 1: // Blog (assuming same posts endpoint)
//       endpoint = "/posts";
//       formatter = formatPosts;
//       break;
//     case 2: // News
//       endpoint = "/news";
//       formatter = formatNews;
//       break;
//     case 3: // Events
//       endpoint = "/events";
//       formatter = formatEvents;
//       break;
//     case 4: // Press Release
//       endpoint = "/press_release";
//       formatter = formatPressRelease;
//       break;
//   }

//   const res = await fetch(`${BASE_URL}${endpoint}`);
//   const data = await res.json();
// return formatter(data).slice(0, 4);
// }

// lib/fetchSingleTab.js
import { formatCaseStudies } from "@/utils/formatters/formatCaseStudies";
import { formatEvents } from "@/utils/formatters/formatEvents";
import { formatNews } from "@/utils/formatters/formatNews";
import { formatPosts } from "@/utils/formatters/formatPosts";
import { formatPressRelease } from "@/utils/formatters/formatPressRelease";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

// Map tabs to endpoints and formatters
const tabMap = {
  0: { endpoint: "/client_stories", formatter: formatCaseStudies }, // Case Studies
  1: { endpoint: "/posts", formatter: formatPosts }, // Blog
  2: { endpoint: "/news", formatter: formatNews }, // News
  3: { endpoint: "/events", formatter: formatEvents }, // Events
  4: { endpoint: "/press_release", formatter: formatPressRelease }, // Press Release
};

export async function fetchTabContent(tabIndex) {
  const tab = tabMap[tabIndex];
  if (!tab) return [];

  try {
    const res = await fetch(`${BASE_URL}${tab.endpoint}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

    const data = await res.json();
    return tab.formatter(data).slice(0, 5);
  } catch (error) {
    console.error("Error fetching tab content:", error);
    return [];
  }
}
