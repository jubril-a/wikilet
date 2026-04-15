import Image from "next/image"

export default function GoogleAuth() {
    return (
        <>
            <div className="grid place-items-center my-5">
                <div className="border-t border-t-gray-200 w-full col-start-1 row-start-1"></div>
                <p className="text-center text-sm text-gray-400 bg-white px-4 col-start-1 row-start-1">or</p>
            </div>
            <button className="flex items-center justify-center gap-4 cursor-pointer px-2 rounded-md border border-gray-400 hover:border-primary-2 hover:bg-primary-2 focus:border-gray-300 focus:outline-0 h-11 w-full">
                <Image src="/images/google.png" width={20} height={20} alt="" />
                <span>Continue with Google</span>
            </button>
            </>
    )
}