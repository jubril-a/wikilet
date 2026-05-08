import Link from "next/link"

type Props = {
    label: string,
    url: string,
    Icon: React.ElementType
}

export default function IconButton({label, url, Icon}: Props) {
    return (
        <Link href={url} className="text-sm font-medium bg-primary-1 text-white hover:bg-primary-2 hover:text-primary-1 px-5 py-3 flex gap-2 items-center justify-center rounded-md">
            <Icon className="size-4" />
            <span>{label}</span>
        </Link>
    )
}