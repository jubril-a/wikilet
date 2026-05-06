import Hero from "./Sections/Hero";
import TopDestinations from "./Sections/TopDestinations";
import BrowseByType from "./Sections/BrowseByType";
import BrowseByLocation from "./Sections/BrowseByLocation";

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