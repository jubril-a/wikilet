import { cookies } from "next/headers"

export async function getMe() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value

  console.log("token:", accessToken)

  if (!accessToken) return null

  const res = await fetch(`http://localhost:4000/api/v1/users/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  })

  if (!res.ok) return null

  const { data } = await res.json()
  return data.user
}