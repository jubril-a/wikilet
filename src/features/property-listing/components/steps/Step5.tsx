import FormInput from "@/src/components/FormInput"

export default function Step5() {
  return (
    <>
      <h1 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight">Pricing & Availability</h1>
      <FormInput name="nightly-rate" type="text" label="Enter your standard price per night" />
      <FormInput name="cleaning-fee" type="text" label="Cleaning or service fee (optional)" />
      <FormInput name="deposit" type="text" label="Security deposit (optional)" />
      <FormInput name="min-stay" type="text" label="Minimum stay duration" />
      <FormInput name="max-stay" type="text" label="Maximum stay duration " />
    </>
  )
}