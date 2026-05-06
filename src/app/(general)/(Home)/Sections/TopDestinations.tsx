"use client"

import Section from "@/src/components/Section"
import ProductCard from "@/src/components/ProductCard"
import ScrollBtns from "@/src/components/ScrollBtns"
import { useRef } from "react"

export default function TopDestinations() {

    const scrollerRef = useRef<HTMLDivElement>(null)

    return (
        <Section>
            <div className="flex justify-between items-center gap-4">
                <div className="mb-8 max-w-160">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-2">Explore our unique properties</h2>
                    <p className="text-gray-800 max-w-160">Explore handpicked properties, from modern apartments to beachfront homes and everything in between.</p>
                </div>
                <ScrollBtns scroller={scrollerRef} />
            </div>
            <div ref={scrollerRef} className="flex gap-2 overflow-scroll no-scrollbar">
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