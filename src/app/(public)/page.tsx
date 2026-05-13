import Hero from "./_sections/Hero";
import Hero2 from "./_sections/Hero2";
import Hero3 from "./_sections/Hero3";
import TopDestinations from "./_sections/TopDestinations";
import BrowseByType from "./_sections/BrowseByType";
import BrowseByLocation from "./_sections/BrowseByLocation";

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