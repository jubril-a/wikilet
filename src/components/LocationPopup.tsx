import { MapPinIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import SuggestionBox from "./SuggestionBox"
import { SubmitEvent } from "react"
import { useSearchStore } from "../stores/searchStore"
import { usePopupStore } from "../stores/popupsStore"

export default function LocationPopup() {

    const { setDestination } = useSearchStore()
    const { setSeacrhPopup } = usePopupStore()

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const input = e.currentTarget.elements.namedItem("destination") as HTMLInputElement

        if (input) {
            setDestination(input.value)
            setSeacrhPopup("none")
        }   
    }

    return (
        <>
            <form onSubmit={(e) => {handleSubmit(e)}} className="flex gap-2">
                <input type="text" name="destination" id="" placeholder="Search Destinations" className="h-15 w-full bg-gray-200 hover:bg-gray-100 rounded-md p-3" />
                <button className="bg-[#8bd925] rounded-md p-4 h-15 cursor-pointer"><ChevronRightIcon className="text-white size-8" /></button>
            </form>
            <div className="flex gap-4 items-center p-4 mt-4 bg-gray-100 hover:bg-gray-200 mb-2 cursor-pointer rounded-md">
                <div className="grid place-items-center size-14 rounded-md bg-[#8bd925]">
                    <MapPinIcon className="text-white size-8" />
                </div>
                <div>
                    <p className="text-sm font-medium">Current Location</p>
                    <p className="text-sm text-gray-700">Find Destinations Near You</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm mb-2 text-gray-900">Suggested destinations</p>
                <SuggestionBox label="Lekki, Lagos" decription="Explore top stays in Lekki" />
                <SuggestionBox label="Ikoyi, Lagos" decription="Find premium homes in Ikoyi" />
                <SuggestionBox label="Abuja, Nigeria" decription="Browse stays in Nigeria&apos;s capital" />
            </div>
        </>
    )
}