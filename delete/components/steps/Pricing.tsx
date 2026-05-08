import FormInput from "@/src/components/FormInput"
import StepWrapper from "../components/StepWrapper";

export default function Pricing() {
  return (
    <StepWrapper heading="Pricing & Availability">
      <FormInput name="price" type="text" label="Enter your standard price per night" />
      <FormInput name="cleaning-fee" type="text" label="Cleaning or service fee (optional)" />
      <FormInput name="min-stay" type="text" label="Minimum stay duration" />
      <FormInput name="max-stay" type="text" label="Maximum stay duration " />
    </StepWrapper>
  )
}