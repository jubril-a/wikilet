import { Kugile } from "../app/fontLoader"
import SearchBox from "./SearchBox"


export default function Hero2() {
    return (
        <header className="grid place-content-center h-screen bg-[url('/images/background.png')] bg-cover bg-center relative">
            <div className="p-8 z-99">
                <h1 className={`${Kugile.className} text-center text-6xl leading-tight max-w-200 text-bold mb-6 text-white`} style={{"fontSize":"clamp(3rem, 2.4545rem + 2.7273vw, 4.5rem)"}}>Book Trusted Homes with <span className="text-[#8bd925]">Ease</span></h1>
                <SearchBox />
            </div>
            <div className="absolute inset-0 bg-primary-1/50" />
        </header>
    )
}