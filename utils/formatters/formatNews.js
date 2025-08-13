export function formatNews(news) {
  return news.slice(0, 3).map((item) => ({
    id: item.id,
    title: item.title?.rendered,
    date: item.acf?.news_date || item.date,
    image: item.acf?.news_image,
    description: item.acf?.news_description || item.excerpt?.rendered,
    link: item.link,
  }));
}
