import Submit from "@/src/components/Submit"
import Form from "next/form"
import { useActionState } from "react"
import { addReview } from "../../../actions/review"
import StarRating from "./StarRating"

export default function AddReview() {
    const [state, action] = useActionState(addReview, null)

    return (
        <>
            <h2 className="text-gray-700 text-2xl font-bold">How was your stay?</h2>
            <p className="text-sm text-gray-500">Please take a moment to rate and review...</p>
            <Form action={action}>
                {state?.error && (
                    <p className="text-red-500 text-sm mb-4">{state.error}</p>
                )}

                <StarRating name="rating" />

                <label>
                    <span className="text-sm block mb-2 text-gray-700">type review...</span>
                    <textarea name="review" className="mb-6 h-40 p-2 text-gray-700 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 w-full" required></textarea>
                </label>

                <Submit action="addReview" />
            </Form>
        </>
    )
}