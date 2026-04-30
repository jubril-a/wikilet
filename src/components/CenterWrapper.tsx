import { ReactNode } from "react"

export default function CenterWrapper({children, heading}: {children: ReactNode, heading: string}) {
    return (
        <div className="min-[440px]:bg-gray-300 min-h-screen pt-32 min-[440px]:pt-36 px-4">
            <div className="max-w-160 bg-white mx-auto min-[440px]:px-8 min-[440px]:py-10 rounded-2xl">
                <h1 className="text-xl md:text-2xl font-extrabold text-gray-950 mb-4 tracking-tight">{heading}</h1>
                {children}
            </div>
        </div>
    )
}