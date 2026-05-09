import FormInput from "@/src/components/ui/FormInput"
import StepWrapper from "./StepWrapper";
import { useListingStore } from "@/src/stores/listingStore";

export default function Pricing({page}: {page?: "edit" | "create"}) {
  const isCreate = page === "create"

  const { price, cleaningFee, minStay, maxStay, setField } = useListingStore()

  const storeProps = isCreate ? {
    price: {
      value: String(price),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("price", Number(e.target.value)),
    },
    cleaningFee: {
      value: cleaningFee !== undefined ? String(cleaningFee) : "",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("cleaningFee", e.target.value ? Number(e.target.value) : undefined),
    },
    minStay: {
      value: String(minStay),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("minStay", Number(e.target.value)),
    },
    maxStay: {
      value: String(maxStay),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setField("maxStay", Number(e.target.value)),
    },
  } : null

  return (
    <StepWrapper heading="Pricing & Availability" page={page}>
      <FormInput name="price" type="number" label="Enter your standard price per night" {...storeProps?.price} />
      <FormInput name="cleaning-fee" type="number" label="Cleaning or service fee (optional)" {...storeProps?.cleaningFee} />
      <FormInput name="min-stay" type="number" label="Minimum stay duration" {...storeProps?.minStay} />
      <FormInput name="max-stay" type="number" label="Maximum stay duration" {...storeProps?.maxStay} />
    </StepWrapper>
  )
}