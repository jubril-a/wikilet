import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"

export default function page() {
    return (
        <>
            <Hero />
            <Showcase />
            <div className="pb-50"></div>
        </>
    )
}