import { CheckIcon } from "@heroicons/react/20/solid"
import { useRouter, useSearchParams } from 'next/navigation';
import { FilterKey } from "@/src/app/types";
import { useEffect, useState } from "react";

const filters = {
  "Guests ratings": "rating",
  "Locations": "city",
  "Property type": "propertyType",
  "Guest Preferences": "",
  "Facilities": "",
}

const filterValueMap: Record<string, string> = {
  // Property type
  "Apartments": "apartment",
  "Hotels": "hotel",
  "Homes": "home",
  "Vacation Rentals": "vacation_rental",

  // Guests ratings
  "2 Stars": "2",
  "3 Stars": "3",
  "4 Stars": "4",
  "5 Stars": "5",

  // Locations
  "Lagos": "lagos",
  "Abuja": "abuja",
  "Ibadan": "ibadan",

  // Guest Preferences
  "Pet Friendly": "pet_friendly",

  // Facilities
  "Air Conditioning": "air_conditioning",
  "Power Backup": "power_backup",
  "Wi-Fi": "wifi",
  "Laundry facility": "laundry",
  "Swimming pool": "swimming_pool",
  "Fitness Center": "fitness_center",
  "Elevator / Lift": "elevator",
  "Work Desk": "work_desk",
  "Parking": "parking",
  "Television": "television",
  "Kitchen": "kitchen",
  "Refrigerator": "refrigerator",
  "Security": "security",
}

export default function Filter({group, filter}: {group: FilterKey, filter: string}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const urlValue = filterValueMap[filter] ?? filter.toLowerCase();
    const isChecked = searchParams.getAll(filters[group]).includes(urlValue);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(false)
    }, [searchParams])

    function updateParams(key: string, value: string) {
        setLoading(true)
        const urlValue = filterValueMap[value] ?? value.toLowerCase();
        const params = new URLSearchParams(searchParams.toString());
        const existing = params.getAll(key);
        if (existing.includes(urlValue)) {
            const updated = existing.filter(v => v !== urlValue);
            params.delete(key);
            updated.forEach(v => params.append(key, v));
        } else {
            params.append(key, urlValue);
        }
        router.replace(`?${params.toString()}`);
        router.refresh();
    }

    return (
        <>
            {loading && <div className="fixed inset-0 bg-black/15 z-20 grid place-items-center">
                <span className="w-12 h-12 border-[5px] border-white border-b-primary-2 rounded-full inline-block box-border animate-spin" />
            </div>}
            <label key={group} className="flex gap-2 items-center mb-2 cursor-pointer" htmlFor={filter}>
                <input onChange={() => updateParams(filters[group], filter)} checked={isChecked} className="peer hidden" type="checkbox" name={filter} id={filter} />
                <span className="p-0.5 block border border-gray-600 rounded-sm peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:*:text-white"><CheckIcon className="size-4 text-white font-bold" /></span>
                <span className="text-sm tracking-tight">{filter}</span>
            </label>
        </>
    )
}