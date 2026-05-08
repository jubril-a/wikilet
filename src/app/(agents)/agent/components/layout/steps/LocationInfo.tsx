import CountrySelect from "@/src/components/CountrySelect"
import FormInput from "@/src/components/FormInput"
import StepWrapper from "../StepWrapper";
import { useListingStore } from "@/src/stores/listingStore";

export default function LocationInfo({page}: {page?: "edit" | "create"}) {
  const isCreate = page === "create"

  const { country, city, location, setField, setLocation } = useListingStore()

  const storeProps = isCreate ? {
    country: {
      value: country,
      onChange: (value: string) => setField("country", value),
    },
    city: {
      value: city,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("city", e.target.value),
    },
    area: {
      value: location.area,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLocation({ area: e.target.value }),
    },
    address: {
      value: location.address,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLocation({ address: e.target.value }),
    },
    landmark: {
      value: location.landmark,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLocation({ landmark: e.target.value }),
    },
  } : null

  return (
    <StepWrapper heading="Location Information" page={page}>
      <label>
        <span className="block mb-2 text-gray-700">Country</span>
        <CountrySelect {...storeProps?.country} />
      </label>
      <FormInput name="city" type="text" label="State" {...storeProps?.city} />
      <FormInput name="area" type="text" label="Area" {...storeProps?.area} />
      <FormInput name="address" type="text" label="Property Address" {...storeProps?.address} />
      <FormInput name="landmark" type="text" label="Nearby Landmark" {...storeProps?.landmark} />
    </StepWrapper>
  )
}