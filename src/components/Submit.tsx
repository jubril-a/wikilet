"use client"

import { useFormStatus } from "react-dom"

type Props = {
  action: "login" | "signup" | "recover"
}

const labels = {
  login: "Log In",
  signup: "Register",
  recover: "Reset Password"
}

const pendingLabels = {
  login: "Logging in...",
  signup: "Registering...",
  recover: "Sending...",
}

const Submit = ({action}: Props) => {

  const { pending } = useFormStatus()

  return (
      <input className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full disabled:opacity-50 disabled:cursor-not-allowed" type="submit" value={pending ? pendingLabels[action] : labels[action]} disabled={pending} />
  )
}

export default Submit