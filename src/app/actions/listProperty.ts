"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"

const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

// interface PropertyType {
//     title: string,
//     description: string,
//     propertyType: "home" | "hotel" | "apartment" | "vacation",
//     price: number,
//     currency: string,
//     city: string,
//     country: string,
//     location: {
//         area: string,
//         address: string,
//         landmark: string,
//     },
//     images: String[],
//     amenities: string[],
//     maxCapacity: number, //add
//     spaceType: "entire" | "private" | "shared", // add
//     power: "24hr" | "gen" | "grid" | "inverter", // add
//     cleaningFee?: number, // add
//     minStay: number, // add
//     maxStay: number, // add
//     allow: string[] // add
// }

export async function listProperty(prevState: unknown, formData: FormData) {
  const token = (await cookies()).get("accessToken")?.value

  const payload = {
    title: formData.get("title"),
    description: formData.get("description"),
    propertyType: formData.get("type"),
    spaceType: formData.get("space-type"),
    price: Number(formData.get("price")),
    currency: "naira",
    maxCapacity: formData.get("capacity"),
    city: formData.get("state"),
    country: formData.get("country"),
    location: { 
      area: formData.get("area"),
      address: formData.get("address"),
      landmark: formData.get("landmark"),
    },
    images: [
      formData.get("main-image") as string,
      formData.get("image-1") as string,
      formData.get("image-2") as string,
      formData.get("image-3") as string
    ],
    amenities: JSON.parse(formData.get("amenities") as string),
    power: formData.get("power"),
    cleaningFee: formData.get("cleaning-fee"),
    minStay: formData.get("min-stay"),
    maxStay: formData.get("max-stay"),
    allow: formData.get("allow"),
  }

  console.log(payload)

  const res = await fetch(`${apiUrl}/properties`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const error = await res.json()
    return { error: error.message ?? "Something went wrong" }
  }

  const { data } = await res.json()


  // redirect("/confirm-email")
}