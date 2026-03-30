export default function NextButton({onClick}: {onClick: () => void}) {
    return (
        <button type="button" onClick={onClick} className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 my-6 py-3 cursor-pointer w-full">Next Step</button>
    )
}