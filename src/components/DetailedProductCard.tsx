'use client'

import Image from "next/image";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function DetailedProductCard() {

    const [isSaved, SetIsSaved] = useState(false)

    return (
        <div className="relative">
            <span onClick={() => {SetIsSaved(!isSaved)}} className="absolute z-5 top-2 right-2 p-2 rounded-full cursor-pointer bg-white">
                {isSaved ? <HeartIcon className="size-6 text-red-600" /> : <HeartIconOutline className="size-6" />}
            </span>
            <a href="#" className="group mb-2">
                <div className="relative aspect-4/3 overflow-hidden rounded-md">
                    <Image className="w-full object-cover object-center" src="/images/product.jpg" width={280} height={280} alt="" />
                </div>
                <div className="p-2">
                    <p className="text-sm text-gray-700">Vacation Rental</p>

                    <div className="my-2">
                        <h3 className="font-bold text-primary-1 group-hover:text-blue-600">Azure Horizon Villa</h3>
                        <p className="text-sm text-gray-700 mb-2">Amalfi Coast, Italy</p>
                        <p className="text-sm text-gray-700 line-clamp-2">This property features essential amenities including Wi-Fi, air conditioning, and power backup for uninterrupted comfort. Guests can enjoy on-site parking, 24/7 security, and access to a fully equipped kitchen with a refrigerator.</p>
                    </div>

                    <p className="text-gray-500 text-sm"><span className="text-gray-800 font-black text-lg">₦45,000</span>/night</p>
                </div>
            </a>
        </div>
    )
}