'use client'

import Image from "next/image"
import Link from "next/link"
import { MapPinIcon, AdjustmentsHorizontalIcon, PauseCircleIcon, TrashIcon, StarIcon, WalletIcon, ArrowPathIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline"
import IconButton from "./IconButton"
import React from "react"
import { deleteProperty } from "@/src/features/property/actions"
import { useRouter } from "next/navigation"
import { cn } from "@/src/lib/utils"
import { usePopupStore } from "@/src/stores/popupsStore"

function ActionButton({label, Icon, style = "text-gray-700", onClick}: {label: string, Icon: React.ElementType, style?: string, onClick?: () => void}) {
    return (
        <div onClick={onClick} className={cn("text-xs flex gap-2 flex-col items-center border border-gray-400 p-2 rounded-md cursor-pointer", style)}>
            <Icon className="size-5" />
            <span className="text-xs">{label}</span>
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

export default function PropertyCard({_id, title, image, location}: {_id: string, title: string, image: string, location: string}) {

    const router = useRouter()

    async function handleDelete() {
        try {
            await deleteProperty(_id)
            router.refresh()
        } catch (err) {
            if (err instanceof Error) console.error(err.message)
        }
    }

    // function pauseBookings() {
    //     return 
    // }

    function editRooms() {
        router.push(`/host/properties/${_id}`)
    }

    const Actions = [
        { label: "ROOMS", icon: AdjustmentsHorizontalIcon, style: "hover:text-white hover:bg-blue-600", onClick: editRooms},
        { label: "PAUSE",  icon: PauseCircleIcon, style: "hover:text-white hover:bg-blue-600"},
        { label: "DELETE",  icon: TrashIcon, onClick: handleDelete, style: "text-red-600 border-red-600 hover:text-white hover:bg-red-600"},
    ]

    return (
        <div className="w-80 max-w-100 grow rounded-2xl overflow-hidden border border-gray-200 bg-white">
            <div className="w-full min-[730px]:aspect-video overflow-hidden max-[730px]:h-60">
                <Image src={image} width={280} height={280} className="w-full object-cover object-bottom" alt="" />
            </div>
            <div className="p-4 grid gap-4">
                <div>
                    <h2 className="font-semibold text-xl mb-.5">{title}</h2>
                    <p className="flex items-center gap-1 text-[14px] text-gray-500"><MapPinIcon className="size-4" /><span>{location}</span></p>
                </div>
                <IconButton label="Edit Property Details" url="properties/edit" Icon={PlusIcon} />
                <div className="grid grid-cols-3 gap-2">
                    {Actions.map(({label, icon: Icon, onClick, style}) => (
                        <ActionButton key={label} label={label} Icon={Icon} onClick={onClick} style={style} />
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
