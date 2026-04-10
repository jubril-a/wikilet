import { useSearchStore } from "../stores/searchStore"
import { usePopupStore } from "../stores/popupsStore"

type Props = {
    label: string,
    decription: string
}

export default function SuggestionBox({label, decription} : Props) {

    const { setDestination } = useSearchStore()
    const { setSeacrhPopup } = usePopupStore()

    function handleClick(label: string) {
        setDestination(label)
        setSeacrhPopup("none")
    }

    return (
        <div onClick={() => {handleClick(label)}} className="py-4 px-6 bg-gray-100 hover:bg-gray-200 mb-2 rounded-md cursor-pointer">
            <p className="text-sm font-medium">{label}</p>
            <p className="text-sm text-gray-700">{decription}</p>
        </div>
    )
}