import FormInput from "@/src/components/FormInput"
import StepWrapper from "../StepWrapper";

export default function PayoutDetails() {
  return (
    <StepWrapper heading="Payout Details">
      <FormInput name="bank" type="text" label="Bank name" />
      <FormInput name="account-name" type="text" label="Account holder name" />
      <FormInput name="account-number" type="text" label="Account number" />
      <label htmlFor="">
          <span className="block mb-2 text-gray-700">Preferred payout schedule</span>
          <select name="role" id="" className="px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full">
            <option className="bg-gray-200" value="" disabled selected></option>
            <option value="after-booking">After each booking</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
    </StepWrapper>
  )
}