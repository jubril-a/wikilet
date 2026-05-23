import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-[#0d1117] text-white px-6 md:px-12 py-14">
            <div className="max-w-280 mx-auto">
                {/* Top section */}
                <div className="grid min-[400px]:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link href="/">
                            <Image src="/images/logo-white.png" width={128} height={44} alt="wikilet" loading="eager" />
                        </Link>
                    </div>

                    {/* Nav columns */}
                    <div>
                        <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">Guests</p>
                        <ul className="space-y-3">
                        <li><a href="/listings" className="text-sm text-white hover:text-primary-2 transition-colors">View Listings</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">Agents</p>
                        <ul className="space-y-3">
                        <li><a href="/host/properties/create" className="text-sm text-white hover:text-primary-2 transition-colors">List your property</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-[10px] tracking-widest text-gray-500 uppercase mb-4">Company</p>
                        <ul className="space-y-3">
                        <li><a href="#" className="text-sm text-white hover:text-primary-2 transition-colors">Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-white/10 pt-6 flex items-center justify-between gap-2">
                <p className="text-sm text-gray-500">© 2026 Wikilet. All rights reserved.</p>
                <div className="flex gap-2">
                    {/* Instagram */}
                    <a href="#" className="w-9 h-9 border border-white/20 rounded flex items-center justify-center hover:border-primary-2/50 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="12" height="12" rx="3.5" stroke="white" strokeWidth="1.3"/>
                        <circle cx="7" cy="7" r="2.8" stroke="white" strokeWidth="1.3"/>
                        <circle cx="10.2" cy="3.8" r="0.7" fill="white"/>
                    </svg>
                    </a>
                    {/* Facebook */}
                    <a href="#" className="w-9 h-9 border border-white/20 rounded flex items-center justify-center hover:border-primary-2/50 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 13V7.8H9.8L10.1 5.8H8V4.6C8 4 8.2 3.6 9.1 3.6H10.2V1.8C9.8 1.7 9.2 1.7 8.5 1.7C6.9 1.7 5.8 2.7 5.8 4.4V5.8H4V7.8H5.8V13H8Z" fill="white"/>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
        </footer>
    )
}
