import StepWrapper from "../components/StepWrapper";
import FormInput from "@/src/components/FormInput"
import Image from "next/image"
import { cn } from "@/src/lib/utils"

type SpaceProps = {
    id: string,
    value: string
}

const Space = ({id, value}: SpaceProps) => {
    return (
        <label className="border border-gray-200 p-5 flex-1 bg-gray-200 rounded-lg cursor-pointer">
            <input id={id} name="type" type="radio" value={value} className="mr-3" required />
            <span>{value}</span>
        </label>
    )
}

function Category({category, className}: {category: string; className: string}) {
    return (
        <label className={cn("group rounded-lg w-30 aspect-square flex justify-center items-center grow cursor-pointer has-checked:border-3 border-blue-600", className)}>
            <input type="radio" name="category" value={category} className="peer hidden" required />
            <div>
                <Image src={`/images/icon-${category}.png`} alt="" className="h-10 w-auto mx-auto" width={60} height={80} />
                <p className="capitalize text-center text-sm mt-2">{category}</p>
            </div>
        </label>
    )
}

export default function PropertyDetails() {
  return (
    <StepWrapper heading="Property Details">
        <FormInput name="name" type="text" label="Property Name" required />
        <div>
            <span className="block mb-3 text-gray-700">Property Category</span>
            <div className="flex gap-4">
                <Category category="home" className="bg-[#632B30] text-white" />
                <Category category="hotel" className="bg-[#BEE3DB]" />
                <Category category="apartment" className="bg-[#2274A5] text-white" />
                <Category category="vacation" className="bg-[#FFD6BA]" />
            </div>
        </div>
        <div>
            <span  className="block mb-2 text-gray-700">Type of Space</span>
            <div className="grid sm:grid-cols-3 gap-4">
                <Space id="entire" value="Entire Place" />
                <Space id="private" value="Private Room" />
                <Space id="shared" value="Shared Room" />
            </div>
        </div>
        <FormInput name="capacity" type="number" label="Maximum Capacity" required />
    </StepWrapper>
  )
}

