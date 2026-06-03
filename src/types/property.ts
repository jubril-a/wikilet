// export interface Property {
//   id: number
//   type: string
//   name: string
//   location: string
//   price: string
//   rating: number
//   reviews: number
//   image: string
// }

export type PropertyCardType = {
  _id: string,
  title: string,
  location: string,
  propertyType: string,
  image: string,
  description: string,
  price: string,
}


export type PropertyData = {
    _id: string
    title: string
    description: string
    propertyType: "home" | "hotel" | "apartment" | "vacation"
    spaceType: "entire" | "private" | "shared"
    maxCapacity: number
    price: number
    currency: string
    city: string
    country: string
    images: string[]
    cleaningFee: number
    allow: string[]
    location: { area: string; address: string; landmark: string }
    amenities: string[]
    power: "24hr" | "gen" | "grid" | "inverter"
    minStay: number
    maxStay: number
}