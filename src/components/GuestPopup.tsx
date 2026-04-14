import GuestCounter from "./GuestCounter"
import PetsCheckbox from "./PetsCheckbox"
import { usePopupStore } from "../stores/popupsStore"

export default function GuestPopup() {

    const { setSeacrhPopup } = usePopupStore()

    function validateGuests() {
        // TODO: validate selected dates
        setSeacrhPopup("none")
    }

    return (
        <>
            <GuestCounter label="Adults" description="Ages 18 and older" />
            <GuestCounter label="Children" description="Ages 0 to 17" />
            <GuestCounter label="Rooms" description="" />
            <PetsCheckbox />
            <button onClick={validateGuests} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer mt-6 w-full">Continue</button>
        </>
    )
}
