import { cookies } from "next/headers"

const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL

export async function getMe() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value

  if (!accessToken) return null

  const res = await fetch(`${apiUrl}/users/me`, {  
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  })

  if (!res.ok) return null

  const { data } = await res.json()
  return data.user
}