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
    role: "user",
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

  redirect("/confirm-email")
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

  redirect("/")
}

export async function logout() {

  const cookieStore = await cookies()
  // const refreshToken = cookieStore.get("refreshToken")?.value

  // const payload = {
  //  refreshToken: refreshToken
  // }

  // const res = await fetch(`${apiUrl}/auth/logout`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // })

  // if (!res.ok) {
  //   const error = await res.json()
  //   console.log(error.message)
  //   return { error: error.message ?? "Something went wrong" }
  // }

  cookieStore.delete("accessToken")
  cookieStore.delete("refreshToken")

  redirect("/")
}