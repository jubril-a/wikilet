export default function Section({children}: {children: React.ReactNode}) {
    return (
        <section className="min-[640px]:px-8">
            <div className="max-w-6xl mx-auto my-20">
                {/* remove margin bottom */}
                {children}
            </div>
        </section>
    )
}