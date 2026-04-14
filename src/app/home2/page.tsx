import Hero2 from "@/src/components/Hero2";
import TopDestinations from "../(Home)/Sections/TopDestinations";
import BrowseByType from "../(Home)/Sections/BrowseByType";
import BrowseByLocation from "../(Home)/Sections/BrowseByLocation";

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