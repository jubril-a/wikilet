export default function SuggestionBox({label, decription} : {label: string, decription: string}) {
    return (
        <div className="py-4 px-6 bg-gray-100 hover:bg-gray-200 mb-2 rounded-md">
            <p className="text-sm font-medium">{label}</p>
            <p className="text-sm text-gray-700">{decription}</p>
        </div>
    )
}