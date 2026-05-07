import StepWrapper from "../StepWrapper";
import FormInput from "@/src/components/FormInput"
import Image from "next/image"
import { cn } from "@/src/lib/utils"

type SpaceProps = {
    name: string,
    value: string,
}

const Space = ({name, value}: SpaceProps) => {
    return (
        <label className="border border-gray-200 p-5 flex-1 bg-gray-200 rounded-lg cursor-pointer">
            <input id={value} name="space-type" type="radio" value={value} className="mr-3" required />
            <span>{name}</span>
        </label>
    )
}

function Category({category, className}: {category: string; value: string; className: string}) {
    return (
        <label className={cn("group rounded-lg min-w-12 min-[960px]:w-30 min-[480px]:aspect-square p-4 flex justify-center items-center grow cursor-pointer has-checked:border-3 border-blue-600", className)}>
            <input type="radio" name="category" value={category} className="peer hidden" required />
            <div>
                <Image src={`/images/icon-${category}.png`} alt="" className="h-8 min-[960px]:h-10 w-auto mx-auto" width={60} height={80} />
                <p className="capitalize text-center text-sm mt-2">{category}</p>
            </div>
        </label>
    )
}

export default function PropertyDetails() {

  return (
    <StepWrapper heading="Property Details">
        <FormInput name="title" type="text" label="Property Name" required />
        <div>
            <span className="block mb-3 text-gray-700">Property Category</span>
            <div className="grid min-[480px]:grid-cols-4 gap-4">
                <Category category="home" value="home" className="bg-[#632B30] text-white" />
                <Category category="hotel" value="hotel" className="bg-[#BEE3DB]" />
                <Category category="apartment" value="apartment" className="bg-[#2274A5] text-white" />
                <Category category="vacation" value="vacation" className="bg-[#FFD6BA]" />
            </div>
        </div>
        <div>
            <span  className="block mb-2 text-gray-700">Type of Space</span>
            <div className="grid sm:grid-cols-3 gap-4">
                <Space value="entire" name="Entire Place" />
                <Space value="private" name="Private Room" />
                <Space value="shared" name="Shared Room" />
            </div>
        </div>
        <FormInput name="capacity" type="number" label="Maximum Capacity" required />
    </StepWrapper>
  )
}

