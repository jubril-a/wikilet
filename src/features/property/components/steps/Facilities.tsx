'use client'

import { useState } from "react"
import Select from "react-select"
import StepWrapper from "./StepWrapper"
import { useListingStore } from "@/src/stores/listingStore"
import type { PropertyData } from "@/src/types/property"
import type { CreateListingPayload } from "@/src/stores/listingStore"

const amenityOptions = [
    { value: 'wifi',          label: 'Wi-Fi' },
    { value: 'ac',            label: 'Air conditioning' },
    { value: 'tv',            label: 'Television' },
    { value: 'power-backup',  label: 'Power backup' },
    { value: 'parking',       label: 'Parking' },
    { value: 'kitchen',       label: 'Kitchen' },
    { value: 'fridge',        label: 'Refrigerator' },
    { value: 'microwave',     label: 'Microwave' },
    { value: 'laundry',       label: 'Laundry facilities' },
    { value: 'security',      label: 'Security' },
    { value: 'swimming-pool', label: 'Swimming pool' },
    { value: 'finess-center', label: 'Fitness center' },
    { value: 'elevator',      label: 'Elevator / Lift' },
    { value: 'workspace',     label: 'Work desk / workspace' },
]

type Power = "24hr" | "gen" | "grid" | "inverter"

type EditFacilitiesState = {
    amenities: string[]
    power: Power | ""
}

export default function Facilities({
    page,
    property,
    onEditChange,
}: {
    page?: "edit" | "create"
    property?: PropertyData
    onEditChange?: (state: Partial<CreateListingPayload>) => void
}) {
    const isCreate = page === "create"

    const { amenities, power, setAmenities, setField } = useListingStore()

    const [editForm, setEditForm] = useState<EditFacilitiesState>({
        amenities: property?.amenities ?? [],
        power:     property?.power     ?? "",
    })

    function updateEditForm(updates: Partial<EditFacilitiesState>) {
        const next = { ...editForm, ...updates }
        setEditForm(next)
        onEditChange?.({
            amenities: next.amenities,
            ...(next.power ? { power: next.power as Power } : {}),
        })
    }

    const selectedOptions = isCreate
        ? amenityOptions.filter((a) => amenities.includes(a.value))
        : amenityOptions.filter((a) => editForm.amenities.includes(a.value))

    return (
        <StepWrapper heading="Amenities & Facilities" page={page}>
            <label>
                <span className="block mb-2 text-gray-700">Select all amenities available at your property</span>
                <Select
                    isMulti
                    options={amenityOptions}
                    value={selectedOptions}
                    onChange={isCreate
                        ? (selected) => setAmenities(selected.map((s) => s.value))
                        : (selected) => updateEditForm({ amenities: selected.map((s) => s.value) })
                    }
                />
            </label>
            <label>
                <span className="block mb-2 text-gray-700">What best describes your power availability?</span>
                <select
                    name="power"
                    className="px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full"
                    value={isCreate ? (power ?? "") : editForm.power}
                    onChange={isCreate
                        ? (e) => setField("power", e.target.value as Power)
                        : (e) => updateEditForm({ power: e.target.value as Power })
                    }
                >
                    <option className="bg-gray-200" disabled value="">Select one</option>
                    <option value="24hr">24-hour power</option>
                    <option value="gen">Generator</option>
                    <option value="inverter">Inverter</option>
                    <option value="grid">Public grid only</option>
                </select>
            </label>
        </StepWrapper>
    )
}