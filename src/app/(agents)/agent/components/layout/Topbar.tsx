import UserBox from "@/src/components/UserBox"
import Link from "next/link"
import Image from "next/image"

type User = {
  firstName: string
  lastName: string
} | null

export default function Topbar({user}: {user: User}) {


    return (
        <div className="sticky top-0 z-40 flex justify-between items-center bg-white h-19 border-b border-b-gray-200 pr-8">
            <Link href="/" className="block border-r border-r-gray-200 py-4 w-64 px-8">
                <Image src="/images/logo.png" width={128} height={44} alt="wikilet" loading="eager" />
            </Link>
            <UserBox user={user} />
        </div>
    )
}

// bg-[#F8F9FA]