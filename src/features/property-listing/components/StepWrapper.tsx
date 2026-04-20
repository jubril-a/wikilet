import { ReactNode } from "react";

export default function StepWrapper({children, heading}: {children: ReactNode, heading: string}) {
    return (
        <div className="grid gap-6 pt-36 w-full">
            <h1 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight">{heading}</h1>
            {children}
        </div>
        
    )
}