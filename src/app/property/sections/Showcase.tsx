import Section from "@/src/components/Section"
import Image from "next/image"
import { ReactNode } from "react"

function ImageBox({children}: {children?: ReactNode }) {
    return (
        <div className="group bg-gray-300 rounded-md cursor-pointer max-[760px]:aspect-square overflow-hidden relative">
            <div className="absolute group-hover:bg-black/20 inset-0"></div>
            <Image className="object-cover object-center h-full" width={7203} height={4807} src="/images/apartment-1.jpg" alt=""/>
            {children}
        </div>
    )
}

export default function Showcase() {
    return (
        <Section>
            <div className="grid min-[760px]:grid-cols-2 min-h-130 gap-2">
                <ImageBox />
                <div className="grid min-[480px]:grid-cols-2 gap-2">
                    <ImageBox />
                    <ImageBox />
                    <ImageBox />
                    <ImageBox>
                        <button className="absolute bottom-2 right-2 bg-white text-black text-sm rounded-md p-3 cursor-pointer hover:bg-primary-2">Show More Images</button>
                    </ImageBox>
                </div>
            </div>
        </Section>
    )
}