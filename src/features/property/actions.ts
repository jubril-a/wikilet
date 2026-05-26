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

export async function createRoom(formData: FormData, propertyId: string) {
  const payload = {
    propertyId: propertyId,
    roomType: formData.get('roomType') as string,
    capacity: Number(formData.get('capacity')),
    basePrice: Number(formData.get('basePrice')),
    currency: "naira"
  };
  const token = (await cookies()).get('accessToken')?.value

  const res = await fetch(`${apiUrl}/rooms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) return { success: false, message: data.message ?? 'Failed to create room.' };
  return { success: true, message: data.message ?? 'Room created successfully.' };
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
  const res = await fetch(`${apiUrl}/properties`)
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