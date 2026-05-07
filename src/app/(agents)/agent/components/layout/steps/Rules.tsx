import StepWrapper from "../StepWrapper";
import Select from "react-select";

const activities = [
  { value: 'smoking', label: 'Smoking' },
  { value: 'ac', label: 'Events or parties' },
  { value: 'pets', label: 'Pets' },
]

export default function Rules() {

  return (
    <StepWrapper heading="House Rules">
      <label htmlFor="">
        <span className="block mb-2 text-gray-700">Allow...</span>
        <Select isMulti options={activities} />
      </label>
    </StepWrapper>
  )
}