import SubHero from "@/src/components/layout/SubHero";
import ListingBody from "@/src/app/(public)/_sections/ListingBody";
import { getAllProperties } from "@/src/features/property/actions";
import { searchProperties } from "@/src/features/search/action";

export type queryType = {
  propertyType: string,
  location: string,
  city: string,
  rating: string,
  preferences: string,
  facilities: string,
}
 
export default async function page({ searchParams }: { searchParams: queryType }) {

  const parameters = await searchParams
  let response

  const paramKeys: (keyof queryType)[] = ['propertyType', 'location', 'city', 'rating', 'preferences', 'facilities'];
  const hasParams = paramKeys.some(key => parameters[key] !== undefined && parameters[key] !== '');

  if (hasParams) {
    const queryString = new URLSearchParams(parameters).toString();
    response = await searchProperties(queryString)
  } else {
     response = await getAllProperties()
  }

  const properties = response.data.properties.map((p: any) => ({
    _id: p._id,
    title: p.title,
    location: `${p.city}, ${p.country}` as `${string}, ${string}`,
    description: p.description,
    propertyType: p.propertyType,
    price: `${p.currency == 'naira' ? '₦' : ''} ${p.price.toLocaleString('en-US') ?? ''}`.trim(),
    image: p.images[0]
  }))

  return (
    <>
      <SubHero heading="Find a Perfect Apartment" />
      <ListingBody properties={properties} />
    </>
  );
}