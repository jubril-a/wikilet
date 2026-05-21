export type Role = "user" | "agent"

export interface profileDataType {
  firstName: string,
  lastName: string,
  email: string,
  role: Role,
  agencyName: string,
  licenseNumber: string,
  phone: string,
  bio: string,
  profileImage: string | null,
  yearsExperience: string,
  specializations: string[],
  officeAddress: string,
  city: string,
  country: string
}