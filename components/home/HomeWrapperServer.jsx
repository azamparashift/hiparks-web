// components/home/HomeWrapperServer.tsx (or .jsx)
import { fetchHeroContent } from "@/lib/cms";
import HomeWrapper from "./HomeWrapper";


export default async function HomeWrapperServer() {
  const heroData = await fetchHeroContent();

  return <HomeWrapper heroData={heroData[0]} />;
}
