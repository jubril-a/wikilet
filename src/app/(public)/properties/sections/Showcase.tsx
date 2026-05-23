import Section from "@/src/components/layout/Section"
import Image from "next/image"
import { ReactNode } from "react"

function ImageBox({imageURL, children}: {imageURL: string, children?: ReactNode }) {
    return (
        <div className="group bg-gray-300 rounded-md cursor-pointer max-[760px]:aspect-square overflow-hidden relative">
            <div className="absolute group-hover:bg-black/20 inset-0"></div>
            <Image className="object-cover object-center h-full" width={7203} height={4807} src={imageURL} alt=""/>
            {children}
        </div>
    )
}

export default function Showcase({images}: {images: string[]}) {
    return (
        <Section>
            <div className="grid min-[760px]:grid-cols-2 min-h-130 gap-2">
                <ImageBox imageURL={images[0]} />
                <div className="grid min-[480px]:grid-cols-2 gap-2">
                    {images.slice(1, 4).map((url) => (
                        <ImageBox imageURL={url} />
                    ))}
                    <ImageBox imageURL={images[4]}>
                        <button className="absolute bottom-2 right-2 bg-white text-black text-sm rounded-md p-3 cursor-pointer hover:bg-primary-2">View on Map</button>
                    </ImageBox>
                </div>
            </div>
        </Section>
    )
}