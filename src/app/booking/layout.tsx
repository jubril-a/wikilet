import { ReactNode } from "react"

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className="min-[440px]:bg-gray-300 min-h-screen pt-32 min-[440px]:pt-36 px-4">{children}</div>
    )
}