import Select from "react-select";
import StepWrapper from "./StepWrapper";
import { useListingStore } from "@/src/stores/listingStore";

const amenityOptions = [
  { value: 'wifi', label: 'Wi-Fi' },
  { value: 'ac', label: 'Air conditioning' },
  { value: 'tv', label: 'Television' },
  { value: 'power-backup', label: 'Power backup' },
  { value: 'parking', label: 'Parking' },
  { value: 'kitchen', label: 'Kitchen' },
  { value: 'fridge', label: 'Refrigerator' },
  { value: 'microwave', label: 'Microwave' },
  { value: 'laundry', label: 'Laundry facilities' },
  { value: 'security', label: 'Security' },
  { value: 'swimming-pool', label: 'Swimming pool' },
  { value: 'finess-center', label: 'Fitness center' },
  { value: 'elevator', label: 'Elevator / Lift' },
  { value: 'workspace', label: 'Work desk / workspace' },
]

type Power = "24hr" | "gen" | "grid" | "inverter"

export default function Facilities({page}: {page?: "edit" | "create"}) {
  const isCreate = page === "create"

  const { amenities, power, setAmenities, setField } = useListingStore()

  const selectedOptions = isCreate
    ? amenityOptions.filter((a) => amenities.includes(a.value))
    : undefined

  return (
    <StepWrapper heading="Amenities & Facilities" page={page}>
      <label>
        <span className="block mb-2 text-gray-700">Select all amenities available at your property</span>
        <Select
          isMulti
          options={amenityOptions}
          value={selectedOptions}
          onChange={isCreate ? (selected) => setAmenities(selected.map((s) => s.value)) : undefined}
        />
      </label>
      <label>
        <span className="block mb-2 text-gray-700">What best describes your power availability?</span>
        <select
          name="power"
          className="px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full"
          value={isCreate ? (power ?? "") : undefined}
          onChange={isCreate ? (e) => setField("power", e.target.value as Power) : undefined}
        >
          <option className="bg-gray-200" disabled value="">Select one</option>
          <option value="24hr">24-hour power</option>
          <option value="gen">Generator</option>
          <option value="inverter">Inverter</option>
          <option value="grid">Public grid only</option>
        </select>
      </label>
    </StepWrapper>
  )
}