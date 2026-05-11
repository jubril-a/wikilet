import PropertyCard from "../components/ui/PropertyCard"
import IconButton from "../components/ui/IconButton"
import { PlusIcon } from "@heroicons/react/24/solid"

export default function page() {
    return (
        <div className="max-w-306 mx-auto">
            <div className="sm:flex sm:justify-between sm:gap-2 sm:items-center mb-8">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold text-primary-1 mb-1">My Properties</h1>
                    <p className="text-gray-500 text-sm">Manage your listings, availability, and financial performance</p>
                </div>
                <IconButton className="max-w-fit" label="Add New Property" url="/host/properties/create" Icon={PlusIcon} />
            </div>

            <div className="flex gap-3 flex-wrap">
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>
        </div>
    )
}

// grid gap-3 grid-cols-[repeat(auto-fill,minmax(280px,440px))]