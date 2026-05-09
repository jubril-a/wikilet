"use client"

import Section from "@/src/components/layout/Section"
import PropertyCard from "@/src/features/property/components/PropertyCard"
import ScrollBtns from "@/src/app/(public)/_sections/components/ScrollBtns"
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
            <div ref={scrollerRef} className="flex overflow-scroll no-scrollbar">
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>
        </Section>
    )
}