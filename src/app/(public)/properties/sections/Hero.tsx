export default function Hero({title, city, country, bgImage}: {title: string, city: string, country: string, bgImage: string}) {
    return (
        <header className="grid place-content-center h-screen bg-cover bg-center relative px-4" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="bg-black/70 text-center p-8 min-[640px]:p-16 relative z-5 rounded-md">
                <h1 className="text-white font-extrabold text-5xl mb-2">{title}</h1>
                <p className="text-[#91FF00] text-xl tracking-wide font-light">{city}, <span className="font-semibold">{country}</span></p>
            </div>
            <div className="absolute inset-0 bg-black/20" />
        </header>
    )
}