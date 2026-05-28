const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL

export async function refreshAccessToken(refreshToken: string): Promise<string | null> {
  const res = await fetch(`${apiUrl}/auth/refresh-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  })

  if (!res.ok) return null

  const { data } = await res.json()
  return data.accessToken
}