import ListingHero from "@/src/components/ListingHero";
import ListingBody from "@/src/components/ListingBody";

export default function page() {
  return (
    <>
      <ListingHero />
      <ListingBody />
      <div className="pb-50"></div>
    </>
  );
}