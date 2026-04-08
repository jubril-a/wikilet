import Section from "./Section"
import ProductCard from "./ProductCard"
import ScrollBtns from "./ScrollBtns"

export default function TopDestinations() {
    return (
        <Section>
            <div className="flex justify-between items-center">
                <div className="mb-8 max-w-160">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-2">Explore our unique properties</h2>
                    <p className="text-gray-800 max-w-160">Explore handpicked properties, from modern apartments to beachfront homes and everything in between.</p>
                </div>
                <ScrollBtns />
            </div>
            <div className="flex gap-4 overflow-scroll no-scrollbar">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </Section>
    )
}