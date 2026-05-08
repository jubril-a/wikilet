"use client"

import { useState } from "react"
import Image from "next/image"
import { UsersIcon } from "@heroicons/react/24/outline"

const bookings = [
  { id: 1, property: "Azure Horizon Villa", image: "/images/product.jpg", rooms: ["#RM-402", "#RM-405"], checkIn: "Oct 24, 2024", checkOut: "Oct 28, 2024", guests: "3 Guests", status: "Upcoming" },
  { id: 2, property: "Skyline Penthouse", image: "/images/product.jpg", rooms: ["#PH-01"], checkIn: "Oct 20, 2024", checkOut: "Oct 25, 2024", guests: "2 Guests", status: "Ongoing" },
  { id: 3, property: "Garden Terrace Suite", image: "/images/product.jpg", rooms: ["#GT-102"], checkIn: "Oct 10, 2024", checkOut: "Oct 15, 2024", guests: "4 Guests", status: "Completed" },
  { id: 4, property: "Seaside Sanctuary", image: "/images/product.jpg", rooms: ["#SS-05"], checkIn: "Oct 05, 2024", checkOut: "Oct 08, 2024", guests: "1 Guests", status: "Cancelled" },
]

const filters = ["All Bookings", "Upcoming", "Ongoing", "Completed", "Cancelled"]

const statusStyles: Record<string, string> = {
  Upcoming: "bg-blue-50 text-blue-600 border border-blue-200",
  Ongoing: "bg-green-50 text-green-600 border border-green-200",
  Completed: "bg-gray-100 text-gray-600 border border-gray-200",
  Cancelled: "bg-red-50 text-red-500 border border-red-200",
}

const dotStyles: Record<string, string> = {
  Upcoming: "bg-blue-400",
  Ongoing: "bg-green-400",
}

const actionStyles: Record<string, string> = {
  Upcoming: "text-red-500 font-medium cursor-pointer hover:text-red-700",
  Ongoing: "text-gray-400 font-medium",
  Completed: "text-gray-400 font-medium",
  Cancelled: "text-gray-400 font-medium",
}

const actionLabels: Record<string, string> = {
  Upcoming: "Cancel Booking",
  Ongoing: "N/A",
  Completed: "N/A",
  Cancelled: "N/A",
}

export default function BookingsTable() {
  const [activeFilter, setActiveFilter] = useState("All Bookings")
  const [search, setSearch] = useState("")
//   const [page, setPage] = useState(1)
//   const totalPages = 3

  const filtered = bookings.filter(b => {
    const matchesFilter = activeFilter === "All Bookings" || b.status === activeFilter
    const matchesSearch = b.property.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="bg-gray-50 py-6">

      {/* Filter bar */}
      <div className="bg-white rounded-2xl px-4 py-3 mb-4 flex items-center justify-between flex-wrap gap-3 shadow-sm">
        <div className="flex gap-2 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 text-gray-500 hover:bg-gray-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2 gap-2 min-w-60">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
          </svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by property or ID..."
            className="border-none outline-none text-sm text-gray-700 bg-transparent w-full placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-[2fr_1.2fr_1fr_1fr_1fr_1fr_1fr] px-6 py-3 border-b border-gray-100">
          {["PROPERTY NAME", "ROOM ID(S)", "CHECK-IN", "CHECK-OUT", "GUESTS", "STATUS", "ACTIONS"].map(h => (
            <span key={h} className="text-xs font-semibold text-gray-400 tracking-wider">{h}</span>
          ))}
        </div>

        {/* Rows */}
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-sm text-gray-400">No bookings found</div>
        ) : filtered.map((b, i) => (
          <div
            key={b.id}
            className={`grid grid-cols-[2fr_1.2fr_1fr_1fr_1fr_1fr_1fr] px-6 py-4 items-center hover:bg-gray-50 transition-colors ${
              i < filtered.length - 1 ? "border-b border-gray-50" : ""
            }`}
          >
            {/* Property */}
            <div className="flex items-center gap-3">
              <Image width={48} height={40} src={b.image} alt={b.property} className="rounded-lg object-cover shrink-0" />
              <span className="font-semibold text-sm text-gray-900">{b.property}</span>
            </div>

            {/* Rooms */}
            <span className="text-sm text-gray-500">
              {b.rooms.join(", ")}
            </span>

            {/* Check-in */}
            <span className="text-sm text-gray-700">{b.checkIn}</span>

            {/* Check-out */}
            <span className="text-sm text-gray-700">{b.checkOut}</span>

            {/* Guests */}
            <div className="flex items-center">
              <UsersIcon className="size-4 text-gray-400 mr-1.5 shrink-0" />
              <span className="text-sm text-gray-700">{b.guests}</span>
            </div>

            {/* Status */}
            <div>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusStyles[b.status]}`}>
                {dotStyles[b.status] && (
                  <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[b.status]}`} />
                )}
                {b.status}
              </span>
            </div>

            {/* Action */}
            <span className={`text-sm ${actionStyles[b.status]}`}>
              {actionLabels[b.status]}
            </span>
          </div>
        ))}

        {/* Footer */}
        {/* <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">
            Showing <strong className="text-gray-900">1-4</strong> of <strong className="text-gray-900">24</strong> bookings
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                  page === n
                    ? "bg-gray-900 text-white"
                    : "border border-gray-200 text-gray-500 hover:bg-gray-50"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}