import { useFilterStore } from "../stores/filtersStore";
import { CheckIcon } from "@heroicons/react/20/solid"
import { FilterKey } from "../app/types";

type Props = {
    group: FilterKey,
    filter: string
}

export default function Filter({group, filter} : Props) {

    const { toggleFilter } = useFilterStore();

  return (
    <label className="flex gap-2 items-center mb-2 cursor-pointer" htmlFor={filter}>
        <input onChange={() => {toggleFilter(group, filter)}} className="peer hidden" type="checkbox" name={filter} id={filter} />
        <span className="p-0.5 block border border-gray-600 rounded-sm peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:*:text-white"><CheckIcon className="size-4 text-white font-bold" /></span>
        <span className="text-sm tracking-tight">{filter}</span>
      </label>
  )
}