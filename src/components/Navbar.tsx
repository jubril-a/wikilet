'use client'

import Image from "next/image"
import Link from "next/link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { cn } from "../lib/utils"

function NavLink({label, url, className}:{label:string, url:string, className?: string}) {
    return (
        <Link className={cn("text-sm font-medium text-primary-1 hover:text-primary-2 max-[760px]:hover:bg-gray-100 pl-4 max-[760px]:py-4 max-[760px]:border-b max-[760px]:border-gray-200", className)} href={url}>{label}</Link>
    )
}

export default function Navbar() {

    const [isVisible, setVisibility] = useState(false)

    return (
        <nav className="fixed z-10 bg-white w-full px-4 border-b border-b-[#c6c6c648]">
            <div className="flex justify-between items-center max-w-280 py-4 mx-auto">
                <Link href="/" className="font-bold text-2xl">
                    <Image src="/images/logo.png" width={128} height={44} alt="wikilet" />
                </Link>
                <ul className="flex items-center">
                    {/* mobile navigation */}
                    <div className={cn(
                    !isVisible && "max-[760px]:hidden",
                    isVisible && "absolute inset-0 bg-white h-fit grid p-8 pb-20 max-[760px]:border-b max-[760px]:border-gray-200 max-[760px]:shadow-[0px_5px_15px_rgba(0,0,0,0.35)]")}>
                        <button className="min-[760px]:hidden cursor-pointer" onClick={() => {setVisibility(!isVisible)}}>
                            <XMarkIcon className="size-7 ml-auto mb-8" />
                        </button>
                        <NavLink label="View Listings" url="#" />
                        <NavLink label="List your Property" url="#" className="hidden max-[420px]:block" />
                        <NavLink label="Log In" url="#" />
                        <NavLink label="Sign Up" url="#" />
                        <NavLink label="Help" url="/list-property" />
                        {/* no idea what these are */}
                        <Link className="text-sm font-medium text-primary-1 hover:text-primary-2 pl-4" href="/help"></Link>
                        <Link className="text-sm font-medium text-primary-1 hover:text-primary-2 pl-4" href="/login"></Link>
                        <Link className="text-sm font-medium text-primary-1 hover:text-primary-2 pl-4" href="/signup"></Link>
                    </div>
                    <Link className="text-sm font-medium text-white bg-[#8bd925] hover:text-primary-1 hover:bg-primary-2 px-4 py-3 rounded-md ml-4 max-[420px]:hidden" href="/list-property">List your Property</Link>
                     <button className="min-[760px]:hidden cursor-pointer" onClick={() => {setVisibility(!isVisible)}}>
                        <Bars3Icon className="size-7 ml-4" />
                     </button>                                   
                </ul>
            </div>
        </nav>
    )
}