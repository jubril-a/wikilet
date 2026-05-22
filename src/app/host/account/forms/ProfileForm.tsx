"use client"

import { useRef, useState, useTransition } from "react"
import { Upload } from "lucide-react"
import Image from "next/image"
import { updateProfile, updateAccount } from "@/src/features/account/actions"
import { profileDataType } from "@/src/types/account"

interface PersonalData {
  firstName: string
  lastName: string
  email: string
  profileImage: string | null
}

interface AgentProfileProps {
  initialData?: PersonalData & profileDataType,
  hasProfile: boolean
}

const DEFAULT_PERSONAL: PersonalData = {
  firstName: "",
  lastName: "",
  email: "",
  profileImage: null,
}

const DEFAULT_PROFILE: profileDataType = {
  agencyName: "",
  licenseNumber: "",
  phone: "",
  bio: "",
  yearsExperience: "",
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
  "px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent text-gray-700 focus:text-gray-900 focus:border-gray-300 focus:outline-0 h-11 w-full"

const textareaClass =
  "px-2 py-2.5 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent text-gray-700 focus:text-gray-900 focus:border-gray-300 focus:outline-0 w-full resize-none"

export default function ProfileForm({ initialData, hasProfile }: AgentProfileProps) {
  const [personal, setPersonal] = useState<PersonalData>({
    firstName: initialData?.firstName ?? "",
    lastName: initialData?.lastName ?? "",
    email: initialData?.email ?? "",
    profileImage: initialData?.profileImage ?? null,
  })
  const [savedPersonal, setSavedPersonal] = useState<PersonalData>(personal)

  const [profile, setProfile] = useState<profileDataType>({
    agencyName: initialData?.agencyName ?? "",
    licenseNumber: initialData?.licenseNumber ?? "",
    phone: initialData?.phone ?? "",
    bio: initialData?.bio ?? "",
    yearsExperience: initialData?.yearsExperience ?? "",
    specializations: initialData?.specializations ?? [],
    officeAddress: initialData?.officeAddress ?? "",
    city: initialData?.city ?? "",
    country: initialData?.country ?? "",
  })
  const [savedProfile, setSavedProfile] = useState<profileDataType>(profile)

  const [personalError, setPersonalError] = useState<string | null>(null)
  const [profileError, setProfileError] = useState<string | null>(null)
  const [toastVisible, setToastVisible] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const [isPersonalPending, startPersonalTransition] = useTransition()
  const [isProfilePending, startProfileTransition] = useTransition()

  const isPersonalDirty =
    personal.firstName !== savedPersonal.firstName ||
    personal.lastName !== savedPersonal.lastName ||
    personal.profileImage !== savedPersonal.profileImage

  const isProfileDirty =
    profile.agencyName !== savedProfile.agencyName ||
    profile.licenseNumber !== savedProfile.licenseNumber ||
    profile.phone !== savedProfile.phone ||
    profile.yearsExperience !== savedProfile.yearsExperience ||
    profile.bio !== savedProfile.bio ||
    JSON.stringify(profile.specializations) !== JSON.stringify(savedProfile.specializations) ||
    profile.officeAddress !== savedProfile.officeAddress ||
    profile.city !== savedProfile.city ||
    profile.country !== savedProfile.country

  const displayName =
    [personal.firstName, personal.lastName].filter(Boolean).join(" ") || "Your name"
  const initials =
    [personal.firstName[0], personal.lastName[0]].filter(Boolean).join("").toUpperCase() || "U"

  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) =>
      setPersonal((p) => ({ ...p, profileImage: ev.target?.result as string }))
    reader.readAsDataURL(file)
  }

  const handleSpecializationToggle = (spec: string) => {
    setProfile((p) => ({
      ...p,
      specializations: p.specializations.includes(spec)
        ? p.specializations.filter((s) => s !== spec)
        : [...p.specializations, spec],
    }))
  }

  const showToast = () => {
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2500)
  }

  const handleSavePersonal = () => {
    setPersonalError(null)

    const formData = new FormData()
    formData.append("firstName", personal.firstName)
    formData.append("lastName", personal.lastName)
    if (personal.profileImage) formData.append("avatar", personal.profileImage)

    startPersonalTransition(async () => {
      try {
        await updateAccount(formData)
        setSavedPersonal(personal)
        showToast()
      } catch (err) {
        setPersonalError(err instanceof Error ? err.message : "Something went wrong")
      }
    })
  }

  const handleSaveProfile = () => {
    setProfileError(null)

    startProfileTransition(async () => {
      try {
        await updateProfile(profile, hasProfile)
        setSavedProfile(profile)
        showToast()
      } catch (err) {
        setProfileError(err instanceof Error ? err.message : "Something went wrong")
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
            {personal.profileImage ? (
              <Image
                width={56}
                height={56}
                src={personal.profileImage}
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

        <label>
          <span className="block mb-2 text-gray-700 text-sm">First name</span>
          <input
            type="text"
            value={personal.firstName}
            onChange={(e) => setPersonal((p) => ({ ...p, firstName: e.target.value }))}
            className={inputClass}
          />
        </label>

        <label>
          <span className="block mb-2 text-gray-700 text-sm">Last name</span>
          <input
            type="text"
            value={personal.lastName}
            onChange={(e) => setPersonal((p) => ({ ...p, lastName: e.target.value }))}
            className={inputClass}
          />
        </label>

        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700 text-sm">Email</span>
          <input
            type="email"
            value={personal.email}
            disabled
            className="px-2 rounded-md bg-gray-200 border border-transparent h-11 w-full text-gray-400 cursor-not-allowed"
          />
        </label>

      </div>

      {personalError && (
        <p className="mb-4 text-sm text-red-500">{personalError}</p>
      )}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleSavePersonal}
          disabled={!isPersonalDirty || isPersonalPending}
          className={`text-sm font-medium px-5 py-2.5 rounded-md transition-all ${
            isPersonalDirty && !isPersonalPending
              ? "bg-primary-1 text-white hover:bg-primary-1/90 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isPersonalPending ? "Saving..." : "Save personal info"}
        </button>
      </div>

      <div className="border-b border-gray-200 mb-6" />

      {/* ── Professional Details ── */}
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Professional Details
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700 text-sm">Agency name</span>
          <input
            type="text"
            value={profile.agencyName}
            onChange={(e) => setProfile((p) => ({ ...p, agencyName: e.target.value }))}
            className={inputClass}
          />
        </label>

        <label>
          <span className="block mb-2 text-gray-700 text-sm">Licence number</span>
          <input
            type="text"
            value={profile.licenseNumber}
            onChange={(e) => setProfile((p) => ({ ...p, licenseNumber: e.target.value }))}
            className={inputClass}
          />
        </label>

        <label>
          <span className="block mb-2 text-gray-700 text-sm">Years of experience</span>
          <input
            type="number"
            min={0}
            max={60}
            value={profile.yearsExperience}
            onChange={(e) => setProfile((p) => ({ ...p, yearsExperience: e.target.value }))}
            className={inputClass}
          />
        </label>

        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700 text-sm">Bio</span>
          <textarea
            rows={4}
            value={profile.bio}
            onChange={(e) => setProfile((p) => ({ ...p, bio: e.target.value }))}
            placeholder="Tell clients a little about yourself…"
            className={textareaClass}
          />
        </label>

        <div className="sm:col-span-2">
          <span className="block mb-2 text-gray-700 text-sm">Specializations</span>
          <div className="flex flex-wrap gap-2">
            {SPECIALIZATIONS.map((spec) => {
              const selected = profile.specializations.includes(spec)
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

      {/* ── Contact Details ── */}
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Contact Details
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700 text-sm">Phone number</span>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
            className={inputClass}
          />
        </label>

        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700 text-sm">Office address</span>
          <input
            type="text"
            value={profile.officeAddress}
            onChange={(e) => setProfile((p) => ({ ...p, officeAddress: e.target.value }))}
            className={inputClass}
          />
        </label>

        <label>
          <span className="block mb-2 text-gray-700 text-sm">City</span>
          <input
            type="text"
            value={profile.city}
            onChange={(e) => setProfile((p) => ({ ...p, city: e.target.value }))}
            className={inputClass}
          />
        </label>

        <label>
          <span className="block mb-2 text-gray-700 text-sm">Country</span>
          <input
            type="text"
            value={profile.country}
            onChange={(e) => setProfile((p) => ({ ...p, country: e.target.value }))}
            className={inputClass}
          />
        </label>

      </div>

      {profileError && (
        <p className="mt-4 text-sm text-red-500">{profileError}</p>
      )}

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSaveProfile}
          disabled={!isProfileDirty || isProfilePending}
          className={`text-sm font-medium px-5 py-2.5 rounded-md transition-all ${
            isProfileDirty && !isProfilePending
              ? "bg-primary-1 text-white hover:bg-primary-1/90 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isProfilePending ? "Saving..." : "Save changes"}
        </button>
      </div>

      {toastVisible && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-md shadow whitespace-nowrap">
          Changes saved
        </div>
      )}
    </div>
  )
}