import GuestCounter from "./GuestCounter"
import PetsCheckbox from "./PetsCheckbox"
import { usePopupStore } from "@/src/stores/popupsStore"
import { useSearchStore } from "@/src/stores/searchStore";
import { useState } from "react"
import { cn } from "@/src/lib/utils";

export default function GuestPopup() {

    const { setPopup } = usePopupStore()
    const { adults, rooms } = useSearchStore();
     const [ error, setError ] = useState<string | null>(null)

    function validateGuests() {
        if (!adults) {
            setError("Please select the number of adults.");
        } else if (!rooms) {
            setError("Please select the number of rooms.");
        } else if (adults < 1) {
            setError("At least one adult is required.");
        } else if (rooms < 1) {
            setError("At least one room is required.");
        } else {
            setPopup("none");
        }
    }

    return (
        <>
            <p className={cn("text-white mb-3 text-sm", error && "text-red-500")}>{error}</p>
            <GuestCounter label="Adults" description="Ages 18 and older" />
            <GuestCounter label="Children" description="Ages 0 to 17" />
            <GuestCounter label="Rooms" description="" />
            {/* <PetsCheckbox /> */}
            <button onClick={validateGuests} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer mt-6 w-full">Continue</button>
        </>
    )
}
