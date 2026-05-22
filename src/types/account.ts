export type Role = "user" | "agent"

export interface profileDataType {
  agencyName: string,
  licenseNumber: string,
  phone: string,
  bio: string,
  yearsExperience: string,
  specializations: string[],
  officeAddress: string,
  city: string,
  country: string
}