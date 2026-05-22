import SubHero from "@/src/components/layout/SubHero";
import ListingBody from "@/src/app/(public)/_sections/ListingBody";
import { getAllProperties } from "@/src/features/property/actions";

export default async function page() {

  const { data } = await getAllProperties()

  const properties = data.properties.map((p: any) => ({
    title: p.title,
    location: `${p.address?.city}, ${p.address?.country}` as `${string}, ${string}`,
    description: p.description,
    propertyType: p.type,
    price: `${p.price?.currency ?? ''} ${p.price?.amount ?? ''}`.trim(),
  }))


  return (
    <>
      <SubHero heading="Find a Perfect Apartment" />
      <ListingBody properties={properties} />
    </>
  );
}