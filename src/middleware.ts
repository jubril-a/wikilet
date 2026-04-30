import { NextRequest, NextResponse } from "next/server"

// Routes that require login (any role)
const PROTECTED = ["/hello"]

// Routes that require agent role only
const AGENT_ONLY = ["/list-property"]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get("accessToken")?.value
  const role = req.cookies.get("userRole")?.value

  const isProtected = PROTECTED.some((r) => pathname.startsWith(r))
  const isAgentOnly = AGENT_ONLY.some((r) => pathname.startsWith(r))

  // Not logged in → redirect to login, preserving the intended destination
  if ((isProtected || isAgentOnly) && !token) {
    const url = new URL("/login", req.url)
    url.searchParams.set("redirect", pathname)
    return NextResponse.redirect(url)
  }

  // Logged in but not an agent → redirect to unauthorized
  if (isAgentOnly && role !== "agent") {
    return NextResponse.redirect(new URL("/unauthorized", req.url))
  }

  return NextResponse.next()
}

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
}