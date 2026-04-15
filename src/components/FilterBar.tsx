'use client'

import { Dispatch, SetStateAction } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid"
import { cn } from "../lib/utils";
import FilterGroup from "./FilterGroup";
import { FilterKey } from "../app/types";

const filters = {
  "Property rating": [
    "2 Stars",
    "3 Stars",
    "4 Stars",
    "5 Stars",
  ],
  "Property type": [
    "Apartments",
    "Hotels",
    "Homes",
    "Vacation Rentals"
  ],
  "Guest Preferences": [
    "Pet Friendly"
  ],
  "Facilities": [
    "Parking",
    "Air Conditioning",
    "Television",
    "Power Backup",
    "Wi-Fi",
    "Kitchen",
    "Refrigerator",
    "Laundry facility",
    "Security",
    "Swimming pool",
    "Fitness Center",
    "Elevator / Lift",
    "Work Desk"
  ],
}

export default function FilterBar({state}: {state:[boolean, Dispatch<SetStateAction<boolean>>]}) {

  const [isOpen, setIsOpen] = state

  return (
    <div className={cn("min-w-70 bg-gray-200 p-4 h-fit", isOpen ? "max-[860px]:block absolute top-0 right-0 w-80 pt-40 h-full z-5" : "max-[860px]:hidden")}>
        <div className="flex items-center justify-between mb-3">
            <p className="text-primary-1 font-semibold text-lg">Filters</p>
            <XMarkIcon onClick={() => {setIsOpen(!isOpen)}} className="size-6 min-[860px]:hidden" />
        </div>
        {(Object.entries(filters) as [FilterKey, string[]][]).map(([key, value]) => (
          <FilterGroup key={key} heading={key} value={value} />
        ))}
    </div>
  );
}