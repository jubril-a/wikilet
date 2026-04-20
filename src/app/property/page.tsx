import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import PropertyDetails from "./sections/PropertyDetails"

export default function page() {
    return (
        <>
            <Hero />
            <Showcase />
            <PropertyDetails />
            <div className="pb-50"></div>
        </>
    )
}