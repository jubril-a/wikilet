function Inputs({h2, label} : {h2: string, label: string}) {
    return (
        <div>
            <h2 className="mb-2">{h2}</h2>
            <button className="text-sm text-left p-4 text-gray-700 bg-gray-200 cursor-pointer hover:bg-gray-100 w-full h-12 rounded-md">{label}</button>
        </div>
    )
}

export default function SearchBox() {
    return (
        <div className="max-w-900 bg-white p-8 rounded-md">
            <div className="grid gap-4 grid-cols-4 max-w-900">
                <Inputs h2="Where?" label="Select Destination" />
                <Inputs h2="When?" label="Add Dates" />
                <Inputs h2="Who?" label="Add Guests" />
                <div className="self-end">
                    <input type="submit" value="Search Properties" className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 py-3 cursor-pointer w-full" />
                </div>
            </div>
        </div>
    )
}