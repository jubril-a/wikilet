import { NextRequest, NextResponse } from "next/server"

const PROTECTED = ["/saved", "/bookings", "/manage"]
const AGENT_ONLY = ["/host"]
const UNAUTHORIZED_ONLY = ["/login", "/signup", "/recover-password"]

function getTokenExpiry(token: string): number | null {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]))
    return payload.exp ?? null // unix timestamp in seconds
  } catch {
    return null
  }
}

function isTokenStale(token: string, bufferSeconds = 30): boolean {
  const exp = getTokenExpiry(token)
  if (!exp) return true
  return Date.now() / 1000 >= exp - bufferSeconds
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get("accessToken")?.value
  const refreshToken = req.cookies.get("refreshToken")?.value
  const role = req.cookies.get("userRole")?.value

  // Refresh on any route if token is missing/stale and refresh token exists
  if ((!token || isTokenStale(token)) && refreshToken) {
    const url = new URL("/api/refresh", req.url)
    url.searchParams.set("redirect", pathname)
    return NextResponse.redirect(url)
  }

  const isProtected = PROTECTED.some((r) => pathname.startsWith(r))
  const isAgentOnly = AGENT_ONLY.some((r) => pathname.startsWith(r))
  const isUnauthorizedOnly = UNAUTHORIZED_ONLY.some((r) => pathname.startsWith(r))

  const needsAuth = isProtected || isAgentOnly

  if (needsAuth && !token) {
    const url = new URL("/login", req.url)
    url.searchParams.set("redirect", pathname)
    return NextResponse.redirect(url)
  }

  if (isAgentOnly && role !== "agent") {
    return NextResponse.redirect(new URL("/unauthorized", req.url))
  }

  if (isUnauthorizedOnly && token && refreshToken) {
    const redirect = req.nextUrl.searchParams.get("redirect")
    return NextResponse.redirect(new URL(redirect ?? "/", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
}