'use client'

import PropertyDetails from "./steps/PropertyDetails"
import Description from "./steps/Description"
import LocationInfo from "./steps/LocationInfo"
import Media from "./steps/Media"
import Facilities from "./steps/Facilities"
import Pricing from "./steps/Pricing"
import Rules from "./steps/Rules"
import Terms from "./steps/Terms"
import { Dispatch, SetStateAction } from "react"
import { useListingStore } from "@/src/stores/listingStore"
import { createProperty } from "../actions"

export default function PropertyForm({ currentStepIndex, setCurrentStepIndex }: { currentStepIndex: number, setCurrentStepIndex: Dispatch<SetStateAction<number>>}) {

    const forms = [
        PropertyDetails,
        LocationInfo,
        Media,
        Facilities,
        Pricing,
        Rules,
        Description,
        Terms
    ]

    const CurrentStep = forms[currentStepIndex]

    function prev() {
        setCurrentStepIndex(i => Math.max(0, i - 1))
    }

    function next() {
        setCurrentStepIndex(i => Math.min(forms.length - 1, i + 1))
    }

    const handleSubmit = async () => {
        const formData = useListingStore.getState()

        try {
            const data = await createProperty(formData)
            console.log('Success:', data)
        } catch (err) {
            if (err instanceof Error) {
            console.error('Error:', err.message)
            }
        }
    }


    return (
        <form className="min-[440px]:border-l min-[440px]:border-l-gray-300 min-[440px]:p-4 min-[480px]:px-8 min-[480px]:py-12  grow">
            <div className="max-w-150">
                {
                    <CurrentStep page="create" index={currentStepIndex + 1} />
                }
            </div>
            <div className="flex justify-between items-center gap-4 mt-10 max-w-150">
                {currentStepIndex !== 0 && <button type="button" onClick={prev} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full">Prev Step</button>}
                {currentStepIndex !== forms.length - 1 && <button type="button" onClick={next} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full">Next Step</button>}
                {currentStepIndex == forms.length - 1 && <button type="button" onClick={handleSubmit} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full">Submit</button>}
            </div>
        </form>
    )
}