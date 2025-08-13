// export function formatPressRelease(pressReleases) {
//   return pressReleases.slice(0, 3).map((item) => ({
//     id: item.id,
//     title: item.title?.rendered,
//     date: item.acf?.press_release_date || item.date,
//     image: item.acf?.pr_image || item.acf?.press_release_image || "",
//     description: item.acf?.press_release_description || item.excerpt?.rendered,
//     link: item.link,
//   }));
// }

import { decodeHTML } from "../decodeHTML";

export function formatPressRelease(pressReleases) {
  return pressReleases.slice(0, 3).map((item) => {
    const subHeadings = item.acf?.pr_sub_heading || [];

    // Combine and decode the first 1–2 description blocks
    const rawDescription = subHeadings
      .map((block) => block.pr_description)
      .filter(Boolean)
      .slice(0, 2)
      .join(" ");

    const cleanDescription = decodeHTML(
      rawDescription.replace(/<\/?[^>]+(>|$)/g, "")
    );

    return {
      id: item.id,
      title: decodeHTML(item.title?.rendered),
      date: item.acf?.press_release_date || item.date,
      image: item.acf?.pr_image || item.acf?.press_release_image || "",
      description: cleanDescription || "No description available.",
      link: item.link,
    };
  });
}
