"use client"

import { useRef, useState, useTransition } from "react"
import { Upload } from "lucide-react"
import Image from "next/image"
// import { updateAccount } from "../../../features/account/actions"

type Role = "user" | "agent"

interface AgentProfileForm {
  firstName: string
  lastName: string
  email: string
  role: Role
  avatar: string | null
  // Agent-specific fields
  agencyName: string
  licenceNumber: string
  phoneNumber: string
  yearsOfExperience: string
  bio: string
  specializations: string[]
  officeAddress: string
  city: string
  country: string
}

interface AgentProfileProps {
  initialData?: AgentProfileForm
  // onSave: (data: Omit<AgentProfileForm, "email" | "role">) => Promise<void>
}

const DEFAULT_FORM: AgentProfileForm = {
  firstName: "",
  lastName: "",
  email: "",
  role: "agent",
  avatar: null,
  agencyName: "",
  licenceNumber: "",
  phoneNumber: "",
  yearsOfExperience: "",
  bio: "",
  specializations: [],
  officeAddress: "",
  city: "",
  country: "",
}

const SPECIALIZATIONS = [
  "Apartments",
  "Hotels",
  "Homes",
  "Vacation Rentals",
]

const inputClass =
  "px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full"

const textareaClass =
  "px-2 py-2.5 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 w-full resize-none"

