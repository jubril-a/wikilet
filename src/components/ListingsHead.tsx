import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid"
import { Dispatch, SetStateAction } from "react";
import { useFilterStore } from "../stores/filtersStore";


export default function ListingsHead({state}: {state:[boolean, Dispatch<SetStateAction<boolean>>]}) {

    const [isOpen, setIsOpen] = state
    const { selectedFilters } = useFilterStore();
    const filters = Object.values(selectedFilters).flat() as string[];

    return (
        <>
            <div className="flex justify-between items-center gap-4 border-b border-gray-200 py-4 mb-6 flex-wrap">
                <h2 className="text-xl font-bold shrink-0">1,260 Properties found</h2>
                <button onClick={() => {setIsOpen(!isOpen)}} className="text-gray-800 font-bold text-sm border border-gray-200 rounded-md hover:bg-gray-100 px-3 py-1 flex items-center gap-2 cursor-pointer min-[860px]:hidden">
                    Filters
                    <AdjustmentsHorizontalIcon className="size-5" />
                </button>
            </div>
            <div className="mb-6 flex gap-1 flex-wrap">
                {filters.map((filter: string) => (
                    <span key={filter} className="bg-blue-600 rounded-full px-4 py-1 text-white text-sm">{filter}</span>
                ))}
            </div>
        </>
    )
}