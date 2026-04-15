import Filter from "./Filter"
import { FilterKey } from "../app/types"

type Props = {
    heading: FilterKey,
    value: string[]
}

export default function FilterGroup({heading, value} : Props) {

  return (
    <div className="w-full rounded-md mb-3 p-3 bg-white">
      <h3 className="text-sm font-medium mb-4">{heading}</h3>
      {value.map((filter) => <Filter key={filter} group={heading} filter={filter} />)}
    </div>
  )
}