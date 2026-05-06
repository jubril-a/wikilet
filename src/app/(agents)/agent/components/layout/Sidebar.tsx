import Link from "next/link"
import Image from "next/image"
import NavLink from "../ui/Navlink"
import { HomeIcon, BookmarkIcon, HomeModernIcon, BellAlertIcon, Cog8ToothIcon, ChatBubbleOvalLeftEllipsisIcon as ChatIcon } from "@heroicons/react/24/solid"

export default function Sidebar() {
    return (
        <nav className="w-64 h-screen bg-[#F8F9FA]">
            <Link href="/" className="block px-8 py-4 border-b border-b-gray-200">
                <Image src="/images/logo.png" width={128} height={44} alt="wikilet" loading="eager" />
            </Link>
            <div className="p-4">
                <div>
                    <NavLink label="Dashboard" active={true}>
                        <HomeIcon className="size-5 text-primary-1" />
                    </NavLink>
                    <NavLink label="Bookings">
                        <BookmarkIcon className="size-5 text-gray-600" />
                    </NavLink>
                    <NavLink label="Properties">
                        <HomeModernIcon className="size-5 text-gray-600" />
                    </NavLink>
                    <NavLink label="Notifications">
                        <BellAlertIcon className="size-5 text-gray-600" />
                    </NavLink>
                </div>
                <div className="pt-5 mt-5 border-t border-t-gray-200">
                    <NavLink label="Settings">
                        <Cog8ToothIcon className="size-5 text-gray-600" />
                    </NavLink>
                    <NavLink label="Support">
                        <ChatIcon className="size-5 text-gray-600" />
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}