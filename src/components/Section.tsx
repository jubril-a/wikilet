import { cn } from "../lib/utils"

type Props = {
    children: React.ReactNode,
    className?: string
}

export default function Section({children, className}: Props) {
    return (
        <section className={cn("px-4 min-[640px]:px-8 mt-20", className)}>
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </section>
    )
}