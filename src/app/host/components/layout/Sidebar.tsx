'use client'

import NavLink from "../ui/Navlink"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useSidebar } from "../../context/SidebarContext"
import { cn } from "@/src/lib/utils"
import { 
    HomeIcon, 
    BookmarkIcon, 
    HomeModernIcon, 
    BellAlertIcon, 
    UserIcon, 
    ChatBubbleOvalLeftEllipsisIcon as ChatIcon } from "@heroicons/react/24/solid"

const mainLinks = [
    { label: "Dashboard", icon: HomeIcon },
    { label: "Bookings",  icon: BookmarkIcon },
    { label: "Properties", icon: HomeModernIcon },
    { label: "Notifications", icon: BellAlertIcon },
]

const bottomLinks = [
    { label: "Account", icon: UserIcon },
    { label: "Support",  icon: ChatIcon },
]

export default function Sidebar() {
    const pathname = usePathname()
    const { isOpen } = useSidebar()
    const [accountDropdown, setAccountDropdown] = useState(false)

    return (
        <nav className={cn("sticky z-50 h-screen max-[840px]:fixed max-[840px]:hidden bg-white border-r border-r-gray-200", isOpen && "max-[840px]:block")}>
            <div className="p-4 max-[840px]:w-64 min-[1024px]:w-64">
                <div>
                    {mainLinks.map(({ label, icon: Icon }) => {
                        const active = pathname.split("/")[2] == label.toLowerCase()
                        return (
                            <NavLink key={label} label={label} active={active} Icon={Icon} />
                        )
                    })}
                </div>
                <div className="pt-5 mt-5 border-t border-t-gray-200">
                    {bottomLinks.map(({ label, icon: Icon }) => {
                        const active = pathname.split("/")[2] == label.toLowerCase()
                        return (
                            <NavLink key={label} label={label} active={active} Icon={Icon}  />
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}