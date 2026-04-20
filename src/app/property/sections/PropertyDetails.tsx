import Section from "@/src/components/Section"


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

function Amenity() {
    return (
        <div>

        </div>
    )
}

export default function PropertyDetails() {
    return (
        <Section>
            <div className="max-w-200 ">
                <div className="border-b border-b-gray-300 px-4 pb-8">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-950 mb-2">Private Room in Amalfi Coast, Italy</h2>
                    <p className="text-lg">Hosted by <a href="" className="font-semibold hover:text-primary-2">ABC Homes</a></p>
                </div>

                <div className="border-b border-b-gray-300 px-4 py-8">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-950 mb-3">About this place</h3>
                    <p className="mb-2">Enjoy a stylish and comfortable stay in the heart of Lekki. This fully furnished 2-bedroom apartment offers a perfect blend of modern design and convenience, ideal for short stays, business trips, or weekend getaways.</p>
                    <p className="mb-2">The apartment features spacious rooms, a fully equipped kitchen, high-speed Wi-Fi, and 24/7 power supply. Located in a secure estate, you&apos;re just minutes away from top restaurants, malls, and the beach.</p>
                    <button className="bg-gray-300 hover:bg-primary-2 px-6 py-3 rounded-md cursor-pointer text-sm mt-4">Read More</button>
                </div>

                <div className="border-b border-b-gray-300 px-4 py-8">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-950 mb-3">What this place offers</h3>
                </div>
            </div>
        </Section>
    )
}