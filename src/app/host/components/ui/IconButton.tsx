import Link from "next/link"
import { cn } from "@/src/lib/utils"

type Props = {
    label: string,
    url: string,
    Icon: React.ElementType,
    className?: string
}

export default function IconButton({label, url, Icon, className}: Props) {
    return (
        <Link href={url} className={cn("text-sm font-medium bg-primary-1 text-white hover:bg-primary-2 hover:text-primary-1 px-5 py-3 flex gap-2 items-center justify-center min-w-fit rounded-md", className)}>
            <Icon className="size-4" />
            <span>{label}</span>
        </Link>
    )
}