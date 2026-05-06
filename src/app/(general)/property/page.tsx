import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import PropertyDetails from "./sections/PropertyDetails"
import CheckAvailability from "./sections/CheckAvailability"

export default function page() {
    return (
        <>
            <Hero />
            <Showcase />
            <PropertyDetails />
            <CheckAvailability />
            <div className="pb-50"></div>
        </>
    )
}