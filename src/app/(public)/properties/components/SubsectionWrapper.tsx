'use client'

import { XMarkIcon } from "@heroicons/react/20/solid"
import { ReactNode, useState } from "react"
import { cn } from "@/src/lib/utils"

type Props = {
    children: ReactNode,
    className?: string,
}

export function SubsectionWrapper({children, className}: Props) {

    return (
        <div className={cn("border-b border-b-gray-300 px-4 py-8 max-w-200 mx-auto", className)}>
            {children}
        </div>
    )
}