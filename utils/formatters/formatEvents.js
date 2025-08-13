// import { decodeHTML } from "../decodeHTML";

import { decodeHTML } from "../decodeHTML";

// export function formatEvents(events) {
//   return events.slice(0, 3).map((event) => ({
//     id: event.id,
//     title: decodeHTML(event.title?.rendered),
//     date: event.acf?.date || event.date,
//     location: event.acf?.event_location,
//     image: event.acf?.feature_image || event.acf?.in_thes_potlight_image_home,
//     link: event.link,
//   }));
// }

export function formatEvents(events) {
  return events.slice(0, 3).map((event) => ({
    id: event.id,
    title: decodeHTML(event.title?.rendered || ""),
    date: event.acf?.date || event.date,
    location: event.acf?.event_location || "",
    image:
      event.acf?.feature_image ||
      event.acf?.in_thes_potlight_image_home ||
      event.acf?.youtube_video_filed?.[0]?.youtube_video ||
      "", // fallback image
    link: event.link,
    description: decodeHTML(stripHTML(event.content?.rendered || "")),
  }));
}

// Utility to strip HTML tags
function stripHTML(html) {
  return html.replace(/<[^>]*>?/gm, "").trim();
}
