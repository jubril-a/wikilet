"use client"

import { useState } from "react"
import Section from "@/src/components/layout/Section"
import PropertyCard from "../../../features/property/components/SavedPropertyCard"
import { Property } from "@/src/types/property"

const MOCK_PROPERTIES: Property[] = [
  { id: 1, type: "Vacation rental", name: "Azure Horizon Villa", location: "Amalfi Coast, Italy", price: "N45,000", rating: 4.8, reviews: 86, image: "" },
  { id: 2, type: "Apartment", name: "Lagos Skyline Penthouse", location: "Victoria Island, Lagos", price: "N28,000", rating: 4.5, reviews: 34, image: "" },
  { id: 3, type: "Hotel suite", name: "The Monarch Retreat", location: "Abuja, FCT", price: "N60,000", rating: 5.0, reviews: 112, image: "" },
  { id: 4, type: "Home", name: "Garden Cottage Escape", location: "Ibadan, Oyo", price: "N15,000", rating: 4.2, reviews: 19, image: "" },
]

export default function SavedProperties() {
  const [properties, setProperties] = useState<Property[]>(MOCK_PROPERTIES)

  const handleRemove = (id: number) => {
    setProperties((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <Section>
        <main className="max-[960px]:max-w-160 mx-auto">
            <div className="my-6">
                <p className="text-2xl max-w-100 font-extrabold text-gray-700">
                {properties.length} {properties.length === 1 ? "property" : "properties"} saved
                </p>
            </div>

            {properties.length === 0 ? (
                <p className="text-center text-gray-400 py-16 text-sm">No saved properties yet.</p>
            ) : (
                <div className="grid min-[960px]:grid-cols-2 gap-6">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} onRemove={handleRemove} />
                    ))}
                </div>
            )}
        </main>
    </Section>
  )
}