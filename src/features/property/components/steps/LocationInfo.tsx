'use client'

import { useState } from "react"
import CountrySelect from "@/src/components/ui/CountrySelect"
import FormInput from "@/src/components/ui/FormInput"
import StepWrapper from "./StepWrapper"
import { useListingStore } from "@/src/stores/listingStore"
import type { PropertyData } from "@/src/types/property"
import type { CreateListingPayload } from "@/src/stores/listingStore"

type EditLocationState = {
    country: string
    city: string
    area: string
    address: string
    landmark: string
}

export default function LocationInfo({
    page,
    property,
    onEditChange,
}: {
    page?: "edit" | "create"
    property?: PropertyData
    onEditChange?: (state: Partial<CreateListingPayload>) => void
}) {
    const isCreate = page === "create"

    const { country, city, location, setField, setLocation } = useListingStore()

    const [editForm, setEditForm] = useState<EditLocationState>({
        country:  property?.country            ?? "",
        city:     property?.city               ?? "",
        area:     property?.location?.area     ?? "",
        address:  property?.location?.address  ?? "",
        landmark: property?.location?.landmark ?? "",
    })

    function updateEditField(key: keyof EditLocationState, value: string) {
        const next = { ...editForm, [key]: value }
        setEditForm(next)
        onEditChange?.({
            country:  next.country,
            city:     next.city,
            location: { area: next.area, address: next.address, landmark: next.landmark },
        })
    }

    const countryProps = isCreate
        ? { value: country, onChange: (value: string) => setField("country", value) }
        : { value: editForm.country, onChange: (value: string) => updateEditField("country", value) }

    const cityProps = isCreate
        ? { value: city, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("city", e.target.value) }
        : { value: editForm.city, onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateEditField("city", e.target.value) }

    const areaProps = isCreate
        ? { value: location.area, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLocation({ area: e.target.value }) }
        : { value: editForm.area, onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateEditField("area", e.target.value) }

    const addressProps = isCreate
        ? { value: location.address, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLocation({ address: e.target.value }) }
        : { value: editForm.address, onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateEditField("address", e.target.value) }

    const landmarkProps = isCreate
        ? { value: location.landmark, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLocation({ landmark: e.target.value }) }
        : { value: editForm.landmark, onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateEditField("landmark", e.target.value) }

    return (
        <StepWrapper heading="Location Information" page={page}>
            <label>
                <span className="block mb-2 text-gray-700">Country</span>
                <CountrySelect {...countryProps} />
            </label>
            <FormInput name="city"     type="text" label="State"            {...cityProps}     />
            <FormInput name="area"     type="text" label="Area"             {...areaProps}     />
            <FormInput name="address"  type="text" label="Property Address" {...addressProps}  />
            <FormInput name="landmark" type="text" label="Nearby Landmark"  {...landmarkProps} />
        </StepWrapper>
    )
}