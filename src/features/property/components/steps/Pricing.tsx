'use client'

import { useState } from "react"
import FormInput from "@/src/components/ui/FormInput"
import StepWrapper from "./StepWrapper"
import { useListingStore } from "@/src/stores/listingStore"
import type { PropertyData } from "@/src/types/property"
import type { CreateListingPayload } from "@/src/stores/listingStore"

type EditPricingState = {
    price: number
    cleaningFee: number | undefined
    minStay: number
    maxStay: number
}

export default function Pricing({
    page,
    property,
    onEditChange,
}: {
    page?: "edit" | "create"
    property?: PropertyData
    onEditChange?: (state: Partial<CreateListingPayload>) => void
}) {
    const isCreate = page === "create"

    const { price, cleaningFee, minStay, maxStay, setField } = useListingStore()

    const [editForm, setEditForm] = useState<EditPricingState>({
        price:       property?.price       ?? 0,
        cleaningFee: property?.cleaningFee,
        minStay:     property?.minStay     ?? 1,
        maxStay:     property?.maxStay     ?? 1,
    })

    function updateEditField(key: keyof EditPricingState, value: number | undefined) {
        const next = { ...editForm, [key]: value }
        setEditForm(next)
        onEditChange?.(next)
    }

    const priceProps = isCreate
        ? { value: String(price), onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("price", Number(e.target.value)) }
        : { value: String(editForm.price), onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateEditField("price", Number(e.target.value)) }

    const cleaningFeeProps = isCreate
        ? { value: cleaningFee !== undefined ? String(cleaningFee) : "", onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("cleaningFee", e.target.value ? Number(e.target.value) : undefined) }
        : { value: editForm.cleaningFee !== undefined ? String(editForm.cleaningFee) : "", onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateEditField("cleaningFee", e.target.value ? Number(e.target.value) : undefined) }

    const minStayProps = isCreate
        ? { value: String(minStay), onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("minStay", Number(e.target.value)) }
        : { value: String(editForm.minStay), onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateEditField("minStay", Number(e.target.value)) }

    const maxStayProps = isCreate
        ? { value: String(maxStay), onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("maxStay", Number(e.target.value)) }
        : { value: String(editForm.maxStay), onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateEditField("maxStay", Number(e.target.value)) }

    return (
        <StepWrapper heading="Pricing & Availability" page={page}>
            <FormInput name="price"        type="number" label="Enter your standard price per night" {...priceProps}       />
            <FormInput name="cleaning-fee" type="number" label="Cleaning or service fee (optional)"  {...cleaningFeeProps} />
            <FormInput name="min-stay"     type="number" label="Minimum stay duration"               {...minStayProps}     />
            <FormInput name="max-stay"     type="number" label="Maximum stay duration"               {...maxStayProps}     />
        </StepWrapper>
    )
}