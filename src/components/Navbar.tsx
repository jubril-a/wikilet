import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="absolute z-1000 bg-white w-full px-8 border-b border-b-[#c6c6c648]">
            <div className="flex justify-between items-center max-w-280 py-4 mx-auto">
                <Link href="/" className="font-bold text-2xl">
                    <Image src="/images/logo.png" width={128} height={44} alt="wikilet" />
                </Link>
                <ul className="flex gap-4 items-center">
                    <Link className="text-sm font-medium text-primary-1 hover:text-primary-2" href="/help">View Listings</Link>
                    <Link className="text-sm font-medium text-primary-1 hover:text-primary-2" href="/help">Help</Link>
                    <Link className="text-sm font-medium text-primary-1 hover:text-primary-2" href="/login">Sign In</Link>
                    <Link className="text-sm font-medium text-primary-1 hover:text-primary-2" href="/signup">Register</Link>
                    <Link className="text-sm font-medium text-white bg-[#8bd925] hover:text-primary-1 hover:bg-primary-2 px-4 py-3 rounded-md ml-4" href="/list-property">List your Property</Link>
                </ul>
            </div>
        </nav>
    )
}