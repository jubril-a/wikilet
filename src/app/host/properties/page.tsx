import PropertyCard from "../components/ui/PropertyCard"
import IconButton from "../components/ui/IconButton"
import { PlusIcon } from "@heroicons/react/24/solid"
import { getAgentProperties } from "@/src/features/property/actions"
import { PropertyCardType } from "@/src/types/property"

export default async function page() {

    const { data } = await getAgentProperties()
    const properties = data.properties

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
                {Object.values(properties).map((property: any) => (
                    <PropertyCard key={property._id} _id={property._id} title={property.title} image={property.images[0]} location={`${property.city}, ${property.country}`} />
                ))}
            </div>
        </div>
    )
}

// grid gap-3 grid-cols-[repeat(auto-fill,minmax(280px,440px))]