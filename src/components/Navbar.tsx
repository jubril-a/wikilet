'use client'

import Image from "next/image"
import Link from "next/link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { cn } from "../lib/utils"

type NavLinkProp = {
    label:string,
    url:string,
    className?: string,
    handleClick: () => void
}

type User = {
  firstName: string
  lastName: string
} | null


function NavLink({label, url, className, handleClick}:NavLinkProp) {
    return (
        <Link className={cn("text-sm tracking-[-0.24px] font-medium text-primary-1 hover:text-primary-2 max-[760px]:hover:bg-gray-100 pl-4 max-[760px]:py-4 max-[760px]:border-b max-[760px]:border-gray-200", className)} onClick={handleClick} href={url}>{label}</Link>
    )
}

export default function Navbar({user}: {user: User}) {

    const [isVisible, setVisibility] = useState(false)
    const [ userOptionsVisible, setUserOptionsVisible ] = useState(false)
    const closeMobileNav = () => {setVisibility(false)}

    const initials = user
    ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    : null

    return (
        <nav className="fixed z-99 bg-white w-full px-4 min-[760px]:px-8 border-b border-b-[#c6c6c648]">
            <div className="flex justify-between items-center max-w-280 py-3.5 mx-auto">
                <Link href="/" className="font-bold text-2xl">
                    <Image src="/images/logo.png" width={128} height={44} alt="wikilet" loading="eager" />
                </Link>
                <div className="flex items-center">
                    <div className={cn(isVisible ? "absolute inset-0 bg-white h-fit grid p-8 pb-20 max-[760px]:border-b max-[760px]:border-gray-200 max-[760px]:shadow-[0px_5px_15px_rgba(0,0,0,0.35)]" : "max-[760px]:hidden")}>
                        <button className="min-[760px]:hidden cursor-pointer" onClick={() => {setVisibility(!isVisible)}}>
                            <XMarkIcon className="size-7 ml-auto mb-8" />
                        </button>
                        <NavLink label="View Listings" url="/listings" handleClick={closeMobileNav} />
                        <NavLink label="List your Property" url="#" className="hidden max-[420px]:block" handleClick={closeMobileNav} />
                        {!user && <>
                            <NavLink label="Log In" url="/login" handleClick={closeMobileNav} />
                            <NavLink label="Sign Up" url="/signup" handleClick={closeMobileNav} />
                        </>}
                        <NavLink label="Help" url="#" handleClick={closeMobileNav} />
                    </div>
                    <Link className="text-sm font-medium hover:text-primary-1 hover:bg-primary-2 text-white bg-primary-1 px-4 py-3 rounded-md ml-8 max-[420px]:hidden" href="/list-property">List your Property</Link>
                   {user && <div className="relative">
                    <button onClick={() => {setUserOptionsVisible(!userOptionsVisible)}} className="hover:bg-primary-2 bg-amber-700 text-white hover:text-primary-1 ml-4 p-3 rounded-full text-sm cursor-pointer">{initials}</button>

                    {userOptionsVisible && <div className="text-sm bg-white rounded-sm absolute right-0 p-2 mt-5 w-80">
                        <div className="flex gap-2 p-2 items-center rounded-md bg-gray-200">
                            <span className="bg-primary-1 text-primary-2 p-2 rounded-md">{initials}</span>
                            <span className="tracking-tighter font-medium">{`${user?.firstName} ${user?.lastName}`}</span>
                        </div>
                        <div className="p-2 grid">
                            <a href="">Manage account</a>
                            <a>Logout</a>
                        </div>
                    </div>}

                    </div>}
                    <button className="min-[760px]:hidden cursor-pointer" onClick={() => {setVisibility(!isVisible)}}>
                    <Bars3Icon className="size-7 ml-4" />
                    </button>
                                                     
                </div>
            </div>
        </nav>
    )
}