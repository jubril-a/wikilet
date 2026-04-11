import { Kugile } from "../app/fontLoader"
import SearchBox from "./SearchBox"

export default function Hero2() {
    return (
        <header className="grid place-content-center h-screen bg-[url('/images/bg3.jpg')] bg-cover bg-top relative">
            <div className="p-8 pt-32">
                <div className="mb-6 text-white max-w-200 text-center">
                    <h1 className={`${Kugile.className} text-6xl relative z-5 leading-16 text-bold`} >Book Trusted Homes with Ease</h1>
                </div>
                <SearchBox />
            </div>
            <div className="absolute inset-0 bg-black/40" />
        </header>
    )
}

// style={{"fontSize":"clamp(3rem, 2.4545rem + 2.7273vw, 4.5rem)"}}