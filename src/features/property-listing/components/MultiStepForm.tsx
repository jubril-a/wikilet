'use client'

import PropertyDetails from "./steps/PropertyDetails"
import LocationInfo from "./steps/LocationInfo"
import Media from "./steps/Media"
import Facilities from "./steps/Facilities"
import Pricing from "./steps/Pricing"
import Rules from "./steps/Rules"
import PartnerInfo from "./steps/PartnerInfo"
import PayoutDetails from "./steps/PayoutDetails"
import Terms from "./steps/Terms"

import Form from "next/form"
import useMultiStepForm from "@/src/hooks/useMultiStepForm"

const forms = [
    PropertyDetails, LocationInfo, Media, Facilities, Pricing, Rules, PartnerInfo, PayoutDetails, Terms
]

export default function MultiStepForm() {

    const {step, next, prev} = useMultiStepForm(forms)

  return (
    <main className="max-w-300 mx-auto px-4">
        <Form action={""} className="max-w-150 mx-auto">
            {step()}
            <div className="flex justify-between gap-4">
                <button type="button" onClick={() => prev()} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 my-6 py-3 cursor-pointer w-full">Prev Step</button>
                <button type="button" onClick={() => next()} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 my-6 py-3 cursor-pointer w-full">Next Step</button>
            </div>
        </Form>
    </main>
  )
}