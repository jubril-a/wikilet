'use client'

import { useState } from "react"
import StepWrapper from "./StepWrapper"
import FormInput from "@/src/components/ui/FormInput"
import Image from "next/image"
import { cn } from "@/src/lib/utils"
import { useListingStore } from "@/src/stores/listingStore"
import type { PropertyData } from "@/src/types/property"

// --- Types ---

type PropertyCategory = "home" | "hotel" | "apartment" | "vacation"
type SpaceType = "entire" | "private" | "shared"

type EditFormState = {
    title: string
    propertyType: PropertyCategory
    spaceType: SpaceType
    maxCapacity: number
}

// --- Sub-components ---

type SpaceProps = {
    name: string
    value: string
    checked?: boolean
    onChange?: (value: string) => void
}

const Space = ({ name, value, checked, onChange }: SpaceProps) => (
    <label className="border border-gray-200 p-5 flex-1 bg-gray-200 rounded-lg cursor-pointer">
        <input
            id={value}
            name="space-type"
            type="radio"
            value={value}
            className="mr-3"
            required
            checked={checked}
            onChange={() => onChange?.(value)}
        />
        <span>{name}</span>
    </label>
)

function Category({ category, className, checked, onChange }: {
    category: string
    value: string
    className: string
    checked?: boolean
    onChange?: (value: string) => void
}) {
    return (
        <label className={cn(
            "group rounded-lg min-w-12 min-[960px]:w-30 min-[480px]:aspect-square p-4 flex justify-center items-center grow cursor-pointer has-checked:border-3 border-blue-600",
            className
        )}>
            <input
                type="radio"
                name="category"
                value={category}
                className="peer hidden"
                required
                checked={checked}
                onChange={() => onChange?.(category)}
            />
            <div>
                <Image
                    src={`/images/icon-${category}.png`}
                    alt=""
                    className="h-8 min-[960px]:h-10 w-auto mx-auto"
                    width={60}
                    height={80}
                />
                <p className="capitalize text-center text-sm mt-2">{category}</p>
            </div>
        </label>
    )
}

// --- Main Component ---

export default function PropertyDetails({
    page,
    index,
    property,
    onEditChange,
}: {
    page?: "edit" | "create"
    index: number
    property?: PropertyData
    onEditChange?: (state: EditFormState) => void
}) {
    const isCreate = page === "create"

    // Zustand (create mode)
    const { title, propertyType, spaceType, maxCapacity, setField } = useListingStore()

    // Local state seeded from pre-fetched property (edit mode)
    const [editForm, setEditForm] = useState<EditFormState>({
        title:        property?.title        ?? "",
        propertyType: property?.propertyType ?? "home",
        spaceType:    property?.spaceType    ?? "entire",
        maxCapacity:  property?.maxCapacity  ?? 1,
    })

    function updateEditField<K extends keyof EditFormState>(key: K, value: EditFormState[K]) {
        setEditForm((prev) => {
            const next = { ...prev, [key]: value }
            onEditChange?.(next)
            return next
        })
    }

    // --- Resolved props per mode ---

    const titleProps = isCreate
        ? {
            value: title,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("title", e.target.value),
          }
        : {
            value: editForm.title,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateEditField("title", e.target.value),
          }

    const categoryProps = isCreate
        ? {
            checked: (cat: string) => propertyType === cat,
            onChange: (val: string) => setField("propertyType", val as PropertyCategory),
          }
        : {
            checked: (cat: string) => editForm.propertyType === cat,
            onChange: (val: string) => updateEditField("propertyType", val as PropertyCategory),
          }

    const spaceProps = isCreate
        ? {
            checked: (val: string) => spaceType === val,
            onChange: (val: string) => setField("spaceType", val as SpaceType),
          }
        : {
            checked: (val: string) => editForm.spaceType === val,
            onChange: (val: string) => updateEditField("spaceType", val as SpaceType),
          }

    const capacityProps = isCreate
        ? {
            value: String(maxCapacity),
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("maxCapacity", Number(e.target.value)),
          }
        : {
            value: String(editForm.maxCapacity),
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateEditField("maxCapacity", Number(e.target.value)),
          }

    return (
        <StepWrapper heading="Property Details" page={page}>
            <FormInput
                name="title"
                type="text"
                label="Property Name"
                required
                {...titleProps}
            />
            <div>
                <span className="block mb-3 text-gray-700">Property Category</span>
                <div className="grid min-[480px]:grid-cols-4 gap-4">
                    {(["home", "hotel", "apartment", "vacation"] as const).map((cat) => (
                        <Category
                            key={cat}
                            category={cat}
                            value={cat}
                            className={cn({
                                "bg-[#632B30] text-white": cat === "home",
                                "bg-[#BEE3DB]":            cat === "hotel",
                                "bg-[#2274A5] text-white": cat === "apartment",
                                "bg-[#FFD6BA]":            cat === "vacation",
                            })}
                            checked={categoryProps.checked(cat)}
                            onChange={categoryProps.onChange}
                        />
                    ))}
                </div>
            </div>
            <div>
                <span className="block mb-2 text-gray-700">Type of Space</span>
                <div className="grid min-[480px]:grid-cols-3 gap-4">
                    {([
                        { value: "entire",  name: "Entire Place" },
                        { value: "private", name: "Private Room" },
                        { value: "shared",  name: "Shared Room" },
                    ] as const).map((s) => (
                        <Space
                            key={s.value}
                            {...s}
                            checked={spaceProps.checked(s.value)}
                            onChange={spaceProps.onChange}
                        />
                    ))}
                </div>
            </div>
            <FormInput
                name="capacity"
                type="number"
                label="Maximum Capacity"
                required
                {...capacityProps}
            />
        </StepWrapper>
    )
}