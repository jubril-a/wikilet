import DatePicker from "./DatePicker"
import { useSearchStore } from "../stores/searchStore";
import { usePopupStore } from "../stores/popupsStore"

function ScheduleBox({label, description} : {label: "Arrival" | "Departure", description: string}) {
    return (
        <div className="flex items-center justify-between py-4 px-6 bg-gray-100 hover:bg-gray-200 mb-2 rounded-md">
            <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
            <DatePicker type={label} />
        </div>
    )
}

export default function SchedulePopup() {

    const { checkInDate, checkOutDate } = useSearchStore();
    const { setSeacrhPopup } = usePopupStore()

    function validateSchedule() {
        // TODO: validate selected dates
        setSeacrhPopup("none")
        
    }

    return (
        <>
            <ScheduleBox label="Arrival" description={checkInDate ? checkInDate.toDateString() : "When will you check in?"} />
            <ScheduleBox label="Departure" description={checkOutDate ? checkOutDate.toDateString() : "When will you check out?"} />
            <button onClick={validateSchedule} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer mt-2 w-full">Continue</button>
        </>
    )
}