export default function ProfileForm({ initialData }: AgentProfileProps) {
  const [form, setForm] = useState<AgentProfileForm>(initialData ?? DEFAULT_FORM)
  const [saved, setSaved] = useState<AgentProfileForm>(initialData ?? DEFAULT_FORM)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const [isPending, startTransition] = useTransition()

  const isDirty =
    form.firstName !== saved.firstName ||
    form.lastName !== saved.lastName ||
    form.avatar !== saved.avatar ||
    form.agencyName !== saved.agencyName ||
    form.licenceNumber !== saved.licenceNumber ||
    form.phoneNumber !== saved.phoneNumber ||
    form.yearsOfExperience !== saved.yearsOfExperience ||
    form.bio !== saved.bio ||
    JSON.stringify(form.specializations) !== JSON.stringify(saved.specializations) ||
    form.officeAddress !== saved.officeAddress ||
    form.city !== saved.city ||
    form.country !== saved.country

  const displayName =
    [form.firstName, form.lastName].filter(Boolean).join(" ") || "Your name"
  const initials =
    [form.firstName[0], form.lastName[0]].filter(Boolean).join("").toUpperCase() || "U"

  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) =>
      setForm((f) => ({ ...f, avatar: ev.target?.result as string }))
    reader.readAsDataURL(file)
  }

  const handleSpecializationToggle = (spec: string) => {
    setForm((f) => ({
      ...f,
      specializations: f.specializations.includes(spec)
        ? f.specializations.filter((s) => s !== spec)
        : [...f.specializations, spec],
    }))
  }

  const handleSave = async () => {
    setError(null)

    const formData = new FormData()
    formData.set("firstName", form.firstName)
    formData.set("lastName", form.lastName)
    formData.set("agencyName", form.agencyName)
    formData.set("licenceNumber", form.licenceNumber)
    formData.set("phoneNumber", form.phoneNumber)
    formData.set("yearsOfExperience", form.yearsOfExperience)
    formData.set("bio", form.bio)
    formData.set("specializations", JSON.stringify(form.specializations))
    formData.set("officeAddress", form.officeAddress)
    formData.set("city", form.city)
    formData.set("country", form.country)
    if (form.avatar) formData.set("avatar", form.avatar)

    startTransition(async () => {
      try {
        // await updateAccount(formData)
        setSaved(form)
        setToastVisible(true)
        setTimeout(() => setToastVisible(false), 2500)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong")
      }
    })
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-6 min-[440px]:py-18">

      {/* Header: avatar + name + upload button */}
      <div className="flex items-center justify-between gap-3 flex-wrap mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => fileRef.current?.click()}
            className="relative w-14 h-14 rounded-full bg-amber-700 text-white flex items-center justify-center text-base font-medium shrink-0 overflow-hidden group focus:outline-none"
            aria-label="Change profile photo"
          >
            {form.avatar ? (
              <Image
                width={56}
                height={56}
                src={form.avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{initials}</span>
            )}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Upload size={15} className="text-white" />
            </div>
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatar}
          />

          <div>
            <p className="font-medium text-gray-900 tracking-tight">{displayName}</p>
            <p className="text-sm text-gray-500">Agent</p>
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

      {/* ── Personal Info ── */}
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Personal Info
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

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

        {/* Phone number */}
        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700">Phone number</span>
          <input
            type="tel"
            value={form.phoneNumber}
            onChange={(e) => setForm((f) => ({ ...f, phoneNumber: e.target.value }))}
            className={inputClass}
          />
        </label>

      </div>

      <div className="border-b border-gray-200 mb-6" />

      {/* ── Professional Details ── */}
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Professional Details
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

        {/* Agency name */}
        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700">Agency name</span>
          <input
            type="text"
            value={form.agencyName}
            onChange={(e) => setForm((f) => ({ ...f, agencyName: e.target.value }))}
            className={inputClass}
          />
        </label>

        {/* Licence number */}
        <label>
          <span className="block mb-2 text-gray-700">Licence number</span>
          <input
            type="text"
            value={form.licenceNumber}
            onChange={(e) => setForm((f) => ({ ...f, licenceNumber: e.target.value }))}
            className={inputClass}
          />
        </label>

        {/* Years of experience */}
        <label>
          <span className="block mb-2 text-gray-700">Years of experience</span>
          <input
            type="number"
            min={0}
            max={60}
            value={form.yearsOfExperience}
            onChange={(e) => setForm((f) => ({ ...f, yearsOfExperience: e.target.value }))}
            className={inputClass}
          />
        </label>

        {/* Bio */}
        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700">Bio</span>
          <textarea
            rows={4}
            value={form.bio}
            onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
            placeholder="Tell clients a little about yourself…"
            className={textareaClass}
          />
        </label>

        {/* Specializations */}
        <div className="sm:col-span-2">
          <span className="block mb-2 text-gray-700">Specializations</span>
          <div className="flex flex-wrap gap-2">
            {SPECIALIZATIONS.map((spec) => {
              const selected = form.specializations.includes(spec)
              return (
                <button
                  key={spec}
                  type="button"
                  onClick={() => handleSpecializationToggle(spec)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    selected
                      ? "bg-primary-1 text-white border-primary-1"
                      : "bg-gray-200 text-gray-600 border-transparent hover:bg-gray-100 hover:border-gray-300"
                  }`}
                >
                  {spec}
                </button>
              )
            })}
          </div>
        </div>

      </div>

      <div className="border-b border-gray-200 mb-6" />

      {/* ── Office Location ── */}
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Office Location
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Office address */}
        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700">Office address</span>
          <input
            type="text"
            value={form.officeAddress}
            onChange={(e) => setForm((f) => ({ ...f, officeAddress: e.target.value }))}
            className={inputClass}
          />
        </label>

        {/* City */}
        <label>
          <span className="block mb-2 text-gray-700">City</span>
          <input
            type="text"
            value={form.city}
            onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
            className={inputClass}
          />
        </label>

        {/* Country */}
        <label>
          <span className="block mb-2 text-gray-700">Country</span>
          <input
            type="text"
            value={form.country}
            onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}
            className={inputClass}
          />
        </label>

      </div>

      {/* Error */}
      {error && (
        <p className="mt-4 text-sm text-red-500">{error}</p>
      )}

      {/* Save button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleSave}
          disabled={!isDirty || isPending}
          className={`text-sm font-medium px-5 py-2.5 rounded-md transition-all ${
            isDirty && !isPending
              ? "bg-primary-1 text-white hover:bg-primary-1/90 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isPending ? "Saving..." : "Save changes"}
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