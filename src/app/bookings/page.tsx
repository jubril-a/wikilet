import SubHero from "@/src/components/SubHero"
import Bookings from "./Bookings"

export default function page() {
    return (
        <>
            <SubHero heading="My Bookings" />
            <Bookings />
            <div className="pb-50"></div>
        </>
    )
}