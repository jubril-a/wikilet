'use client'

import { cn } from "@/src/lib/utils"
import { useState } from "react"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import PropertyDetails from "../../../../features/property/components/steps/PropertyDetails"
import Description from "../../../../features/property/components/steps/Description"
import LocationInfo from "../../../../features/property/components/steps/LocationInfo"
import Media from "../../../../features/property/components/steps/Media"
import Facilities from "../../../../features/property/components/steps/Facilities"
import Pricing from "../../../../features/property/components/steps/Pricing"
import Rules from "../../../../features/property/components/steps/Rules"

import {
    HomeIcon,
    MapPinIcon,
    PhotoIcon,
    CurrencyDollarIcon,
    ClipboardDocumentListIcon,
    DocumentTextIcon,
    Cog6ToothIcon} from "@heroicons/react/24/solid"


const stepsLabel = [
    {title: "Property Details", form: PropertyDetails, Icon: HomeIcon},
    {title: "Location Information", form: LocationInfo, Icon: MapPinIcon},
    {title: "Photos", form: Media, Icon: PhotoIcon},
    {title: "Amenities & Facilities", form: Facilities, Icon: Cog6ToothIcon},
    {title: "Pricing", form: Pricing, Icon: CurrencyDollarIcon},
    {title: "House Rules", form: Rules, Icon: ClipboardDocumentListIcon},
    {title: "Property Description", form: Description, Icon: DocumentTextIcon},
]

function Step({heading, Form, Icon} : {heading: string, Form: React.ElementType, Icon: React.ElementType}) {

    const [expanded, setExpanded] = useState(false)
    
    return (
        <div className="w-full border-b border-b-gray-200">
            <div className="group cursor-pointer min-[440px]:px-6 py-4" onClick={() => setExpanded(!expanded)}>
                <div className="flex gap-4 items-center">
                    <div className="size-10 rounded-md bg-gray-200 grid place-content-center">
                        <Icon className="size-6 text-gray-700" />
                    </div>
                    <div>
                        <h2 className={cn("group-hover:text-primary-2 font-semibold", expanded && "text-primary-2")}>{heading}</h2>
                        <p className="text-gray-400 text-sm">Click to edit</p>
                    </div>
                    <ChevronRightIcon className="text-gray-400 size-6 ml-auto" />
                </div>
            </div>
            {expanded && <div className="min-[440px]:px-6 min-[440px]:py-4 max-w-150">
              {<Form page="edit" /> }
            </div>}
        </div>
    )
}

export default function EditProperty() {

    // const [currentStep, setCurrentStep] = useState(0)

    return (
        <div className="">
            <div className="pb-8">
                <h1 className="text-2xl font-bold text-primary-1 mb-1">Edit property</h1>
                <p className="text-gray-500 text-sm">Manage your listings, availability, and financial performance</p>
            </div>
            <div className="min-[440px]:bg-white">
                {
                    stepsLabel.map(({title, form, Icon}) => (
                        <Step key={title} heading={title} Form={form} Icon={Icon} />    
                    ))
                }
            </div>
        </div>
    )
}