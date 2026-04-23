'use client'

import Image from "next/image"
import { StarIcon } from "@heroicons/react/20/solid"
import { usePopupStore } from "@/src/stores/popupsStore"

export default function OrderBox() {
    const { setSeacrhPopup } = usePopupStore()

    return (
        <div className="w-160 bg-white mx-auto px-8 py-10 rounded-2xl">
            <h1 className="text-xl md:text-2xl font-extrabold text-gray-950 mb-4 tracking-tight">Booking Details</h1>

            <div className="flex gap-4 items-center bg-gray-200 p-4 rounded-xl">
                <div className="w-24 bg-gray-300 rounded-md cursor-pointer aspect-square overflow-hidden">
                    <Image className="object-cover object-center h-full" width={7203} height={4807} src="/images/apartment-1.jpg" alt=""/>
                </div>
                <div>
                    <h2 className="font-extrabold text-xl">Azure Horizon Villa</h2>
                    <p className="text-gray-800 text-sm font-light mb-1">Amalfi Coast, <span className="font-semibold">Italy</span></p>
                    <p className="flex items-center gap-1"><StarIcon className="size-4 text-amber-500" /><span className="text-sm text-gray-800">4.87 (12)</span></p>
                </div>
            </div>

            <div className="flex gap-3 justify-between items-center border-b border-b-gray-300 px-4 py-6 mx-auto">
                <div>
                    <h3 className="tracking-tight font-semibold">Dates</h3>
                    <span className="text-sm text-gray-700">14th May - 26 July</span>
                </div>
                <button onClick={() => {setSeacrhPopup("schedule")}} className="text-sm bg-primary-1 p-3 rounded-md text-white cursor-pointer hover:bg-primary-2 hover:text-primary-1">Change Dates</button>
            </div>

            <div className="flex gap-3 justify-between items-center border-b border-b-gray-300 px-4 py-6 mx-auto">
                <div>
                    <h3 className="tracking-tight font-semibold">Guests</h3>
                    <span className="text-sm text-gray-700">7 Guests, 3 Rooms, Pets</span>
                </div>
                <button onClick={() => {setSeacrhPopup("guest")}} className="text-sm bg-primary-1 p-3 rounded-md text-white cursor-pointer hover:bg-primary-2 hover:text-primary-1">Edit Guest Details</button>
            </div>

            <div className="flex gap-3 justify-between items-center border-b border-b-gray-300 px-4 py-6 mx-auto">
                <div>
                    <h3 className="tracking-tight font-semibold">Price</h3>
                    <span className="text-sm text-gray-700">7 days * N45, 000</span>
                </div>
                <span className="text-gray-800 font-extrabold text-lg">₦315,000</span>
            </div>

            <button className="block mx-auto mt-6 text-sm bg-primary-1 px-8 py-3 rounded-md text-white cursor-pointer hover:bg-primary-2 hover:text-primary-1">Proceed to Payment</button>
        </div>
    )
}