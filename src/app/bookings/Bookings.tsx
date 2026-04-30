"use client"

import { useState } from "react"
import { Booking, BookingStatus } from "@/src/types/booking"
import BookingCard from "./components/BookingCard"
import Section from "@/src/components/Section"

const FILTERS: { label: string; value: BookingStatus | "all" }[] = [
  { label: "All",       value: "all"       },
  { label: "Upcoming",  value: "upcoming"  },
  { label: "Ongoing",   value: "ongoing"   },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
]

// ── Replace with a real API fetch ──────────────────────────────────────────────
const MOCK_BOOKINGS: Booking[] = [
  {
    id: "BK-00421",
    propertyType: "Vacation rental",
    propertyName: "Azure Horizon Villa",
    location: "Amalfi Coast, Italy",
    checkIn: "2025-05-12",
    checkOut: "2025-05-17",
    nights: 5,
    totalPrice: "N225,000",
    status: "upcoming",
    images: [],
  },
  {
    id: "BK-00398",
    propertyType: "Apartment",
    propertyName: "Lagos Skyline Penthouse",
    location: "Victoria Island, Lagos",
    checkIn: "2025-04-30",
    checkOut: "2025-05-02",
    nights: 2,
    totalPrice: "N56,000",
    status: "ongoing",
    images: [],
  },
  {
    id: "BK-00312",
    propertyType: "Hotel suite",
    propertyName: "The Monarch Retreat",
    location: "Abuja, FCT",
    checkIn: "2025-03-03",
    checkOut: "2025-03-06",
    nights: 3,
    totalPrice: "N180,000",
    status: "completed",
    images: [],
  },
  {
    id: "BK-00289",
    propertyType: "Home",
    propertyName: "Garden Cottage Escape",
    location: "Ibadan, Oyo",
    checkIn: "2025-02-10",
    checkOut: "2025-02-12",
    nights: 2,
    totalPrice: "N30,000",
    status: "completed",
    images: [],
  },
  {
    id: "BK-00254",
    propertyType: "Vacation rental",
    propertyName: "Beachfront Bungalow",
    location: "Lekki, Lagos",
    checkIn: "2025-01-20",
    checkOut: "2025-01-22",
    nights: 2,
    totalPrice: "N70,000",
    status: "cancelled",
    images: [],
  },
]
// ──────────────────────────────────────────────────────────────────────────────

export default function Bookings() {
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS)
  const [filter, setFilter] = useState<BookingStatus | "all">("all")

  const filtered =
    filter === "all" ? bookings : bookings.filter((b) => b.status === filter)

  // Wire these up to your real API calls
  const handleCancel = (id: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "cancelled" as const } : b))
    )
  }

  const handleReview = (id: string) => {
    // e.g. router.push(`/reviews/new?bookingId=${id}`)
  }

  const handleRebook = (id: string) => {
    // e.g. router.push(`/properties/${propertyId}`)
  }

  const handleViewReceipt = (id: string) => {
    // e.g. open a modal or router.push(`/bookings/${id}/receipt`)
  }

  return (
    <Section>
        <main className="w-full max-w-2xl mx-auto">
            <div className="my-6">
                <p className="text-2xl max-w-100 font-extrabold text-gray-700">
                {filtered.length} booking{filtered.length !== 1 ? "s" : ""}
                </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-1.5 mb-6">
                {FILTERS.map((f) => (
                <button
                    key={f.value}
                    onClick={() => setFilter(f.value)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap ${
                    filter === f.value
                        ? "bg-gray-900 text-white border-gray-900"
                        : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-800"
                    }`}
                >
                    {f.label}
                </button>
                ))}
            </div>

            {/* List */}
            {filtered.length === 0 ? (
                <p className="text-center text-gray-400 py-16 text-sm">No bookings found.</p>
            ) : (
                <div className="flex flex-col gap-2.5">
                {filtered.map((booking) => (
                    <BookingCard
                    key={booking.id}
                    booking={booking}
                    onCancel={handleCancel}
                    onReview={handleReview}
                    onRebook={handleRebook}
                    onViewReceipt={handleViewReceipt}
                    />
                ))}
                </div>
            )}
        </main>
    </Section>
  )
}