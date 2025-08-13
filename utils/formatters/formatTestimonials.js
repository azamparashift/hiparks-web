// // utils/formatters/formatTestimonials.js
// export function formatTestimonials(testimonials) {
//   return testimonials.map((item) => ({
//     id: item.id,
//     name: item.title?.rendered || "",
//     quote: item.content?.rendered?.replace(/<\/?p>/g, "") || "",
//     video: item.acf?.customer_video_url || "",
//     thumbnail: item.acf?.customer_thumbnail_image || "",
//     logo: item.acf?.customer_logo || "", // if you have logo in ACF
//     role: item.acf?.customer_designation || "", // if present
//     company: item.acf?.customer_company || item.title?.rendered || "",
//   }));
// }

// utils/formatters/formatTestimonials.js
export function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatTestimonials(items = []) {
  return items.map((item) => ({
    id: item.id,
    name: item.title?.rendered || "",
    quote: stripHtml(item.content?.rendered || item.excerpt?.rendered || ""),
    video: item.acf?.customer_video_url || "",
    thumbnail: item.acf?.customer_thumbnail_image || "",
    logo: item.acf?.customer_logo || "", // optional ACF key
    role: item.acf?.customer_designation || "",
    company: item.acf?.customer_company || item.title?.rendered || "",
    date: item.date || "",
    raw: item, // keep original if you need other fields later
  }));
}
