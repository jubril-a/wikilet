"use client"

import { useRef, useState, useTransition } from "react"
import { Upload } from "lucide-react"
import Image from "next/image"
import { updateAccount } from "../../actions/account"

type Role = "user" | "agent"

interface AccountForm {
  firstName: string
  lastName: string
  email: string
  role: Role
  avatar: string | null
}

interface ManageAccountProps {
  initialData: AccountForm
  // onSave: (data: Omit<AccountForm, "email">) => Promise<void>
}

const inputClass =
  "px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full"

export default function ManageAccount({ initialData }: ManageAccountProps) {
  const [form, setForm] = useState<AccountForm>(initialData)
  const [saved, setSaved] = useState<AccountForm>(initialData)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const [isPending, startTransition] = useTransition()

  const isDirty =
    form.firstName !== saved.firstName ||
    form.lastName  !== saved.lastName  ||
    form.role      !== saved.role      ||
    form.avatar    !== saved.avatar

  const displayName = [form.firstName, form.lastName].filter(Boolean).join(" ") || "Your name"
  const initials = [form.firstName[0], form.lastName[0]].filter(Boolean).join("").toUpperCase() || "U"

  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) =>
      setForm((f) => ({ ...f, avatar: ev.target?.result as string }))
    reader.readAsDataURL(file)
  }

  const handleSave = async () => {
    setError(null)

    const formData = new FormData()
    formData.set("firstName", form.firstName)
    formData.set("lastName",  form.lastName)
    formData.set("role",      form.role)
    if (form.avatar) formData.set("avatar", form.avatar)

    startTransition(async () => {
      try {
        await updateAccount(formData)
        setSaved(form)
        setToastVisible(true)
        setTimeout(() => setToastVisible(false), 2500)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong")
      }
    })
  }

  return (
    <div className="w-full max-w-xl mx-auto py-6">

      {/* Header: avatar + name + upload button */}
      <div className="flex items-center justify-between gap-3 flex-wrap mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => fileRef.current?.click()}
            className="relative w-14 h-14 rounded-full bg-amber-700 text-white flex items-center justify-center text-base font-medium shrink-0 overflow-hidden group focus:outline-none"
            aria-label="Change profile photo"
          >
            {form.avatar ? (
              <Image width={56} height={56} src={form.avatar} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <span>{initials}</span>
            )}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Upload size={15} className="text-white" />
            </div>
          </button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatar} />

          <div>
            <p className="font-medium text-gray-900 tracking-tight">{displayName}</p>
            <p className="text-sm text-gray-500">{form.role === "agent" ? "Agent" : "Regular user"}</p>
          </div>
        </div>

        <button
          onClick={() => fileRef.current?.click()}
          className="text-sm font-medium hover:text-primary-1 hover:bg-primary-2 text-white bg-primary-1 px-4 py-2.5 rounded-md"
        >
          Upload photo
        </button>
      </div>

      <div className="border-b border-gray-200 mb-6" />

      {/* Form fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* First name */}
        <label>
          <span className="block mb-2 text-gray-700">First name</span>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
            className={inputClass}
          />
        </label>

        {/* Last name */}
        <label>
          <span className="block mb-2 text-gray-700">Last name</span>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
            className={inputClass}
          />
        </label>

        {/* Email — disabled, full width */}
        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700">Email</span>
          <input
            type="email"
            value={form.email}
            disabled
            className="px-2 rounded-md bg-gray-200 border border-transparent h-11 w-full text-gray-400 cursor-not-allowed"
          />
        </label>

        {/* Role — full width */}
        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700">Role</span>
          <select
            value={form.role}
            className="px-2 rounded-md bg-gray-200 border border-transparent h-11 w-full text-gray-400 cursor-not-allowed"
            disabled
          >
            <option className="bg-gray-200 text-gray-700" value="user">Regular user</option>
          </select>
        </label>

      </div>

      {/* Save button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleSave}
          disabled={!isDirty || loading}
          className={`text-sm font-medium px-5 py-2.5 rounded-md transition-all ${
            isDirty && !loading
              ? "bg-primary-1 text-white hover:bg-primary-1/90 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? "Saving..." : "Save changes"}
        </button>
      </div>

      {/* Toast */}
      {toastVisible && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-md shadow whitespace-nowrap">
          Changes saved
        </div>
      )}
    </div>
  )
}