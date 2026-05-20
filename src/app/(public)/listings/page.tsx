import SubHero from "@/src/components/layout/SubHero";
import ListingBody from "@/src/app/(public)/_sections/ListingBody";

export default async function page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined }}) {

  const searchQuery = {
    location: "",
    checkin: "",
    checkout: "",
    guests: "",
    rooms: "",
    allowsPet: true
  }

  const data = await searchParams
  // const data = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_API_URL}/search/`)

  // if (data.source) {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_API_URL}/search/`)

  //   const cleanedData = Object.fromEntries(
  //   Object.entries(data)
  //   .filter(([_, v]) => v !== undefined)
  //   .map(([k, v]) => [k, Array.isArray(v) ? v.join(',') : v as string]))

  //   const queryString = new URLSearchParams(cleanedData).toString();
  //   console.log(queryString)
  // }
  //else {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_API_URL}/properties`)
  // }

  return (
    <>
      <SubHero heading="Find a Perfect Apartment" />
      <ListingBody />
    </>
  );
}