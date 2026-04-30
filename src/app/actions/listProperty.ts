"use server"

import { redirect } from "next/navigation"

const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

// interface PropertyType {
//     title: string,
//     category: "home" | "hotel" | "apartment" | "vacation",
//     spaceType: "entire" | "private" | "shared",
//     maxCapacity: number,
//     location: {
//         state: string,
//         area: string,
//         address: string,
//         landmark: string,
//     },
//     images: File[], // array of four images
//     amenities: string[],
//     power: "24hr" | "gen" | "grid" | "inverter",
//     nightlyRate: number,
//     cleaningFee?: number,
//     minStay: number,
//     maxStay: number,
//     allow: string[]
// }

export async function listProperty(prevState: unknown, formData: FormData) {
  const payload = {
    title: formData.get("name"),
    category: formData.get("category"),
    spaceType: formData.get("type"),
    maxCapacity: formData.get("capacity"),
    location: {
        state: formData.get("state"),
        area: formData.get("area"),
        address: formData.get("address"),
        landmark: formData.get("landmark"),
    },
    //images
    amenities: formData.get("amenities"),
    power: formData.get("power"),
    nightlyRate: formData.get("nightly-rate"),
    cleaningFee: formData.get("cleaning-fee"),
    deposit: formData.get("deposit"),
    minStay: formData.get("min-stay"),
    maxStay: formData.get("max-stay"),
    checkIn: formData.get("check-in"),
    checkOut: formData.get("check-out"),
    allow: formData.get("allow"),
    authorize: formData.get("authorized"),
    accept: formData.get("accept-terms"),
  }

  const res = await fetch(`${apiUrl}/properties`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const error = await res.json()
    return { error: error.message ?? "Something went wrong" }
  }

  const { data } = await res.json()


  redirect("/confirm-email")
}