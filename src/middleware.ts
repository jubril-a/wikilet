import { NextRequest, NextResponse } from "next/server"

const PROTECTED = ["/saved", "/bookings"]
const AGENT_ONLY = ["/host"]
const UNAUTHORIZED_ONLY = ["/login", "/signup", "/recover-password"]

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get("accessToken")?.value
  const refreshToken = req.cookies.get("refreshToken")?.value
  const role = req.cookies.get("userRole")?.value

  const isProtected = PROTECTED.some((r) => pathname.startsWith(r))
  const isAgentOnly = AGENT_ONLY.some((r) => pathname.startsWith(r))
  const isUnauthorizedOnly = UNAUTHORIZED_ONLY.some((r) => pathname.startsWith(r))

  const needsAuth = isProtected || isAgentOnly

  if (needsAuth && !token) {
    if (refreshToken) {
      const url = new URL("/api/refresh", req.url)
      url.searchParams.set("redirect", pathname)
      return NextResponse.redirect(url)
    }
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