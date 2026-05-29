import { Kugile } from "@/src/lib/fontLoader"
import SearchBox from "@/src/features/search/components/SearchBox"

export default function Hero2() {
    return (
        <header className="grid place-content-center h-screen sm:min-h-160 bg-[url('/images/bg3g.png')] bg-cover bg-top relative">
            <div className="p-8 pt-32">
                <div className="mb-6 text-white max-w-200 text-center relative z-5">
                    <h1 className={`${Kugile.className} leading-18 text-bold`} style={{fontSize: "clamp(3rem, 2.4545rem + 2.7273vw, 4.5rem)"}} >Book Trusted Homes with Ease</h1>
                    <p className="max-w-140 mx-auto text-lg leading-6">Search through carefully verified homes, review details and pricing, and secure your booking in just a few clicks.</p>
                </div>
                <SearchBox />
            </div>
            <div className="absolute inset-0 bg-black/60" />
        </header>
    )
}

// style={{"fontSize":"clamp(3rem, 2.4545rem + 2.7273vw, 4.5rem)"}}