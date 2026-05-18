import Link from "next/link"

function LinkBox({href, heading, description}: {href: string, heading: string, description: string}) {
    return (
        <Link href={href} className="block mb-4 min-[640px]:w-88 min-[640px]:aspect-2/2.3 bg-gray-200 hover:bg-primary-2 rounded-md p-5">
            <h2 className="text-md font-semibold text-primary-1 mb-2">{heading}</h2>
            <p className="text-sm text-gray-700">{description}</p>
        </Link>
    )
}

export default function SettingsPage() {
    return (
        <>
            <h1 className="text-2xl font-bold text-primary-1 mb-4">Agent Profile</h1>
            <div className="min-[640px]:flex gap-3">
                <LinkBox href="settings/profile" heading="Profile Details" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at cupiditate." />
                <LinkBox href="settings/account" heading="Account Details" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at cupiditate." />
            </div>
        </>
    )
}