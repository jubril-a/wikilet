import { ReactNode } from "react"

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className="bg-gray-300 min-h-screen pt-36">{children}</div>
    )
}