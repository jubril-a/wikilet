// import { useSearchStore } from "../stores/SearchStore"
import Counter from "./Counter"

type Props = {
    label: string,
    description: string
}

export default function GuestCounter({label, description} : Props) {

    //  const {
    //     destination,
    //     setDestination,
    //     adults,
    //     children,
    //     setGuests,
    // } = useSearchStore();


    return (
        <div className="flex items-center justify-between py-4 px-6 bg-gray-100 hover:bg-gray-200 mb-2 rounded-md">
            <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
            <Counter />
        </div>
    )
}