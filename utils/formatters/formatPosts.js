// export function formatPosts(posts) {
//   return posts.slice(0, 3).map((post) => ({
//     id: post.id,
//     title: post.title?.rendered,
//     image: post.acf?.featured_slider_image || post.acf?.blog_image,
//     description: post.acf?.meta_description || post.excerpt?.rendered,
//     link: post.link,
//     date: post.acf?.blog_publish_date || post.date,
//   }));
// }
// utils/formatters/formatPosts.ts
// utils/formatters/formatPosts.ts

function decodeHTML(html) {
  if (typeof window === "undefined") {
    // On server side (SSR)
    return html
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export function formatPosts(posts) {
  return posts.slice(0, 3).map((post) => ({
    id: post.id,
    title: decodeHTML(post.title),
    image: post.acf?.featured_slider_image || post.acf?.blog_image,
    description: post.acf?.meta_description || post.excerpt,
    link: post.link,
    date: post.acf?.blog_publish_date || post.date,
    category: decodeHTML(post.category),
  }));
}
