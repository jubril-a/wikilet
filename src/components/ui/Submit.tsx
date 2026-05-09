"use client"

import { useFormStatus } from "react-dom"

type Props = {
  action: "login" | "signup" | "recover" | "editProperty" | "addReview"
}

const labels = {
  login: "Log In",
  signup: "Register",
  recover: "Reset Password",
  editProperty: "Save Changes",
  addReview: "Add Review"
}

const pendingLabels = {
  login: "Logging in...",
  signup: "Registering...",
  recover: "Sending...",
  editProperty: "Submitting",
  addReview: "Submitting Review"
}

const Submit = ({action}: Props) => {

  const { pending } = useFormStatus()

  return (
      <input className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full disabled:opacity-50 disabled:cursor-not-allowed" type="submit" value={pending ? pendingLabels[action] : labels[action]} disabled={pending} />
  )
}

export default Submit