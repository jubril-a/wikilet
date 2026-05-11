import Link from "next/link"
import { cn } from "@/src/lib/utils"
import React from "react"

type Props = {
    label: string,
    active?: boolean,
    Icon: React.ElementType
}

export default function NavLink({ label, active, Icon }: Props) {
    return (
        <Link href={`/host/${label.toLowerCase()}`} className={cn("flex gap-3 items-center px-5 mb-4", active && "bg-gray-200 py-3 rounded-xl")}>
            <div className={cn("relative group aspect-square bg-white p-2 rounded-xl", active ? "bg-primary-2 text-white" : "border border-gray-200")}>
                <Icon className={`size-5 ${active ? "text-primary-1" : "text-gray-600"}`} />
                <span className="absolute left-full ml-3 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {label}
                </span>
            </div>
            <span className={cn("text-sm text-gray-500  min-[840px]:hidden min-[1024px]:block", active ? "text-primary-1" : "hover:text-primary-2")}>{label}</span>
        </Link>
    )
}

