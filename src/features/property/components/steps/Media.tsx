import PhotoInput from "@/src/components/ui/PhotoInput"
import StepWrapper from "./StepWrapper";
import { useListingStore } from "@/src/stores/listingStore";

const photoNames = ["main-image", "image-1", "image-2", "image-3", "image-4"] as const

export default function Media({page}: {page?: "edit" | "create"}) {
  const isCreate = page === "create"

  const { images, setImage } = useListingStore()

  return (
    <StepWrapper heading="Photo & Media" page={page}>
      <div>
        <div className="mb-2">
          <p className="font-semibold text-gray-700 mb-1">Upload 5 Property Photos</p>
          <span className="text-sm text-gray-500 block mb-2">The first image will be used as the banner</span>
        </div>
        {photoNames.map((name, index) => (
          <PhotoInput
            key={name}
            name={name}
            value={isCreate ? images[index] : undefined}
            onChange={isCreate ? (base64) => setImage(index, base64) : undefined}
          />
        ))}
      </div>
    </StepWrapper>
  )
}