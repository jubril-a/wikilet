import SubHero from "@/src/components/SubHero";
import ListingBody from "@/src/components/ListingBody";

export default function page() {
  return (
    <>
      <SubHero heading="Find a Perfect Apartment" />
      <ListingBody />
      <div className="pb-50"></div>
    </>
  );
}