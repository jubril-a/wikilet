import Link from "next/link"
import { PlusIcon } from "@heroicons/react/24/solid"

type Props = {
    label: string,
    url: string
}

export default function IconButton({label, url}: Props) {
    return (
        <Link href={url} className="text-sm font-medium bg-primary-1 text-white hover:bg-primary-2 hover:text-primary-1 px-5 py-3 flex gap-2 items-center justify-center rounded-md">
            <PlusIcon className="size-4" />
            <span>{label}</span>
        </Link>
    )
}