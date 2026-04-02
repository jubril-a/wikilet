import GuestCounter from "./GuestCounter"

export default function GuestPopup() {
    return (
        <>
            <GuestCounter label="Adults" description="Ages 18 and older" />
            <GuestCounter label="Children" description="Ages 0 to 17" />
            <GuestCounter label="Rooms" description="" />
            <div className="flex items-start gap-2 mt-8">
                <input type="checkbox" name="" id="" />
                <span className="inline-block text-sm text-gray-700 -mt-1 max-w-100">I am traveling with pets. If checked, only properties that allow pets will be shown</span>
            </div>
            <button className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer mt-6 w-full">Continue</button>
        </>
    )
}
