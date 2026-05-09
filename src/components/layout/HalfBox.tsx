import React from "react";

export default function HalfBox({children, background}: {children: React.ReactNode, background: string}) {
    return (
        <section className="grid min-[820px]:grid-cols-2 min-h-screen">
            <div className="grid place-items-center">
                <main className="w-full max-w-90 m-auto px-4 py-40">{children}</main>
            </div>
            <div className="bg-cover bg-center min-[820px]:-order-1 min-h-100" style={{backgroundImage: `url(/images/${background})`}}></div>
        </section>
    )
}