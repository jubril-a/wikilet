'use server'

import { fetchWithAuth } from "@/src/lib/fetchWithAuth"

const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

export async function createProperty(formData: any) {
  const res = await fetchWithAuth(`${apiUrl}/agents/properties`, {
    method: "POST",
    body: JSON.stringify(formData),
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message || "Something went wrong")

  return data
}

export async function createRoom(formData: FormData, propertyId: string) {
  const payload = {
    propertyId: propertyId,
    roomType: formData.get('roomType') as string,
    capacity: Number(formData.get('capacity')),
    basePrice: Number(formData.get('basePrice')),
    currency: "naira"
  };

  const res = await fetchWithAuth(`${apiUrl}/rooms`, {
    method: "POST",
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message || "Something went wrong")
}

export async function getAgentProperties() {
  const res = await fetchWithAuth(`${apiUrl}/agents/properties`, {
    method: 'GET',
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'Something went wrong')

  return data
}

export async function deleteProperty(id: string) {
  const res = await fetchWithAuth(`${apiUrl}/agents/properties/${id}`, {
    method: 'DELETE',
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'Something went wrong')

  return data
}

export async function getAllProperties() {
  const res = await fetch(`${apiUrl}/properties`)
  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'Something went wrong')

  return data
}

export async function getPropertyRooms(id: string) {
  const res = await fetch(`${apiUrl}/properties/${id}/rooms`)
  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'Something went wrong')

  return data
}

export async function deleteRoom(id: string) {
  const res = await fetchWithAuth(`${apiUrl}/rooms/${id}`, {
     method: 'DELETE',
  })
  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'Something went wrong')

  return data
}

export async function getProperty(id: string) {
  try {
    const res = await fetch(`${apiUrl}/properties/${id}`);

    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Failed to fetch property: ${res.statusText}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('[getProperty]', error);
    return null;
  }
}