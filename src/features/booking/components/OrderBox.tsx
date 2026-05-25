'use client'

import Image from "next/image"
import { StarIcon } from "@heroicons/react/20/solid"
import { usePopupStore } from "@/src/stores/popupsStore"
import { useSearchStore } from "@/src/stores/searchStore"
import { formatDateRange, formatGuests, calculateStayPrice } from "@/src/lib/utils"
import { useEffect, useRef, useState } from "react"

type Props = {
    title: string,
    city: string,
    country: string,
    imageUrl: string,
    price: number,
}

export default function OrderBox({title, city, country, imageUrl, price}: Props) {
    const { setSeacrhPopup } = usePopupStore()
    const store = useSearchStore();
    const initial = useRef<typeof store | null>(store);
    const [hydrated, setHydrated] = useState(false);
    const [hasChanged, setHasChanged] = useState<boolean | null>(null);
    const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

    //TODO: complete this to check if property is available
    // useEffect(() => {
    //     const check = async () => {
    //         const res = await fetch('/availability');
    //         const data = await res.json();
    //         setIsAvailable(data.Availability); 
    //     };

    //     check();
    // }, []);

    useEffect(() => {
        const unsub = useSearchStore.persist.onFinishHydration(() => {
        setHydrated(true);
        });

        if (useSearchStore.persist.hasHydrated()) {
            setHydrated(true);
        }

        return () => unsub();
    }, []);

    useEffect(() => {
        if (!hydrated) return;
        initial.current = { ...store };
    }, [hydrated]);

    useEffect(() => {
        if (!hydrated || !initial.current) return;

        const changed =
        store.checkInDate?.toISOString() !== initial.current.checkInDate?.toISOString() ||
        store.checkOutDate?.toISOString() !== initial.current.checkOutDate?.toISOString() ||
        store.adults !== initial.current.adults ||
        store.children !== initial.current.children ||
        store.rooms !== initial.current.rooms ||
        store.pets !== initial.current.pets;

        setHasChanged(changed);
    }, [store.checkInDate, store.checkOutDate, store.adults, store.children, store.rooms, store.pets, hydrated]);

    if (!hydrated) return null;

    const { checkInDate, checkOutDate, adults, children, rooms, pets } = store

    const [breakdown, total] = calculateStayPrice(checkInDate, checkOutDate, rooms, price);

    return (
        <>
            <div className="min-[440px]:flex min-[440px]:gap-4 min-[440px]:items-center bg-gray-200 p-3 min-[440px]:p-4 rounded-xl">
                <div className="w-24 max-[440px]:w-full bg-gray-300 rounded-md min-[440px]:aspect-square overflow-hidden max-[440px]:mb-3">
                    <Image className="object-cover object-center h-full" width={7203} height={4807} src={imageUrl} alt=""/>
                </div>
                <div>
                    <h2 className="font-extrabold text-lg sm:text-xl">{title}</h2>
                    <p className="text-gray-800 text-sm font-light mb-1">{city}, <span className="font-semibold">{country}</span></p>
                    <p className="flex items-center gap-1"><StarIcon className="size-4 text-amber-500" /><span className="text-sm text-gray-800">4.87 (12)</span></p>
                </div>
            </div>

            <div className="min-[440px]:flex min-[440px]:gap-3 min-[440px]:justify-between min-[440px]:items-center border-b border-b-gray-300 px-4 py-6 mx-auto">
                <div>
                    <h3 className="tracking-tight font-semibold">Dates</h3>
                    <span className="text-sm text-gray-700">{formatDateRange(checkInDate, checkOutDate)}</span>
                </div>
                <button onClick={() => {setSeacrhPopup("schedule")}} className="text-sm bg-primary-1 p-3 rounded-md text-white cursor-pointer hover:bg-primary-2 hover:text-primary-1 max-[440px]:mt-2">Change Dates</button>
            </div>

            <div className="min-[440px]:flex min-[440px]:gap-3 min-[440px]:justify-between min-[440px]:items-center border-b border-b-gray-300 px-4 py-6 mx-auto">
                <div>
                    <h3 className="tracking-tight font-semibold">Guests</h3>
                    <span className="text-sm text-gray-700">{formatGuests(adults, children, rooms, pets)}</span>
                </div>
                <button onClick={() => {setSeacrhPopup("guest")}} className="text-sm bg-primary-1 p-3 rounded-md text-white cursor-pointer hover:bg-primary-2 hover:text-primary-1 max-[440px]:mt-2">Edit Guest Details</button>
            </div>

            <div className="min-[440px]:flex min-[440px]:gap-3 min-[440px]:justify-between min-[440px]:items-center border-b border-b-gray-300 px-4 py-6 mx-auto">
                <div>
                    <h3 className="tracking-tight font-semibold">Price</h3>
                    {!hasChanged && <span className="text-sm text-gray-700">{breakdown}</span>}
                </div>
                {!hasChanged && <span className="block text-gray-800 font-extrabold text-lg max-[440px]:mt-2">₦{total.toLocaleString('en-US')}</span>}
            </div>

            {!hasChanged && <button className="block mx-auto mt-6 text-sm bg-primary-1 px-8 py-3 rounded-md text-white cursor-pointer hover:bg-primary-2 hover:text-primary-1">Proceed to Payment</button>}
            {hasChanged && <button onClick={() => window.location.reload()} className="block mx-auto mt-6 text-sm bg-primary-1 px-8 py-3 rounded-md text-white cursor-pointer hover:bg-primary-2 hover:text-primary-1">Check Price & Availability</button>}
        </>
    )
}