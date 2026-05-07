import PhotoInput from "@/src/components/PhotoInput"
import StepWrapper from "../StepWrapper";

export default function Media() {
  return (
    <StepWrapper heading="Photo & Media">
        <div className="">
          <span className="block mb-2 text-gray-700">Upload 4 Property Photos</span>
          <PhotoInput name="main-image" />
          <PhotoInput name="image-1" />
          <PhotoInput name="image-2" />
          <PhotoInput name="image-3" />
        </div>
        {/* <div>
          <span className="block mb-2 text-gray-700">Add a short Video (optional)</span>
          <VideoInput />
        </div> */}
    </StepWrapper>
  )
}