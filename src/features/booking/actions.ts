"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"

const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

export async function cancelBooking(bookingId: string) {
  const token = (await cookies()).get("accessToken")?.value

  const res = await fetch(`${apiUrl}/bookings/${bookingId}/cancel`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    const error = await res.json()
    return { error: error.message ?? "Something went wrong" }
  }

  const { data } = await res.json()


  // redirect("/confirm-email")
}