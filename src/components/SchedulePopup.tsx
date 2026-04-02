import DatePicker from "./DatePicker"

function ScheduleBox({label, description} : {label: string, description: string}) {
    return (
        <div className="flex items-center justify-between py-4 px-6 bg-gray-100 hover:bg-gray-200 mb-2 rounded-md">
            <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
            <DatePicker />
        </div>
    )
}

export default function SchedulePopup() {
    return (
        <>
            <ScheduleBox label="Arrival" description="When will you check in?" />
            <ScheduleBox label="Departure" description="When will you check out?" />
            <button className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer mt-2 w-full">Continue</button>
        </>
    )
}
