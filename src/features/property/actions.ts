'use server'

import { cookies } from 'next/headers'

const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

export async function createProperty(formData: any) {
  const token = (await cookies()).get('accessToken')?.value

  const res = await fetch(`${apiUrl}/agents/properties`, {
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

export async function getAgentProperties() {
  const token = (await cookies()).get('accessToken')?.value

  const res = await fetch(`${apiUrl}/agents/properties`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'Something went wrong')

  return data
}

export async function deleteProperty(id: string) {
  const token = (await cookies()).get('accessToken')?.value

  const res = await fetch(`${apiUrl}/agents/properties/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'Something went wrong')

  return data
}

export async function getAllProperties() {
  const token = (await cookies()).get('accessToken')?.value

  const res = await fetch(`${apiUrl}/properties`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'Something went wrong')

  return data
}