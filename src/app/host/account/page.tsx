import AccountSettings from "./AccountSettings"
import { getProfile } from "@/src/features/account/actions"
import { getMe } from "@/src/lib/auth"
import { profileDataType } from "@/src/types/account"

export interface FullProfileData extends profileDataType {
  firstName: string
  lastName: string
  email: string
  profileImage: string | null
}

export default async function AgentSettingsPage() {
  const profile = await getProfile()
  const user = await getMe()

  const profileData: FullProfileData = {
    firstName: user.firstName ?? '',
    lastName: user.lastName ?? '',
    email: user.email ?? '',
    profileImage: user.profileImage ?? null,
    agencyName: profile?.agencyName ?? '',
    licenseNumber: profile?.licenseNumber ?? '',
    phone: profile?.phone ?? '',
    bio: profile?.bio ?? '',
    yearsExperience: profile?.yearsExperience ?? '',
    specializations: profile?.specializations ?? [],
    officeAddress: profile?.officeAddress ?? '',
    city: profile?.city ?? '',
    country: profile?.country ?? '',
  }

  return (
    <AccountSettings profileData={profileData} hasProfile={profile !== null} />
  )
}