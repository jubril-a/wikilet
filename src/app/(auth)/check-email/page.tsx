import Link from "next/link"

export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-40">
      <div className="flex flex-col items-center text-center max-w-md w-full">

        {/* Illustration */}
        <div className="mb-8 relative flex items-center justify-center h-40">
          {/* Back envelope */}
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-60">
            <rect x="22" y="38" width="96" height="72" rx="7" fill="#E2E8F0"/>
            <path d="M22 50 L70 80 L118 50" stroke="#CBD5E1" strokeWidth="1.2"/>
          </svg>

          {/* Front envelope */}
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative">
            <rect x="14" y="46" width="96" height="72" rx="7" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1"/>
            <path d="M14 58 L62 88 L110 58" stroke="#C7D2FE" strokeWidth="1.2"/>
            <line x1="14" y1="118" x2="52" y2="86" stroke="#C7D2FE" strokeWidth="1" strokeLinecap="round"/>
            <line x1="110" y1="118" x2="72" y2="86" stroke="#C7D2FE" strokeWidth="1" strokeLinecap="round"/>

            {/* Letter peeking out */}
            <rect x="38" y="18" width="48" height="56" rx="4" fill="white" stroke="#C7D2FE" strokeWidth="1"/>
            <rect x="48" y="30" width="28" height="4" rx="2" fill="#C7D2FE"/>
            <rect x="48" y="40" width="20" height="4" rx="2" fill="#E0E7FF"/>
            <rect x="48" y="50" width="24" height="4" rx="2" fill="#E0E7FF"/>
            <rect x="48" y="60" width="16" height="4" rx="2" fill="#E0E7FF"/>

            {/* Progress badge */}
            <circle cx="106" cy="128" r="20" fill="white" stroke="#FEF3C7" strokeWidth="1.5"/>
            <circle cx="106" cy="128" r="13" fill="#F59E0B"/>
            <circle cx="100" cy="128" r="2" fill="white"/>
            <circle cx="106" cy="128" r="2" fill="white"/>
            <circle cx="112" cy="128" r="2" fill="white"/>

            {/* Decorative dots */}
            <circle cx="18" cy="132" r="3" fill="#C7D2FE" opacity="0.6"/>
            <circle cx="26" cy="148" r="2" fill="#E0E7FF" opacity="0.8"/>
            <circle cx="132" cy="52" r="2.5" fill="#C7D2FE" opacity="0.5"/>
            <circle cx="142" cy="66" r="1.8" fill="#E0E7FF" opacity="0.7"/>
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Please confirm your email address</h1>

        {/* Subtext */}
        <p className="max-sm:text-sm text-gray-600 leading-relaxed mb-8">
          We've sent a confirmation email to{" "}
      <span className="font-medium text-foreground">hello@world.com</span>.
      Click the link to verify your email address and log in.
        </p>

        {/* Button */}
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-primary-1 bg-primary-1 hover:bg-primary-2 px-6 py-2.5 rounded-md text-center transition-colors"
          >
            Resend Verification Mail
          </Link>
        </div>

    </main>
  )
}