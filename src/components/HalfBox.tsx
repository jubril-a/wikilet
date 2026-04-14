import React from "react";

export default function HalfBox({children}: {children: React.ReactNode}) {
    return (
        <section className="grid min-[820px]:grid-cols-2 min-h-screen">
            <div className="grid place-items-center">
                {children}
            </div>
            <div className="bg-primary-1 min-[820px]:-order-1"></div>
        </section>
    )
}