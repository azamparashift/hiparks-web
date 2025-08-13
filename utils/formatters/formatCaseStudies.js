import { decodeHTML } from "../decodeHTML";

export function formatCaseStudies(caseStudies) {
  return caseStudies.slice(0, 3).map((study) => ({
    id: study.id,
    title: decodeHTML(study.title?.rendered || ""),
    image: study.acf?.client_stories_image || "",
    description: decodeHTML(study.acf?.meta_description || ""),
    link: study.link,
    date: study.date,
  }));
}
