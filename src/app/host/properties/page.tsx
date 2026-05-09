import PropertyCard from "../components/ui/PropertyCard"
import IconButton from "../components/ui/IconButton"
import { PlusIcon } from "@heroicons/react/24/solid"

export default function page() {
    return (
        <div className="max-w-306 mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-primary-1 mb-1">My Properties</h1>
                    <p className="text-gray-500 text-sm">Manage your listings, availability, and financial performance</p>
                </div>
                <IconButton label="Add New Property" url="/host/properties/create" Icon={PlusIcon} />
            </div>

            <div className="flex gap-3">
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>
        </div>
    )
}