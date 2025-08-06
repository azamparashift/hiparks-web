// Placeholder function

import { heroMockData } from "@/components/home/Hero/hero.mock";
import { showcaseItems } from "@/components/home/heroIntroSector/_components/dynamicShowcase.mock";

export async function fetchHeroContent() {
  // Future: Fetch from WP REST API or GraphQL
  // const res = await fetch('https://your-wp.com/wp-json/wp/v2/hero');
  // return await res.json();

  return heroMockData;
}

export async function getShowcaseItems() {
  // Simulate CMS call
  return showcaseItems;
}
