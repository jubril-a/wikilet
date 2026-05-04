"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"

const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

export async function addReview(prevState: unknown, formData: FormData) {
  const token = (await cookies()).get("accessToken")?.value

  const payload = {
    propertyId: "123456781234567812345678",
    review: formData.get("review"),
    rating: Number(formData.get("rating"))
  }

  console.log(payload)

  const res = await fetch(`${apiUrl}/reviews`, {
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