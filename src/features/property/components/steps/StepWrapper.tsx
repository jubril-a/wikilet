import { ReactNode } from "react";
import Submit from "@/src/components/ui/Submit";

export default function StepWrapper({children, heading, page}: {children: ReactNode, heading: string, page ?: "edit" | "create"}) {
    return (
        <div className="grid gap-6 w-full">
            {page && <h1 className="mb-4 text-2xl font-semibold tracking-tight">{heading}</h1>}
            {children}
            {page == "edit" && <Submit action="editProperty" />}
        </div>
        
    )
}