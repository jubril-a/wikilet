import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const cookieStore = await cookies()
  cookieStore.delete("accessToken")
  cookieStore.delete("refreshToken")
  cookieStore.delete("userRole")

  return NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_APP_URL!))
}