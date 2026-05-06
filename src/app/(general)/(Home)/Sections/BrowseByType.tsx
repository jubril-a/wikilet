import Section from "@/src/components/Section"
import Image from "next/image"
import { ArrowUpRightIcon } from "@heroicons/react/20/solid"

const PropertyTypes = [
    {
        type: "Apartments",
        image: "/images/apartment-1.jpg",
        count: 246
    },
    {
        type: "Hotels",
        image: "/images/sheraton.jpg",
        count: 246
    },
    {
        type: "Homes",
        image: "/images/home.jpg",
        count: 246
    },
    {
        type: "Vacation Rentals",
        image: "/images/vacation-2.jpg",
        count: 246
    },
]

type CardProps = {
    type: string,
    image: string,
    count: number
}

function Card({type, image, count} : CardProps) {
    return (
        <a href="" className="group">
            <div className="relative rounded-md overflow-hidden aspect-5/4 mb-1">
                <Image className="transition-transform duration-500 group-hover:scale-115 w-full object-cover object-center" src={image} fill alt="" />
            </div>
            <div className="flex items-center justify-between p-2">
                <div>
                    <h3 className="font-semibold text-[16px] text-primary-1">{type}</h3>
                    <p className="text-gray-600 text-sm">{count} Available</p>
                </div>
                <span className="p-2 rounded-full bg-primary-1 group-hover:bg-primary-2">
                    <ArrowUpRightIcon className="size-5 text-white" />
                </span>
            </div>
        </a>
    )
}

export default function BrowseByType() {
    return (
        <Section className="bg-gray-100 py-20">
            <div className="mb-8 max-w-160">
                <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-2">Browse by property type</h2>
                <p className="text-gray-800 max-w-160">Choose from a variety of property types available near you.</p>
            </div>
            <div className="grid min-[480px]:grid-cols-2 min-[920px]:grid-cols-4 gap-x-3 gap-y-6">
               {PropertyTypes.map((property) => (<Card key={property.type} type={property.type} image={property.image} count={property.count} />))}
            </div>
        </Section>
    )
}

// bg-[#f2f4fd]