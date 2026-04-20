import PhotoInput from "@/src/components/PhotoInput"
import FormInput from "@/src/components/FormInput"
import StepWrapper from "../StepWrapper";

export default function PartnerInfo() {
  return (
    <StepWrapper heading="Partner information">
      <label htmlFor="">
          <span className="block mb-2 text-gray-700">Your role</span>
          <select name="role" id="" className="px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full">
            <option className="bg-gray-200" value="" disabled selected></option>
            <option value="owner">Property owner</option>
            <option value="hotel-operator">Hotel operator</option>
            <option value="property-manager">Property manager</option>
            <option value="agent">Authorized agent</option>
          </select>
        </label>
        <FormInput name="name" type="text" label="Full legal name" />
        <FormInput name="phone" type="text" label="Phone number" />
        <FormInput name="email" type="text" label="Email address" />
        <div>
          <span className="block mb-2 text-gray-700">Upload a valid identification document</span>
          <PhotoInput />
        </div>
    </StepWrapper>
  )
}