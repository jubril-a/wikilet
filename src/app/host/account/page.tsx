import AccountSettings from "./AccountSettings"
import { getProfile } from "@/src/features/account/actions"
import { getMe } from "@/src/lib/auth"
import { profileDataType } from "@/src/types/account"

export default async function AgentSettingsPage() {
  const profile = await getProfile()
  const user = await getMe()

  const profileData: profileDataType = profile ? {
    firstName: user.firstName ?? '',
    lastName: user.lastName ?? '',
    email: user.email ?? '',
    role: 'agent',
    agencyName: profile.agencyName ?? '',
    licenseNumber: profile.licenseNumber ?? '',
    phone: profile.phone ?? '',
    bio: profile.bio ?? '',
    profileImage: user.profileImage ?? null,
    yearsExperience: profile.yearsExperience ?? '',
    specializations: profile.specializations ?? [],
    officeAddress: profile.officeAddress ?? '',
    city: profile.city ?? '',
    country: profile.country ?? '',
  } : {
    firstName: user.firstName ?? '',
    lastName: user.lastName ?? '',
    email: user.email ?? '',
    role: 'agent',
    agencyName: '',
    licenseNumber: '',
    phone: '',
    bio: '',
    profileImage: null,
    yearsExperience: '',
    specializations: [],
    officeAddress: '',
    city: '',
    country: '',
  }

  return (
    <AccountSettings profileData={profileData} />
    )
}