// import { useSearchStore } from "@/src/stores/SearchStore"
import Counter from "./Counter"

type Props = {
    label: "Adults" | "Children" | "Rooms",
    description: string
}

export default function GuestCounter({label, description} : Props) {

    return (
        <div className="min-[360px]:flex items-center justify-between gap-2 py-6 px-6 bg-gray-100 hover:bg-gray-200 mb-2 rounded-md">
            <div className="max-[460px]:mb-3">
                <p className="text-sm font-medium">{label}</p>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
            <Counter type={label} />
        </div>
    )
}