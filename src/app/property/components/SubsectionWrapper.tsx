import { XMarkIcon } from "@heroicons/react/20/solid"
import { ReactNode, useState } from "react"
import { cn } from "@/src/lib/utils"

type Props = {
    children: ReactNode,
    className?: string,
    btnLabel?: string
}

export function SubsectionWrapper({children, className, btnLabel}: Props) {

    const [expanded, setExpanded] = useState(false)

    return (
        <div className={cn(expanded && "fixed z-100 inset-0 grid justify-center items-center")}>
            <div className={cn("border-b border-b-gray-300 px-4 py-8", className, expanded && "max-w-160 bg-white")}>
                {btnLabel && expanded && <button onClick={() => {setExpanded(!expanded)}}>
                    <XMarkIcon className="size-7 ml-auto mb-8" />
                </button>}
                {children}
                {btnLabel && !expanded && <button onClick={() => setExpanded(!expanded)} className="bg-gray-300 hover:bg-primary-2 px-6 py-3 rounded-md cursor-pointer text-sm mt-4">{btnLabel}</button>}
            </div>
        </div>
    )
}