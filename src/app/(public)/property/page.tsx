import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import PropertyDetails from "./sections/PropertyDetails"
import CheckAvailability from "./sections/CheckAvailability"
import GuestReviews from "./sections/GuestReviews"

export default function page() {
    return (
        <>
            <Hero />
            <Showcase />
            <PropertyDetails />
            <CheckAvailability />
            <GuestReviews />
        </>
    )
}