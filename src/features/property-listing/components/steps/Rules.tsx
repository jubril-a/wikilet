import StepWrapper from "../components/StepWrapper";
import Select from "react-select";

const activities = [
  { value: 'wifi', label: 'Smoking' },
  { value: 'ac', label: 'Events or parties' },
  { value: 'tv', label: 'Pets' },
]

type RulesProps = {
  selectedRules: string[]
  setSelectedRules: (items: string[]) => void
}

export default function Rules({ selectedRules, setSelectedRules }: RulesProps) {
  return (
    <StepWrapper heading="House Rules">
      <label htmlFor="">
        <span className="block mb-2 text-gray-700">Allow...</span>
        <Select isMulti options={activities} onChange={(selected) => setSelectedRules(selected.map(i => i.label))} />
        <input type="hidden" name="rules" value={JSON.stringify(selectedRules)} />
      </label>
    </StepWrapper>
  )
}