export type BookingStatus = "upcoming" | "ongoing" | "completed" | "cancelled"

export interface Booking {
  id: string
  propertyType: string
  propertyName: string
  location: string
  checkIn: string  // ISO date string e.g. "2025-05-12"
  checkOut: string
  nights: number
  totalPrice: string
  status: BookingStatus
  images: string[]
}