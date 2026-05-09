// components/bookings/BookingCard.tsx
"use client"

import { ArrowRight, MapPin } from "lucide-react"
import { Booking, BookingStatus } from "@/src/types/booking"
import { usePopupStore } from "@/src/stores/popupsStore" 
import Image from "next/image"

const STATUS_STYLES: Record<BookingStatus, string> = {
  upcoming:  "bg-blue-50 text-blue-800",
  ongoing:   "bg-green-50 text-green-800",
  completed: "bg-gray-100 text-gray-600",
  cancelled: "bg-red-50 text-red-800",
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

interface BookingCardProps {
  booking: Booking
  onCancel: (id: string) => void
  onReview: (id: string) => void
  onRebook: (id: string) => void
  onViewReceipt: (id: string) => void
}

export default function BookingCard({ booking, onCancel, onReview, onRebook, onViewReceipt }: BookingCardProps) {
  const { status } = booking
  const { setSeacrhPopup } = usePopupStore()

  return (
    <div className="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors">

      {/* Top: image + name / location / badge */}
      <div className="flex flex-row">
        <div className="w-24 min-w-24 sm:w-32 bg-gray-100 self-stretch flex items-center justify-center shrink-0 overflow-hidden">
          {booking.images[0] ? (
            <Image
              width={144}
              height={120}
              src={booking.images[0]}
              alt={booking.propertyName}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              width={144}
              height={120}
              src="/images/product.jpg"
              alt={booking.propertyName}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="flex flex-col justify-between px-3 py-2.5 min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <span className="text-[11px] text-gray-400 tracking-wide leading-none">
              {booking.propertyType}
            </span>
            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full leading-none ${STATUS_STYLES[status]}`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
          <p className="font-bold text-primary-1 group-hover:text-blue-600 text-base truncate">{booking.propertyName}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin size={11} className="text-gray-400 shrink-0" />
            <span className="text-xs text-gray-500 truncate">{booking.location}</span>
          </div>
        </div>
      </div>

      {/* Middle: dates + price */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 border-t border-gray-100">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[12px] bg-gray-100 text-gray-600 rounded-md px-2 py-1 whitespace-nowrap">
            {formatDate(booking.checkIn)}
          </span>
          <ArrowRight size={11} className="text-gray-400 shrink-0" />
          <span className="text-[12px] bg-gray-100 text-gray-600 rounded-md px-2 py-1 whitespace-nowrap">
            {formatDate(booking.checkOut)}
          </span>
          <span className="text-[12px] text-gray-400 whitespace-nowrap">
            · {booking.nights} night{booking.nights > 1 ? "s" : ""}
          </span>
        </div>

        <div className="text-right shrink-0">
          <p className="text-gray-800 font-extrabold text-lg">{booking.totalPrice}</p>
          <div className="flex items-center gap-1.5 justify-end">
            <span className="text-[11px] text-gray-400">id:</span>
            <span className="text-[11px] text-gray-300">{booking.id}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-1.5 px-3 py-2 border-t border-gray-100 bg-gray-50">
        <button
          onClick={() => onViewReceipt(booking.id)}
          className="text-[12px] border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-500 hover:border-gray-300 hover:text-gray-800 transition-colors whitespace-nowrap bg-white"
        >
          View receipt
        </button>

        {(status === "upcoming" || status === "ongoing") && (
          <button
            onClick={() => onCancel(booking.id)}
            className="text-[12px] border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-500 hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors whitespace-nowrap bg-white"
          >
            Cancel
          </button>
        )}

        {status === "completed" && (
          <button
            onClick={() => {setSeacrhPopup("review"); onReview(booking.id)}}
            className="text-[12px] border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-500 hover:border-gray-300 hover:text-gray-800 transition-colors whitespace-nowrap bg-white"
          >
            Leave a review
          </button>
        )}

        {(status === "completed" || status === "cancelled") && (
          <button
            onClick={() => onRebook(booking.id)}
            className="text-[12px] border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-500 hover:border-gray-300 hover:text-gray-800 transition-colors whitespace-nowrap bg-white"
          >
            Rebook
          </button>
        )}
      </div>
    </div>
  )
}