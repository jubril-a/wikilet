import FormInput from "@/src/components/FormInput"
import Select from "react-select";

const activities = [
  { value: 'wifi', label: 'Smoking' },
  { value: 'ac', label: 'Events or parties' },
  { value: 'tv', label: 'Pets' },
]


export default function Step6() {
  return (
    <>
      <h1 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight">House Rules</h1>
      <FormInput name="check-in" type="text" label="Check-in time" />
      <FormInput name="check-out" type="text" label="Check-out time" />
      <label htmlFor="">
        <span className="block mb-2 text-gray-700">Allow...</span>
        <Select isMulti options={activities} />
      </label>
    </>
  )
}