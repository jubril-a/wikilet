import StepWrapper from "../components/StepWrapper"

export default function Description() {
    return (
        <StepWrapper heading="Property Description">
            <label>
                <span className="block mb-4 text-gray-700">Write a description of your property</span>
                <textarea name="description" className="h-40 px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 w-full" required></textarea>
            </label>
        </StepWrapper>
    )
}