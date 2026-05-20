"use server"

import { cookies } from "next/headers"

const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

type profileDataType = {
  firstName: string,
  lastName:  string,
  profileImage: string | null,
  agencyName: string,
  licenseNumber: string,
  phone: string,
  bio: string,
  yearsExperience: string,
  specializations: string[],
  officeAddress: string,
  city: string,
  country: string
}

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

// GET HOST PROFILE
export async function getProfile() {
  const token = (await cookies()).get('accessToken')?.value

  const res = await fetch(`${apiUrl}/agents/profile/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })

  if (!res.ok) return null

  const data = await res.json()
  return data
}

// UPDATE HOST PROFILE
export async function updateProfile(formData: profileDataType) {
 const token = (await cookies()).get('accessToken')?.value

  const res = await fetch(`${apiUrl}/agents/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'Something went wrong')

  return data
}