import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { refreshAccessToken } from "@/src/lib/refreshToken"

export async function GET(req: NextRequest) {
  const cookieStore = await cookies()
  const refreshToken = cookieStore.get("refreshToken")?.value
  const redirectTo = req.nextUrl.searchParams.get("redirect") ?? "/"

  if (!refreshToken) {
    if (req.nextUrl.searchParams.has("redirect")) {
      const response = NextResponse.redirect(new URL(`/login?redirect=${redirectTo}`, req.url))
      response.cookies.delete("accessToken")
      response.cookies.delete("refreshToken")
      response.cookies.delete("userRole")
      return response
    }
    return NextResponse.json({ error: "No refresh token" }, { status: 401 })
  }

  const newAccessToken = await refreshAccessToken(refreshToken)

  if (!newAccessToken) {
    const response = req.nextUrl.searchParams.has("redirect")
      ? NextResponse.redirect(new URL(`/login?redirect=${redirectTo}`, req.url))
      : NextResponse.json({ error: "Refresh failed" }, { status: 401 })

    response.cookies.delete("accessToken")
    response.cookies.delete("refreshToken")
    response.cookies.delete("userRole")

    return response
  }

  cookieStore.set("accessToken", newAccessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  })

  if (req.nextUrl.searchParams.has("redirect")) {
    return NextResponse.redirect(new URL(redirectTo, req.url))
  }

  return NextResponse.json({ accessToken: newAccessToken })
}