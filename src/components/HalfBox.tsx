import React from "react";

export default function HalfBox({children, background}: {children: React.ReactNode, background: string}) {
    return (
        <section className="grid min-[820px]:grid-cols-2 min-h-screen">
            <div className="grid place-items-center">
                {children}
            </div>
            <div className="bg-cover bg-center min-[820px]:-order-1" style={{backgroundImage: `url(/images/${background})`}}></div>
        </section>
    )
}