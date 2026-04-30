'use client'

import PropertyDetails from "../steps/PropertyDetails"
import LocationInfo from "../steps/LocationInfo"
import Media from "../steps/Media"
import Facilities from "../steps/Facilities"
import Pricing from "../steps/Pricing"
import Rules from "../steps/Rules"
import Terms from "../steps/Terms"
import { useRef } from "react"
import Form from "next/form"
import useMultiStepForm from "@/src/hooks/useMultiStepForm"
import StepTrack from "./StepTrack"
import { listProperty } from "@/src/app/actions/listProperty"
import { useActionState, useState } from "react"



const steps = [
    "Property Details",
    "Location Information",
    "Photos",
    "Amenities & Facilities",
    "Pricing",
    "House Rules",
    "Legal & Safety Confirmation",
]

export default function MultiStepForm() {

    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
    const [selectedRules, setSelectedRules] = useState<string[]>([])

    const forms = [
    <PropertyDetails key="1" />,
    <LocationInfo key="2" />,
    <Media key="3" />,
    <Facilities key="4"
    selectedAmenities={selectedAmenities}
    setSelectedAmenities={setSelectedAmenities}
    />,
    <Pricing key="5" />,
    <Rules key="6"
        selectedRules={selectedRules}
        setSelectedRules={setSelectedRules}
    />,
    <Terms key="7" />
]

    const formRef = useRef<HTMLFormElement>(null)
    const { CurrentStep, next, prev, currentStepIndex } = useMultiStepForm(forms)
    const [state, action] = useActionState(listProperty, null)
    

    function Next() {
        if (currentStepIndex + 1 != steps.length){
            next()
        } else {
           formRef.current?.requestSubmit()
        }
    }

    return (
        <div className="bg-gray-100 py-32 min-h-screen">
            <div className="max-w-300 mx-auto px-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tighter">Add a New Listing</h1>
            </div>
            <main className="flex gap-4 max-w-300 mx-auto px-4">
                <div className="w-68 h-fit bg-white rounded-md border border-gray-300 p-6">
                    {steps.map((label, index) => (
                        <StepTrack
                            key={index}
                            index={index}
                            label={label}
                            currentStep={currentStepIndex}
                        />
                    ))}
                </div>
                <Form action={action} ref={formRef} className="bg-white rounded-md border border-gray-300 p-8 grow">
                    <div className="max-w-150 py-16 mx-auto">
                        {state?.error && (
                            <p className="text-red-500 text-sm mb-4">{state.error}</p>
                        )}
                        {CurrentStep}
                        <div className="flex justify-between gap-4">
                            <button type="button" onClick={() => prev()} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 my-6 py-3 cursor-pointer w-full">Prev Step</button>
                            <button type="button" onClick={Next} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 my-6 py-3 cursor-pointer w-full">Next Step</button>
                        </div>
                    </div>
                </Form>
            </main>
        </div>
    )
}