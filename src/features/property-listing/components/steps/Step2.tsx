import CountrySelect from "@/src/components/CountrySelect"
import FormInput from "@/src/components/FormInput"

export default function Step2() {
  return (
    <>
      <h1 className="mb-4 text-3xl md:text-4xl font-semibold">Location Information</h1>
      <label htmlFor=""><span className="block mb-2 text-gray-700">Country</span><CountrySelect /></label>
      <FormInput name="state" type="text" label="State / Region" />
      <FormInput name="area" type="text" label="City / Area" />
      <FormInput name="address" type="text" label="Property Address" />
      <FormInput name="landmark" type="text" label="Nearby Landmark" />
    </>
  )
}