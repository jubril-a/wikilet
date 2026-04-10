import Hero2 from "@/src/components/Hero2";
import TopDestinations from "@/src/components/TopDestinations";
import BrowseByType from "@/src/components/BrowseByType";
import BrowseByLocation from "@/src/components/BrowseByLocation";

export default function Home() {
  return (
    <>
      <Hero2 />
      <TopDestinations />
      <BrowseByType />
      <BrowseByLocation />
      <div className="pb-50"></div>
    </>
  );
}