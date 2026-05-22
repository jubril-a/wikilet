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
  base64Image: string,
  description: string,
  price: string,
}