import { FilterKey } from "../../../app/types"
import Filter from "./Filter"

export default function FilterGroup({heading, value} : { heading: FilterKey, value: string[] }) {

  return (
    <div className="w-full rounded-md mb-3 p-3 bg-white">
      <h3 className="text-sm font-medium mb-4">{heading}</h3>
      {value.map((filter) => (
        <Filter group={heading} filter={filter}/> 
      ))}
    </div>
  ) 
}