'use client'

import SearchInput from "./SearchInput"
import { useSearchStore } from "@/src/stores/searchStore"
import { usePopupStore } from "@/src/stores/popupsStore"
import { formatDateRange, formatGuests } from "../../../lib/utils"
import { useRouter } from 'next/navigation'

export default function SearchBox() {

    const router = useRouter()
    const { destination, checkInDate, checkOutDate, adults, children, rooms, pets } = useSearchStore()
    const { setSeacrhPopup } = usePopupStore()

    function goToListings() {
        router.push(`/listings?location=${destination}&checkin=${checkInDate?.toISOString().split("T")[0]}&checkout=${checkOutDate?.toISOString().split("T")[0]}&guest=${adults + children}&rooms=${rooms}&source=home`)
    }

    return (
        <>
            <div className="bg-[#efede8] p-8 relative z-5 rounded-md">
                <div className="grid gap-2 min-[900px]:grid-cols-4 max-w-900">
                    <SearchInput h2="Where?" label={destination} clickHandler={() => (setSeacrhPopup("location"))} />
                    <SearchInput h2="When?" label={checkInDate && checkOutDate ? formatDateRange(checkInDate, checkOutDate) : "Add Dates"} clickHandler={() => (setSeacrhPopup("schedule"))} />
                    <SearchInput h2="Who?" label={formatGuests(adults, children, rooms, pets)} clickHandler={() => (setSeacrhPopup("guest"))} />
                    <div className="self-end">
                        <button onClick={goToListings} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer w-full">Search Properties</button>
                    </div>
                </div>
            </div>
        </>
    )
}
