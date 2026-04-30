import Select from "react-select";
import StepWrapper from "../components/StepWrapper";

const amenities = [
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

type FacilitiesProps = {
  selectedAmenities: string[]
  setSelectedAmenities: (amenities: string[]) => void
}

export default function Facilities({ selectedAmenities, setSelectedAmenities }: FacilitiesProps) {

  return (
    <StepWrapper heading="Amenities & Facilities">
        <label>
          <span className="block mb-2 text-gray-700">Select all amenities available at your property</span>
          <Select isMulti options={amenities} onChange={(selected) => setSelectedAmenities(selected.map(i => i.label))} />
          <input type="hidden" name="amenities" value={JSON.stringify(selectedAmenities)} />
        </label>
        <label htmlFor="">
          <span className="block mb-2 text-gray-700">What best describes your power availability?</span>
          <select name="power" id="" className="px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full">
            <option className="bg-gray-200" disabled></option>
            <option value="24h">24-hour power</option>
            <option value="gen">Generator</option>
            <option value="inverter">Inverter</option>
            <option value="grid-only">Public grid only</option>
          </select>
        </label>
    </StepWrapper>
  )
}