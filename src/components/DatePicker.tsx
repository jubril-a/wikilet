import { ChevronDownIcon } from "@heroicons/react/16/solid"

export default function DatePicker() {
    return (
        <div className="px-5 py-3 cursor-pointer flex items-center justify-between gap-3 rounded-md border border-neutral-700 bg-primary-1 hover:bg-primary-1/90">
            <span className="text-sm text-neutral-100">Select Date</span>
            <ChevronDownIcon className="size-6 text-white" />
        </div>
    )
}
