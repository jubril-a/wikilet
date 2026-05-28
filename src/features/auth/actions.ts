"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const apiUrl = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

export async function signup(prevState: unknown, formData: FormData) {
  const payload = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  }

  const res = await fetch(`${apiUrl}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const error = await res.json()
    return { error: error.message ?? "Something went wrong" }
  }

  const { data } = await res.json()
  const accessToken = data.accessToken

  const cookieStore = await cookies()
  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  })

  // Fetch role and store it so middleware doesn't need to re-fetch
  const meRes = await fetch(`${apiUrl}/users/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  })
  if (meRes.ok) {
    const { data: meData } = await meRes.json()
    cookieStore.set("userRole", meData.user.role, {
      httpOnly: true, secure: true, sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    })
  }

  redirect("/check-email")
}

export async function verifyEmail(token: string) {
  try {
    const res = await fetch(
      `${apiUrl}/auth/verify-email/${token}`,
      {
        method: 'GET',
      }
    );
 
    const data = await res.json();
 
    if (!res.ok) {
      return { success: false, message: data.message ?? 'Verification failed.' };
    }
 
    return { success: true, message: data.message ?? 'Email verified successfully.' };
  } catch {
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}

export async function login(prevState: unknown, formData: FormData) {
  const payload = {
    email: formData.get("email"),
    password: formData.get("password"),
  }

  const res = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const error = await res.json()
    return { error: error.message ?? "Something went wrong" }
  }

  const { data } = await res.json()
  const { accessToken, refreshToken } = data

  const cookieStore = await cookies()
  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  })

  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  })

  // Fetch role and store it so middleware doesn't need to re-fetch
  const meRes = await fetch(`${apiUrl}/users/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  })
  if (meRes.ok) {
    const { data: meData } = await meRes.json()
    cookieStore.set("userRole", meData.user.role, {
      httpOnly: true, secure: true, sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    })
  }

  redirect("/")
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("accessToken")
  cookieStore.delete("userRole")
  cookieStore.delete("refreshToken")

  redirect("/")
}