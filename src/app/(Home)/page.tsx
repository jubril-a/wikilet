import Hero from "@/src/components/Hero";
import TopDestinations from "@/src/components/TopDestinations";
import BrowseByType from "@/src/components/BrowseByType";
import BrowseByLocation from "@/src/components/BrowseByLocation";

export default function Home() {
  return (
    <>
      <Hero />
      <TopDestinations />
      <BrowseByType />
      <BrowseByLocation />
      <div className="pb-50"></div>
    </>
  );
}