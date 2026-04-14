'use client'

import { Dispatch, SetStateAction } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid"
import { cn } from "../lib/utils";

export default function FilterBar({state}: {state:[boolean, Dispatch<SetStateAction<boolean>>]}) {

    const [isOpen, setIsOpen] = state

  return (
    <div className={cn("w-80 bg-gray-100 p-4", isOpen ? "max-[860px]:block absolute top-0 right-0 w-80 pt-40 h-full z-5" : "max-[860px]:hidden")}>
        <div className="flex items-center justify-between">
            <p className="text-primary-1 font-semibold text-xl">Filters</p>
            <XMarkIcon onClick={() => {setIsOpen(!isOpen)}} className="size-6 min-[860px]:hidden" />
        </div>
    </div>
  );
}