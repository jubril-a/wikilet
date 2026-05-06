'use client'

import SearchInput from "@/src/components/SearchInput"
import { usePopupStore } from "@/src/stores/popupsStore"
import { useSearchStore } from "@/src/stores/searchStore"
import { formatDateRange, formatGuests } from "@/src/lib/utils"
import { SubsectionWrapper } from "../components/SubsectionWrapper"

export default function CheckAvailability() {
    const { setSeacrhPopup } = usePopupStore()
    const { checkInDate, checkOutDate, adults, children, rooms, pets } = useSearchStore()

    return (
        <SubsectionWrapper className="min-[720px]:flex gap-4 items-center px-4 min-[640px]:px-8">
            <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-2">Check Availability</h2>
                <p className="text-lg max-w-100 mb-5">Pick your dates and guests to see pricing and availability in real time.</p>
            </div>
            <div className="bg-black w-full max-w-84 shrink-0 px-8 py-12 text-white grid gap-5 rounded-3xl relative z-5">
                <SearchInput h2="When?" label={checkInDate && checkOutDate ? formatDateRange(checkInDate, checkOutDate) : "Add Dates"} clickHandler={() => (setSeacrhPopup("schedule"))} />
                <SearchInput h2="Who?" label={formatGuests(adults, children, rooms, pets)} clickHandler={() => (setSeacrhPopup("guest"))} />                
                <a href="/booking/confirm-order" className="bg-gray-600 rounded-md text-center text-white py-3 cursor-pointer hover:bg-primary-2 hover:text-primary-1 text-sm font-semibold">Check</a>
            </div>
        </SubsectionWrapper>
    )
}