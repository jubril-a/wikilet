import { MapPinIcon } from "@heroicons/react/24/solid"
import SuggestionBox from "./SuggestionBox"

export default function LocationPopup() {
    return (
        <>
            <form>
                <input type="text" name="" id="" placeholder="Search Destinations" className="h-15 w-full bg-gray-200 hover:bg-gray-100 rounded-md p-3" />
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