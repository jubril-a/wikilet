import { getProperty } from '@/src/features/property/actions';
import Hero from "../sections/Hero"
import Showcase from "../sections/Showcase"
import PropertyDetails from "../sections/PropertyDetails"
import CheckAvailability from "../sections/CheckAvailability"
import GuestReviews from "../sections/GuestReviews"
import { notFound } from 'next/navigation';

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const id = (await params).id
  const { data } = await getProperty(id);
  const property = data.property

  if (!property) notFound();

  return (
    <>
      <Hero title={property.title} city={property.city} country={property.country} bgImage={property.images[0]} />
      <Showcase images={property.images} />
      <PropertyDetails type={property.propertyType} description={property.description} city={property.city} country={property.country} host={property.agentId.agencyName} amenities={property.amenities} />
      <CheckAvailability propertyId={id} />
      <GuestReviews />
    </>
  );
}