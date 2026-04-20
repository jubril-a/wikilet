export default function Hero() {
    return (
        <header className="grid place-content-center h-screen bg-[url('/images/apartment-1.jpg')] bg-cover bg-center relative px-4">
            <div className="bg-black/50 text-center p-8 min-[640px]:p-16 relative z-5 rounded-md">
                <h1 className="text-white font-extrabold text-5xl mb-2">Azure Horizon Villa</h1>
                <p className="text-[#91FF00] text-xl tracking-wide font-light">Amalfi Coast, <span className="font-semibold">Italy</span></p>
            </div>
            <div className="absolute inset-0 bg-black/20" />
        </header>
    )
}