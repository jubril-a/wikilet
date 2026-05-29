"use client"

import AddRoomForm from "./AddRoomForm"
import { deleteRoom } from "@/src/features/property/actions"
import { useRouter } from "next/navigation"

type RoomType = {
  id: string,
  type: string,
  capacity: string,
  price: number
}

export default function RoomMgmt({ propertyId, rooms }: { propertyId: string, rooms: RoomType[]}) {

  const router = useRouter()

  async function handleDelete(id: string) {
      try {
          await deleteRoom(id)
          router.refresh()
      } catch (err) {
          if (err instanceof Error) console.error(err.message)
      }
  }

  return (
    <div className="bg-gray-50 py-6">
        <AddRoomForm propertyId={propertyId} />
      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-4 px-6 py-3 border-b border-gray-100">
          {["ROOM TYPE", "CAPACITY", "BASE PRICE", "ACTIONS"].map(h => (
            <span key={h} className="text-xs font-semibold text-gray-400 tracking-wider">{h}</span>
          ))}
        </div>

        {/* Rows */}
        {rooms.map((b, i) => (
          <div
            key={b.id}
            className={`grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors ${
              i < rooms.length - 1 ? "border-b border-gray-50" : ""
            }`}
          >
            {/* Room Type */}
            <span className="text-sm text-gray-500">
              {b.type}
            </span>

            {/* Capacity */}
            <span className="text-sm text-gray-700">{b.capacity}</span>

            {/* Price */}
            <span className="text-sm text-gray-700">{b.price}</span>

             {/* Delete */}
            <span className="text-sm text-red-700 hover:text-amber-700 cursor-pointer" onClick={() => handleDelete(b.id)}>Delete</span>
          </div>
        ))}
      </div>
    </div>
  )
}