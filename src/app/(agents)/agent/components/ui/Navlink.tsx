import Link from "next/link"
import { cn } from "@/src/lib/utils"
import { ReactNode } from "react"

type Props = {
    // icon: string,
    label: string,
    active?: boolean,
    children: ReactNode
}

export default function NavLink({ label, active, children }: Props) {
    return (
        <Link href={label.toLowerCase()} className={cn("flex gap-3 items-center px-5 mb-4", active && "bg-white py-3 rounded-xl")}>
            <div className={cn("aspect-square bg-white p-2 rounded-xl", active ? "bg-primary-2 text-white" : "border border-gray-200")}>
                {children}
            </div>
            <span className={cn("text-sm text-gray-500", active && "text-primary-1")}>{label}</span>
        </Link>
    )
}