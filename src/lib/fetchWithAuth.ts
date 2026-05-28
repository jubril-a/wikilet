import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type FetchOptions = RequestInit & { _retry?: boolean }

export async function fetchWithAuth(url: string, options: FetchOptions = {}): Promise<Response> {
  const cookieStore = await cookies()
  const token = cookieStore.get("accessToken")?.value

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  })

  if (res.status === 401 && !options._retry) {
    const refreshRes = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/refresh`, {
      method: "GET",
    })

    if (!refreshRes.ok) redirect("/api/logout")

    const { accessToken } = await refreshRes.json()

    return fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
      _retry: true,
    } as FetchOptions)
  }

  return res
}