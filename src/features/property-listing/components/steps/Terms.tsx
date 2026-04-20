import StepWrapper from "../StepWrapper";

export default function Terms() {
  return (
    <StepWrapper heading="Legal & Safety Confirmation">
      <div>
        <span className="text-lg font-semibold block mb-2 text-gray-700">Property authorization</span>
        <label htmlFor="authorized">
          <input type="checkbox" name="authorized" id="authorized" />
          <span className="ml-2 mb-2 text-gray-700">I confirm that this property is legally approved for short-stay or hospitality use.</span>
        </label>
      </div>
      <div>
        <span className="text-lg font-semibold block mb-2 text-gray-700">Terms and policies</span>
        <label htmlFor="terms">
          <input type="checkbox" name="accept-terms" id="terms" />
          <span className="ml-2 mb-2 text-gray-700">I agree to the platform&apos;s partner terms, policies, and commission structure.</span>
        </label>
      </div>
    </StepWrapper>
  )
}