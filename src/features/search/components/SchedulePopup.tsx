import DatePicker from "./DatePicker"
import { useSearchStore } from "@/src/stores/searchStore";
import { usePopupStore } from "@/src/stores/popupsStore"
import { cn } from "@/src/lib/utils";
import { useState } from "react";

function ScheduleBox({label, description} : {label: "Arrival" | "Departure", description: string}) {
    return (
        <div className="min-[460px]:flex items-center justify-between gap-2 py-6 px-6 bg-gray-100 hover:bg-gray-200 mb-2 rounded-md">
            <div className="max-[460px]:mb-3">
                <p className="text-sm font-medium">{label}</p>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
            <DatePicker type={label} />
        </div>
    )
}

export default function SchedulePopup() {

    const { checkInDate, checkOutDate } = useSearchStore();
    const { setPopup } = usePopupStore()
    const [ error, setError ] = useState<string | null>(null)

    function validateSchedule() {
        if (!checkInDate || !checkOutDate) {
            setError("Arrival and departure dates are required.")
        } else {
            // Remove time portion for date-only comparison
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const arrivalDate = new Date(checkInDate);
            arrivalDate.setHours(0, 0, 0, 0);

            const departureDate = new Date(checkOutDate);
            departureDate.setHours(0, 0, 0, 0);

            if (arrivalDate < today) {
                setError("Arrival date cannot be in the past.")
            } else if (departureDate <= arrivalDate) {
                setError("Departure date must be after arrival date.")
            } else {
                setPopup("none")
            }
        }
    }

    return (
        <>
            <p className={cn("text-white mb-3 text-sm", error && "text-red-500")}>{error}</p>
            <ScheduleBox label="Arrival" description={checkInDate ? checkInDate.toDateString() : "When will you check in?"} />
            <ScheduleBox label="Departure" description={checkOutDate ? checkOutDate.toDateString() : "When will you check out?"} />
            <button onClick={validateSchedule} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer mt-2 w-full">Continue</button>
        </>
    )
}
