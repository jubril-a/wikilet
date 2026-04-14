import Image from "next/image"

export default function GoogleAuth() {
    return (
        <button className="flex items-center justify-center gap-4 cursor-pointer px-2 rounded-md border border-gray-400 hover:border-primary-2 focus:border-gray-300 focus:outline-0 h-11 w-full">
            <Image src="/images/google.png" width={20} height={20} alt="" />
            <span>Continue with Google</span>
        </button>
    )
}