import PhotoInput from "@/src/components/PhotoInput"
import VideoInput from "@/src/components/VideoInput"
import StepWrapper from "../StepWrapper";

export default function Media() {
  return (
    <StepWrapper heading="Photo & Media">
        <div>
          <span className="block mb-2 text-gray-700">Upload Property Photos</span>
          <PhotoInput />
        </div>
        <div>
          <span className="block mb-2 text-gray-700">Add a short Video (optional)</span>
          <VideoInput />
        </div>
    </StepWrapper>
  )
}