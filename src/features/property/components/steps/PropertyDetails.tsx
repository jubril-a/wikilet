import StepWrapper from "./StepWrapper";
import FormInput from "@/src/components/ui/FormInput"
import Image from "next/image"
import { cn } from "@/src/lib/utils"
import { useListingStore } from "@/src/stores/listingStore";

type SpaceProps = {
    name: string,
    value: string,
    checked?: boolean,
    onChange?: (value: string) => void,
}

const Space = ({name, value, checked, onChange}: SpaceProps) => {
    return (
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
}

function Category({category, className, checked, onChange}: {
    category: string; 
    value: string; 
    className: string;
    checked?: boolean;
    onChange?: (value: string) => void;
}) {
    return (
        <label className={cn("group rounded-lg min-w-12 min-[960px]:w-30 min-[480px]:aspect-square p-4 flex justify-center items-center grow cursor-pointer has-checked:border-3 border-blue-600", className)}>
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
                <Image src={`/images/icon-${category}.png`} alt="" className="h-8 min-[960px]:h-10 w-auto mx-auto" width={60} height={80} />
                <p className="capitalize text-center text-sm mt-2">{category}</p>
            </div>
        </label>
    )
}

export default function PropertyDetails({page} : {page ?: "edit" | "create"}) {
    const isCreate = page === "create"

    const { title, propertyType, spaceType, maxCapacity, setField } = useListingStore()

    const storeProps = isCreate ? {
        title: {
            value: title,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("title", e.target.value),
        },
        category: {
            checked: (cat: string) => propertyType === cat,
            onChange: (val: string) => setField("propertyType", val as typeof propertyType),
        },
        space: {
            checked: (val: string) => spaceType === val,
            onChange: (val: string) => setField("spaceType", val as typeof spaceType),
        },
        capacity: {
            value: String(maxCapacity),
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("maxCapacity", Number(e.target.value)),
        },
    } : null

    return (
        <StepWrapper heading="Property Details" page={page}>
            <FormInput 
                name="title" 
                type="text" 
                label="Property Name" 
                required
                {...storeProps?.title}
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
                                "bg-[#BEE3DB]": cat === "hotel",
                                "bg-[#2274A5] text-white": cat === "apartment",
                                "bg-[#FFD6BA]": cat === "vacation",
                            })}
                            checked={storeProps?.category.checked(cat)}
                            onChange={storeProps?.category.onChange}
                        />
                    ))}
                </div>
            </div>
            <div>
                <span className="block mb-2 text-gray-700">Type of Space</span>
                <div className="grid sm:grid-cols-3 gap-4">
                    {([
                        { value: "entire", name: "Entire Place" },
                        { value: "private", name: "Private Room" },
                        { value: "shared", name: "Shared Room" },
                    ] as const).map((s) => (
                        <Space 
                            key={s.value}
                            {...s} 
                            checked={storeProps?.space.checked(s.value)}
                            onChange={storeProps?.space.onChange}
                        />
                    ))}
                </div>
            </div>
            <FormInput 
                name="capacity" 
                type="number" 
                label="Maximum Capacity" 
                required 
                {...storeProps?.capacity}
            />
        </StepWrapper>
    )
}