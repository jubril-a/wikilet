import PhotoInput from "@/src/components/PhotoInput"
import VideoInput from "@/src/components/VideoInput"

export default function Step3() {
  return (
    <>
        <h1 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight">Photo & Media</h1>
        <div>
          <span className="block mb-2 text-gray-700">Upload Property Photos</span>
          <PhotoInput />
        </div>
        <div>
          <span className="block mb-2 text-gray-700">Add a short Video (optional)</span>
          <VideoInput />
        </div>
    </>
  )
}