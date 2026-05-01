interface StepTrackProps {
    index: number
    label: string
    currentStep: number
}

export default function StepTrack({ index, label, currentStep }: StepTrackProps) {
    const isCompleted = index < currentStep
    const isActive = index === currentStep

    return (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${isActive ? "bg-primary-2" : ""}`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-colors ${
                isCompleted
                    ? "bg-primary-1 text-white"
                    : isActive
                    ? "bg-primary-1 text-white"
                    : "bg-gray-200 text-gray-500"
            }`}>
                {isCompleted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                ) : (
                    index + 1
                )}
            </div>
            <p className={`max-[960px]:hidden text-sm font-medium line-clamp-1 ${isActive ? "text-primary-" : isCompleted ? "text-gray-700" : "text-gray-400"}`}>
                {label}
            </p>
        </div>
    )
}