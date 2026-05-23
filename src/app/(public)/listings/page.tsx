import SubHero from "@/src/components/layout/SubHero";
import ListingBody from "@/src/app/(public)/_sections/ListingBody";
import { getAllProperties } from "@/src/features/property/actions";
import PropertyCard from "@/src/features/property/components/PropertyCard";

export default async function page() {

  const { data } = await getAllProperties()

  const properties = data.properties.map((p: any) => ({
    _id: p._id,
    title: p.title,
    location: `${p.city}, ${p.country}` as `${string}, ${string}`,
    description: p.description,
    propertyType: p.propertyType,
    price: `${p.currency == 'naira' ? '₦' : '$'} ${p.price ?? ''}`.trim(),
    image: p.images[0]
  }))

  return (
    <>
      <SubHero heading="Find a Perfect Apartment" />
      <ListingBody properties={properties} />
    </>
  );
}