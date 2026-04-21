'use client'

import Section from "@/src/components/Section"
import Image from "next/image"
import SearchInput from "@/src/components/SearchInput"
import { usePopupStore } from "@/src/stores/popupsStore"
import { useSearchStore } from "@/src/stores/searchStore"
import { formatDateRange, formatGuests } from "@/src/lib/utils"
import { SubsectionWrapper } from "../components/SubsectionWrapper"


const Amenities = {
    wifi: {
        label: "Wi-Fi",
        img: "/icons/wi-fi-icon.png"
    },
    ac: {
        label: "Air Conditioner",
        img: "/icons/air-conditioner.png"
    },
    tv: {
        label: "Television",
        img: "/icons/television.png"
    },
    power: {
        label: "Power Backup",
        img: "/icons/ups.png"
    },
    parking: {
        label: "Parking Space",
        img: "/icons/car-parking.png"
    },
    kitchen: {
        label: "Kitchen",
        img: "/icons/cutlery.png"
    },
    fridge: {
        label: "Refrigerator",
        img: "/icons/fridge.png"
    },
    microwave: {
        label: "Microwave",
        img: "/icons/microwave.png"
    },
    laundry: {
        label: "Laundry Facilities",
        img: "/icons/laundry-service.png"
    },
    security: {
        label: "Security",
        img: "/icons/policeman.png"
    },
    pool: {
        label: "Swimmming Pool",
        img: "/icons/swimming.png"
    },
    gym: {
        label: "Fitness Center",
        img: "/icons/dumbbell.png"
    },
    lift: {
        label: "Lift / Elevator",
        img: "/icons/elevator.png"
    },
    workspace: {
        label: "Work Space / Desk ",
        img: "/icons/desk.png"
    },
}

type AmenitiesType = "wifi" | "ac" | "tv" | "power" | "parking" | "kitchen" | "fridge" | "microwave" | "laundry" | "security" | "pool" | "gym" | "lift" | "workspace"

function Amenity({item}: {item: AmenitiesType}) {
    return (
        <div className="flex items-center gap-3">
            <Image src={Amenities[item].img} alt="" width={24} height={24} />
            <span>{Amenities[item].label}</span>
        </div>
    )
}


export default function PropertyDetails() {
    const { setSeacrhPopup } = usePopupStore()
    const { checkInDate, checkOutDate, adults, children, rooms, pets } = useSearchStore()

    return (
        <Section>
            <div className="max-w-200 ">
                <SubsectionWrapper className="pt-0">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-2">Private Room in Amalfi Coast, Italy</h2>
                    <p className="text-lg">Hosted by <a href="" className="font-semibold hover:text-primary-2">ABC Homes</a></p>
                </SubsectionWrapper>

                <SubsectionWrapper btnLabel="Read More">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-950 mb-3">About this place</h3>
                    <p className="mb-2">Enjoy a stylish and comfortable stay in the heart of Lekki. This fully furnished 2-bedroom apartment offers a perfect blend of modern design and convenience, ideal for short stays, business trips, or weekend getaways.</p>
                    <p className="mb-2">The apartment features spacious rooms, a fully equipped kitchen, high-speed Wi-Fi, and 24/7 power supply. Located in a secure estate, you&apos;re just minutes away from top restaurants, malls, and the beach.</p>
                </SubsectionWrapper>

                <SubsectionWrapper btnLabel="See All Facilities">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-950 mb-4">What this place offers</h3>
                    <div className="grid grid-cols-2 max-w-180 gap-4 my-6">
                        {(Object.keys(Amenities) as AmenitiesType[]).map((item) => <Amenity key={item} item={item} />)}
                    </div>
                </SubsectionWrapper>

                <SubsectionWrapper className="flex items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-2">Check Availability</h2>
                        <p className="text-lg">Pick your dates and guests to see pricing and availability in real time.</p>
                    </div>
                    <div className="bg-black w-90 px-8 py-12 text-white grid gap-6 rounded-3xl relative z-5">
                        <SearchInput h2="When?" label={checkInDate && checkOutDate ? formatDateRange(checkInDate, checkOutDate) : "Add Dates"} clickHandler={() => (setSeacrhPopup("schedule"))} />
                        <SearchInput h2="Who?" label={formatGuests(adults, children, rooms, pets)} clickHandler={() => (setSeacrhPopup("guest"))} />                
                    </div>
                </SubsectionWrapper>
            </div>
        </Section>
    )
}