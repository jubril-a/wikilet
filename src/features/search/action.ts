const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

export async function searchProperties(query: string) {
  const res = await fetch(`${apiUrl}/search?${query}`)
  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'Something went wrong')

  return data
}
