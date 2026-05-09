type Props = {
    h2: string,
    label: string,
    clickHandler: () => void
}

export default function SearchInput({h2, label, clickHandler} : Props) {

    return (
        <div onClick={clickHandler}>
            <h2 className="mb-1">{h2}</h2>
            <button className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-left p-4 text-gray-700 font-semibold bg-gray-200 cursor-pointer hover:bg-gray-100 w-full h-12 rounded-md">{label}</button>
        </div>
    )
}