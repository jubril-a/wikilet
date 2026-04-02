'use client'

import PopupScreen from "./PopupScreen"
import SearchInput from "./SearchInput"
import { popupType } from "../app/types"
import { useState } from "react"

export default function SearchBox() {

    const [currentPopup, setCurrentPopup] = useState<popupType>("none")

    return (
        <>
            <PopupScreen popup={currentPopup} popupHandler={setCurrentPopup} />
            <div className="max-w-900 bg-white p-8 rounded-md">
                <div className="grid gap-4 grid-cols-4 max-w-900">
                    <SearchInput h2="Where?" label="Select Destination" clickHandler={() => (setCurrentPopup("location"))} />
                    <SearchInput h2="When?" label="Add Dates" clickHandler={() => (setCurrentPopup("schedule"))} />
                    <SearchInput h2="Who?" label="Add Guests" clickHandler={() => (setCurrentPopup("guest"))} />
                    <div className="self-end">
                        <input type="submit" value="Search Properties" className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer w-full" />
                    </div>
                </div>
            </div>
        </>
    )
}