'use client'

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import UserBox from "@/src/features/account/components/UserBox"
import Link from "next/link"
import Image from "next/image"
import { useSidebar } from "../../context/SidebarContext"

type User = {
  firstName: string
  lastName: string
} | null

export default function Topbar({user}: {user: User}) {

const { isOpen, toggle } = useSidebar()

    return (
        <div className="sticky top-0 z-40 flex justify-between items-center bg-white h-19 border-b border-b-gray-200 p-4 min-[480px]:px-8">
            <Link href="/" className="block min-[1280px]:border-r min-[1280px]:border-r-gray-200 min-[1280px]:w-56 min-[480px]:py-4">
                <Image src="/images/logo.png" width={128} height={44} alt="wikilet" loading="eager" />
            </Link>
            <div className="flex items-center">
                <UserBox user={user} />
                <button className="min-[840px]:hidden cursor-pointer" onClick={toggle}>
                    {isOpen ? <XMarkIcon className="size-7 ml-4" /> : <Bars3Icon className="size-7 ml-4" />}
                </button>
            </div>
        </div>
    )
}

// bg-[#F8F9FA]