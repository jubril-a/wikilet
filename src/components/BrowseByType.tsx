import Section from "./Section"
import Image from "next/image"

function Card({type} : {type: string}) {
    return (
        <div>
            <div className="rounded-md overflow-hidden aspect-5/4 mb-2">
                <Image className="w-full object-cover object-center" src="/images/product.jpg" width={280} height={280} alt="" />
            </div>
            <div className="p-2">
                <h3 className="font-semibold text-[16px] text-primary-1">{type}</h3>
                <p className="text-gray-600 text-sm">245 Available</p>
            </div>
        </div>
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
               <Card type="Apartments" />
               <Card type="Hotels" />
               <Card type="Homes" />
               <Card type="Vacation Rentals" />
            </div>
        </Section>
    )
}

// bg-[#f2f4fd]