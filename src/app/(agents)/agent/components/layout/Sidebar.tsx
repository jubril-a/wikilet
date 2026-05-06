'use client'

import NavLink from "../ui/Navlink"
import { usePathname } from "next/navigation"
import { 
    HomeIcon, 
    BookmarkIcon, 
    HomeModernIcon, 
    BellAlertIcon, 
    Cog8ToothIcon, 
    ChatBubbleOvalLeftEllipsisIcon as ChatIcon 
} from "@heroicons/react/24/solid"

const mainLinks = [
    { label: "Dashboard", icon: HomeIcon },
    { label: "Bookings",  icon: BookmarkIcon },
    { label: "Properties", icon: HomeModernIcon },
    { label: "Notifications", icon: BellAlertIcon },
]

const bottomLinks = [
    { label: "Settings", icon: Cog8ToothIcon },
    { label: "Support",  icon: ChatIcon },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <nav className="border-r border-r-gray-200 w-64 bg-[#F8F9FA] relative">
            <div className="p-4 fixed w-64">
                <div>
                    {mainLinks.map(({ label, icon: Icon }) => {
                        const active = pathname.endsWith(label.toLowerCase())
                        return (
                            <NavLink key={label} label={label} active={active}>
                                <Icon className={`size-5 ${active ? "text-primary-1" : "text-gray-600"}`} />
                            </NavLink>
                        )
                    })}
                </div>
                <div className="pt-5 mt-5 border-t border-t-gray-200">
                    {bottomLinks.map(({ label, icon: Icon }) => {
                        const active = pathname.endsWith(label.toLowerCase())
                        return (
                            <NavLink key={label} label={label} active={active}>
                                <Icon className={`size-5 ${active ? "text-primary-1" : "text-gray-600"}`} />
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}