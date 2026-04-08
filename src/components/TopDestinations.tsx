import Section from "./Section"
import ProductCard from "./ProductCard"

export default function TopDestinations() {
    return (
        <Section>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-950 mb-2">Explore our unique properties</h2>
            <p className="text-gray-800">Explore handpicked properties, from modern apartments to beachfront homes and everything in between.</p>

            <div>
                <ProductCard />
            </div>
        </Section>
    )
}