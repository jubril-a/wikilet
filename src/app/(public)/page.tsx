import Hero from "./_sections/Hero";
import TopDestinations from "./_sections/TopDestinations";
import BrowseByType from "./_sections/BrowseByType";
import BrowseByLocation from "./_sections/BrowseByLocation";

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