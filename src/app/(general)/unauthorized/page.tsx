// app/unauthorized/page.tsx
import Link from "next/link"

export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-40">
      <div className="flex flex-col items-center text-center max-w-md w-full">

        {/* Illustration */}
        <div className="mb-8 relative">
          {/* Back document */}
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-60">
            <rect x="18" y="10" width="76" height="98" rx="6" fill="#E2E8F0"/>
            <rect x="30" y="30" width="52" height="6" rx="3" fill="#CBD5E1"/>
            <rect x="30" y="44" width="40" height="6" rx="3" fill="#CBD5E1"/>
            <rect x="30" y="58" width="48" height="6" rx="3" fill="#CBD5E1"/>
          </svg>
          {/* Front document */}
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative">
            <rect x="10" y="18" width="80" height="100" rx="6" fill="#EEF2FF"/>
            <rect x="10" y="18" width="80" height="100" rx="6" stroke="#C7D2FE" strokeWidth="1"/>
            <rect x="22" y="38" width="56" height="6" rx="3" fill="#C7D2FE"/>
            <rect x="22" y="52" width="44" height="6" rx="3" fill="#C7D2FE"/>
            <rect x="22" y="66" width="50" height="6" rx="3" fill="#C7D2FE"/>
            <rect x="22" y="80" width="36" height="6" rx="3" fill="#C7D2FE"/>
            {/* Lock badge */}
            <circle cx="76" cy="102" r="18" fill="white" stroke="#E0E7FF" strokeWidth="1.5"/>
            <path d="M70 101.5V99a6 6 0 0 1 12 0v2.5" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round"/>
            <rect x="67" y="101" width="18" height="13" rx="3" fill="#6366F1"/>
            <circle cx="76" cy="107" r="2" fill="white"/>
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Agent access required</h1>

        {/* Subtext */}
        <p className="max-sm:text-sm text-gray-600 leading-relaxed mb-8">
          You need to be signed in as an agent to list a property on Wikilet. Sign in to your agent account or create one to get started.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            href="/login?redirect=/list-property"
            className="text-sm font-medium text-white hover:text-primary-1 bg-primary-1 hover:bg-primary-2 px-6 py-2.5 rounded-md text-center transition-colors"
          >
            Sign in to continue
          </Link>
          <Link
            href="/signup?role=agent&redirect=/list-property"
            className="text-sm font-medium text-gray-700 hover:text-primary-1 bg-white hover:bg-primary-2 border border-gray-200 px-6 py-2.5 rounded-md text-center transition-colors"
          >
            Create an agent account
          </Link>
        </div>

      </div>
    </main>
  )
}