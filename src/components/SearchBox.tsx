'use client'

import PopupScreen from "./PopupScreen"
import SearchInput from "./SearchInput"
import { useSearchStore } from "../stores/searchStore"
import { usePopupStore } from "../stores/popupsStore"

function formatDateRange(checkIn: Date, checkOut: Date): string {
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" });

  return `${fmt(checkIn)} - ${fmt(checkOut)}`;
}

function formatGuests(adults: number, children: number, rooms: number, pets: boolean): string {
  const guests = adults + children;
  const parts = [
    guests > 0 && `${guests} Guest${guests > 1 ? "s" : ""}`,
    rooms > 0 && `${rooms} Room${rooms > 1 ? "s" : ""}`,
    pets && "Pets",
  ].filter(Boolean);

  return parts.length > 0 ? parts.join(", ") : "Add Guests";
}

export default function SearchBox() {

    const { destination, checkInDate, checkOutDate, adults, children, rooms, pets } = useSearchStore()
    const { setSeacrhPopup } = usePopupStore()

    return (
        <>
            <PopupScreen />
            <div className="bg-white p-8 relative z-5 rounded-md">
                <div className="grid gap-2 min-[900px]:grid-cols-4 max-w-900">
                    <SearchInput h2="Where?" label={destination} clickHandler={() => (setSeacrhPopup("location"))} />
                    <SearchInput h2="When?" label={checkInDate && checkOutDate ? formatDateRange(checkInDate, checkOutDate) : "Add Dates"} clickHandler={() => (setSeacrhPopup("schedule"))} />
                    <SearchInput h2="Who?" label={formatGuests(adults, children, rooms, pets)} clickHandler={() => (setSeacrhPopup("guest"))} />
                    <div className="self-end">
                        <button className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer w-full">Search Properties</button>
                    </div>
                </div>
            </div>
        </>
    )
}