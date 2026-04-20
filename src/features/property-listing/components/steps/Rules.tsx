import StepWrapper from "../StepWrapper";
import FormInput from "@/src/components/FormInput"
import Select from "react-select";

const activities = [
  { value: 'wifi', label: 'Smoking' },
  { value: 'ac', label: 'Events or parties' },
  { value: 'tv', label: 'Pets' },
]


export default function Rules() {
  return (
    <StepWrapper heading="House Rules">
      <FormInput name="check-in" type="text" label="Check-in time" />
      <FormInput name="check-out" type="text" label="Check-out time" />
      <label htmlFor="">
        <span className="block mb-2 text-gray-700">Allow...</span>
        <Select isMulti options={activities} />
      </label>
    </StepWrapper>
  )
}