import StepWrapper from "../StepWrapper";
import Select from "react-select";
import { useListingStore } from "@/src/stores/listingStore";

type Allow = "smoking" | "ac" | "pets"

const activities = [
  { value: 'smoking', label: 'Smoking' },
  { value: 'ac', label: 'Events or parties' },
  { value: 'pets', label: 'Pets' },
]

export default function Rules({page}: {page?: "edit" | "create"}) {
  const isCreate = page === "create"

  const { allow, setField } = useListingStore()

  const selectedOptions = isCreate
    ? activities.filter((a) => allow.includes(a.value as Allow))
    : undefined

  return (
    <StepWrapper heading="House Rules" page={page}>
      <label>
        <span className="block mb-2 text-gray-700">Allow...</span>
        <Select
          isMulti
          options={activities}
          value={selectedOptions}
          onChange={isCreate ? (selected) => setField("allow", selected.map((s) => s.value as Allow)) : undefined}
        />
      </label>
    </StepWrapper>
  )
}