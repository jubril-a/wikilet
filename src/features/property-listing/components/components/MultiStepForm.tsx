'use client'

import PropertyDetails from "../steps/PropertyDetails"
import Description from "../steps/Description"
import LocationInfo from "../steps/LocationInfo"
import Media from "../steps/Media"
import Facilities from "../steps/Facilities"
import Pricing from "../steps/Pricing"
import Rules from "../steps/Rules"
import Terms from "../steps/Terms"
import Form from "next/form"
import useMultiStepForm from "@/src/hooks/useMultiStepForm"
import StepTrack from "./StepTrack"
import { listProperty } from "@/src/app/actions/listProperty"
import { useActionState, useState } from "react"
import Submit from "@/src/components/Submit"



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
    <Description key="7" />,
    <Terms key="8" />
]

    const {next, prev, currentStepIndex } = useMultiStepForm(forms)
    const [state, action] = useActionState(listProperty, null)

    return (
        <div className="bg-gray-100 py-32 min-h-screen">
            <div className="max-w-300 mx-auto px-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tighter">Add a New Listing</h1>
            </div>
            <main className="min-[760px]:flex min-[760px]:gap-4 max-w-300 mx-auto px-4">
                <div className="min-[960px]:w-68 h-fit bg-white rounded-md border border-gray-300 p-4 min-[960px]:p-6 max-[760px]:flex max-[760px]:mb-4 max-[760px]:justify-between max-[540px]:hidden">
                    {stepsLabel.map((label, index) => (
                        <StepTrack
                            key={index}
                            index={index}
                            label={label}
                            currentStep={currentStepIndex}
                        />
                    ))}
                </div>
                <Form action={action} className="bg-white rounded-md border border-gray-300 p-4 min-[480px]:p-8 grow">
                     {state?.error && (
                            <p className="text-red-500 text-sm mb-4">{state.error}</p>
                        )}
                        <div className="max-w-150 py-8 min-[540px]:py-16 mx-auto">
                            {forms.map((step, index) => (
                            <div key={index} className={index === currentStepIndex ? "block" : "hidden"}>
                                {step}
                            </div>
                        ))}
                        <div className="flex justify-between items-center gap-4 mt-10">
                            {currentStepIndex != 0 && <button type="button" onClick={() => prev()} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full">Prev Step</button>}
                            {currentStepIndex != forms.length - 1 && <button type="button" onClick={() => next()} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full">Next Step</button>}
                            {currentStepIndex == forms.length - 1 && <Submit action="listProperty" />}
                        </div>
                    </div>
                </Form>
            </main>
        </div>
    )
}