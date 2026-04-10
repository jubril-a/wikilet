import SearchBox from "./SearchBox"

export default function Hero2() {
  return (
    <section className="min-h-160 flex items-center px-4 py-40 sm:px-16 lg:px-24 relative bg-[linear-gradient(1deg,#397dd6,#397dd6)] before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/geometric-bg.jpg')] before:opacity-2 before:mix-blend-color-burn before:z-[-1]">
        <div className="w-full max-w-6xl mx-auto">
            <main className="max-w-125 mb-10">
                <h1 className="text-white text-4xl max-w-100 font-extrabold mt-2 mb-4">Book Trusted Homes with Ease</h1>
                <p>Search through carefully verified homes, review details and pricing, and secure your booking in just a few clicks.</p>
            </main>
            <SearchBox />
        </div>
    </section>
  );
}
