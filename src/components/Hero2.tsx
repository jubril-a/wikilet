import SearchBox from "./SearchBox"

export default function Hero2() {
  return (
    <section className="relative bg-[linear-gradient(1deg,#03cdfd,#397dd6)] min-h-160 flex items-center px-4 pt-18 sm:px-16 lg:px-24 before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/geometric-bg.jpg')] before:opacity-3 before:mix-blend-color-burn">
        <div className="relative z-10 w-full max-w-5xl mx-auto">
            <main className="max-w-125 mb-10">
                <h1 className="text-4xl w-100 font-extrabold text-white mt-2 mb-4">Book Trusted Homes with Ease</h1>
                <p>Search through carefully verified homes, review details and pricing, and secure your booking in just a few clicks.</p>
            </main>
            <SearchBox />
        </div>
    </section>
  );
}