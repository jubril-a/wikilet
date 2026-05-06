import Section from "@/src/components/Section"
import PropertyGrid from "@/src/components/PropertyGrid"

export default function BrowseByLocation() {
    return (
        <Section>
            <div className="mb-8 max-w-160">
                <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-2">Popular Destinations</h2>
                <p className="text-gray-800 max-w-160">Explore some of the most popular locations across major states in Nigeria, featuring a variety of available properties for short-term and long-term stays.</p>
            </div>
            <PropertyGrid />
        </Section>
    )
}