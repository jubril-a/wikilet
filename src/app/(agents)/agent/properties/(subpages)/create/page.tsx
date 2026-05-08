'use client'

import { cn } from "@/src/lib/utils"
import { useState } from "react"
import PropertyForm from "@/src/app/(agents)/agent/components/layout/PropertyForm"

const stepsLabel = [
    "Property Details",
    "Location Information",
    "Photos",
    "Amenities & Facilities",
    "Pricing",
    "House Rules",
    "Property Description",
    "Legal & Safety Confirmation",
]

function Step({label, goTo, active}: {label: string, active: boolean, goTo: () => void}) {
    return (
        <button className={cn("text-left text-sm p-2 pl-3", active && "border-l-4 border-l-primary-2 text-primary-2 bg-gray-100")} onClick={goTo}>{label}</button>  
    )
}

export default function CreateProperty() {

    const [currentStep, setCurrentStep] = useState(0)

    return (
        <div className="">
            <div className="pb-8 border-b border-b-gray-200">
                <h1 className="text-2xl font-bold text-primary-1 mb-1">Create a new property</h1>
                <p className="text-gray-500 text-sm">Manage your listings, availability, and financial performance</p>
            </div>
            <div className="flex bg-white">
                <nav className="grid gap-1 w-fit h-fit p-4 min-[480px]:px-8 min-[480px]:py-12">
                    {stepsLabel.map((label, index) => (
                        <Step key={label} label={label} active={index == currentStep} goTo={() => setCurrentStep(index)} />
                    ))}   
                </nav>
                <PropertyForm currentStepIndex={currentStep} setCurrentStepIndex={setCurrentStep} />
            </div>
        </div>
    )
}