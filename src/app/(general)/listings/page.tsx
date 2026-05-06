import SubHero from "@/src/components/SubHero";
import ListingBody from "@/src/components/ListingBody";

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
      <div className="pb-50"></div>
    </>
  );
}

// https://www.booking.com/searchresults.html?ss=Lagos%2C+Nigeria&efdco=1&label=gen173nr-10CAEoggI46AdIM1gEaKcBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKl5-LPBsACAdICJDcyMGYyMTI0LTYyMTgtNDFlYy05NDBjLTQyZTM0MmVkMDg3Y9gCAeACAQ&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=-2017355&dest_type=city&checkin=2026-05-08&checkout=2026-06-15&group_adults=2&no_rooms=1&group_children=0