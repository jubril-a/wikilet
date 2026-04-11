'use client'

import PopupScreen from "./PopupScreen"
import SearchInput from "./SearchInput"
import { useSearchStore } from "../stores/searchStore"
import { usePopupStore } from "../stores/popupsStore"

export default function SearchBox() {

    const { destination } = useSearchStore()
    const { setSeacrhPopup } = usePopupStore()

    return (
        <>
            <PopupScreen />
            <div className="bg-white p-8 relative z-5 rounded-md">
                <div className="grid gap-2 min-[900px]:grid-cols-4 max-w-900">
                    <SearchInput h2="Where?" label={destination} clickHandler={() => (setSeacrhPopup("location"))} />
                    <SearchInput h2="When?" label="Add Dates" clickHandler={() => (setSeacrhPopup("schedule"))} />
                    <SearchInput h2="Who?" label="Add Guests" clickHandler={() => (setSeacrhPopup("guest"))} />
                    <div className="self-end">
                        <button className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer w-full">Search Properties</button>
                    </div>
                </div>
            </div>
        </>
    )
}