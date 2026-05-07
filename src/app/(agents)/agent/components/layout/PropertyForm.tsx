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

export default function PropertyForm({stepState}:{stepState: [number,  Dispatch<SetStateAction<number>>]}) {

    const [currentStepIndex, setCurrentStepIndex] = stepState

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


    function prev() {
        setCurrentStepIndex(currentStepIndex - 1)
    }

    function next() {
        setCurrentStepIndex(currentStepIndex + 1)
    }

    function submit() {
        
    }

    return (
        <form className="border-l border-l-gray-300 p-4 min-[480px]:px-8 min-[480px]:py-12  grow">
            <div className="max-w-150">
                {
                    forms[currentStepIndex]()
                }
            </div>
            <div className="flex justify-between items-center gap-4 mt-10 max-w-150">
                {currentStepIndex !== 0 && <button type="button" onClick={() => prev()} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full">Prev Step</button>}
                {currentStepIndex !== forms.length - 1 && <button type="button" onClick={() => next()} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full">Next Step</button>}
                {currentStepIndex == forms.length - 1 && <button type="button" onClick={() => submit()} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full">Submit</button>}
            </div>
        </form>
    )
}