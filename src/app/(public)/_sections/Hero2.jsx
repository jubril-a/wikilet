import { Kugile } from "@/src/lib/fontLoader"
import SearchBox from "@/src/features/search/components/SearchBox"

export default function Hero2() {
    return (
        <header className="grid place-content-center min-h-screen bg-[url('/images/bg3g.png')] bg-cover bg-top relative">
            <div className="p-8 pt-32">
                <div className="mb-6 text-white max-w-200 text-center relative z-5">
                    <h1 className={`${Kugile.className} text-bold leading-12 sm:leading-16 md:leading-18`} style={{fontSize: "clamp(30px, calc(14.727px + 4.773vw), 72px)"}}>Book Trusted Homes with Ease</h1>
                    <p className="max-w-140 mx-auto text-sm sm:text-lg leading-6">Search through carefully verified homes, review details and pricing, and secure your booking in just a few clicks.</p>
                </div>
                <SearchBox />
            </div>
            <div className="absolute inset-0 bg-black/60" />
        </header>
    )
}

// style={{"fontSize":"clamp(3rem, 2.4545rem + 2.7273vw, 4.5rem)"}}
// style={{fontSize: "clamp(30px, calc(14.727px + 4.773vw), 72px)"}}