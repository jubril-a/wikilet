import { FilterKey } from "../../../app/types"
import { useFilterStore } from "@/src/stores/filtersStore";
import { CheckIcon } from "@heroicons/react/20/solid"

export default function FilterGroup({heading, value} : { heading: FilterKey, value: string[] }) {

  const { toggleFilter } = useFilterStore();

  return (
    <div className="w-full rounded-md mb-3 p-3 bg-white">
      <h3 className="text-sm font-medium mb-4">{heading}</h3>
      {value.map((filter) => (
        <label key={heading} className="flex gap-2 items-center mb-2 cursor-pointer" htmlFor={filter}>
          <input onChange={() => {toggleFilter(heading, filter)}} className="peer hidden" type="checkbox" name={filter} id={filter} />
          <span className="p-0.5 block border border-gray-600 rounded-sm peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:*:text-white"><CheckIcon className="size-4 text-white font-bold" /></span>
          <span className="text-sm tracking-tight">{filter}</span>
        </label>
      ))}
    </div>
  )
}