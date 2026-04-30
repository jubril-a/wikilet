"use server"

import { cookies } from "next/headers"

const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

export async function updateAccount(formData: FormData) {
  const token = (await cookies()).get("accessToken")?.value

  const body = {
    firstName: formData.get("firstName"),
    lastName:  formData.get("lastName"),
    avatar:    formData.get("avatar"), 
  }

  const res = await fetch(`${apiUrl}/users/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message ?? "Failed to update account")
  }

  return res.json()
}