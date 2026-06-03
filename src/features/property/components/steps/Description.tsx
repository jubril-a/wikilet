'use client'

import { useState } from "react"
import StepWrapper from "./StepWrapper"
import { useListingStore } from "@/src/stores/listingStore"
import type { PropertyData } from "@/src/types/property"
import type { CreateListingPayload } from "@/src/stores/listingStore"

export default function Description({
    page,
    property,
    onEditChange,
}: {
    page?: "edit" | "create"
    property?: PropertyData
    onEditChange?: (state: Partial<CreateListingPayload>) => void
}) {
    const isCreate = page === "create"

    const { description, setField } = useListingStore()

    const [editDescription, setEditDescription] = useState(property?.description ?? "")

    function handleEditChange(value: string) {
        setEditDescription(value)
        onEditChange?.({ description: value })
    }

    return (
        <StepWrapper heading="Property Description" page={page}>
            <label>
                <span className="block mb-4 text-gray-700">Write a description of your property</span>
                <textarea
                    name="description"
                    className="h-40 px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 w-full"
                    required
                    value={isCreate ? description : editDescription}
                    onChange={isCreate
                        ? (e) => setField("description", e.target.value)
                        : (e) => handleEditChange(e.target.value)
                    }
                />
            </label>
        </StepWrapper>
    )
}