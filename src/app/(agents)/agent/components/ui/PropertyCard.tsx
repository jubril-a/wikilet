import Image from "next/image"
import Link from "next/link"
import { MapPinIcon, AdjustmentsHorizontalIcon, PauseCircleIcon, TrashIcon, StarIcon, WalletIcon, ArrowPathIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import IconButton from "./IconButton"
import React from "react"

const Actions = [
    { label: "EDIT ROOMS", icon: AdjustmentsHorizontalIcon },
    { label: "PAUSE",  icon: PauseCircleIcon },
    { label: "DELETE",  icon: TrashIcon },
]

function ActionButton({label, Icon}: {label: string, Icon: React.ElementType}) {
    return (
        <div className="text-xs text-gray-700 flex gap-2 flex-col items-center border border-gray-400 p-3 rounded-md cursor-pointer">
            <Icon className="size-6" />
            <span>{label}</span>
        </div>
    )
}


const Views = [
    {label: "View Revenue", icon: WalletIcon, url:""},
    {label: "Booking History", icon: ArrowPathIcon, url:""},
    {label: "Check Reviews", icon: StarIcon, url:"", rating: 4.5},
]

function ViewButton({url, label, rating, Icon}: {Icon: React.ElementType, url: string, label: string, rating?: number}) {
    return (
        <Link href={url} className="text-sm font-medium hover:bg-primary-2 text-primary-1 px-5 py-2 flex gap-3 items-center rounded-md">
            <div className="p-3 rounded-full bg-gray-100"><Icon className="size-4" /></div>
            <span>{label}</span>
            <span className="ml-auto flex gap-1 items-center">
                {rating && <span className="font-semibold text-sm">{rating}</span>}
                <ChevronRightIcon className="size-4" />
            </span>
        </Link>
    )
}

export default function PropertyCard() {
    return (
        <div className="w-100 rounded-2xl overflow-hidden border border-gray-200">
            <div className="w-full aspect-video overflow-hidden">
                <Image src="/images/product.jpg" width={280} height={280} className="w-full object-cover object-bottom" alt="" />
            </div>
            <div className="p-4 grid gap-4">
                <div>
                    <h2 className="font-semibold text-xl mb-.5">Azure Horizon Villa</h2>
                    <p className="flex items-center gap-1 text-[14px] text-gray-500"><MapPinIcon className="size-4" /><span>Downtown, Manhattan</span></p>
                </div>
                <IconButton label="Edit Property Details" url="" />
                <div className="grid grid-cols-3 gap-2">
                    {Actions.map(({label, icon: Icon}) => (
                        <ActionButton key={label} label={label} Icon={Icon} />
                    ))}
                </div>
                <div className="grid gap-2">
                    {Views.map(({label, url, icon: Icon, rating}) => (
                        <ViewButton key={label} label={label} url={url} Icon={Icon} rating={rating} />
                    ))}
                </div>
            </div>
        </div>
    )
}
