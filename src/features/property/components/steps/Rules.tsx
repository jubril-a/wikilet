'use client'

import { useState } from "react"
import StepWrapper from "./StepWrapper"
import Select from "react-select"
import { useListingStore } from "@/src/stores/listingStore"
import type { PropertyData } from "@/src/types/property"
import type { CreateListingPayload } from "@/src/stores/listingStore"

type Allow = "smoking" | "ac" | "pets"

const activities = [
    { value: 'smoking', label: 'Smoking' },
    { value: 'ac',      label: 'Events or parties' },
    { value: 'pets',    label: 'Pets' },
]

export default function Rules({
    page,
    property,
    onEditChange,
}: {
    page?: "edit" | "create"
    property?: PropertyData
    onEditChange?: (state: Partial<CreateListingPayload>) => void
}) {
    const isCreate = page === "create"

    const { allow, setField } = useListingStore()

    const [editAllow, setEditAllow] = useState<Allow[]>(
        (property?.allow ?? []) as Allow[]
    )

    function handleEditChange(selected: Allow[]) {
        setEditAllow(selected)
        onEditChange?.({ allow: selected })
    }

    const selectedOptions = isCreate
        ? activities.filter((a) => allow.includes(a.value as Allow))
        : activities.filter((a) => editAllow.includes(a.value as Allow))

    return (
        <StepWrapper heading="House Rules" page={page}>
            <label>
                <span className="block mb-2 text-gray-700">Allow...</span>
                <Select
                    isMulti
                    options={activities}
                    value={selectedOptions}
                    onChange={isCreate
                        ? (selected) => setField("allow", selected.map((s) => s.value as Allow))
                        : (selected) => handleEditChange(selected.map((s) => s.value as Allow))
                    }
                />
            </label>
        </StepWrapper>
    )
}