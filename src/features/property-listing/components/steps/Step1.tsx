import FormInput from "@/src/components/FormInput"

type SpaceProps = {
    id: string,
    value: string
}

const Space = ({id, value}: SpaceProps) => {
    return (
        <div className="border border-gray-200 p-4 flex-1">
            <input id={id} name="type" type="radio" value={value} className="mr-3"/>
            <label htmlFor={id}>{value}</label>
        </div>
    )
}

export default function Step1() {
  return (
    <div className="grid gap-6">
        <h1 className="mb-4 text-3xl md:text-4xl font-semibold">Property Details</h1>
        <FormInput name="property-name" type="text" label="Property Name" />
        <label htmlFor="property-category">
            <span className="block mb-2 text-gray-700">Property Category</span>
            <select name="property-category" className="px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full">
                <option className="bg-gray-200" value="" disabled selected></option>
                <option value="hotel">Hotel</option>
                <option value="apartment">Serviced Apartment</option>
                <option value="rental">Short Stay / Vacation Rental</option>
                <option value="gh">Guest House</option>
            </select>
        </label>
        <div>
            <span  className="block mb-2 text-gray-700">Type of Space</span>
            <div className="flex gap-4">
                <Space id="entire" value="Entire Place" />
                <Space id="private" value="Private Room" />
                <Space id="shared" value="Shared Room" />
            </div>
        </div>
        <FormInput name="max-capacity" type="number" label="Maximum Capacity" />
    </div>
  )
}